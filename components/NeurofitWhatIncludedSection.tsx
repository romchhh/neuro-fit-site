import Image from "next/image";

export default function NeurofitWhatIncludedSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300&display=swap');

        .nf-what-section {
          background: #ffffff;
          padding: 120px 0 136px;
        }

        .nf-what-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .nf-what-card {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 40px;
          border-radius: 32px;
          overflow: hidden;
          /* нейтральний фон без рожевого */
          background: #ffffff;
          /* мʼякша нейтральна тінь */
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.08);
          /* сіра рамка замість рожевої */
          border: 1px solid #e2e2e2;
          min-height: 620px;
        }

        .nf-what-image {
          position: relative;
          width: 48%;
          min-height: 620px;
        }

        .nf-what-content {
          width: 52%;
          padding: 40px 40px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .nf-what-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(40px, 4.2vw, 68px);
          line-height: 1;
          letter-spacing: 0;
          /* темніший нейтральний колір без рожевого відтінку */
          color: #3b2845;
          margin-bottom: 24px;
        }

        .nf-what-list {
          list-style: disc;
          padding-left: 24px;
          margin: 0;
        }

        .nf-what-list li {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: normal;
          font-size: clamp(16px, 1.7vw, 28px);
          line-height: 1.57;
          letter-spacing: 0;
          color: #3b2845;
          margin-bottom: 8px;
        }

        @media (max-width: 900px) {
          .nf-what-card {
            flex-direction: column;
          }
          .nf-what-image,
          .nf-what-content {
            width: 100%;
          }
          .nf-what-image {
            min-height: 420px;
          }
        }

        @media (max-width: 640px) {
          .nf-what-inner {
            padding: 0 20px;
          }
          .nf-what-section {
            padding: 72px 0 88px;
          }
          .nf-what-card {
            border-radius: 24px;
          }
          .nf-what-image {
            min-height: 520px;
          }
          .nf-what-title {
            font-size: 30px;
            text-align: left;
          }
          .nf-what-content {
            padding: 28px 22px 28px;
          }
          .nf-what-list li {
            font-size: 16px;
          }
        }
      `}</style>

      <section className="nf-what-section reveal-up" data-animate>
        <div className="nf-what-inner">
          <div className="nf-what-card reveal-scale" data-animate>
            <div className="nf-what-image">
              <Image
                src="/neuro-fit/IMG_5031.jpg"
                alt="NeuroFit — Neuro-Pilates — що входить до програми"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="nf-what-content">
              <h2 className="nf-what-title">Що входить?</h2>
              <ul className="nf-what-list">
                <li>14 тренувань</li>
                <li>3 руханки</li>
                <li>2 медитації</li>
                <li>практичні лекції та вебінари</li>
                <li>загальний чат</li>
                <li>додаткові матеріали</li>
                <li>доступ 4 місяці</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

