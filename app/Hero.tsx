'use client';

import Image from 'next/image';
import Header from '@/components/Header';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden reveal-fade"
      data-animate
    >
      {/* Фон на desktop */}
      <Image
        src="/hero-desktop.jpg"
        alt="NeuroFit background"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover object-center"
      />

      {/* Фон на мобільних */}
      <Image
        src="/hero-mobile.jpg"
        alt="NeuroFit background mobile"
        fill
        priority
        sizes="100vw"
        className="md:hidden object-cover object-top"
      />

      {/* Контейнер з хедером і контентом поверх фону */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Mobile: контент внизу екрану поверх фото */}
        <div className="flex-1 flex flex-col md:items-center">

          {/* Desktop layout */}
          <div className="hidden md:flex flex-1 items-center w-full reveal-up reveal-delay-1" data-animate>
            <div className="container mx-auto px-8 lg:px-16 flex justify-end">
              <div className="max-w-2xl xl:max-w-3xl text-center space-y-8">
                <h1 className="text-[2.8rem] lg:text-[3.4rem] xl:text-[3.9rem] font-semibold text-gray-900 leading-none tracking-[0.1em]">
                  NeuroFit —{' '}
                  <span className="italic font-semibold text-gray-900 tracking-[0.08em]">
                    унікальна система довголіття через рух і мозок
                  </span>
                </h1>

                <p className="text-gray-700 text-xl leading-none max-w-xl mx-auto italic font-normal tracking-[0.06em]">
                  NeuroFit створений для тих, хто хоче тренуватися розумно. Це
                  авторська система на основі пілатесу + нейрофітнесу, яка реально
                  дає результат, бо працює з головним: нервовою системою, руховими
                  патернами й стабільністю тіла.
                </p>

                <div className="pt-5 flex justify-center">
                  <a
                    href="#programs"
                    className="inline-block bg-white/60 backdrop-blur-2xl border border-white/70 text-[#5f3a6b] font-bold px-16 py-6 rounded-full text-[1.35rem] lg:text-[1.5rem] leading-[1] uppercase tracking-[0.2em] whitespace-nowrap shadow-lg transition-all duration-200 hover:scale-[1.06] hover:bg-white/80 hover:shadow-xl text-center"
                  >
                    ОБРАТИ ПРОГРАМУ
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout — текст поверх градієнтного затемнення знизу */}
          <div className="md:hidden mt-auto relative z-10 reveal-up reveal-delay-1" data-animate>
            {/* Градієнтне затемнення */}
            <div
              className="absolute left-0 right-0 bottom-0 pointer-events-none"
              style={{
                top: '-140px',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(10,5,20,0.55) 45%, rgba(10,5,20,0.84) 100%)',
              }}
            />
            {/* Текст поверх градієнта */}
            <div className="relative px-6 pb-10 pt-16 space-y-5 text-center">
              <h1 className="text-[2.05rem] font-semibold text-white leading-none tracking-[0.1em]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}>
                NeuroFit —{' '}
                <span className="italic font-semibold text-white tracking-[0.08em]">
                  унікальна система довголіття через рух і мозок
                </span>
              </h1>

              <p className="text-white/85 text-base leading-snug italic font-normal tracking-[0.06em]">
                NeuroFit створений для тих, хто хоче тренуватися розумно. Це
                авторська система на основі пілатесу + нейрофітнесу, яка реально
                дає результат, бо працює з головним: нервовою системою, руховими
                патернами й стабільністю тіла.
              </p>

              <div className="pt-3">
                <a
                  href="#programs"
                  className="inline-block w-full text-center bg-white/60 backdrop-blur-2xl border border-white/70 text-[#5f3a6b] font-bold px-8 py-5 rounded-full text-[1.1rem] leading-[1] uppercase tracking-[0.18em] whitespace-nowrap shadow-lg transition-all duration-200 active:scale-[0.97] hover:bg-white/80 hover:shadow-xl"
                >
                  ОБРАТИ ПРОГРАМУ
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
