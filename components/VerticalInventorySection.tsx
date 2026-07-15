'use client';

import { useState } from 'react';

const YOUTUBE_ID = 'vDG_Vo58bHc';

const items = [
  'килимок',
  'мʼяч для пілатесу',
  'еластичну стрічку',
  'маленький мʼякий мʼяч для МФР',
  'голчастий і плаский мʼяч',
  '2 тенісні мʼячі',
  'блок',
  'рол',
];

export default function VerticalInventorySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <style>{`
        .vt-inv-section { background: #fff; padding: 64px 24px 72px; }
        .vt-inv-inner { max-width: 820px; margin: 0 auto; text-align: center; }
        .vt-inv-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #4a2f49;
          margin-bottom: 16px;
        }
        .vt-inv-lead {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
          margin-bottom: 24px;
        }
        .vt-inv-lead strong {
          font-weight: 700;
        }
        .vt-inv-video {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto 32px;
          aspect-ratio: 16 / 9;
          border-radius: 24px;
          overflow: hidden;
          background: #1a1220;
          box-shadow: 0 22px 55px rgba(64, 26, 75, 0.2);
          border: 1px solid #e8c4e6;
        }
        .vt-inv-video iframe,
        .vt-inv-video-poster {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .vt-inv-video-poster {
          object-fit: cover;
        }
        .vt-inv-play {
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
        .vt-inv-play-btn {
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
        .vt-inv-play:hover .vt-inv-play-btn {
          transform: scale(1.06);
          background: rgba(255,255,255,0.22);
        }
        .vt-inv-play-triangle {
          margin-left: 4px;
          width: 0;
          height: 0;
          border-top: 11px solid transparent;
          border-bottom: 11px solid transparent;
          border-left: 18px solid rgba(255,255,255,0.96);
        }
        .vt-inv-play-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        .vt-inv-list {
          text-align: left;
          list-style: disc;
          padding-left: 1.25rem;
          margin: 0 auto 24px;
          max-width: 420px;
        }
        .vt-inv-list li {
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          line-height: 1.55;
          color: #3b2845;
          margin-bottom: 6px;
        }
      `}</style>

      <section className="vt-inv-section reveal-up" data-animate>
        <div className="vt-inv-inner">
          <h2 className="vt-inv-title">Що знадобиться для занять?</h2>
          <p className="vt-inv-lead">
            Усі тренування проходять вдома й не потребують складного інвентарю.
            <br />
            Частину обладнання можна замінити домашніми аналогами —
            <br />
            <strong>Юлія пояснює це в окремому відео.</strong>
          </p>

          <div className="vt-inv-video reveal-up reveal-delay-1" data-animate>
            {!isPlaying ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="vt-inv-video-poster"
                  src={`https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                  alt="Юлія пояснює інвентар для занять"
                />
                <button
                  type="button"
                  className="vt-inv-play"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Дивитись відео про інвентар"
                >
                  <span className="vt-inv-play-btn">
                    <span className="vt-inv-play-triangle" />
                  </span>
                  <span className="vt-inv-play-label">Дивитись відео</span>
                </button>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Інвентар для занять — пояснення Юлії"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          <p className="vt-inv-lead" style={{ fontWeight: 600, marginBottom: 12 }}>
            Бажано мати:
          </p>
          <ul className="vt-inv-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
