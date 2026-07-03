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

  return (
    <>
      <style>{`
        .vt-faq-section { background: #fff; padding: 60px 0 48px; }
        .vt-faq-inner { max-width: 880px; margin: 0 auto; padding: 0 24px; }
        .vt-faq-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #f1d7f3;
          text-align: center;
          margin-bottom: 28px;
        }
        .vt-faq-item { border-bottom: 1px solid #ececec; }
        .vt-faq-q {
          width: 100%;
          text-align: left;
          padding: 18px 0;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #3b2845;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .vt-faq-a {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #444;
          padding: 0 0 18px;
        }
      `}</style>

      <section className="vt-faq-section reveal-up" data-animate>
        <div className="vt-faq-inner">
          <p className="vt-faq-label">FAQ</p>
          {faqs.map((item) => (
            <div key={item.id} className="vt-faq-item">
              <button
                type="button"
                className="vt-faq-q"
                onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                aria-expanded={openId === item.id}
              >
                <span>[{String(item.id).padStart(2, '0')}] {item.question}</span>
                <span>{openId === item.id ? '−' : '+'}</span>
              </button>
              {openId === item.id ? <p className="vt-faq-a">{item.answer}</p> : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
