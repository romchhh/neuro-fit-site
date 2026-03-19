"use client";

import { useState } from "react";

const faqsNeurofit = [
  {
    id: 1,
    question: "Який інвентар потрібен для тренувань?",
    answer: (
      <>
        1. М'яч для пілатесу
        <br />
        2. М'яч масажний твердий — з пухирцями чи без
        <br />
        3. Еластична стрічка для фітнесу. Ширина 10–15 см, довжина 150–200 см
        <br />
        4. Блоки для йоги
        <br />
        Заміна: книги
        <br />
        <br />
        Будь-який інвентар можна придбати в магазині "Boomerang.Fit.Shop". Для
        учасників проєктів Юлії діє знижка 15% на все.
      </>
    ),
  },
  {
    id: 2,
    question: "Що робити, якщо не надійшло повідомлення на пошту з доступом?",
    answer:
      "Подивіться папку спам. Якщо там не знайшли листа, напишіть на пошту pilates.yuliia@gmail.com і ми продублюємо повідомлення. Також ви можете зайти самостійно до особистого кабінету та відновити пароль.",
  },
  {
    id: 3,
    question:
      "Якщо я не зможу закінчити курс по особистим причинам, чи є заморозка?",
    answer:
      "Так, на один календарний місяць є одна заморозка. Заднім числом заморожування абонементу не можливе. Напишіть на пошту pilates.yuliia@gmail.com і ми вирішимо питання.",
  },
  {
    id: 4,
    question: "При наявних проблемах зі здоров'ям можна займатися?",
    answer: (
      <>
        Особливості вашого організму враховуються лише на персональному тренуванні.
        <br />
        Під час зайнять онлайн враховуйте обмеження свого організму самостійно,
        попередньо проконсультувавшись із лікарем або тренером.
        <br />
        <br />
        <strong>Грижі</strong> не є протипоказанням до тренувань, якщо ви не перебуваєте
        в гострому запальному періоді та проходите медикаментозне лікування.
        <br />
        <br />
        <strong>При діастазі 1–2 ступеня</strong> вам необхідно тренуватися за моїми
        програмами. Приділіть увагу тренуванням з пілатесу.
        <br />
        <br />
        <strong>При варикозі</strong> займатися можна, але уникайте тривалого
        навантаження на одну з ніг і діліть кількість повторень, змінюючи ноги
        протягом одного підходу.
        <br />
        <br />
        <strong>Остеопороз</strong> — залежить від ступеня захворювання та наявності
        фізичної активності до виявлення хвороби. Якщо ви ведете активний спосіб
        життя і маєте описані вище проблеми, то вам можна займатися на моїх програмах.
        <br />
        <br />
        <strong>Вагітність. Післяпологове відновлення.</strong> Наразі працюю з
        вагітними дівчатами та жінками в індивідуальному форматі. Ви можете
        приєднатися до моїх програм, якщо минуло 6 тижнів після природних пологів,
        після кесарева до 9 тижнів і також немає протипоказань від лікаря.
        <br />
        <br />
        <strong>Якщо ви займалися і завагітніли</strong> — я вас вітаю! Ми можемо
        продовжити тренування в індивідуальному форматі.
        <br />
        <br />
        <strong>
          Якщо ви ведете малорухливий спосіб життя, то приділіть більше часу тренуванням
          з пілатесу, функціональним тренуванням та дихальним практикам.
        </strong>
      </>
    ),
  },
];

export default function FaqSectionNeurofit() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        .faq-section-program {
          background: #ffffff;
          padding: 60px 0 48px;
        }

        .faq-inner-program {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.3fr);
          gap: 40px;
          align-items: flex-start;
        }

        .faq-list-program {
          border-radius: 18px;
        }

        .faq-item-program {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid #f0e2f3;
          cursor: pointer;
        }

        .faq-number-program {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b49acb;
          min-width: 68px;
        }

        .faq-question-program {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 21px;
          color: #222222;
        }

        .faq-plus-program {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 24px;
          color: #e2b5ea;
          width: 36px;
          text-align: right;
          user-select: none;
        }

        .faq-answer-program {
          grid-column: 2 / 4;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.8;
          color: #4a4a4a;
          margin-top: 10px;
          padding-right: 40px;
        }

        .faq-title-wrap-program {
          position: relative;
          text-align: left;
        }

        .faq-label-program {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 24px;
          color: #3a3040;
          margin-bottom: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .faq-bg-title-program {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(90px, 13vw, 180px);
          line-height: 1;
          color: #f1d7f3;
        }

        @media (max-width: 640px) {
          .faq-inner-program {
            padding: 0 20px;
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }
          .faq-title-wrap-program {
            order: -1;
            text-align: center;
          }
          .faq-bg-title-program {
            font-size: clamp(54px, 18vw, 110px);
          }
          .faq-label-program {
            font-size: 20px;
          }
          .faq-answer-program {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="faq-section-program reveal-up" data-animate>
        <div className="faq-inner-program">
          <div className="faq-list-program reveal-up reveal-delay-1" data-animate>
            {faqsNeurofit.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="faq-item-program"
                  onClick={() => toggle(item.id)}
                >
                  <span className="faq-number-program">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className="faq-question-program">{item.question}</span>
                  <span className="faq-plus-program">
                    {isOpen ? "−" : "+"}
                  </span>
                  {isOpen && (
                    <p className="faq-answer-program">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-title-wrap-program reveal-fade" data-animate>
            <p className="faq-label-program">Часті питання про NeuroFit</p>
            <p className="faq-bg-title-program">FAQ</p>
          </div>
        </div>
      </section>
    </>
  );
}

