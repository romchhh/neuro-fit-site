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
        style={{ objectPosition: 'center 25%' }}
      />

      <Image
        src="/hero-mobile.jpg"
        alt="NeuroFit background mobile"
        fill
        priority
        sizes="100vw"
        className="md:hidden object-cover object-top"
      />

      {/* Легке сіре затемнення на весь фон */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'rgba(30,25,35,0.28)' }}
      />

      {/* Мінімальний блюр знизу */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-[2]"
        style={{
          height: '30%',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Mobile */}
        <div className="md:hidden flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>
          {/* NeuroFit по центру */}
          <div className="flex-1 flex items-center justify-center px-6">
            <h1
              className="font-semibold italic text-white leading-none tracking-[0.06em] text-center"
              style={{ fontSize: 'clamp(2.6rem, 14vw, 4rem)', textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
            >
              NeuroFit
            </h1>
          </div>

          {/* Опис + кнопка внизу */}
          <div className="px-6 pb-10 space-y-5 text-center">
            <p
              className="font-semibold leading-snug text-center"
              style={{
                fontSize: 'clamp(0.9rem, 3.8vw, 1.1rem)',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.92)',
                textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              }}
            >
              Унікальна система довголіття через рух і мозок
            </p>
            <div className="flex justify-center">
              <a
                href="#programs"
                className="inline-block w-full text-center bg-white/20 backdrop-blur-2xl border border-white/60 text-white font-bold px-8 py-5 rounded-full text-[1.1rem] leading-[1] uppercase tracking-[0.18em] whitespace-nowrap shadow-lg transition-all duration-200 active:scale-[0.97] hover:bg-white/30"
              >
                ОБРАТИ ПРОГРАМУ
              </a>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>
          {/* NeuroFit по центру */}
          <div className="flex-1 flex items-center justify-center px-8">
            <h1
              className="font-semibold italic text-white leading-none tracking-[0.06em] text-center"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
            >
              NeuroFit
            </h1>
          </div>

          {/* Опис + кнопка внизу */}
          <div className="pb-14 space-y-7 text-center px-8">
            <p
              className="font-semibold leading-snug text-center"
              style={{
                fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                letterSpacing: '0.07em',
                color: 'rgba(255,255,255,0.92)',
                textShadow: '0 1px 10px rgba(0,0,0,0.3)',
              }}
            >
              Унікальна система довголіття через рух і мозок
            </p>
            <div className="flex justify-center">
              <a
                href="#programs"
                className="inline-block bg-white/20 backdrop-blur-2xl border border-white/60 text-white font-bold px-16 py-6 rounded-full text-[1.35rem] lg:text-[1.5rem] leading-[1] uppercase tracking-[0.2em] whitespace-nowrap shadow-lg transition-all duration-200 hover:scale-[1.06] hover:bg-white/30"
              >
                ОБРАТИ ПРОГРАМУ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
