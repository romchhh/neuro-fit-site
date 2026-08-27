'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { pushDataLayer } from '@/utils/dataLayer';

const FORM_ID = 'prerecording_lead';
const PRODUCT_LABEL = 'Предзапис — лендинг /prerecording';
const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_PRERECORDING_TELEGRAM_URL ??
  'https://t.me/pilates_juli_bot?start=site';
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

        .pr-screen {
          height: 100dvh;
          max-height: 100dvh;
          overflow: hidden;
        }

        .pr-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(0.35rem, 1.4vh, 0.85rem);
          height: 100%;
          padding: clamp(0.65rem, 1.8vh, 1.1rem) 1rem clamp(0.5rem, 1.2vh, 0.85rem);
        }

        .pr-hero {
          flex-shrink: 1;
          min-height: 0;
        }

        .pr-badge {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(0.9rem, 2.2vw, 1.15rem);
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .pr-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(0.82rem, 1.8vw, 1.05rem);
          line-height: 1.15;
        }

        .pr-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 9vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.02em;
        }

        .pr-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.78rem, 1.6vw, 0.95rem);
          line-height: 1.4;
        }

        .pr-form-wrap {
          width: 100%;
          max-width: 22rem;
          flex-shrink: 0;
        }

        .pr-form-frame {
          position: relative;
          margin-top: 1.75rem;
          padding: 1.15rem 1rem 1.1rem;
          border: 2px solid rgba(255, 255, 255, 0.92);
          border-radius: 1.25rem;
          background: rgba(255, 255, 255, 0.96);
          box-shadow:
            0 16px 40px rgba(0, 0, 0, 0.18),
            inset 0 0 0 1px rgba(232, 196, 230, 0.95),
            inset 0 0 0 5px rgba(255, 251, 254, 1),
            inset 0 0 0 6px rgba(215, 171, 214, 0.45);
        }

        .pr-form-frame-logo {
          position: absolute;
          top: -2.35rem;
          left: 50%;
          transform: translateX(-50%);
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #e8c4e6;
          box-shadow: 0 8px 22px rgba(128, 93, 127, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.28rem;
        }

        .pr-form-frame-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: scale(1.18);
        }

        .pr-form-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: #4a2f49;
          margin-top: 1.35rem;
        }

        .pr-form-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.78rem, 1.6vw, 0.9rem);
          line-height: 1.35;
          color: #525252;
        }

        .pr-form-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(0.78rem, 1.5vw, 0.88rem);
          color: #4a2f49;
        }

        .pr-form-input {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.85rem, 1.6vw, 0.95rem);
        }

        .pr-form-btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(0.78rem, 1.5vw, 0.88rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pr-thanks-kicker {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #805D7F;
        }

        .pr-thanks-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: clamp(1.25rem, 3.5vw, 1.6rem);
          color: #4a2f49;
        }

        .pr-thanks-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.82rem, 1.6vw, 0.95rem);
          line-height: 1.45;
          color: #525252;
        }

        .pr-footer-link {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        @media (min-height: 740px) {
          .pr-title {
            font-size: clamp(2.8rem, 10vw, 5rem);
          }

          .pr-form-wrap {
            max-width: 24rem;
          }

          .pr-form-frame {
            padding: 1.25rem 1.15rem 1.2rem;
          }

          .pr-form-frame-logo {
            top: -2.6rem;
            width: 5rem;
            height: 5rem;
            padding: 0.32rem;
          }
        }
      `}</style>

    <div className="pr-page bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
      <section className="pr-screen relative overflow-hidden reveal-fade" data-animate>
        <Image
          src="/prerecording/hero.jpg"
          alt="NeuroFit — предзапис"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 42%' }}
        />

        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: 'rgba(20,15,25,0.08)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background: [
              'linear-gradient(to bottom, rgba(10,6,18,0.72) 0%, rgba(10,6,18,0.42) 40%, transparent 70%)',
              'linear-gradient(to top, rgba(10,6,18,0.72) 0%, rgba(10,6,18,0.42) 40%, transparent 70%)',
            ].join(', '),
          }}
        />

        <div className="relative z-10 h-full">
          <div className="pr-content">
            <div className="pr-hero reveal-up w-full max-w-lg text-center" data-animate>
              <p
                className="pr-badge mb-2 inline-flex items-center justify-center rounded-full px-5 py-2 md:px-6 md:py-2.5"
                style={{
                  background: 'rgba(255, 219, 236, 0.92)',
                  color: '#4C2440',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                }}
              >
                Безкоштовний доступ
              </p>

              <p
                className="pr-subtitle mb-1"
                style={{
                  color: 'rgba(255,255,255,0.94)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Спробуй систему
              </p>

              <h1
                className="pr-title text-center"
                style={{
                  color: 'rgba(255,255,255,0.98)',
                  filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))',
                  marginBottom: 8,
                }}
              >
                NeuroFit
              </h1>

              <p
                className="pr-desc mx-auto max-w-sm"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.22))',
                }}
              >
                Заповнюйте форму — одразу перейдете в Telegram і заберете матеріали.
              </p>
            </div>

            <div className="pr-form-wrap reveal-up reveal-delay-1" data-animate>
              {submitted ? (
                <div className="pr-form-frame text-center">
                  <p className="pr-thanks-kicker mb-2">NeuroFit</p>
                  <h2 className="pr-thanks-title mb-2">Дякуємо!</h2>
                  <p className="pr-thanks-text mb-4">
                    Забирай і тестуй — зараз перенаправимо вас у Telegram.
                  </p>
                  <p className="pr-thanks-text mb-4 opacity-80">
                    Автоматичний перехід через {secondsLeft} сек…
                  </p>
                  <a
                    href={TELEGRAM_URL}
                    className="pr-form-btn inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-7 py-3 text-[#805D7F] shadow-md transition hover:opacity-95"
                  >
                    Перейти в Telegram
                  </a>
                </div>
              ) : (
                <div className="pr-form-frame">
                  <div className="pr-form-frame-logo">
                    <Image
                      src="/brand/logo.png"
                      alt="NeuroFit"
                      width={72}
                      height={72}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h2 className="pr-form-title mb-1 text-center">Отримати доступ</h2>
                  <p className="pr-form-desc mb-3 text-center">Просто заповніть ваші дані</p>

                  <label className="pr-form-label mb-2 block">
                    Ім’я
                    <input
                      type="text"
                      name="lead-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={onFormFieldFocus}
                      className="pr-form-input mt-1 w-full rounded-xl border border-[#E8C4E6] bg-[#FFFBFE] px-3.5 py-2.5 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                      placeholder="Олена"
                      disabled={sending}
                    />
                  </label>

                  <label className="pr-form-label mb-3 block">
                    Telegram або телефон
                    <input
                      type="text"
                      name="lead-telegram"
                      inputMode="text"
                      autoComplete="on"
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      onFocus={onFormFieldFocus}
                      className="pr-form-input mt-1 w-full rounded-xl border border-[#E8C4E6] bg-[#FFFBFE] px-3.5 py-2.5 text-[#2a2a2a] outline-none ring-[#D7ABD6] focus:ring-2"
                      placeholder="@username, +380… або 067…"
                      disabled={sending}
                    />
                  </label>

                  {error ? (
                    <p className="pr-form-desc mb-2 text-center font-semibold text-red-600" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={submit}
                      disabled={sending}
                      className="pr-form-btn inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-[#FCE0FF] to-[#FFBEFE] px-7 py-3 text-[#805D7F] shadow-md transition hover:opacity-95 disabled:opacity-60"
                    >
                      {sending ? 'Надсилання…' : 'Забрати доступ'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <p className="pr-footer-link text-center text-white/85">
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
