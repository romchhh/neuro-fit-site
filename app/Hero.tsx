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
                <h1 className="text-4xl lg:text-[3.2rem] xl:text-[3.75rem] font-semibold text-gray-900 leading-none tracking-[0.08em]">
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

                <div className="pt-2 flex justify-center">
                  <button className="bg-white/70 backdrop-blur-sm border border-purple-200 text-[#764F75] font-bold px-12 py-5 rounded-full text-base lg:text-lg leading-[1] uppercase tracking-widest shadow-md transition-all duration-200 hover:scale-[1.03] hover:bg-white/90 hover:shadow-lg">
                    ОБРАТИ ПРОГРАМУ
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout — текстовий блок внизу */}
          <div className="md:hidden mt-auto pb-10 px-5 reveal-up reveal-delay-1" data-animate>
            <div className="bg-white/75 backdrop-blur-md rounded-3xl px-6 py-8 shadow-lg border border-white/60 space-y-5 text-center">
              <h1 className="text-[1.9rem] font-semibold text-gray-900 leading-none tracking-[0.08em]">
                NeuroFit —{' '}
                <span className="italic font-semibold text-gray-900 tracking-[0.08em]">
                  унікальна система довголіття через рух і мозок
                </span>
              </h1>

              <p className="text-gray-700 text-base leading-none italic font-normal tracking-[0.06em]">
                NeuroFit створений для тих, хто хоче тренуватися розумно. Це
                авторська система на основі пілатесу + нейрофітнесу, яка реально
                дає результат, бо працює з головним: нервовою системою, руховими
                патернами й стабільністю тіла.
              </p>

              <div className="pt-1">
                <button className="w-full bg-white/80 backdrop-blur-sm border border-purple-200 text-[#764F75] font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest shadow-md transition-all duration-200 active:scale-[0.98] hover:bg-white">
                  ОБРАТИ ПРОГРАМУ
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
