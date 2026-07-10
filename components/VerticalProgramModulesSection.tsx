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
          background: #fff;
          padding: 48px 0 64px;
        }
        .vt-mod-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .vt-mod-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(40px, 7vw, 80px);
          line-height: 1;
          color: #f1d7f3;
          margin-bottom: 28px;
        }
        .vt-mod-list {
          border-radius: 18px;
        }
        .vt-mod-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px 16px;
          padding: 16px 0;
          border-bottom: 1px solid #f0e2f3;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .vt-mod-item:first-child {
          border-top: 1px solid #f0e2f3;
        }
        .vt-mod-week {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b49acb;
          min-width: 110px;
        }
        .vt-mod-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1.05rem, 2.2vw, 1.35rem);
          color: #222;
          text-align: left;
        }
        .vt-mod-plus {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 24px;
          color: #e2b5ea;
          width: 36px;
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
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
          padding-right: 40px;
          text-align: left;
        }
        .vt-mod-quote {
          margin: 36px auto 0;
          max-width: 720px;
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
          font-size: clamp(1.05rem, 2vw, 1.35rem);
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
          .vt-mod-inner { padding: 0 20px; }
          .vt-mod-item {
            grid-template-columns: 1fr auto;
            gap: 8px 12px;
            padding: 14px 0;
          }
          .vt-mod-week {
            grid-column: 1 / 2;
            min-width: 0;
            font-size: 11px;
            letter-spacing: 0.14em;
          }
          .vt-mod-plus {
            grid-column: 2;
            grid-row: 1 / 3;
            align-self: center;
          }
          .vt-mod-name {
            grid-column: 1 / 2;
            font-size: 1.05rem;
          }
          .vt-mod-answer {
            grid-column: 1 / -1;
            padding-right: 0;
            font-size: 14px;
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
