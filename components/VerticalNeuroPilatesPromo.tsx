import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    href: '/neurofit',
    badge: 'Must-have',
    title: 'Дізнатися більше про курс «Neuro-Pilates»',
    sub: 'Основна програма · пілатес і нейрофітнес',
    tone: 'pink',
  },
  {
    href: '/neuro-intensive',
    badge: 'Міні',
    title: 'Дізнатися більше про «Neuro-інтенсив»',
    sub: 'Міні-програма · швидкий старт',
    tone: 'lilac',
  },
];

export default function VerticalNeuroPilatesPromo() {
  return (
    <>
      <style>{`
        .vt-promo-section {
          background: #fff;
          padding: 48px 24px 64px;
        }
        .vt-promo-inner {
          max-width: 920px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .vt-promo-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          padding: 36px 24px 32px;
          border-radius: 32px;
          border: 1px solid #e8c4e6;
          box-shadow: 0 18px 48px rgba(153, 67, 152, 0.12);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          min-height: 100%;
        }
        .vt-promo-card--pink {
          background: linear-gradient(160deg, #fff6ff 0%, #fce8fb 55%, #f8f0ff 100%);
        }
        .vt-promo-card--lilac {
          background: linear-gradient(160deg, #f5f0ff 0%, #ebe4ff 55%, #f8f4ff 100%);
          border-color: #d4c4f0;
        }
        .vt-promo-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 56px rgba(153, 67, 152, 0.18);
        }
        .vt-promo-card::after {
          content: '';
          position: absolute;
          right: -40px;
          bottom: -50px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          pointer-events: none;
        }
        .vt-promo-card--pink::after {
          background: rgba(215, 171, 214, 0.28);
        }
        .vt-promo-card--lilac::after {
          background: rgba(180, 160, 220, 0.28);
        }
        .vt-promo-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.58rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 8px 20px rgba(128, 93, 127, 0.25);
          z-index: 1;
          text-align: center;
          line-height: 1.15;
          padding: 4px;
        }
        .vt-promo-card--pink .vt-promo-badge {
          background: linear-gradient(135deg, #ffb0fb 0%, #d7abd6 100%);
        }
        .vt-promo-card--lilac .vt-promo-badge {
          background: linear-gradient(135deg, #c4b0ff 0%, #9b84d6 100%);
        }
        .vt-promo-logo {
          margin-bottom: 18px;
          border-radius: 50%;
          background: #fff;
          padding: 6px;
          box-shadow: 0 8px 22px rgba(128, 93, 127, 0.15);
        }
        .vt-promo-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.45;
          color: #3b2845;
          margin: 0 0 10px;
          max-width: 16em;
          position: relative;
          z-index: 1;
          flex: 1;
        }
        .vt-promo-sub {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 0.88rem;
          color: #805D7F;
          margin: 0 0 24px;
          position: relative;
          z-index: 1;
        }
        .vt-promo-arrow {
          position: relative;
          z-index: 1;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid #5a3d59;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5a3d59;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .vt-promo-card:hover .vt-promo-arrow {
          background: #5a3d59;
          color: #fff;
        }
        @media (max-width: 700px) {
          .vt-promo-inner {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
        }
      `}</style>

      <section className="vt-promo-section reveal-up" data-animate>
        <div className="vt-promo-inner">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`vt-promo-card vt-promo-card--${card.tone}`}
            >
              <span className="vt-promo-badge">{card.badge}</span>
              <div className="vt-promo-logo">
                <Image
                  src="/brand/logo.png"
                  alt="NeuroFit"
                  width={52}
                  height={52}
                  className="rounded-full object-contain"
                />
              </div>
              <p className="vt-promo-text">{card.title}</p>
              <p className="vt-promo-sub">{card.sub}</p>
              <span className="vt-promo-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h12M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
