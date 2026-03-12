import { NextRequest, NextResponse } from 'next/server';

const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

function resolveRedirect(transactionStatus: string, reasonCode: string, tariffType: string) {
  const isSuccess =
    transactionStatus === 'Approved' ||
    transactionStatus === 'approved' ||
    reasonCode === '1100' ||
    String(reasonCode) === '1100';

  // Якщо статус порожній — WayForPay іноді редіректить без параметрів після успіху
  if (isSuccess || (!transactionStatus && !reasonCode)) {
    return NextResponse.redirect(`${siteUrl}/payment/success?tariffType=${tariffType}`, 303);
  }
  return NextResponse.redirect(`${siteUrl}/payment/fail?tariffType=${tariffType}`, 303);
}

// GET — WayForPay редіректить юзера з query-параметрами статусу
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const transactionStatus = url.searchParams.get('transactionStatus') ?? url.searchParams.get('status') ?? '';
  const reasonCode        = url.searchParams.get('reasonCode') ?? '';
  const tariffType        = url.searchParams.get('tariffType') ?? 'unknown';

  console.log('[RETURN GET]', { transactionStatus, reasonCode, tariffType });
  return resolveRedirect(transactionStatus, reasonCode, tariffType);
}

// POST — WayForPay також може надіслати POST на returnUrl
// Читаємо статус з тіла і редіректимо юзера
export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const tariffType = url.searchParams.get('tariffType') ?? 'unknown';

  let transactionStatus = '';
  let reasonCode = '';

  try {
    const contentType = req.headers.get('content-type') ?? '';
    let data: Record<string, unknown> = {};

    if (contentType.includes('application/json')) {
      data = await req.json();
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      const text = await req.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = Object.fromEntries(new URLSearchParams(text));
      }
    }

    transactionStatus = String(data.transactionStatus ?? data.status ?? '');
    reasonCode        = String(data.reasonCode ?? '');

    console.log('[RETURN POST]', { transactionStatus, reasonCode, tariffType });
  } catch (e) {
    console.error('[RETURN POST] parse error:', e);
  }

  return resolveRedirect(transactionStatus, reasonCode, tariffType);
}
