'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import { handlePayment } from '@/utils/handlePayment';

export default function HeroNeurofit() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap');

        .hero-nf {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: #d8d0d8;
        }

        /* ── TEXT BLOCK (desktop: left; mobile: bottom overlay) ── */
        .hero-nf-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          min-height: 100svh;
        }

        .hero-nf-body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 32px;
        }

        .hero-nf-text {
          width: 80%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          transform: translateX(-32%); /* ще на ~20% лівіше */
        }

        .hero-nf-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(1.9rem, 3.6vw, 3.9rem);
          line-height: 1.1;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: 0.08em;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: normal;
        }

        .hero-nf-tagline {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(1.1rem, 1.8vw, 1.4rem); /* як text-xl */
          color: rgba(255,255,255,0.95);
          margin-bottom: 18px;
          letter-spacing: 0.06em;
          line-height: 1;
          text-align: center;
        }

        .hero-nf-desc,
        .hero-nf-meta {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 1.25rem; /* text-xl як у опису на головній */
          line-height: 1.2;
          color: rgba(255,255,255,0.95);
          margin-bottom: 16px;
          letter-spacing: 0.06em;
          text-align: center;
        }

        .hero-nf-btn {
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
        .hero-nf-btn:hover {
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

        /* ── MOBILE ── */
        @media (max-width: 767px) {
          .hero-nf-body {
            align-items: flex-end;
            padding: 0;
            position: relative;
          }

          /* Градієнтне затемнення знизу */
          .hero-nf-body::before {
            content: '';
            position: absolute;
            left: 0; right: 0; bottom: 0;
            height: 75%;
            background: linear-gradient(to bottom, transparent 0%, rgba(10,5,20,0.55) 45%, rgba(10,5,20,0.84) 100%);
            pointer-events: none;
            z-index: 0;
          }

          .hero-nf-text {
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

          .hero-nf-title {
            color: #ffffff;
          }
          .hero-nf-tagline,
          .hero-nf-desc,
          .hero-nf-meta {
            color: rgba(255,255,255,0.88);
          }

          .hero-nf-title {
            font-size: clamp(1.7rem, 7.5vw, 2.4rem);
          }

          .hero-nf-btn {
            max-width: 100%;
          }
        }

        /* ── EXTRA NARROW PHONES ── */
        @media (max-width: 430px) {
          .hero-nf-btn {
            font-size: 1.1rem;
            letter-spacing: 0.14em;
            padding: 20px 42px;
          }
        }
      `}</style>

      <section className="hero-nf">

        {/* Desktop background — обрізаємо 20% зверху і 30% знизу */}
        <Image
          src="/neuro-fit/hero-desktop-neurofit.jpg"
          alt="NeuroFit"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover"
          style={{ objectPosition: 'center 40%' }}
        />

        {/* Mobile background — оригінальний вигляд зверху вниз */}
        <Image
          src="/neuro-fit/hero-mobile-neurofit.png"
          alt="NeuroFit mobile"
          fill
          priority
          sizes="100vw"
          className="md:hidden object-cover object-top"
        />

        <div className="hero-nf-content">
          <Header />

          <div className="hero-nf-body">
            <div className="hero-nf-text">
              <h1 className="hero-nf-title">
                NeuroFit (Основна<br />програма)
              </h1>

              <p className="hero-nf-tagline">
                NeuroFit — основна система пілатес + нейрофітнес
              </p>

              <p className="hero-nf-desc">
                Курс, який поєднує роботу з тілом і нервовою системою:
                постава, стабільність, координація, фокус і ресурс. Без
                хаосу — з чіткою прогресією від бази до інтеграції в
                повсякденне життя.
              </p>

              <p className="hero-nf-meta">
                Ціна: 1490 грн<br />
                Доступ: 4 місяці
              </p>

              <button
                className="hero-nf-btn"
                onClick={() =>
                  handlePayment({
                    price: 1490,
                    eventTitle:
                      'NeuroFit (Основна програма) — доступ 4 місяці',
                    tariffType: 'neurofit_main',
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