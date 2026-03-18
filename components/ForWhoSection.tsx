'use client';

import { usePathname } from 'next/navigation';

export default function ForWhoSection() {
  const pathname = usePathname();
  const isIntensivePage = pathname?.startsWith('/neuro-intensive');

  const oldPrice = isIntensivePage ? 790 : 2090;
  const newPrice = isIntensivePage ? 380 : 1490;
  const paymentUrl = isIntensivePage
    ? 'https://secure.wayforpay.com/payment/se1a2f595462e'
    : 'https://neurofit.kwiga.com/o/vm4QaXJ1cOFg';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,700&display=swap');

        .forwho-section {
          background: #ffffff;
          padding: 80px 24px 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .forwho-inner {
          max-width: 960px;
          width: 100%;
        }

        .forwho-title-bg {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(2.4rem, 5.4vw, 4.2rem); /* ~30% менше на десктопі */
          line-height: 1;
          color: #D7ABD6;
          margin: 0 0 20px;
        }

        .forwho-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(1.1rem, 2.1vw, 1.8rem); /* теж ~30% менше */
          line-height: 1.3;
          letter-spacing: 0;
          color: #2a2a2a;
          margin: 0 0 32px;
        }

        .forwho-price {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(1rem, 1.8vw, 1.4rem);
          color: #2a2a2a;
        }

        .forwho-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(1.1rem, 2.3vw, 2.1rem); /* ~30% менше */
          line-height: 1;
          letter-spacing: 0.08em;
          padding: 18px 60px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg, #FCE0FF 0%, #FFBEFE 100%);
          color: #805D7F;
          box-shadow: 0 12px 32px rgba(208, 132, 208, 0.4);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }

        .forwho-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 22px 55px rgba(208, 132, 208, 0.55);
          background: linear-gradient(90deg, #ffdfff 0%, #ffb0fb 100%);
        }

        @media (max-width: 640px) {
          .forwho-section {
            padding: 64px 20px 80px;
          }

          .forwho-btn {
            width: 100%;
            max-width: 360px;
            padding-inline: 32px;
          }
        }
      `}</style>

      <section className="forwho-section reveal-up" data-animate>
        <div className="forwho-inner">
          <h2 className="forwho-title-bg">Для кого?</h2>

          <p className="forwho-desc">
            Для тих, хто хоче системний результат, що відчутно покращує якість життя: тіло легше й зібраніше, рух точніший,
            голова ясніша.
          </p>

          <p className="forwho-price" style={{ marginBottom: 24 }}>
            <span style={{ textDecoration: 'line-through', opacity: 0.7, marginRight: 8 }}>{oldPrice}</span>
            <strong>{newPrice} грн</strong>
          </p>

          <button
            className="forwho-btn"
            onClick={() => {
              window.location.href = paymentUrl;
            }}
          >
            ДОЄДНАТИСЯ
          </button>
        </div>
      </section>
    </>
  );
}
