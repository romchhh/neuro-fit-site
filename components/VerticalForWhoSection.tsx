'use client';

import PaywallLeadButton from '@/components/PaywallLeadButton';

const signs = [
  'випираючий живіт, холку, завернуті плечі або крилоподібні лопатки',
  'скутість у шиї, попереку або між лопатками',
  'дискомфорт після сидіння чи робочого дня',
  'слабкий кор, нестабільність у тілі або відсутність опори',
  'особливості стоп: плоскостопість, сковані пальці, виступаюча кісточка',
  'слабкість тазового дна або дискомфорт у зоні тазу',
  'втому, напругу, відчуття, що тіло постійно «затиснуте»',
];

export default function VerticalForWhoSection() {
  return (
    <>
      <style>{`
        .vt-forwho-section {
          background: #fff;
          padding: 72px 24px 88px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .vt-forwho-inner { max-width: 820px; width: 100%; }
        .vt-forwho-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1;
          color: #D7ABD6;
          margin-bottom: 20px;
        }
        .vt-forwho-desc, .vt-forwho-list li {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.45;
          color: #2a2a2a;
        }
        .vt-forwho-list {
          text-align: left;
          list-style: disc;
          padding-left: 1.25rem;
          margin: 20px 0 28px;
        }
        .vt-forwho-list li { margin-bottom: 8px; }
        .vt-forwho-note {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          color: #4a3044;
          margin-bottom: 28px;
        }
        .vt-forwho-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(1rem, 2vw, 1.4rem);
          letter-spacing: 0.08em;
          padding: 16px 52px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg, #FCE0FF 0%, #FFBEFE 100%);
          color: #805D7F;
          box-shadow: 0 12px 32px rgba(208, 132, 208, 0.4);
        }
      `}</style>

      <section className="vt-forwho-section reveal-up" data-animate>
        <div className="vt-forwho-inner">
          <h2 className="vt-forwho-title">Для кого?</h2>
          <p className="vt-forwho-desc">
            Для тих, хто хоче м&apos;яко і системно попрацювати з поставою, спиною та глибокими
            м&apos;язами без жорстких навантажень.
          </p>
          <p className="vt-forwho-desc" style={{ marginTop: 16 }}>
            Програма підійде, якщо ти помічаєш:
          </p>
          <ul className="vt-forwho-list">
            {signs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="vt-forwho-note">
            Окремо можна працювати з делікатними симптомами, пов&apos;язаними зі слабкістю
            тазового дна та напругою в зоні таза.
          </p>
          <PaywallLeadButton
            className="vt-forwho-btn"
            productLabel="Вертикаль — блок «Для кого?»"
            afterLeadSent={() => {
              document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Я хочу
          </PaywallLeadButton>
        </div>
      </section>
    </>
  );
}
