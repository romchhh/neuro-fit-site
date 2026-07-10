'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Який інвентар потрібен для тренувань?',
    answer:
      'Бажано мати килимок, мʼяч для пілатесу, еластичну стрічку, мʼячі для МФР, блок і рол. Частину інвентарю можна замінити домашніми аналогами.',
  },
  {
    id: 2,
    question: 'Чи можна займатись при грижах або протрузіях?',
    answer:
      'Можна, якщо стан не гострий і спеціаліст не забороняв фізичну активність. При сумнівах краще погодити навантаження індивідуально.',
  },
  {
    id: 3,
    question: 'Чим відрізняються тарифи?',
    answer:
      'У самостійному форматі ти проходиш програму самостійно. У тарифі з супроводом — повний функціональний аналіз, адаптація вправ за потребою, можна надсилати відео вправ і отримувати персональний розбір техніки від Юлії.',
  },
  {
    id: 4,
    question: 'Чи можна проходити програму після пологів або під час вагітності?',
    answer:
      'У таких випадках краще погодити участь індивідуально, бо важливо врахувати стан тіла, термін відновлення та дозвіл на фізичну активність.',
  },
  {
    id: 5,
    question: 'Чи замінює програма лікування?',
    answer:
      'Ні. Програма не є медичним лікуванням і не замінює консультацію лікаря при гострих станах.',
  },
];

export default function FaqSectionVertical() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        .vt-faq-section {
          background: #ffffff;
          padding: 68px 0 40px;
        }

        .vt-faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.3fr);
          gap: 40px;
          align-items: flex-start;
        }

        .vt-faq-list {
          border-radius: 18px;
        }

        .vt-faq-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid #f0e2f3;
          cursor: pointer;
        }

        .vt-faq-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b49acb;
          min-width: 68px;
        }

        .vt-faq-question {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 21px;
          color: #222222;
        }

        .vt-faq-plus {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 24px;
          color: #e2b5ea;
          width: 36px;
          text-align: right;
          user-select: none;
        }

        .vt-faq-answer {
          grid-column: 2 / 4;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.8;
          color: #4a4a4a;
          margin-top: 10px;
          padding-right: 40px;
          white-space: pre-line;
        }

        .vt-faq-title-wrap {
          position: relative;
          text-align: left;
        }

        .vt-faq-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 24px;
          color: #3a3040;
          margin-bottom: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .vt-faq-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(90px, 13vw, 180px);
          line-height: 1;
          color: #f1d7f3;
        }

        .vt-faq-note-wrapper {
          grid-column: 1 / -1;
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .vt-faq-note {
          max-width: 880px;
          padding: 18px 40px;
          border-radius: 999px;
          border: 1px solid #f0d4f0;
          background: #ffffff;
          box-shadow: 0 18px 45px rgba(180, 122, 188, 0.12);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.7;
          text-align: center;
          color: #4a4a4a;
        }

        @media (max-width: 640px) {
          .vt-faq-inner {
            padding: 0 20px;
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }
          .vt-faq-title-wrap {
            order: -1;
            text-align: center;
          }
          .vt-faq-bg-title {
            font-size: clamp(54px, 18vw, 110px);
          }
          .vt-faq-label {
            font-size: 20px;
          }
          .vt-faq-question {
            font-size: 17px;
          }
          .vt-faq-answer {
            font-size: 15px;
            padding-right: 0;
          }
          .vt-faq-note-wrapper {
            margin-top: 28px;
          }
          .vt-faq-note {
            padding-inline: 24px;
          }
        }
      `}</style>

      <section className="vt-faq-section reveal-up" data-animate>
        <div className="vt-faq-inner">
          <div className="vt-faq-list reveal-up reveal-delay-1" data-animate>
            {faqs.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="vt-faq-item"
                  onClick={() => toggle(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(item.id);
                    }
                  }}
                >
                  <span className="vt-faq-number">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <span className="vt-faq-question">{item.question}</span>
                  <span className="vt-faq-plus">{isOpen ? '−' : '+'}</span>
                  {isOpen ? <p className="vt-faq-answer">{item.answer}</p> : null}
                </div>
              );
            })}
          </div>

          <div className="vt-faq-title-wrap reveal-fade" data-animate>
            <p className="vt-faq-label">Часті питання</p>
            <p className="vt-faq-bg-title">FAQ</p>
          </div>

          <div className="vt-faq-note-wrapper reveal-up reveal-delay-2" data-animate>
            <p className="vt-faq-note">
              Якщо протягом першого тижня з моменту оплати ви захочете повернути кошти, напишіть нам.
              <br />
              <strong>Ми гарантовано виконаємо повернення.</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
