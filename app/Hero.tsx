'use client';

import Image from 'next/image';
import Header from '@/components/Header';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden reveal-fade"
      data-animate
    >
      <Image
        src="/hero-desktop.jpg"
        alt="NeuroFit background"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover"
        style={{ objectPosition: 'center 43%' }}
      />

      <Image
        src="/hero-desktop.jpg"
        alt="NeuroFit background mobile"
        fill
        priority
        sizes="100vw"
        className="md:hidden object-cover"
        style={{ objectPosition: 'center 20%' }}
      />

      {/* Мінімальне затемнення */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'rgba(20,15,25,0.06)' }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Content — однакова структура для mobile і desktop */}
        <div className="flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>

          {/* Назва — вертикально по центру */}
          <div className="flex-1 flex items-center justify-center px-6 pt-32 md:pt-40">
            <div className="text-center">
              <h1
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: 'clamp(5.25rem, 13vw, 15.625rem)',
                  lineHeight: 1,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                NeuroFit
              </h1>

              {/* Опис одразу під назвою */}
              <p
                className="mt-3 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2.2vw, 1.9rem)',
                  lineHeight: 1,
                  letterSpacing: 0,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                унікальна система довголіття через рух і мозок
              </p>
            </div>
          </div>

          {/* Кнопка внизу */}
          <div className="pb-12 md:pb-16 flex justify-center px-6">
            <a
              href="#programs"
              className="inline-block text-center border border-white/70 text-white font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg-white/20 active:scale-[0.97]"
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.2rem)',
                padding: 'clamp(14px, 2.5vw, 22px) clamp(36px, 8vw, 80px)',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
              }}
            >
              ОБРАТИ ПРОГРАМУ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
