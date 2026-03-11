export default function NeuroIntensiveFormatSection() {
  return (
    <>
      <style>{`
        .ni-format-section {
          position: relative;
          background: white;
          padding: 60px 0 70px;
          overflow: hidden;
        }

        .ni-format-inner {
          position: relative;
          z-index: 1;
          max-width: 960px;
          margin: 0 auto;
          padding: 0 32px;
          text-align: center;
        }

        .ni-format-bg-wrap {
          width: 100%;
          overflow: visible;
          margin: 0 0 -18px 0;
          position: relative;
          z-index: 0;
        }

        .ni-format-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(46px, 10vw, 140px);
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

        .ni-format-pill-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }

        .ni-format-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1.5px solid #e8a0c8;
          padding: 18px 48px;
          background: #ffffff;
          box-shadow: 0 12px 32px rgba(153, 67, 152, 0.12);
          max-width: 780px;
        }

        .ni-format-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 18px;
          line-height: 1.7;
          color: #3a3040;
        }

        @media (max-width: 640px) {
          .ni-format-inner {
            padding: 0 20px;
          }
          .ni-format-pill {
            padding: 14px 20px;
          }
          .ni-format-text {
            font-size: 16px;
          }
          .ni-format-bg-title {
            font-size: clamp(42px, 23vw, 83px); /* ~30% більше на мобільному */
            white-space: normal;
          }
        }
      `}</style>

      <section className="ni-format-section reveal-up" data-animate>
        <div className="ni-format-inner">
          <div className="ni-format-bg-wrap">
            <span className="ni-format-bg-title">Формат</span>
          </div>

          <div className="ni-format-pill-wrap reveal-up reveal-delay-1" data-animate>
            <div className="ni-format-pill">
              <p className="ni-format-text">
                Онлайн: практика + міні-лекції + набір нейровправ. Проходиш у зручний час.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
