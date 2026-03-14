'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import { handlePayment } from '@/utils/handlePayment';

export default function HeroNeuroIntensive() {
  return (
    <section
      className="relative min-h-screen overflow-hidden reveal-fade"
      data-animate
    >
      {/* Фон Neuro-інтенсиву */}
      <Image
        src="/neuro-intensive/hero-desktop-neurointensive.jpg"
        alt="Neuro-інтенсив"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover"
        style={{ objectPosition: 'right center' }}
      />

      <Image
        src="/neuro-intensive/hero-mobile-neurointensive.jpg"
        alt="Neuro-інтенсив mobile"
        fill
        priority
        sizes="100vw"
        className="md:hidden object-cover object-top"
      />

      {/* Загальне легке затемнення */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'rgba(20,15,25,0.06)' }}
      />

      {/* Градієнтне затемнення під текстом внизу */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, rgba(10,6,18,0.68) 0%, rgba(10,6,18,0.38) 35%, transparent 65%)',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>
          {/* Центрований текстовий блок — трохи менший та вище, щоб більше відкривати фото */}
          <div className="flex-1 flex items-end justify-center px-6 pb-10 md:pb-14">
            <div className="text-center max-w-2xl mx-auto">
              <h1
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: 'clamp(2.7rem, 6vw, 4.6rem)',
                  lineHeight: 1,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Neuro-інтенсив
              </h1>

              <p
                className="mt-4 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.95rem, 2vw, 1.45rem)',
                  lineHeight: 1.1,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Міні-програма · швидкий вхід у метод
              </p>

              <p
                className="mt-3 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.9rem, 1.7vw, 1.25rem)',
                  lineHeight: 1.2,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Коротка програма, щоб на практиці відчути, як мозок керує тілом:
                пілатес, функціонал і нейрофітнес дають помітний старт
                координації, концентрації та легкості в русі.
              </p>

              {/* Плашка: бонус, знижка, ціна */}
              <div
                className="mt-4 text-center mx-auto rounded-2xl px-5 py-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: 'rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  maxWidth: 420,
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
                    lineHeight: 1.3,
                    color: 'rgba(255,255,255,0.98)',
                    margin: 0,
                  }}
                >
                  Бонус: вправи для памʼяті та концентрації
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                    lineHeight: 1.2,
                    color: 'rgba(255,255,255,0.98)',
                    margin: 0,
                  }}
                >
                  Ціна:{' '}
                  <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>790</span>{' '}
                  380 грн · Доступ: 4 місяці
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontWeight: 600,
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                    letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.9)',
                    margin: 0,
                  }}
                >
                  Знижка до кінця березня
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка внизу — оформлення як на головній, але з оплатою */}
          <div className="pb-12 md:pb-16 flex justify-center px-6">
            <button
              className="inline-block text-center border border-white/70 text-white font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg:white/20 hover:bg-white/20 active:scale-[0.97]"
              style={{
                fontSize: 'clamp(1.09rem, 1.8vw, 1.2rem)',
                padding: 'clamp(16px, 2.5vw, 22px) clamp(41px, 8vw, 80px)',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
              }}
              onClick={() =>
                handlePayment({
                  price: 380,
                  eventTitle:
                    'Neuro-інтенсив (міні-програма) — доступ 4 місяці',
                  tariffType: 'neuro_intensive',
                })
              }
            >
              Доєднатися
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

