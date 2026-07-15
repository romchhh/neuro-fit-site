'use client';

import { useState } from 'react';

const weeks = [
  {
    number: '01',
    week: '1 тиждень',
    title: 'Свідомий рух',
    text: 'Дихання, розслаблення перенапружених зон, активація глибокої стабілізації та відновлення контакту із тілом.',
  },
  {
    number: '02',
    week: '2 тиждень',
    title: 'Контроль',
    text: 'Формуємо нейтральне положення тіла, покращуємо контроль руху та стабільність хребта.',
  },
  {
    number: '03',
    week: '3 тиждень',
    title: 'Мобільність',
    text: 'Відновлюємо рухливість суглобів і грудного відділу, прибираємо обмеження, що впливають на поставу.',
  },
  {
    number: '04',
    week: '4 тиждень',
    title: 'Стабільність',
    text: 'Розвиваємо силу глибоких мʼязів і вчимо тіло утримувати правильне положення без зайвої напруги.',
  },
  {
    number: '05',
    week: '5 тиждень',
    title: 'Інтеграція',
    text: 'Поєднуємо правильне дихання, стабільність і рух у єдині природні рухові патерни.',
  },
  {
    number: '06',
    week: '6 тиждень',
    title: 'Функціональний рух',
    text: 'Переносимо нові навички в повсякденні рухи, покращуємо координацію та витривалість.',
  },
  {
    number: '07',
    week: '7 тиждень',
    title: 'Сила руху',
    text: 'Додаємо більш складні функціональні вправи, зберігаючи легкість, контроль і якість виконання.',
  },
  {
    number: '08',
    week: '8 тиждень',
    title: 'Вертикаль',
    text: 'Закріплюємо здорові рухові патерни, щоб правильна постава стала природною частиною вашого життя.',
  },
];

export default function VerticalProgramModulesSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        .vt-mod-section {
          background: linear-gradient(
            180deg,
            rgba(252, 224, 255, 0.55) 0%,
            rgba(255, 240, 250, 0.72) 45%,
            rgba(252, 224, 255, 0.4) 100%
          );
          padding: 64px 0 80px;
        }
        .vt-mod-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .vt-mod-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(56px, 10vw, 104px);
          line-height: 0.95;
          color: #d7abd6;
          margin-bottom: 32px;
        }
        .vt-mod-list {
          border-radius: 18px;
        }
        .vt-mod-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px 20px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(224, 180, 220, 0.55);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .vt-mod-item:first-child {
          border-top: 1px solid rgba(224, 180, 220, 0.55);
        }
        .vt-mod-week {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9b6aad;
          min-width: 130px;
        }
        .vt-mod-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: clamp(1.35rem, 3vw, 1.85rem);
          color: #2d1636;
          text-align: left;
        }
        .vt-mod-plus {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 32px;
          color: #d7abd6;
          width: 40px;
          text-align: right;
          user-select: none;
          line-height: 1;
          transition: transform 0.2s ease;
        }
        .vt-mod-item.is-open .vt-mod-plus {
          transform: rotate(45deg);
        }
        .vt-mod-answer {
          grid-column: 2 / 4;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          line-height: 1.7;
          color: #4a3044;
          margin: 0;
          padding-right: 40px;
          text-align: left;
        }
        .vt-mod-quote {
          margin: 40px auto 0;
          max-width: 760px;
          position: relative;
          padding: 28px 28px 28px 36px;
          border: none;
          background: transparent;
        }
        .vt-mod-quote::before {
          content: '“';
          position: absolute;
          left: 0;
          top: -8px;
          font-family: 'Montserrat', Georgia, serif;
          font-weight: 600;
          font-size: clamp(3.5rem, 8vw, 5rem);
          line-height: 1;
          color: #D7ABD6;
          opacity: 0.85;
          pointer-events: none;
        }
        .vt-mod-quote p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(1.15rem, 2.4vw, 1.5rem);
          line-height: 1.55;
          color: #4a2f49;
          margin: 0;
          text-align: left;
          padding-left: 28px;
          border-left: 3px solid #D7ABD6;
        }
        .vt-mod-quote strong {
          font-weight: 700;
          font-style: italic;
          color: #4a2f49;
        }
        @media (max-width: 640px) {
          .vt-mod-section { padding: 52px 0 68px; }
          .vt-mod-inner { padding: 0 20px; }
          .vt-mod-title { margin-bottom: 24px; }
          .vt-mod-item {
            grid-template-columns: 1fr auto;
            gap: 10px 12px;
            padding: 18px 0;
          }
          .vt-mod-week {
            grid-column: 1 / 2;
            min-width: 0;
            font-size: 0.78rem;
            letter-spacing: 0.12em;
          }
          .vt-mod-plus {
            grid-column: 2;
            grid-row: 1 / 3;
            align-self: center;
            font-size: 28px;
          }
          .vt-mod-name {
            grid-column: 1 / 2;
            font-size: clamp(1.25rem, 5.5vw, 1.55rem);
          }
          .vt-mod-answer {
            grid-column: 1 / -1;
            padding-right: 0;
            font-size: 1rem;
          }
          .vt-mod-quote { padding: 20px 8px 12px 12px; }
          .vt-mod-quote p { padding-left: 18px; }
        }
      `}</style>

      <section id="modules" className="vt-mod-section reveal-up scroll-mt-24" data-animate>
        <div className="vt-mod-inner">
          <h2 className="vt-mod-title">Програма</h2>

          <div className="vt-mod-list reveal-up reveal-delay-1" data-animate>
            {weeks.map((m) => {
              const isOpen = openId === m.number;
              return (
                <div
                  key={m.number}
                  className={`vt-mod-item${isOpen ? ' is-open' : ''}`}
                  onClick={() => toggle(m.number)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(m.number);
                    }
                  }}
                >
                  <span className="vt-mod-week">{m.week}</span>
                  <span className="vt-mod-name">{m.title}</span>
                  <span className="vt-mod-plus" aria-hidden="true">
                    +
                  </span>
                  {isOpen && <p className="vt-mod-answer">{m.text}</p>}
                </div>
              );
            })}
          </div>

          <blockquote className="vt-mod-quote reveal-up reveal-delay-2" data-animate>
            <p>
              Символічно, останній тиждень називається «<strong>Вертикаль</strong>», бо за ці 8
              тижнів ви не просто зміцнюєте мʼязи, а{' '}
              <strong>відновлюєте своє природне, збалансоване положення тіла!</strong>
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
