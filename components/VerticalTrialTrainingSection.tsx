'use client';

import { useState } from 'react';

const YOUTUBE_ID = '1DaUrPz9ySg';

export default function VerticalTrialTrainingSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <style>{`
        .vt-trial-section {
          background: linear-gradient(180deg, #faf5fb 0%, #fff 100%);
          padding: 72px 24px 80px;
        }
        .vt-trial-inner {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }
        .vt-trial-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(1.8rem, 4.5vw, 2.8rem);
          line-height: 1.15;
          color: #D7ABD6;
          margin-bottom: 14px;
        }
        .vt-trial-lead {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          line-height: 1.55;
          color: #4a3044;
          max-width: 560px;
          margin: 0 auto 28px;
        }
        .vt-trial-video {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          aspect-ratio: 16 / 9;
          border-radius: 24px;
          overflow: hidden;
          background: #1a1220;
          box-shadow: 0 22px 55px rgba(64, 26, 75, 0.2);
          border: 1px solid #e8c4e6;
        }
        .vt-trial-video iframe,
        .vt-trial-video-poster {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .vt-trial-video-poster {
          object-fit: cover;
        }
        .vt-trial-play {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: rgba(20, 12, 28, 0.28);
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .vt-trial-play-btn {
          width: 78px;
          height: 78px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.14);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.28);
          transition: transform 0.18s ease, background 0.18s ease;
        }
        .vt-trial-play:hover .vt-trial-play-btn {
          transform: scale(1.06);
          background: rgba(255,255,255,0.22);
        }
        .vt-trial-play-triangle {
          margin-left: 4px;
          width: 0;
          height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 20px solid #fff;
        }
        .vt-trial-play-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        @media (max-width: 640px) {
          .vt-trial-section { padding: 56px 16px 64px; }
          .vt-trial-video { border-radius: 18px; }
          .vt-trial-play-btn { width: 64px; height: 64px; }
        }
      `}</style>

      <section className="vt-trial-section reveal-up" data-animate>
        <div className="vt-trial-inner">
          <h2 className="vt-trial-title">
            Пробне тренування
            <br />
            із&nbsp;Юлією
          </h2>
          <p className="vt-trial-lead">
            Відчуйте атмосферу занять і&nbsp;зрозумійте, чи&nbsp;вам комфортно
            займатися разом
          </p>

          <div className="vt-trial-video reveal-up reveal-delay-1" data-animate>
            {!isPlaying ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="vt-trial-video-poster"
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                  alt="Пробне тренування із Юлією"
                />
                <button
                  type="button"
                  className="vt-trial-play"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Дивитись пробне тренування"
                >
                  <span className="vt-trial-play-btn">
                    <span className="vt-trial-play-triangle" />
                  </span>
                  <span className="vt-trial-play-label">Дивитись відео</span>
                </button>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Пробне тренування із Юлією"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
