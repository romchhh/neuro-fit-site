"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const programs = [
  {
    number: '01',
    tag: 'ОСНОВНА ПРОГРАМА',
    title: 'NeuroFit — Neuro-Pilates',
    description:
      'Пілатес і нейрофітнес у прогресії: від відчуття тіла до стабільності й впевненого руху.',
    benefits: [
      "більше мобільності та стабільності, активуються глибокі м'язи, рух стає контрольованим.",
      'зростають сила, координація й витривалість для щоденних навантажень.',
      "краща увага, концентрація й пам'ять; нижчий рівень стресу.",
    ],
    bonus: 'Вебінар з діафрагмального дихання',
    buttonLabel: 'ПЕРЕЙТИ',
    image: '/programs/IMG_9137.jpg',
    soon: false,
  },
  {
    number: '02',
    tag: 'МІНІ-ПРОГРАМА',
    title: 'Pilates Neuro-інтенсив',
    description:
      "Короткий формат з пілатесом, функціональними зв'язками й нейрофітнесом, щоб швидко відчути тіло і активувати мозок.",
    benefits: [
      "з'являється контакт із тілом та точність руху",
      "підключаються функціональні зв'язки, рух стає більш зібраним.",
      'покращуються увага й концентрація, знижується психофізіологічна напруга.',
    ],
    bonus: 'Вправи для памʼяті та концентрації',
    buttonLabel: 'ПЕРЕЙТИ',
    image: '/programs/IMG_9197.jpg',
    soon: false,
  },
  {
    number: '03',
    tag: 'ПРОГРАМА',
    title: 'Здорова спина',
    description:
      'Мʼяка програма, що знімає напругу зі спини й повертає природну поставу через розумний рух.',
    benefits: [
      'зниження напруги та краща рухливість ключових зон.',
      "підсилення глибоких м'язів спини та корпусу.",
      'зникає сутулість, підтягується живіт, фігура стає гармонійнішою.',
    ],
    buttonLabel: 'ЗАПИСАТИСЯ В ЛИСТ ОЧІКУВАННЯ',
    image: '/programs/IMG_9222.jpg',
    soon: true,
  },
];

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndex = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    if (activeIndex === 0) return;
    scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex === programs.length - 1) return;
    scrollToIndex(activeIndex + 1);
  };

  // Оновлення activeIndex при нативному скролі контейнера
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const { scrollLeft, offsetWidth } = container;
      const containerCenter = scrollLeft + offsetWidth / 2;

      let closestIndex = 0;
      let closestDelta = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const delta = Math.abs(cardCenter - containerCenter);
        if (delta < closestDelta) {
          closestDelta = delta;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');

        .prog-section {
          position: relative;
          background: white;
          padding: 40px 0 48px;
          overflow-x: visible;
          overflow-y: hidden;
        }

        .prog-inner {
          padding: 0 32px;
        }

        /* ── Header ── */
        .prog-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 8px;
        }

        .prog-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 32px;
          line-height: 1.1;
          color: #3a3a3a;
          max-width: 720px;
        }

        .prog-arrows {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .prog-arrow {
          font-size: 24px;
          color: #c9a0d4;
          cursor: pointer;
          user-select: none;
          transition: color 0.2s;
          line-height: 1;
        }
        .prog-arrow:hover { color: #9b6aad; }
        .prog-arrow:disabled,
        .prog-arrow[aria-disabled="true"] {
          opacity: 0.32;
          cursor: default;
          pointer-events: none;
        }
        .prog-arrow:disabled:hover,
        .prog-arrow[aria-disabled="true"]:hover { color: #c9a0d4; }

        /* ── Big BG title ── */
        .prog-bg-title-wrap {
          width: 100%;
          max-width: none;
          overflow: visible;
          margin: 0 0 -22px 0;
          position: relative;
          z-index: 0;
        }

        .prog-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(46px, 10vw, 158px);
          line-height: 1;
          white-space: nowrap;
          width: 100%;
          display: block;
          text-align: left;
          background: linear-gradient(90deg, rgba(230,218,240,0.46) 0%, rgba(233,187,232,0.46) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
          letter-spacing: 0.015em;
        }

        /* ── Cards scroll ── */
        .prog-scroll-area {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 24px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          padding-bottom: 8px;
          padding-left: 0;
          padding-right: 72px;
          scroll-padding-right: 72px;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .prog-scroll-area::-webkit-scrollbar { display: none; }

        /* ── Single card ── */
        .prog-card {
          background: #ffffff;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid #f3c4e3;
          flex-shrink: 0;
          width: min(880px, 94vw);
          scroll-snap-align: start;
          display: flex;
          flex-direction: row;
        }

        /* image column */
        .prog-card-img-wrap {
          width: 300px;
          flex-shrink: 0;
          position: relative;
          background: #ede0ea;
          min-height: 300px;
          aspect-ratio: 4 / 5;
        }

        .prog-card-img-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 14px 16px;
          display: none;
          align-items: flex-end;
          justify-content: flex-start;
        }

        .prog-card-img-overlay-inner {
          flex: 1;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 245, 255, 0.35) 100%
          );
          backdrop-filter: blur(28px) saturate(1.6);
          -webkit-backdrop-filter: blur(28px) saturate(1.6);
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow:
            0 4px 24px rgba(180, 130, 200, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2);
          padding: 10px 14px;
        }

        .prog-card-img-number,
        .prog-card-img-tag {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b47fc0;
          display: block;
        }

        .prog-card-img-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 26px;
          line-height: 1.08;
          color: #1a1a1a;
        }

        /* content column */
        .prog-card-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 34px 30px 28px;
        }

        .prog-card-tag-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .prog-card-number,
        .prog-card-tag {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b47fc0;
        }

        .prog-card-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 52px;
          line-height: 1.03;
          color: #1a1a1a;
        }

        .prog-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 18px;
          line-height: 1.6;
          color: #6b6b6b;
          overflow-wrap: anywhere;
        }

        .prog-card-plashka {
          background: rgba(232, 200, 230, 0.35);
          border: 1px solid rgba(200, 160, 212, 0.4);
          border-radius: 16px;
          padding: 12px 14px;
          margin-top: 8px;
        }
        .prog-card-bonus-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9b6aad;
          margin: 0 0 4px 0;
        }
        .prog-card-bonus {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: 15px;
          line-height: 1.4;
          color: #6b4a75;
          margin: 0;
        }
        .prog-card-discount {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #8a6296;
          margin: 8px 0 0 0;
          padding-top: 8px;
          border-top: 1px solid rgba(200, 160, 212, 0.35);
        }

        .prog-after-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6b6b6b;
          margin-bottom: 6px;
        }

        .prog-benefit {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 17px;
          line-height: 1.6;
          color: #3a3a3a;
          overflow-wrap: anywhere;
        }

        .prog-btn {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 17px;
          letter-spacing: 0.21em;
          text-transform: uppercase;
          background: #E8A0C8;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 22px 52px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          align-self: flex-end;
          margin-top: auto;
        }
        .prog-btn:hover { background: #df8fbd; transform: scale(1.02); }
        .prog-btn-soon { background: rgba(232,160,200,0.45); }
        .prog-btn-soon:hover { background: rgba(232,160,200,0.7); }
        .prog-next-soon {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 17px;
          letter-spacing: 0.21em;
          text-transform: uppercase;
          background: rgba(232,160,200,0.45);
          color: #fff;
          border-radius: 999px;
          padding: 22px 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: auto;
          align-self: flex-end;
          text-align: center;
          margin-top: auto;
          line-height: 1;
          cursor: default;
          user-select: none;
        }

        /* soon banner */
        .soon-banner {
          background: rgba(200,160,212,0.2);
          padding: 5px 20px;
          display: flex;
          gap: 18px;
          overflow: hidden;
          margin: -24px -20px 0;
        }
        .soon-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #9b6aad;
          white-space: nowrap;
        }

        /* dots */
        .prog-dots {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding-left: 0;
        }
        .prog-dot-active {
          width: 28px; height: 10px;
          border-radius: 999px;
          background: #E8A0C8;
        }
        .prog-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 1.5px solid #E8A0C8;
          background: transparent;
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .prog-inner { padding: 0 16px; }
          .prog-subtitle { font-size: 21px; line-height: 1.28; }
          .prog-bg-title-wrap { margin: 4px 0 -10px 0; }
          .prog-bg-title {
            font-size: clamp(32px, 12vw, 72px);
            white-space: normal;
          }
          .prog-scroll-area {
            padding-right: 14px;
            margin-top: 16px;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
          .prog-dots {
            justify-content: center;
          }
          .prog-card {
            width: 94vw;
            flex-shrink: 0;
            scroll-snap-align: center;
            scroll-snap-stop: always;
            flex-direction: column;
            border-radius: 24px;
          }
          .prog-card-img-wrap {
            width: 100% !important;
            height: auto !important;
            min-height: 0;
            border-radius: 24px 24px 0 0;
            overflow: hidden;
          }
          .prog-card-img-wrap img {
            object-position: center bottom;
          }
          .prog-card-img-overlay {
            display: flex;
          }
          .prog-card-img-title { font-size: 30px; }
          .prog-card-tag-row { display: none; }
          .prog-card-title { display: none; }
          .prog-card-content {
            padding: 22px 18px 18px;
            gap: 12px;
          }
          .prog-card-desc {
            font-size: 17px;
            line-height: 1.55;
          }
          .prog-benefit {
            font-size: 16px;
            line-height: 1.55;
          }
          .prog-btn {
            align-self: stretch;
            width: 100%;
            text-align: center;
            font-size: 16px;
            padding: 22px 48px;
          }
          .prog-next-soon {
            align-self: stretch;
            text-align: center;
            padding: 22px 48px;
            letter-spacing: 0.16em;
          }
        }

        /* ── TABLET ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .prog-subtitle { font-size: 26px; }
          .prog-card { width: min(720px, 90vw); }
          .prog-card-img-wrap { width: 240px; }
          .prog-card-title { font-size: 48px; }
          .prog-card-desc { font-size: 17px; }
          .prog-benefit { font-size: 16px; }
          .prog-btn { font-size: 17px; padding: 22px 52px; }
        }
      `}</style>

      <section id="programs" className="prog-section reveal-up" data-animate>
        <div className="prog-inner">

          {/* Header */}
          <div className="prog-header reveal-fade" data-animate>
            <p className="prog-subtitle">
              Обери найкраще для себе: повна програма або точкове рішення
            </p>
            <div className="prog-arrows">
              <button
                type="button"
                className="prog-arrow"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Попередня програма"
              >
                ←
              </button>
              <button
                type="button"
                className="prog-arrow"
                onClick={handleNext}
                disabled={activeIndex === programs.length - 1}
                aria-label="Наступна програма"
              >
                →
              </button>
            </div>
          </div>

          {/* Full-width BG title */}
          <div className="prog-bg-title-wrap reveal-fade reveal-delay-1" data-animate>
            <svg width="100%" height="1em" viewBox="0 0 1 1" preserveAspectRatio="none"
              style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} aria-hidden />
            <span className="prog-bg-title">Вибір програми</span>
          </div>

          {/* Cards */}
          <div className="prog-scroll-area" ref={scrollRef}>
            {programs.map((program, index) => (
              <div
                key={program.number}
                className="prog-card reveal-up reveal-delay-1"
                data-animate
                ref={(el) => { cardRefs.current[index] = el; }}
              >
                {/* Photo */}
                <div className="prog-card-img-wrap">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="prog-card-img-overlay">
                    <div className="prog-card-img-overlay-inner">
                      <span className="prog-card-img-number">[{program.number}]</span>
                      <span className="prog-card-img-tag">{program.tag}</span>
                      <h3 className="prog-card-img-title">{program.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="prog-card-content">
                  {program.soon && (
                    <div className="soon-banner">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="soon-text">СКОРО</span>
                      ))}
                    </div>
                  )}

                  <div className="prog-card-tag-row" style={{ marginTop: program.soon ? 10 : 0 }}>
                    <span className="prog-card-number">[{program.number}]</span>
                    <span className="prog-card-tag">{program.tag}</span>
                  </div>

                  <h3 className="prog-card-title">{program.title}</h3>

                  <p className="prog-card-desc">{program.description}</p>

                  {program.bonus && (
                    <div className="prog-card-plashka">
                      <p className="prog-card-bonus-label">Бонус</p>
                      <p className="prog-card-bonus">{program.bonus}</p>
                    </div>
                  )}

                  <div>
                    <p className="prog-after-label">Після проходження:</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {program.benefits.map((b, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                          <span style={{ marginTop: 5, width: 4, height: 4, borderRadius: '50%', background: '#c8a0d4', flexShrink: 0, display: 'inline-block' }} />
                          <span className="prog-benefit">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {program.number === '01' && (
                    <a href="/neurofit" className={`prog-btn ${program.soon ? 'prog-btn-soon' : ''}`}>
                      {program.buttonLabel}
                    </a>
                  )}
                  {program.number === '02' && (
                    <a href="/neuro-intensive" className={`prog-btn ${program.soon ? 'prog-btn-soon' : ''}`}>
                      {program.buttonLabel}
                    </a>
                  )}
                  {program.number === '03' && (
                    <div className="prog-next-soon">Скоро</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="prog-dots">
            {programs.map((program, index) => (
              <button
                key={program.number}
                type="button"
                className={index === activeIndex ? 'prog-dot-active' : 'prog-dot'}
                onClick={() => scrollToIndex(index)}
                aria-label={`Перейти до програми ${program.title}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}