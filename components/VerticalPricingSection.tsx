'use client';

import Image from 'next/image';
import PaywallLeadButton from '@/components/PaywallLeadButton';

const PAYMENT_SELF =
  process.env.NEXT_PUBLIC_VERTICAL_SELF_PAYMENT_URL ??
  'https://vertical.kwiga.com/o/toXLp48qPKvT';
const PAYMENT_SUPPORT =
  process.env.NEXT_PUBLIC_VERTICAL_SUPPORT_PAYMENT_URL ??
  'https://vertical.kwiga.com/o/ovjUbHwUhdpK';

const tariffs = [
  {
    title: 'Самостійний формат',
    image: '/vertical/tariffs/self.jpg',
    imageAlt: 'Вертикаль — самостійний формат',
    lead: 'Для тих, хто хоче проходити програму у своєму темпі та самостійно працювати з матеріалами.',
    includesLabel: 'Входить:',
    includes: [
      'доступ до занять',
      'матеріали програми',
      'бонуси',
      'чекап',
      'фітнес-аптечка',
      'блок харчування',
      'рекомендації після завершення програми',
    ],
    oldPrice: '4320',
    price: '3720 грн',
    productLabel: 'Вертикаль — самостійний формат (перед оплатою)',
    paymentUrl: PAYMENT_SELF,
    cta: 'Доєднатись',
  },
  {
    title: 'Із супроводом Юлії',
    image: '/vertical/tariffs/support.jpg',
    imageAlt: 'Вертикаль — із супроводом Юлії',
    lead: 'Для тих, хто хоче більше впевненості, персональної уваги, контролю техніки і рекомендацій під свої особливості.',
    includesLabel: 'Входить усе з самостійного формату, а також:',
    includes: [
      'аналіз чекапу',
      'відповіді на питання',
      'індивідуальний супровід від Юлії',
      'можливість надсилати відео виконання вправ',
      'персональний розбір техніки',
      'підказки і рекомендації протягом програми',
    ],
    oldPrice: '5750',
    price: '5250 грн',
    productLabel: 'Вертикаль — із супроводом Юлії (перед оплатою)',
    paymentUrl: PAYMENT_SUPPORT,
    cta: 'Доєднатись із супроводом',
  },
];

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
          padding: 0;
          border: 1px solid #e8c4e6;
          box-shadow: 0 18px 45px rgba(153, 67, 152, 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .vt-price-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #f3e8f3;
        }
        .vt-price-card-image img {
          object-fit: cover;
          object-position: center 30%;
        }
        .vt-price-card-body {
          padding: 24px 24px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .vt-price-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-style: italic;
          font-size: clamp(1.85rem, 4vw, 2.45rem);
          line-height: 1.1;
          color: #D7ABD6;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
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
            {tariffs.map((tariff) => (
              <article key={tariff.title} className="vt-price-card">
                <div className="vt-price-card-image">
                  <Image
                    src={tariff.image}
                    alt={tariff.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                  />
                </div>
                <div className="vt-price-card-body">
                  <h3>{tariff.title}</h3>
                  <p className="vt-price-lead">{tariff.lead}</p>
                  <p className="vt-price-lead" style={{ fontWeight: 600, marginBottom: 8 }}>
                    {tariff.includesLabel}
                  </p>
                  <ul>
                    {tariff.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="vt-price-value">
                    <span style={{ textDecoration: 'line-through', opacity: 0.65, marginRight: 8 }}>
                      {tariff.oldPrice}
                    </span>
                    {tariff.price}
                  </p>
                  <PaywallLeadButton
                    className="vt-price-btn"
                    productLabel={tariff.productLabel}
                    afterLeadSent={() => {
                      window.location.href = tariff.paymentUrl;
                    }}
                  >
                    {tariff.cta}
                  </PaywallLeadButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
