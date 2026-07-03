'use client';

import PaywallLeadButton from '@/components/PaywallLeadButton';

const PAYMENT_SELF =
  process.env.NEXT_PUBLIC_VERTICAL_SELF_PAYMENT_URL ?? 'https://neurofit.kwiga.com/o/vm4QaXJ1cOFg';
const PAYMENT_SUPPORT =
  process.env.NEXT_PUBLIC_VERTICAL_SUPPORT_PAYMENT_URL ?? PAYMENT_SELF;

export default function VerticalPricingSection() {
  return (
    <>
      <style>{`
        .vt-price-section {
          background: linear-gradient(180deg, #fff 0%, #faf5fb 100%);
          padding: 72px 24px 88px;
        }
        .vt-price-inner { max-width: 960px; margin: 0 auto; }
        .vt-price-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1;
          color: #D7ABD6;
          text-align: center;
          margin-bottom: 36px;
        }
        .vt-price-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .vt-price-card {
          background: #fff;
          border-radius: 28px;
          padding: 28px 24px 32px;
          border: 1px solid #e8c4e6;
          box-shadow: 0 18px 45px rgba(153, 67, 152, 0.1);
          display: flex;
          flex-direction: column;
        }
        .vt-price-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #4a2f49;
          margin-bottom: 8px;
        }
        .vt-price-card .vt-price-lead {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.5;
          color: #444;
          margin-bottom: 16px;
        }
        .vt-price-card ul {
          list-style: disc;
          padding-left: 1.1rem;
          margin: 0 0 20px;
          flex: 1;
        }
        .vt-price-card li {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #3b2845;
          margin-bottom: 4px;
        }
        .vt-price-value {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: #4a2f49;
          margin-bottom: 18px;
        }
        .vt-price-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          padding: 14px 20px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg, #FCE0FF 0%, #FFBEFE 100%);
          color: #805D7F;
          box-shadow: 0 10px 28px rgba(208, 132, 208, 0.35);
        }
        @media (max-width: 768px) {
          .vt-price-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="tariffs" className="vt-price-section reveal-up scroll-mt-24" data-animate>
        <div className="vt-price-inner">
          <h2 className="vt-price-title">Тарифи</h2>
          <div className="vt-price-grid reveal-up reveal-delay-1" data-animate>
            <article className="vt-price-card">
              <h3>Самостійний формат</h3>
              <p className="vt-price-lead">
                Для тих, хто хоче проходити програму у своєму темпі та самостійно працювати з
                матеріалами.
              </p>
              <p className="vt-price-lead" style={{ fontWeight: 600, marginBottom: 8 }}>
                Входить:
              </p>
              <ul>
                <li>доступ до занять</li>
                <li>матеріали програми</li>
                <li>бонуси</li>
                <li>чекап</li>
                <li>фітнес-аптечка</li>
                <li>блок харчування</li>
                <li>рекомендації після завершення програми</li>
              </ul>
              <p className="vt-price-value">
                <span style={{ textDecoration: 'line-through', opacity: 0.65, marginRight: 8 }}>4320</span>
                3720 грн
              </p>
              <PaywallLeadButton
                className="vt-price-btn"
                productLabel="Вертикаль — самостійний формат (перед оплатою)"
                afterLeadSent={() => {
                  window.location.href = PAYMENT_SELF;
                }}
              >
                Доєднатись
              </PaywallLeadButton>
            </article>

            <article className="vt-price-card">
              <h3>Із супроводом Юлії</h3>
              <p className="vt-price-lead">
                Для тих, хто хоче більше впевненості, персональної уваги, контролю техніки і
                рекомендацій під свої особливості.
              </p>
              <p className="vt-price-lead" style={{ fontWeight: 600, marginBottom: 8 }}>
                Входить усе з самостійного формату, а також:
              </p>
              <ul>
                <li>аналіз чекапу</li>
                <li>відповіді на питання</li>
                <li>індивідуальний супровід від Юлії</li>
                <li>можливість надсилати відео виконання вправ</li>
                <li>персональний розбір техніки</li>
                <li>підказки і рекомендації протягом програми</li>
              </ul>
              <p className="vt-price-value">
                <span style={{ textDecoration: 'line-through', opacity: 0.65, marginRight: 8 }}>5750</span>
                5250 грн
              </p>
              <PaywallLeadButton
                className="vt-price-btn"
                productLabel="Вертикаль — із супроводом Юлії (перед оплатою)"
                afterLeadSent={() => {
                  window.location.href = PAYMENT_SUPPORT;
                }}
              >
                Доєднатись із супроводом
              </PaywallLeadButton>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
