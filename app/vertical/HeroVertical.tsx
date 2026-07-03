'use client';

import Image from 'next/image';
import Header from '@/components/Header';

export default function HeroVertical() {
  return (
    <section className="relative min-h-screen overflow-hidden reveal-fade" data-animate>
      <Image
        src="/vertical/DSC01233.jpg"
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
            <div className="text-center max-w-xl mx-auto w-full">
              <p
                className="mt-3 text-center mx-auto"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: 'clamp(0.88rem, 1.6vw, 1.1rem)',
                  lineHeight: 1.35,
                  color: 'rgba(255,255,255,0.941)',
                  filter: 'drop-shadow(0px 4px 4.8px rgba(0,0,0,0.251))',
                }}
              >
                8-тижнева онлайн-програма, яка допомагає м&apos;яко зміцнити глибокі м&apos;язи,
                покращити поставу, зменшити скутість у спині та краще відчувати тіло в
                повсякденному житті.
              </p>

              <div
                className="mt-8 text-left mx-auto rounded-2xl px-5 py-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: 'rgba(0,0,0,0.18)',
                  backdropFilter: 'blur(26px)',
                  WebkitBackdropFilter: 'blur(26px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 18px 45px rgba(0,0,0,0.38)',
                  maxWidth: 440,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -15,
                    right: 0,
                    padding: '6px 20px 7px',
                    background: 'rgba(255, 219, 236, 0.92)',
                    borderRadius: '12px 12px 0 12px',
                    boxShadow: '0 10px 26px rgba(0,0,0,0.35)',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#5A2345',
                    }}
                  >
                    ДО КІНЦЯ ЛИПНЯ
                  </p>
                </div>

                <p
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                    lineHeight: 1.4,
                    color: 'rgba(255,255,255,0.98)',
                    margin: 0,
                  }}
                >
                  Самостійний формат:{' '}
                  <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>4320</span> 3720 грн
                </p>
                <p
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                    lineHeight: 1.4,
                    color: 'rgba(255,255,255,0.98)',
                    margin: '4px 0 0',
                  }}
                >
                  Із супроводом Юлії:{' '}
                  <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>5750</span> 5250 грн
                </p>
                <p
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                    lineHeight: 1.4,
                    color: 'rgba(255,255,255,0.98)',
                    margin: '6px 0 0',
                  }}
                >
                  Доступ: 9 тижнів із можливістю подовжити
                </p>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 8,
                    fontWeight: 600,
                    fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
                    lineHeight: 1.3,
                    color: 'rgba(255,255,255,0.98)',
                  }}
                >
                  <span role="img" aria-label="подарунок">
                    🎁
                  </span>
                  <span>Бонус: Фітнес-аптечка з доступом назавжди</span>
                </p>
              </div>
            </div>
          </div>

          <div className="pb-12 md:pb-16 flex flex-col sm:flex-row justify-center items-center gap-3 px-6 w-full max-w-[320px] sm:max-w-none mx-auto sm:mx-0">
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
