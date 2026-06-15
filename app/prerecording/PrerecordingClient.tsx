'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { pushDataLayer } from '@/utils/dataLayer';

const FORM_ID = 'prerecording_lead';
const PRODUCT_LABEL = 'Предзапис — лендинг /prerecording';
const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_PRERECORDING_TELEGRAM_URL ?? 'https://t.me/PilatesCoursesBot';
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,600;1,700&display=swap');

        .pr-page,
        .pr-page input,
        .pr-page button {
          font-family: 'Montserrat', sans-serif;
        }

        .pr-badge {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pr-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(1.15rem, 2.6vw, 1.65rem);
          line-height: 1.2;
        }

        .pr-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(4.5rem, 14vw, 10rem);
          line-height: 0.95;
          letter-spacing: -0.02em;
        }

        .pr-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1.1rem, 2.4vw, 1.45rem);
          line-height: 1.55;
        }

        .pr-form-card {
          padding: clamp(1.75rem, 4vw, 2.75rem);
        }

        .pr-form-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1.35rem, 2.8vw, 1.75rem);
          color: #4a2f49;
          letter-spacing: 0.01em;
        }

        .pr-form-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.6;
          color: #3f3f3f;
        }

        .pr-form-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          color: #4a2f49;
        }

        .pr-form-input {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1.05rem, 2vw, 1.2rem);
        }

        .pr-form-btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .pr-thanks-kicker {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #805D7F;
        }

        .pr-thanks-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          color: #4a2f49;
        }

        .pr-thanks-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.65;
          color: #3f3f3f;
        }

        .pr-footer-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 1.8vw, 1.125rem);
        }
      `}</style>

    <div className="pr-page min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
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
          <div className="flex flex-1 flex-col items-center justify-center px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
            <div className="reveal-up w-full max-w-3xl text-center" data-animate>
              <p
                className="pr-badge mb-5 inline-flex items-center justify-center rounded-full px-6 py-3 md:px-7 md:py-3.5"
                style={{
                  background: 'rgba(255, 219, 236, 0.92)',
                  color: '#4C2440',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                }}
              >
                Безкоштовний доступ
              </p>

              <p
                className="pr-subtitle"
                style={{
                  color: 'rgba(255,255,255,0.94)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                  marginBottom: 12,
                }}
              >
                Спробуй систему
              </p>

              <h1
                className="pr-title text-center"
                style={{
                  color: 'rgba(255,255,255,0.98)',
                  filter: 'drop-shadow(0px 6px 8px rgba(0,0,0,0.35))',
                  marginBottom: 24,
                }}
              >
                NeuroFit
              </h1>

              <p
                className="pr-desc mx-auto max-w-2xl"
                style={{
                  color: 'rgba(255,255,255,0.96)',
                  filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.28))',
                  marginBottom: 40,
                }}
              >
                Заповнюйте форму і ми одразу перенаправимо вас у Telegram, щоб ви могли забрати всі
                матеріали та протестувати їх.
              </p>
            </div>

            <div className="reveal-up reveal-delay-1 w-full max-w-xl" data-animate>
              {submitted ? (
                <div className="pr-form-card rounded-[2rem] border border-white/70 bg-white/95 text-center shadow-[0_28px_72px_rgba(0,0,0,0.24)] md:rounded-[2.25rem]">
                  <p className="pr-thanks-kicker mb-3">NeuroFit</p>
                  <h2 className="pr-thanks-title mb-4">Дякуємо!</h2>
                  <p className="pr-thanks-text mb-7">
                    Забирай і тестуй — зараз перенаправимо вас у Telegram.
                  </p>
                  <p className="pr-thanks-text mb-7 opacity-80">
                    Автоматичний перехід через {secondsLeft} сек…
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    className="pr-form-btn inline-flex min-w-[260px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-10 py-4 text-[#805D7F] shadow-lg transition hover:opacity-95"
                  >
                    Перейти в Telegram
                  </a>
                </div>
              ) : (
                <div className="pr-form-card rounded-[2rem] border border-[#E8C4E6] bg-white/95 shadow-[0_28px_72px_rgba(128,93,127,0.32)] backdrop-blur-sm md:rounded-[2.25rem]">
                  <div className="mb-7 flex justify-center">
                    <Image
                      src="/logo-neurofit.png"
                      alt="NeuroFit"
                      width={112}
                      height={112}
                      className="rounded-full object-contain"
                    />
                  </div>
                  <h2 className="pr-form-title mb-2 text-center">
                    Отримати доступ
                  </h2>
                  <p className="pr-form-desc mb-7 text-center">
                    Вкажіть ім’я та контакт: нік у Telegram або номер телефону — після цього відкриється бот.
                  </p>

                  <label className="pr-form-label mb-4 block">
                    Ім’я
                    <input
                      type="text"
                      name="lead-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={onFormFieldFocus}
                      className="pr-form-input mt-2 w-full rounded-2xl border border-[#E8C4E6] bg-[#FFFBFE] px-5 py-4 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                      placeholder="Олена"
                      disabled={sending}
                    />
                  </label>

                  <label className="pr-form-label mb-7 block">
                    Telegram або телефон
                    <input
                      type="text"
                      name="lead-telegram"
                      inputMode="text"
                      autoComplete="on"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      onFocus={onFormFieldFocus}
                      className="pr-form-input mt-2 w-full rounded-2xl border border-[#E8C4E6] bg-[#FFFBFE] px-5 py-4 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                      placeholder="@username, +380… або 067…"
                      disabled={sending}
                    />
                  </label>

                  {error ? (
                    <p className="pr-form-desc mb-4 text-center font-semibold text-red-600" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={submit}
                      disabled={sending}
                      className="pr-form-btn inline-flex min-w-[260px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-10 py-4 text-[#805D7F] shadow-lg transition hover:opacity-95 disabled:opacity-60"
                    >
                      {sending ? 'Надсилання…' : 'Забрати доступ'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <p className="pr-footer-link reveal-up reveal-delay-2 mt-10 text-center text-white/90">
              <Link href="/" className="underline underline-offset-2 hover:text-white">
                На головну
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
