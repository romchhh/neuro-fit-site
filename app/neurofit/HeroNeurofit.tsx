'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import { handlePayment } from '@/utils/handlePayment';

export default function HeroNeurofit() {
  return (
    <section
      className="relative min-h-screen overflow-hidden reveal-fade"
      data-animate
    >
      {/* Фон програми NeuroFit */}
      <Image
        src="/neuro-fit/hero-desktop-neurofit.jpg"
        alt="NeuroFit"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover"
        style={{ objectPosition: 'center 45%' }}
      />

      <Image
        src="/neuro-fit/hero-mobile-neurofit.png"
        alt="NeuroFit mobile"
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

      <div className="relative z-[10] flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>
          {/* Центрований текстовий блок — трохи менший та вище, щоб більше відкривати фото */}
          <div className="flex-1 flex items-end justify-center px-6 pb-1 md:pb-3">
            <div className="text-center max-w-2xl mx-auto">
              <h1
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: 'clamp(3.2rem, 7vw, 5.4rem)',
                  lineHeight: 1,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                NeuroFit
              </h1>

              <p
                className="mt-4 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.85rem, 1.7vw, 1.1rem)',
                  lineHeight: 1.1,
                  letterSpacing: 0,
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem 1.25rem',
                    borderRadius: 999,
                    background: 'rgba(255, 219, 236, 0.92)',
                    color: '#4C2440',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                  }}
                >
                  Основна програма · пілатес + нейрофітнес
                </span>
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
                Курс, який поєднує роботу з тілом і нервовою системою:
                постава, стабільність, координація, фокус і ресурс з чіткою
                прогресією від бази до інтеграції в повсякденне життя.
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
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <p
                  className="mt-3"
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                    lineHeight: 1.25,
                    color: 'rgba(255,255,255,0.98)',
                    margin: 0,
                  }}
                >
                  Ціна:{' '}
                  <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>2090</span>{' '}
                  1490 грн
                  <br />
                  Доступ: 4 місяці
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(0.78rem, 1.1vw, 0.9rem)',
                    letterSpacing: '0.02em',
                    color: 'rgba(255,255,255,0.9)',
                    margin: 0,
                  }}
                >
                  Старт для системних змін: постава, стабільність і ресурс тіла
                </p>
              </div>

              {/* Рожева плашка з дедлайном — знизу справа, легке нашарування на блок */}
              <div
                className="flex justify-end px-1"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  marginTop: '-1.2rem',
                  marginRight: '2rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    background: 'linear-gradient(135deg, #FFD6EB 0%, #FFBAD8 100%)',
                    borderRadius: 999,
                    padding: '0.55rem 1.05rem',
                    boxShadow: '0 2px 12px rgba(180,60,110,0.22)',
                    textAlign: 'left',
                    maxWidth: 260,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#7A1A45',
                      lineHeight: 1.1,
                    }}
                  >
                    до кінця березня
                  </p>
                  <p
                    style={{
                      margin: '0.25rem 0 0',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      color: '#7A1A45',
                      lineHeight: 1.2,
                    }}
                  >
                    нижча ціна · нижчий поріг входу
                  </p>
                  <p
                    style={{
                      margin: '0.15rem 0 0',
                      fontSize: '0.57rem',
                      fontWeight: 500,
                      color: '#9B3060',
                      lineHeight: 1.2,
                    }}
                  >
                    бонус: вебінар дихання
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка внизу — оформлення як на головній, але з оплатою */}
          <div className="pb-12 md:pb-16 flex justify-center px-6">
            <button
              className="inline-block text-center border border-white/70 text-white font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg-white/20 active:scale-[0.97]"
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
                  price: 1490,
                  eventTitle:
                    'NeuroFit (Основна програма) — доступ 4 місяці',
                  tariffType: 'neurofit_main',
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