export default function VerticalFormatSection() {
  const items = [
    {
      title: 'Онлайн-платформа',
      text: 'Заняття відкриваються в особистому кабінеті. Можна проходити програму з будь-якої точки світу у зручний час.',
    },
    {
      title: '8 тижнів із прогресією',
      text: 'Новий тиждень відкривається щопонеділка. Тренування тривають від 15 до 40 хвилин.',
    },
    {
      title: 'Діагностика постави',
      text: 'На старті та у фіналі програми ти проходиш чекап: анкета, фото, функціональні тести та рекомендації.',
    },
    {
      title: 'Супровід Юлії у повному тарифі',
      text: 'Повний аналіз чекапу. Можна надсилати відео виконання вправ і отримувати персональний розбір техніки.',
    },
  ];

  return (
    <>
      <style>{`
        .vt-format-section { background: white; padding: 60px 0 70px; overflow: hidden; }
        .vt-format-inner { max-width: 1120px; margin: 0 auto; padding: 0 32px; }
        .vt-format-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(46px, 10vw, 158px);
          line-height: 1;
          text-align: center;
          display: block;
          margin-bottom: -22px;
          background: linear-gradient(90deg, rgba(230,218,240,0.46) 0%, rgba(233,187,232,0.46) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .vt-format-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .vt-format-card {
          background: #fff;
          border-radius: 36px;
          padding: 40px 36px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
          border: 1px solid #e2e2e2;
        }
        .vt-format-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: #4a2f49;
          margin-bottom: 12px;
        }
        .vt-format-card p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 1rem;
          line-height: 1.7;
          color: #3a3040;
        }
        @media (max-width: 900px) {
          .vt-format-grid { grid-template-columns: 1fr; }
          .vt-format-inner { padding: 0 20px; }
        }
      `}</style>

      <section className="vt-format-section reveal-up" data-animate>
        <div className="vt-format-inner">
          <span className="vt-format-bg-title">Формат</span>
          <div className="vt-format-grid reveal-up reveal-delay-1" data-animate>
            {items.map((item) => (
              <article key={item.title} className="vt-format-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
