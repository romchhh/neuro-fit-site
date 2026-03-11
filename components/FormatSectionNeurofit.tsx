export default function FormatSectionNeurofit() {
  return (
    <>
      <style>{`
        .format-section {
          position: relative;
          background: white;
          padding: 60px 0 70px;
          overflow: hidden;
        }

        .format-inner {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .format-bg-title-wrap {
          width: 100%;
          max-width: none;
          overflow: visible;
          margin: 0 0 -22px 0; /* фон-текст заходить під блоки */
          position: relative;
          z-index: 0;
        }

        .format-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(46px, 10vw, 158px);
          line-height: 1;
          white-space: nowrap;
          width: 100%;
          display: block;
          text-align: center;
          background: linear-gradient(
            90deg,
            rgba(230, 218, 240, 0.46) 0%,
            rgba(233, 187, 232, 0.46) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
          letter-spacing: 0.015em;
        }

        .format-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .format-card {
          background: #ffffff;
          border-radius: 36px;
          padding: 52px 44px 48px;
          box-shadow: 0 24px 60px rgba(153, 67, 152, 0.14);
          border: 1px solid #f3d9f2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .format-icon {
          width: 90px;  /* +25% до 72px */
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .format-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 18px;
          line-height: 1.8;
          color: #3a3040;
        }

        @media (max-width: 900px) {
          .format-inner {
            padding: 0 20px;
          }
          .format-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .format-card {
            padding: 38px 32px 36px;
          }
        }

        @media (max-width: 640px) {
          .format-bg-title-wrap {
            margin: 0 0 -12px 0;
          }
          .format-bg-title {
            font-size: clamp(42px, 23vw, 83px); /* ~30% більше на мобільному */
            white-space: normal;
          }
        }
      `}</style>

      <section className="format-section reveal-up" data-animate>
        <div className="format-inner">
          <div className="format-bg-title-wrap">
            <span className="format-bg-title">Формат</span>
          </div>

          <div className="format-grid reveal-up reveal-delay-1" data-animate>
            {/* Онлайн-платформа */}
            <div className="format-card">
              <div className="format-icon">
                <img
                  src="/neuro-fit/format-online-platform.svg"
                  alt="Онлайн-платформа"
                  width={90}
                  height={90}
                />
              </div>
              <p className="format-text">
                Онлайн-платформа, проходження у своєму темпі
              </p>
            </div>

            {/* Чат */}
            <div className="format-card">
              <div className="format-icon">
                <img
                  src="/neuro-fit/format-chat.svg"
                  alt="Загальний чат"
                  width={90}
                  height={90}
                />
              </div>
              <p className="format-text">
                Загальний чат з учасницями та Юлією
              </p>
            </div>

            {/* Матеріали */}
            <div className="format-card">
              <div className="format-icon">
                <img
                  src="/neuro-fit/format-materials.svg"
                  alt="Додаткові матеріали та ефіри"
                  width={90}
                  height={90}
                />
              </div>
              <p className="format-text">
                Додаткові матеріали + прямі ефіри в чаті
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

