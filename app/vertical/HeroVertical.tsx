'use client';

import Image from 'next/image';
import Header from '@/components/Header';

export default function HeroVertical() {
  return (
    <section className="relative min-h-screen overflow-hidden reveal-fade" data-animate>
      <Image
        src="/vertical/hero.jpg"
        alt="Вертикаль — програма для постави та здорової спини"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 35%' }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'rgba(20,15,25,0.08)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'linear-gradient(to top, rgba(10,6,18,0.72) 0%, rgba(10,6,18,0.42) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <div className="flex flex-col flex-1 reveal-up reveal-delay-1" data-animate>
          <div className="flex-1 flex items-center justify-center px-6 pt-20 md:pt-24">
            <div className="text-center max-w-2xl mx-auto">
              <h1
                className="text-center"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  lineHeight: 1,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                Вертикаль
              </h1>
              <p
                className="mt-4 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
                  lineHeight: 1.25,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                постава, здорова спина і глибока опора тіла
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-end px-6 pb-1 md:pb-3">
            <div className="text-center max-w-xl mx-auto w-full flex flex-col items-center">
              <p
                className="text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.88rem, 1.6vw, 1.1rem)',
                  lineHeight: 1.35,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                  marginBottom: 'clamp(1.25rem, 3vh, 2rem)',
                }}
              >
                <span className="hidden md:inline">
                  8 тижнів неповторних тренувань для&nbsp;зміцнення глибоких м&apos;язів,
                  які&nbsp;підтримують поставу, позбавляючись від&nbsp;болю в&nbsp;спині
                  та&nbsp;скутості
                </span>
                <span className="md:hidden">
                  8 тижнів неповторних тренувань
                  <br />
                  для&nbsp;зміцнення глибоких м&apos;язів,
                  <br />
                  які&nbsp;підтримують поставу
                  <br />
                  і&nbsp;позбавляють від&nbsp;болю в&nbsp;спині
                  <br />
                  та&nbsp;скутості
                </span>
              </p>

              <div
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: 'rgba(0,0,0,0.18)',
                  backdropFilter: 'blur(26px)',
                  WebkitBackdropFilter: 'blur(26px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
                  lineHeight: 1.35,
                  color: 'rgba(255,255,255,0.98)',
                  marginBottom: 'clamp(1.5rem, 3.5vh, 2.25rem)',
                }}
              >
                <span role="img" aria-label="подарунок">
                  🎁
                </span>
                <span>Бонус: Фітнес-аптечка з доступом назавжди</span>
              </div>
            </div>
          </div>

          <div
            className="pb-12 md:pb-16 flex flex-col sm:flex-row justify-center items-center px-6 w-full max-w-[320px] sm:max-w-none mx-auto sm:mx-0"
            style={{ gap: 'clamp(0.85rem, 2vh, 1.15rem)' }}
          >
            <a
              href="#tariffs"
              className="inline-flex w-full sm:w-auto items-center justify-center text-center border border-white/70 text-white font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg-white/25 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] active:scale-[0.97]"
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                padding: 'clamp(14px, 2.5vw, 20px) clamp(32px, 6vw, 64px)',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
              }}
            >
              Доєднатись
            </a>
            <a
              href="#modules"
              className="inline-flex w-full sm:w-auto items-center justify-center text-center border border-white/50 text-white/95 font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.97]"
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                padding: 'clamp(14px, 2.5vw, 20px) clamp(32px, 6vw, 64px)',
                background: 'rgba(255,255,255,0.06)',
              }}
            >
              Програма курсу
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
