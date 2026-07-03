export default function VerticalInventorySection() {
  const items = [
    'килимок',
    'мʼяч для пілатесу',
    'еластичну стрічку',
    'маленький мʼякий мʼяч для МФР',
    'голчастий і плаский мʼяч',
    '2 тенісні мʼячі',
    'блок',
    'рол',
  ];

  return (
    <>
      <style>{`
        .vt-inv-section { background: #fff; padding: 64px 24px 72px; }
        .vt-inv-inner { max-width: 820px; margin: 0 auto; text-align: center; }
        .vt-inv-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #4a2f49;
          margin-bottom: 16px;
        }
        .vt-inv-lead {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 24px;
        }
        .vt-inv-list {
          text-align: left;
          list-style: disc;
          padding-left: 1.25rem;
          margin: 0 auto 24px;
          max-width: 420px;
        }
        .vt-inv-list li {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          line-height: 1.55;
          color: #3b2845;
          margin-bottom: 6px;
        }
        .vt-inv-note {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-style: italic;
          font-size: 0.95rem;
          color: #5a3d59;
          padding: 16px 20px;
          border-radius: 16px;
          background: rgba(252, 224, 255, 0.45);
          border: 1px solid #e8c4e6;
        }
      `}</style>

      <section className="vt-inv-section reveal-up" data-animate>
        <div className="vt-inv-inner">
          <h2 className="vt-inv-title">Що знадобиться для занять?</h2>
          <p className="vt-inv-lead">
            Усі тренування проходять вдома й не потребують складного інвентарю. Частину обладнання
            можна замінити домашніми аналогами — Юлія пояснює це в окремому відео.
          </p>
          <p className="vt-inv-lead" style={{ fontWeight: 600, marginBottom: 12 }}>
            Бажано мати:
          </p>
          <ul className="vt-inv-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="vt-inv-note">
            Для учасників програми діє знижка −15% на інвентар у Boomerang.Fit.Store.
          </p>
        </div>
      </section>
    </>
  );
}
