'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { pushDataLayer } from '@/utils/dataLayer';

const FORM_ID = 'prerecording_lead';
const PRODUCT_LABEL = 'Предзапис — лендинг /prerecording';
const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_PRERECORDING_TELEGRAM_URL ?? 'https://t.me/julifitspace';
const REDIRECT_DELAY_MS = 3000;

export default function PrerecordingClient() {
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(REDIRECT_DELAY_MS / 1000));
  const formStartSent = useRef(false);

  const onFormFieldFocus = useCallback(() => {
    if (formStartSent.current) return;
    formStartSent.current = true;
    pushDataLayer({
      event: 'form_start',
      form_id: FORM_ID,
      form_name: 'Предзапис',
      product_label: PRODUCT_LABEL,
    });
  }, []);

  const submit = useCallback(async () => {
    setError(null);
    const n = name.trim();
    const t = telegram.trim();
    if (n.length < 2 || t.length < 2) {
      setError("Заповніть ім'я та контакт (Telegram або телефон)");
      return;
    }

    setSending(true);
    try {
      const res = await fetch('/api/telegram/pre-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: n,
          telegram: t,
          productLabel: PRODUCT_LABEL,
          leadType: 'prerecording',
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || 'Помилка відправки');
        return;
      }

      pushDataLayer({
        event: 'form_submit',
        form_id: FORM_ID,
        form_name: 'Предзапис',
        product_label: PRODUCT_LABEL,
      });

      setSubmitted(true);
      setName('');
      setTelegram('');
    } catch {
      setError('Немає зв’язку з сервером. Спробуйте ще раз.');
    } finally {
      setSending(false);
    }
  }, [name, telegram]);

  useEffect(() => {
    if (!submitted) return;

    const redirectTimer = window.setTimeout(() => {
      window.location.href = TELEGRAM_URL;
    }, REDIRECT_DELAY_MS);

    const countdownInterval = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownInterval);
    };
  }, [submitted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
      <section className="relative min-h-screen overflow-hidden reveal-fade" data-animate>
        <Image
          src="/neuro-fit/IMG_5031.jpg"
          alt="Neuro-Pilates — предзапис"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
        <Image
          src="/neuro-fit/IMG_5079.jpg"
          alt="Neuro-Pilates — предзапис, мобільна версія"
          fill
          priority
          sizes="100vw"
          className="md:hidden object-cover"
          style={{ objectPosition: 'center -10%' }}
        />

        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: 'rgba(20,15,25,0.08)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background:
              'linear-gradient(to top, rgba(10,6,18,0.72) 0%, rgba(10,6,18,0.42) 40%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-6 pb-12 pt-12 md:pb-16 md:pt-16">
            <div className="reveal-up w-full max-w-2xl text-center" data-animate>
              <p
                className="mb-4 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.14em]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: 'rgba(255, 219, 236, 0.92)',
                  color: '#4C2440',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                }}
              >
                Безкоштовний доступ
              </p>

              <h1
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                  lineHeight: 1.05,
                  color: 'rgba(255,255,255,0.96)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.25))',
                  marginBottom: 16,
                }}
              >
                Предзапис Neuro-Pilates
              </h1>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  lineHeight: 1.5,
                  color: 'rgba(255,255,255,0.92)',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))',
                  marginBottom: 32,
                }}
              >
                Залиште контакт — і ми одразу надішлемо вас у Telegram, щоб ви могли забрати матеріали
                та протестувати їх у зручному темпі.
              </p>
            </div>

            <div className="reveal-up reveal-delay-1 w-full max-w-md" data-animate>
              {submitted ? (
                <div className="rounded-3xl border border-white/70 bg-white/95 px-6 py-8 text-center shadow-[0_24px_64px_rgba(0,0,0,0.22)] md:px-8 md:py-10">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#805D7F]">
                    Neuro-Pilates
                  </p>
                  <h2 className="mb-3 text-2xl font-semibold text-[#5a3d59] md:text-3xl">Дякуємо!</h2>
                  <p className="mb-6 text-[15px] leading-relaxed text-neutral-600">
                    Забирай і тестуй — зараз перенаправимо вас у Telegram.
                  </p>
                  <p className="mb-6 text-sm text-neutral-500">
                    Автоматичний перехід через {secondsLeft} сек…
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#805D7F] shadow-md transition hover:opacity-95"
                  >
                    Перейти в Telegram
                  </a>
                </div>
              ) : (
                <div className="rounded-3xl border border-[#E8C4E6] bg-white/95 p-6 shadow-[0_24px_64px_rgba(128,93,127,0.28)] backdrop-blur-sm md:p-8">
                  <h2 className="mb-1 text-center text-lg font-semibold text-[#5a3d59] md:text-xl">
                    Отримати доступ
                  </h2>
                  <p className="mb-5 text-center text-sm text-neutral-600">
                    Вкажіть ім’я та контакт: нік у Telegram або номер телефону — після цього відкриється бот.
                  </p>

                  <label className="mb-3 block text-sm font-medium text-[#5a3d59]">
                    Ім’я
                    <input
                      type="text"
                      name="lead-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={onFormFieldFocus}
                      className="mt-1.5 w-full rounded-2xl border border-[#E8C4E6] bg-[#FFFBFE] px-4 py-3 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                      placeholder="Олена"
                      disabled={sending}
                    />
                  </label>

                  <label className="mb-5 block text-sm font-medium text-[#5a3d59]">
                    Telegram або телефон
                    <input
                      type="text"
                      name="lead-telegram"
                      inputMode="text"
                      autoComplete="on"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      onFocus={onFormFieldFocus}
                      className="mt-1.5 w-full rounded-2xl border border-[#E8C4E6] bg-[#FFFBFE] px-4 py-3 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                      placeholder="@username, +380… або 067…"
                      disabled={sending}
                    />
                  </label>

                  {error ? (
                    <p className="mb-3 text-center text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={submit}
                      disabled={sending}
                      className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#805D7F] shadow-md transition hover:opacity-95 disabled:opacity-60"
                    >
                      {sending ? 'Надсилання…' : 'Забрати доступ'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <p className="reveal-up reveal-delay-2 mt-8 text-center text-sm text-white/80">
              <Link href="/" className="underline underline-offset-2 hover:text-white">
                На головну
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
