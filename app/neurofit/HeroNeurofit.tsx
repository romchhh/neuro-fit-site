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
          <div className="flex-1 flex items-end justify-center px-6 pb-10 md:pb-14">
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
                  fontSize: 'clamp(0.95rem, 2vw, 1.4rem)',
                  lineHeight: 1.1,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Основна програма: пілатес + нейрофітнес
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

              <p
                className="mt-4 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                  lineHeight: 1.2,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Ціна: 1490 грн
                <br />
                Доступ: 4 місяці
              </p>
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