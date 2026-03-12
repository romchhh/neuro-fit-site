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

      {/* Легке затемнення як на головній */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'rgba(20,15,25,0.06)' }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>
          {/* Центрований текстовий блок */}
          <div className="flex-1 flex items-center justify-center px-6 pt-28 md:pt-36">
            <div className="text-center max-w-3xl mx-auto">
              <h1
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: 'clamp(3rem, 7vw, 5.4rem)',
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
                  fontSize: 'clamp(1rem, 2.1vw, 1.6rem)',
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
                  fontSize: 'clamp(0.98rem, 1.9vw, 1.4rem)',
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

              <p
                className="mt-4 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)',
                  lineHeight: 1.2,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Ціна: 380 грн
                <br />
                Доступ: 4 місяці
              </p>
            </div>
          </div>

          {/* Кнопка внизу — оформлення як на головній, але з оплатою */}
          <div className="pb-12 md:pb-16 flex justify-center px-6">
            <button
              className="inline-block text-center border border-white/70 text-white font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg:white/20 hover:bg-white/20 active:scale-[0.97]"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                padding: 'clamp(14px, 2.5vw, 22px) clamp(36px, 8vw, 80px)',
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
              Купити програму
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

