'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Telegram-групи після успішної оплати
const TELEGRAM_LINKS: Record<string, string> = {
  neurofit_main:   'https://t.me/+KAJDH5sl1WkwNGEy',
  neuro_intensive: 'https://t.me/+Y-hz8LITGdUwMmIy',
};

const DEFAULT_TELEGRAM = 'https://t.me/+EizJRY-CVTRmYzYy';

function SuccessContent() {
  const searchParams = useSearchParams();
  const tariffType = searchParams.get('tariffType') ?? '';
  const telegramUrl = TELEGRAM_LINKS[tariffType] ?? DEFAULT_TELEGRAM;

  return (
    <main className="pay-success">
      <section className="pay-success-card">
        <div className="pay-success-badge">
          <span>✓ Оплата пройшла успішно</span>
        </div>

        <h1 className="pay-success-title">Дякуємо за довіру до NeuroFit</h1>
        <p className="pay-success-subtitle">
          Доступ до програми вже активовано.
        </p>

        <p className="pay-success-text">
          Натисни кнопку нижче, щоб перейти у Telegram-канал і розпочати курс. Якщо виникнуть питання — напиши нам у підтримку.
        </p>

        <div className="pay-success-actions">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="pay-success-btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M7.5 11.8 16.5 8l-3.2 8-1.8-3.2-3.5-1.4c-.4-.16-.4-.46.5-.6Z" fill="currentColor"/>
              <path d="M11.5 12.8 14 10.3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Перейти в Telegram-канал
          </a>
          <a href="/" className="pay-success-btn-secondary">
            На головну
          </a>
        </div>
      </section>
    </main>
  );
}

export default function PaymentSuccessPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');

        .pay-success {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #ffe9ff 0%, #f5e8ff 38%, #f3f1f7 100%);
          padding: 32px 16px;
        }

        .pay-success-card {
          max-width: 600px;
          width: 100%;
          background: rgba(255, 255, 255, 0.92);
          border-radius: 32px;
          box-shadow: 0 28px 80px rgba(116, 63, 135, 0.22);
          padding: 36px 32px 40px;
          text-align: center;
          border: 1px solid rgba(252, 208, 255, 0.8);
        }

        .pay-success-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, #f6d5ff 0%, #ffe2f5 100%);
          color: #5c3b68;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pay-success-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2a2033;
          margin-bottom: 12px;
        }

        .pay-success-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 1.05rem;
          color: #5b4a69;
          margin-bottom: 18px;
        }

        .pay-success-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #4a3b53;
          margin-bottom: 28px;
        }

        .pay-success-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .pay-success-btn-primary,
        .pay-success-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 999px;
          border: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.16s, box-shadow 0.16s, background 0.16s;
        }

        .pay-success-btn-primary {
          background: linear-gradient(90deg, #fbdfff 0%, #ffbdf4 100%);
          color: #5c355f;
          box-shadow: 0 12px 32px rgba(206, 117, 197, 0.45);
        }
        .pay-success-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 46px rgba(206, 117, 197, 0.6);
        }

        .pay-success-btn-secondary {
          background: transparent;
          color: #6d527f;
          border: 1px solid rgba(155, 125, 175, 0.55);
        }
        .pay-success-btn-secondary:hover {
          background: rgba(242, 231, 255, 0.9);
        }

        @media (max-width: 640px) {
          .pay-success-card {
            padding: 28px 20px 32px;
            border-radius: 24px;
          }
          .pay-success-title {
            font-size: 1.4rem;
            letter-spacing: 0.04em;
          }
          .pay-success-subtitle { font-size: 0.98rem; }
          .pay-success-text {
            font-size: 0.9rem;
            line-height: 1.6;
          }
          .pay-success-actions { flex-direction: column; }
          .pay-success-btn-primary,
          .pay-success-btn-secondary {
            width: 100%;
          }
          .pay-success-btn-primary {
            white-space: nowrap;
          }
        }
      `}</style>

      <Suspense fallback={null}>
        <SuccessContent />
      </Suspense>
    </>
  );
}
