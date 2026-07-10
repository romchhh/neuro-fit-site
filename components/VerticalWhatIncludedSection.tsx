import Image from 'next/image';

const items = [
  '8 тижнів занять із поступовою прогресією',
  'тренування в особистому кабінеті',
  'заняття від 15 до 40 хвилин',
  'діагностика постави на старті та у фіналі',
  'функціональні тести і фото «до/після»',
  'блок із розбором техніки виконання вправ',
  'бонус «Фітнес-аптечка» з доступом назавжди',
  'блок харчування з нутриціологом',
  'чек-лист «Здорові звички для постави»',
  'бонусний урок «Легка хода»',
  'рекомендації після програми',
  'сертифікат після завершення',
];

export default function VerticalWhatIncludedSection() {
  return (
    <>
      <style>{`
        .vt-what-section { background: #fff; padding: 72px 0 88px; }
        .vt-what-inner { max-width: 1120px; margin: 0 auto; padding: 0 32px; }
        .vt-what-card {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 40px;
          border-radius: 32px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 24px 70px rgba(0,0,0,0.08);
          border: 1px solid #e2e2e2;
        }
        .vt-what-image { position: relative; width: 48%; min-height: 520px; }
        .vt-what-content { width: 52%; padding: 36px 40px; display: flex; flex-direction: column; justify-content: center; }
        .vt-what-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(36px, 4vw, 60px);
          line-height: 1;
          color: #3b2845;
          margin-bottom: 20px;
        }
        .vt-what-list { list-style: disc; padding-left: 22px; margin: 0; }
        .vt-what-list li {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.55;
          color: #3b2845;
          margin-bottom: 6px;
        }
        @media (max-width: 900px) {
          .vt-what-card { flex-direction: column; }
          .vt-what-image, .vt-what-content { width: 100%; }
          .vt-what-image { min-height: 320px; }
        }
      `}</style>

      <section className="vt-what-section reveal-up" data-animate>
        <div className="vt-what-inner">
          <div className="vt-what-card reveal-scale" data-animate>
            <div className="vt-what-image">
              <Image
                src="/vertical/what-included.jpg"
                alt="Вертикаль — що входить до програми"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="vt-what-content">
              <h2 className="vt-what-title">Що входить?</h2>
              <ul className="vt-what-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
