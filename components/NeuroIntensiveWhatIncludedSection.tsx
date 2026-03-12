export default function NeuroIntensiveWhatIncludedSection() {
  return (
    <>
      <style>{`
        .ni-what-section {
          background: #ffffff;
          padding: 60px 0 80px;
        }

        .ni-what-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .ni-what-title-wrap {
          margin-bottom: 32px;
          text-align: left;
        }

        .ni-what-title-bg {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(40px, 7vw, 80px);
          line-height: 1;
          color: #f1d7f3;
        }

        .ni-what-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .ni-what-card {
          background: #fff6ff;
          border-radius: 32px;
          padding: 28px 26px 26px;
          box-shadow: 0 18px 45px rgba(153, 67, 152, 0.12);
          border: 1px solid #f3c4e3;
          position: relative;
          overflow: hidden;
        }

        .ni-what-card-index {
          position: absolute;
          inset: 18px auto auto 22px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 56px;
          line-height: 1;
          color: rgba(231, 204, 244, 0.7);
          pointer-events: none;
          user-select: none;
        }

        .ni-what-card-title {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 20px;
          color: #4b2759;
          margin-bottom: 14px;
        }

        .ni-what-list {
          position: relative;
          padding-left: 16px;
          margin: 0;
        }

        .ni-what-list li {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.7;
          color: #3b2845;
          margin-bottom: 6px;
        }

        .ni-what-list li span.ni-what-label {
          font-weight: 600;
          color: #4b2759;
        }

        .ni-what-bonus {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 13px;
          margin-top: 14px;
          color: #7b4b86;
        }

        @media (max-width: 900px) {
          .ni-what-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ni-what-inner {
            padding: 0 20px;
          }
          .ni-what-title-wrap {
            text-align: center;
          }
          .ni-what-title-bg {
            font-size: clamp(34px, 11vw, 56px);
          }
          .ni-what-card {
            padding: 26px 22px 22px;
          }
          .ni-what-card-index {
            font-size: 46px;
          }
        }
      `}</style>

      <section className="ni-what-section reveal-up" data-animate>
        <div className="ni-what-inner">
          <div className="ni-what-title-wrap">
            <h2 className="ni-what-title-bg">Що входить?</h2>
          </div>

          <div className="ni-what-grid reveal-up reveal-delay-1" data-animate>
            <article className="ni-what-card">
              <div className="ni-what-card-index">[01]</div>
              <h3 className="ni-what-card-title">Блок 1. Практика</h3>
              <ol className="ni-what-list">
                <li><span className="ni-what-label">«Відчуваю тіло»</span> (Pilates classic)</li>
                <li><span className="ni-what-label">Дихальна руханка</span> (відновлення та заспокоєння)</li>
                <li><span className="ni-what-label">Нейроруханка</span></li>
                <li><span className="ni-what-label">Пілатес + нейрофітнес</span></li>
                <li><span className="ni-what-label">Функціонал + нейрофітнес</span></li>
              </ol>
            </article>

            <article className="ni-what-card">
              <div className="ni-what-card-index">[02]</div>
              <h3 className="ni-what-card-title">Блок 2. Міні-лекції</h3>
              <ol className="ni-what-list">
                <li><span className="ni-what-label">Що таке нейрофітнес</span> і для чого він</li>
                <li><span className="ni-what-label">Як мозок впливає на тіло</span></li>
              </ol>
            </article>

            <article className="ni-what-card">
              <div className="ni-what-card-index">[03]</div>
              <h3 className="ni-what-card-title">Блок 3. Вправи</h3>
              <ol className="ni-what-list">
                <li><span className="ni-what-label">Памʼять і концентрація</span></li>
                <li><span className="ni-what-label">Стрес і напруга</span></li>
                <li><span className="ni-what-label">Баланс і просторове мислення</span></li>
              </ol>
              <p className="ni-what-bonus">
                Бонус: гайд «Харчування в період тренувань»
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

