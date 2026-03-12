"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Який рівень підготовки потрібен?",
    answer:
      "Програми побудовані так, щоб зайти можна було з нуля. Головне — регулярність і уважність до тіла.",
  },
  {
    id: 2,
    question: "Скільки часу займають заняття?",
    answer:
      "Залежить від програми. Формат підібраний так, щоб його реально було вписати в життя.",
  },
  {
    id: 3,
    question: "Потрібен інвентар?",
    answer:
      "Базово — килимок. Якщо потрібні додаткові речі, ми даємо прості альтернативи або список замін.",
  },
  {
    id: 4,
    question: "Якщо у мене болить спина?",
    answer:
      "Ми працюємо м’яко і розумно. Якщо є медичні обмеження — важливо врахувати рекомендації лікаря і адаптувати навантаження.",
  },
  {
    id: 5,
    question: "Як я отримую доступ?",
    answer:
      "Після оплати доступ приходить автоматично на e-mail/у кабінет.",
  },
  {
    id: 6,
    question: "Чи можна займатися під час вагітності?",
    answer:
      "Так — у більшості випадків можна і навіть варто, бо м’який, правильно підібраний рух підтримує поставу, дихання, роботу таза й загальне самопочуття. Важливо: перед стартом узгодь заняття з лікарем, а під час тренувань обирай адаптований рівень і уникай вправ, які викликають дискомфорт або підвищують напругу в животі.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        .faq-section {
          background: #ffffff;
          padding: 68px 0 40px; /* менший нижній відступ, ближче до футера */
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.3fr);
          gap: 40px;
          align-items: flex-start;
        }

        .faq-list {
          border-radius: 18px;
        }

        .faq-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid #f0e2f3;
          cursor: pointer;
        }

        .faq-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b49acb;
          min-width: 68px;
        }

        .faq-question {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 21px; /* збільшено для десктопа й мобільного */
          color: #222222;
        }

        .faq-plus {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 24px;
          color: #e2b5ea;
          width: 36px;
          text-align: right;
          user-select: none;
        }

        .faq-answer {
          grid-column: 2 / 4;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.7;
          color: #5a5a5a;
          margin-top: 8px;
          padding-right: 40px;
        }

        .faq-title-wrap {
          position: relative;
          text-align: left;
        }

        .faq-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 22px;
          color: #4a4a4a;
          margin-bottom: 10px;
        }

        .faq-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(76px, 12vw, 156px);
          line-height: 1;
          color: #f1d7f3;
        }

        .faq-note-wrapper {
          grid-column: 1 / -1;
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .faq-note {
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
          .faq-inner {
            padding: 0 20px;
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }
          .faq-title-wrap {
            order: -1;
            text-align: center; /* центруємо заголовок і FAQ на мобільному */
          }
          .faq-bg-title {
            font-size: clamp(60px, 20vw, 96px);
          }
          .faq-note-wrapper {
            margin-top: 28px;
          }
          .faq-note {
            padding-inline: 24px;
          }
        }
      `}</style>

      <section className="faq-section reveal-up" data-animate>
        <div className="faq-inner">
          {/* List */}
          <div className="faq-list reveal-up reveal-delay-1" data-animate>
            {faqs.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="faq-item"
                  onClick={() => toggle(item.id)}
                >
                  <span className="faq-number">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-plus">{isOpen ? "−" : "+"}</span>
                  {isOpen && <p className="faq-answer">{item.answer}</p>}
                </div>
              );
            })}
          </div>

          {/* Title */}
          <div className="faq-title-wrap reveal-fade" data-animate>
            <p className="faq-label">Часті питання</p>
            <p className="faq-bg-title">FAQ</p>
          </div>

          {/* Note */}
          <div className="faq-note-wrapper reveal-up reveal-delay-2" data-animate>
            <p className="faq-note">
              Якщо протягом першого тижня з моменту оплати ви захочете повернути кошти, напишіть нам — ми
              гарантовано виконаємо повернення.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

