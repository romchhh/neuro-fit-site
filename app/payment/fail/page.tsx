'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Посилання на підтримку — заміни на реальне
const SUPPORT_URL = 'https://t.me/ЗАМІНИ_НА_СВОЄ';

function FailContent() {
  const searchParams = useSearchParams();
  const tariffType = searchParams.get('tariffType') ?? '';

  // URL для повторної спроби — повертаємо на сторінку відповідного курсу
  const retryUrl =
    tariffType === 'neurofit_main'   ? '/neurofit' :
    tariffType === 'neuro_intensive' ? '/neuro-intensive' :
    '/';

  return (
    <main className="pay-fail">
      <section className="pay-fail-card">
        <div className="pay-fail-badge">
          <span>✕ Оплата не завершена</span>
        </div>

        <h1 className="pay-fail-title">Щось пішло не так</h1>
        <p className="pay-fail-subtitle">
          Платіж не був успішно завершений або був скасований.
        </p>

        <p className="pay-fail-text">
          Якщо ви не планували переривати оплату — спробуйте ще раз. Якщо
          кошти були списані, але доступ не зʼявився — напишіть нам у
          підтримку, ми вирішимо це швидко.
        </p>

        <div className="pay-fail-actions">
          <a href={retryUrl} className="pay-fail-btn-primary">
            Спробувати ще раз
          </a>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noreferrer"
            className="pay-fail-btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: 8 }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M7.5 11.8 16.5 8l-3.2 8-1.8-3.2-3.5-1.4c-.4-.16-.4-.46.5-.6Z" fill="currentColor"/>
              <path d="M11.5 12.8 14 10.3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Написати в підтримку
          </a>
        </div>
      </section>
    </main>
  );
}

export default function PaymentFailPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');

        .pay-fail {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #fff1f1 0%, #ffe8ee 38%, #f7f3f5 100%);
          padding: 32px 16px;
        }

        .pay-fail-card {
          max-width: 600px;
          width: 100%;
          background: rgba(255, 255, 255, 0.94);
          border-radius: 32px;
          box-shadow: 0 28px 80px rgba(150, 70, 92, 0.22);
          padding: 36px 32px 40px;
          text-align: center;
          border: 1px solid rgba(255, 205, 214, 0.9);
        }

        .pay-fail-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffe0e7 0%, #ffd1da 100%);
          color: #7b3848;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pay-fail-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2d1c23;
          margin-bottom: 12px;
        }

        .pay-fail-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 1.05rem;
          color: #6a4a57;
          margin-bottom: 18px;
        }

        .pay-fail-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #4b323c;
          margin-bottom: 28px;
        }

        .pay-fail-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .pay-fail-btn-primary,
        .pay-fail-btn-secondary {
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

        .pay-fail-btn-primary {
          background: linear-gradient(90deg, #fcd6e0 0%, #ffb6c9 100%);
          color: #6b3240;
          box-shadow: 0 12px 32px rgba(190, 96, 120, 0.4);
        }
        .pay-fail-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 46px rgba(190, 96, 120, 0.58);
        }

        .pay-fail-btn-secondary {
          background: transparent;
          color: #7b4f61;
          border: 1px solid rgba(145, 103, 123, 0.6);
        }
        .pay-fail-btn-secondary:hover {
          background: rgba(249, 236, 244, 0.96);
        }

        @media (max-width: 640px) {
          .pay-fail-card { padding: 28px 20px 32px; border-radius: 24px; }
          .pay-fail-actions { flex-direction: column; }
          .pay-fail-btn-primary,
          .pay-fail-btn-secondary { width: 100%; }
        }
      `}</style>

      <Suspense fallback={null}>
        <FailContent />
      </Suspense>
    </>
  );
}
