import { NextRequest, NextResponse } from 'next/server';

/** Для ніка додає один @; номери та посилання лишає як є. */
function formatTelegramForMessage(raw: string): string {
  const t = raw.trim();
  if (!t) return t;
  if (/^https?:\/\//i.test(t)) return t;
  if (/^t\.me\//i.test(t)) return t;

  const digits = t.replace(/\D/g, '');
  const onlyPhoneChars = /^[\d\s+().-]+$/.test(t);
  if (onlyPhoneChars && digits.length >= 8) return t;

  const username = t.replace(/^@+/, '');
  return `@${username}`;
}

type Body = {
  name?: string;
  telegram?: string;
  productLabel?: string;
};

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_GROUP_CHAT_ID;

  if (!token || !chatId) {
    console.error('[telegram/pre-payment] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_GROUP_CHAT_ID');
    return NextResponse.json(
      { ok: false, error: 'Сервіс тимчасово недоступний' },
      { status: 500 },
    );
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: 'Некоректні дані' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const telegram = String(body.telegram ?? '').trim();
  const productLabel = String(body.productLabel ?? 'NeuroFit').trim().slice(0, 500);

  if (name.length < 2 || telegram.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Вкажіть ім'я та контакт (Telegram або телефон)" },
      { status: 400 },
    );
  }

  if (name.length > 200 || telegram.length > 200) {
    return NextResponse.json({ ok: false, error: 'Занадто довгі поля' }, { status: 400 });
  }

  const text = [
    '🛒 Перед оплатою',
    `Продукт: ${productLabel}`,
    `Ім'я: ${name}`,
    `Telegram: ${formatTelegramForMessage(telegram)}`,
  ].join('\n');

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const tgRes = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  const tgJson = (await tgRes.json()) as { ok?: boolean; description?: string };

  if (!tgRes.ok || !tgJson.ok) {
    console.error('[telegram/pre-payment] Telegram API:', tgJson);
    return NextResponse.json(
      { ok: false, error: 'Не вдалося надіслати дані. Спробуйте ще раз.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
