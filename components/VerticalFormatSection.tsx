const items = [
  {
    title: 'Діагностика постави',
    text: 'На старті та у фіналі програми повний чекап: анкета, фото, функціональні тести та рекомендації.',
  },
  {
    title: '8 тижнів із поступовою прогресією',
    text: 'Новий тиждень занять відкривається щопонеділка. Тренування тривають від 15 до 40 хвилин.',
  },
  {
    title: 'Супровід Юлії',
    text: 'Повний аналіз чекапу. Корекція техніки виконання вправ, адаптація і рекомендації. Постійний зворотній звʼязок під час проходження програми.',
  },
  {
    title: 'Онлайн-платформа',
    text: 'Заняття відкриваються в особистому кабінеті. Можна проходити програму з будь-якої точки світу у зручний час.',
  },
  {
    title: 'Блок із нутріціологом',
    text: 'Відео-матеріали, гайди і дієві рекомендації для покращення стану як зовні, так і зсередини.',
  },
  {
    title: 'Додаткові матеріали',
    text: 'Блок із розбором техніки виконання і рекомендаціями. Бонусні уроки, чек-листи і практичні лайфхаки.',
  },
  {
    title: 'Фітнес-аптечка',
    text: 'Окрема група в телеграмі із вправами та масажними техніками, до яких можна швидко звернутись за необхідності. Доступ назавжди.',
  },
];

export default function VerticalFormatSection() {
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
          gap: 20px;
        }
        .vt-format-card {
          background: #fff;
          border-radius: 28px;
          padding: 28px 26px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
          border: 1px solid #e2e2e2;
        }
        .vt-format-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: #4a2f49;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .vt-format-check {
          flex-shrink: 0;
          color: #994399;
          font-size: 1rem;
          line-height: 1.4;
        }
        .vt-format-card p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 0.98rem;
          line-height: 1.65;
          color: #3a3040;
        }
        @media (max-width: 900px) {
          .vt-format-section { padding: 48px 0 60px; }
          .vt-format-grid { grid-template-columns: 1fr; }
          .vt-format-inner { padding: 0 20px; }
          .vt-format-bg-title {
            margin-bottom: 4px;
            margin-top: -8px;
          }
        }
      `}</style>

      <section className="vt-format-section reveal-up" data-animate>
        <div className="vt-format-inner">
          <span className="vt-format-bg-title">Формат</span>
          <div className="vt-format-grid reveal-up reveal-delay-1" data-animate>
            {items.map((item) => (
              <article key={item.title} className="vt-format-card">
                <h3>
                  <span className="vt-format-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item.title}</span>
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
