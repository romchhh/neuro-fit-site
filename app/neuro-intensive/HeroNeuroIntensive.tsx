'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import { handlePayment } from '@/utils/handlePayment';

export default function HeroNeuroIntensive() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap');

        .hero-ni {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: #d8d0d8;
        }

        .hero-ni-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          min-height: 100svh;
        }

        .hero-ni-body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end; /* текстовий блок справа */
          padding: 0 56px 0 32px;
        }

        .hero-ni-text {
          width: 80%;
          max-width: 900px;
          margin: 0;
          text-align: center;
        }

        .hero-ni-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(2.8rem, 4.2vw, 3.9rem);
          line-height: 1;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: 0.1em;
          text-align: center;
        }

        .hero-ni-tagline {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          color: rgba(255,255,255,0.95);
          margin-bottom: 18px;
          letter-spacing: 0.06em;
          line-height: 1;
          text-align: center;
        }

        .hero-ni-desc,
        .hero-ni-meta {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 1.25rem;
          line-height: 1.2;
          color: rgba(255,255,255,0.95);
          margin-bottom: 16px;
          letter-spacing: 0.06em;
          text-align: center;
        }

        .hero-ni-btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          white-space: nowrap;
          color: #5f3a6b;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 245, 255, 0.32) 100%
          );
          backdrop-filter: blur(28px) saturate(1.8);
          -webkit-backdrop-filter: blur(28px) saturate(1.8);
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.65);
          padding: 24px 86px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          box-shadow:
            0 22px 60px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2);
        }
        .hero-ni-btn:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.72) 0%,
            rgba(255, 245, 255, 0.48) 100%
          );
          transform: scale(1.06);
          box-shadow:
            0 28px 78px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(255, 255, 255, 0.25);
        }

        @media (max-width: 767px) {
          .hero-ni-body {
            align-items: flex-end;
            padding: 0;
            position: relative;
          }

          /* Градієнтне затемнення знизу */
          .hero-ni-body::before {
            content: '';
            position: absolute;
            left: 0; right: 0; bottom: 0;
            height: 75%;
            background: linear-gradient(to bottom, transparent 0%, rgba(10,5,20,0.55) 45%, rgba(10,5,20,0.84) 100%);
            pointer-events: none;
            z-index: 0;
          }

          .hero-ni-text {
            max-width: 100%;
            width: 100%;
            background: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            border-top: none;
            border-radius: 0;
            padding: 60px 24px 36px;
            transform: translateX(0);
            position: relative;
            z-index: 1;
          }

          .hero-ni-title {
            color: #ffffff;
          }
          .hero-ni-tagline,
          .hero-ni-desc,
          .hero-ni-meta {
            color: rgba(255,255,255,0.88);
          }

          .hero-ni-title {
            font-size: 2.2rem;
          }

          .hero-ni-btn {
            max-width: 100%;
          }
        }

        /* ── EXTRA NARROW PHONES ── */
        @media (max-width: 430px) {
          .hero-ni-btn {
            font-size: 1.1rem;
            letter-spacing: 0.14em;
            padding: 20px 42px;
          }
        }
      `}</style>

      <section className="hero-ni">
        {/* Desktop background — обрізаємо зліва */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <Image
            src="/neuro-intensive/hero-desktop-neurointensive.jpg"
            alt="Neuro-інтенсив"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'right center' }}
          />
        </div>

        {/* Mobile background — оригінальний вигляд зверху вниз */}
        <Image
          src="/neuro-intensive/hero-mobile-neurointensive.jpg"
          alt="Neuro-інтенсив mobile"
          fill
          priority
          sizes="100vw"
          className="md:hidden object-cover object-top"
        />

        <div className="hero-ni-content">
          <Header />

          <div className="hero-ni-body">
            <div className="hero-ni-text">
              <h1 className="hero-ni-title">
                Neuro-інтенсив<br />(Міні-програма)
              </h1>

              <p className="hero-ni-tagline">
                Neuro-інтенсив — швидкий вхід у метод
              </p>

              <p className="hero-ni-desc">
                Коротка програма, щоб на практиці відчути, як мозок керує тілом.
                Пілатес + функціонал + нейрофітнес дають помітний старт:
                координація, концентрація, включеність і легкість у русі.
              </p>

              <p className="hero-ni-meta">
                Ціна: 380 грн<br />
                Доступ: 4 місяці
              </p>

              <button
                className="hero-ni-btn"
                onClick={() =>
                  handlePayment({
                    price: 380,
                    eventTitle:
                      'Neuro-інтенсив (міні-програма) — доступ 4 місяці',
                    tariffType: 'neuro_intensive',
                  })
                }
              >
                Купити програму
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

