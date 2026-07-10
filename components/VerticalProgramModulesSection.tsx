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
  return (
    <>
      <style>{`
        .vt-mod-section { background: white; padding: 48px 0 64px; }
        .vt-mod-inner { max-width: 1120px; margin: 0 auto; padding: 0 32px; }
        .vt-mod-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(40px, 7vw, 80px);
          line-height: 1;
          color: #f1d7f3;
          margin-bottom: 28px;
        }
        .vt-mod-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .vt-mod-card {
          background: #fff6ff;
          border-radius: 28px;
          padding: 24px 22px;
          border: 1px solid #f3c4e3;
          box-shadow: 0 14px 36px rgba(153, 67, 152, 0.1);
        }
        .vt-mod-num {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 2.2rem;
          color: rgba(231, 204, 244, 0.85);
          line-height: 1;
          margin-bottom: 8px;
        }
        .vt-mod-week {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #994399;
          margin-bottom: 6px;
        }
        .vt-mod-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: #4b2759;
          margin-bottom: 8px;
        }
        .vt-mod-card p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 1.55;
          color: #3b2845;
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
        @media (max-width: 900px) {
          .vt-mod-grid { grid-template-columns: 1fr 1fr; }
          .vt-mod-inner { padding: 0 20px; }
        }
        @media (max-width: 540px) {
          .vt-mod-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .vt-mod-card { border-radius: 20px; padding: 16px 14px; }
          .vt-mod-num { font-size: 1.6rem; }
          .vt-mod-card h3 { font-size: 0.95rem; }
          .vt-mod-card p { font-size: 0.8rem; line-height: 1.45; }
          .vt-mod-quote { padding: 20px 8px 12px 12px; }
          .vt-mod-quote p { padding-left: 18px; }
        }
      `}</style>

      <section id="modules" className="vt-mod-section reveal-up scroll-mt-24" data-animate>
        <div className="vt-mod-inner">
          <h2 className="vt-mod-title">Програма</h2>
          <div className="vt-mod-grid reveal-up reveal-delay-1" data-animate>
            {weeks.map((m) => (
              <article key={m.number} className="vt-mod-card">
                <div className="vt-mod-num">[{m.number}]</div>
                <p className="vt-mod-week">{m.week}</p>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>

          <blockquote className="vt-mod-quote reveal-up reveal-delay-2" data-animate>
            <p>
              Символічно, останній тиждень називається «Вертикаль», бо за ці 8 тижнів ви не просто
              зміцнюєте мʼязи, а відновлюєте своє природне, збалансоване положення тіла!
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
