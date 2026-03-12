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
          font-weight: 600; /* як заголовок на головній */
          font-size: clamp(2.8rem, 4.2vw, 3.9rem);
          line-height: 1;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: 0.1em;
          text-align: center;
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
          white-space: nowrap; /* "Купити програму" завжди в один рядок */
          color: #5f3a6b;
          background: rgba(255,255,255,0.2); /* як bg-white/20 у хедері */
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.7); /* як border-white/70 */
          padding: 24px 86px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          box-shadow: 0 22px 60px rgba(0,0,0,0.22); /* як у головній кнопці */
        }
        .hero-nf-btn:hover {
          background: rgba(255,255,255,0.45); /* як hover:bg-white/45 */
          transform: scale(1.06);
          box-shadow: 0 28px 78px rgba(0,0,0,0.26);
        }

        /* ── MOBILE ── */
        @media (max-width: 767px) {
          .hero-nf-body {
            align-items: flex-end;
            padding: 0 0 40px;
          }

          .hero-nf-text {
            max-width: 100%;
            width: 100%;
            background: rgba(0,0,0,0.28);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border-top: 1px solid rgba(255,255,255,0.35);
            border-radius: 28px 28px 0 0;
            padding: 28px 24px 36px;
            transform: translateX(0); /* без зсуву на мобільному */
          }

          .hero-nf-title {
            font-size: 2.2rem;
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

        {/* Desktop background */}
        <Image
          src="/neuro-fit/hero-desktop-neurofit.jpg"
          alt="NeuroFit"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center"
        />

        {/* Mobile background */}
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
                Ціна: [ЦІНА]<br />
                Доступ: 4 місяці
              </p>

              <button
                className="hero-nf-btn"
                onClick={() =>
                  handlePayment({
                    // TODO: замінити на реальну ціну
                    price: 1,
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