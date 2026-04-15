'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import PaywallLeadButton from '@/components/PaywallLeadButton';

export default function HeroNeurofit() {
  return (
    <section
      className="relative min-h-screen overflow-hidden reveal-fade"
      data-animate
    >
      {/* Фон програми NeuroFit */}
      <Image
        src="/neuro-fit/IMG_4969.jpg"
        alt="NeuroFit"
        fill
        priority
        sizes="100vw"
        className="hidden md:block object-cover"
        style={{ objectPosition: 'center 45%' }}
      />

      <Image
        src="/neuro-fit/IMG_5079.jpg"
        alt="NeuroFit mobile"
        fill
        priority
        sizes="100vw"
        className="md:hidden object-cover"
        style={{ objectPosition: 'center -10%' }}
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
          {/* Заголовки вище: мобільні — по центру, десктоп — теж вище */}
          <div className="flex-1 flex items-center justify-center px-6 pt-20 md:pt-24">
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
            </div>
          </div>

          {/* Опис + плашка — завжди внизу */}
          <div className="flex flex-1 flex-col items-center justify-end px-6 pb-1 md:pb-3">
            <div className="text-center max-w-2xl mx-auto w-full">
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

              {/* Плашка: ціна, доступ, бонус + рожева вкладка зверху */}
              <div
                className="mt-8 text-left mx-auto rounded-2xl px-5 py-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  background: 'rgba(0,0,0,0.18)',
                  backdropFilter: 'blur(26px)',
                  WebkitBackdropFilter: 'blur(26px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 18px 45px rgba(0,0,0,0.38)',
                  maxWidth: 420,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Рожева вкладка "до кінця березня" */}
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
                    ДО КІНЦЯ КВІТНЯ
                  </p>
                </div>

                <p
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                    lineHeight: 1.35,
                    color: 'rgba(255,255,255,0.98)',
                    margin: 0,
                  }}
                >
                  Ціна:{' '}
                  <span style={{ textDecoration: 'line-through', opacity: 0.85 }}>2090</span>{' '}
                  1490 грн
                </p>
                <p
                  style={{
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.0rem, 1.8vw, 1.2rem)',
                    lineHeight: 1.4,
                    color: 'rgba(255,255,255,0.98)',
                    margin: 2,
                  }}
                >
                  Доступ: 4 місяці
                </p>
                <p
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 8,
                    fontWeight: 600,
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.08rem)',
                    lineHeight: 1.3,
                    color: 'rgba(255,255,255,0.98)',
                  }}
                >
                  <span role="img" aria-label="подарунок">
                    🎁
                  </span>
                  <span>Бонус: вебінар з діафрагмального дихання</span>
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка внизу — оформлення як на головній, але з оплатою */}
          <div className="pb-12 md:pb-16 flex justify-center px-6">
            <PaywallLeadButton
              className="inline-block text-center border border-white/70 text-white font-bold rounded-full uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-200 hover:bg-white/25 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] active:scale-[0.97]"
              style={{
                fontSize: 'clamp(1.09rem, 1.8vw, 1.2rem)',
                padding: 'clamp(16px, 2.5vw, 22px) clamp(41px, 8vw, 80px)',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
              }}
              productLabel="NeuroFit — герой, оплата Kwiga"
              afterLeadSent={() => {
                window.location.href = 'https://neurofit.kwiga.com/o/vm4QaXJ1cOFg';
              }}
            >
              Доєднатися
            </PaywallLeadButton>
          </div>
        </div>
      </div>
    </section>
  );
}