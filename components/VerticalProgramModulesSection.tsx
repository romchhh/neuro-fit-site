export default function VerticalProgramModulesSection() {
  const modules = [
    { number: '01', title: 'Повернення опори', text: 'Стопи, дихання, базове відчуття тіла і положення таза.' },
    { number: '02', title: 'Глибокий кор і спина', text: 'Активація мʼязів живота, нейтральне положення хребта, підтримка попереку.' },
    { number: '03', title: 'Плечі, шия і грудний відділ', text: 'Робота зі скутістю, положенням голови, лопатками і верхом спини.' },
    { number: '04', title: 'Інтеграція в життя', text: 'Хода, побутові звички, мікропаузи, рух без хаосу і підтримка результату.' },
  ];

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
          font-size: 2.5rem;
          color: rgba(231, 204, 244, 0.85);
          line-height: 1;
          margin-bottom: 10px;
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
          font-size: 0.92rem;
          line-height: 1.6;
          color: #3b2845;
        }
        @media (max-width: 900px) {
          .vt-mod-grid { grid-template-columns: 1fr 1fr; }
          .vt-mod-inner { padding: 0 20px; }
        }
        @media (max-width: 540px) {
          .vt-mod-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="modules" className="vt-mod-section reveal-up scroll-mt-24" data-animate>
        <div className="vt-mod-inner">
          <h2 className="vt-mod-title">Модулі</h2>
          <div className="vt-mod-grid reveal-up reveal-delay-1" data-animate>
            {modules.map((m) => (
              <article key={m.number} className="vt-mod-card">
                <div className="vt-mod-num">[{m.number}]</div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
