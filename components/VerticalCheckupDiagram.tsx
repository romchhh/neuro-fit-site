'use client';

import Image from 'next/image';
import { useState } from 'react';

const items = [
  {
    label: 'Функціональні тести',
    lines: ['Функціональні', 'тести'],
    color: '#7EB8B2',
  },
  {
    label: 'Анкетування',
    lines: ['Анкетування'],
    color: '#C9B8E8',
  },
  {
    label: 'Діагностика тіла',
    lines: ['Діагностика', 'тіла'],
    color: '#F0C4A8',
  },
  {
    label: 'Блок із нутріціологом',
    lines: ['Блок із', 'нутріціологом'],
    color: '#E8A8C8',
  },
  {
    label: 'Тренування',
    lines: ['Тренування'],
    color: '#A8C8E0',
  },
];

function midAngle(index: number) {
  return -90 + index * 72 + 36;
}

function ringSlice(
  index: number,
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
) {
  const start = -90 + index * 72;
  const end = start + 72;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const ox1 = cx + outerR * Math.cos(toRad(start));
  const oy1 = cy + outerR * Math.sin(toRad(start));
  const ox2 = cx + outerR * Math.cos(toRad(end));
  const oy2 = cy + outerR * Math.sin(toRad(end));
  const ix2 = cx + innerR * Math.cos(toRad(end));
  const iy2 = cy + innerR * Math.sin(toRad(end));
  const ix1 = cx + innerR * Math.cos(toRad(start));
  const iy1 = cy + innerR * Math.sin(toRad(start));
  return [
    `M ${ox1} ${oy1}`,
    `A ${outerR} ${outerR} 0 0 1 ${ox2} ${oy2}`,
    `L ${ix2} ${iy2}`,
    `A ${innerR} ${innerR} 0 0 0 ${ix1} ${iy1}`,
    'Z',
  ].join(' ');
}

export default function VerticalCheckupDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const size = 640;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 186;
  const innerR = 126;
  const photoR = 118;
  const leaderR = outerR + 22;
  const arm = 22;
  const labelInset = 12;

  return (
    <>
      <style>{`
        .vt-check-section {
          background: #fff;
          padding: 72px 24px 88px;
          overflow: visible;
        }
        .vt-check-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          overflow: visible;
        }
        .vt-check-stage {
          position: relative;
          width: min(100%, 680px);
          margin: 0 auto;
          aspect-ratio: 1;
          container-type: inline-size;
          overflow: visible;
        }
        .vt-check-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .vt-check-slice {
          cursor: pointer;
          transition: opacity 0.25s ease, transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
          transform-box: view-box;
          transform-origin: ${cx}px ${cy}px;
        }
        .vt-check-slice.is-dimmed {
          opacity: 0.45;
        }
        .vt-check-photo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: ${(photoR * 2) / size * 100}%;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
          pointer-events: none;
          box-shadow:
            0 0 0 5px #fff,
            0 12px 36px rgba(64, 26, 75, 0.18);
          transition: box-shadow 0.3s ease;
        }
        .vt-check-stage.has-active .vt-check-photo {
          box-shadow:
            0 0 0 5px #fff,
            0 0 0 9px rgba(215, 171, 214, 0.35),
            0 16px 40px rgba(64, 26, 75, 0.22);
        }
        .vt-check-photo-img {
          object-fit: cover;
          object-position: center 35%;
          filter: saturate(1.05) contrast(1.05);
        }
        .vt-check-photo-filter {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(
            from -90deg,
            #7EB8B2 0deg 72deg,
            #C9B8E8 72deg 144deg,
            #F0C4A8 144deg 216deg,
            #E8A8C8 216deg 288deg,
            #A8C8E0 288deg 360deg
          );
          mix-blend-mode: soft-light;
          opacity: 0.72;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .vt-check-stage.has-active .vt-check-photo-filter {
          opacity: 0.9;
        }
        .vt-check-photo-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle at 40% 30%,
            rgba(255, 255, 255, 0.28) 0%,
            transparent 55%
          );
          pointer-events: none;
          z-index: 1;
        }
        .vt-check-photo-edge {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: inset 0 0 28px rgba(90, 61, 89, 0.18);
          pointer-events: none;
          z-index: 2;
        }
        .vt-check-label {
          position: absolute;
          z-index: 3;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(0.72rem, 3.4cqi, 1.15rem);
          color: #222;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: color 0.2s ease, font-weight 0.2s ease;
          line-height: 1.2;
          -webkit-tap-highlight-color: transparent;
          box-sizing: border-box;
          max-width: 28cqi;
          word-break: keep-all;
          overflow-wrap: normal;
          hyphens: none;
        }
        .vt-check-label.is-active {
          color: #5a3d59;
          font-weight: 700;
        }
        .vt-check-label.is-dimmed {
          opacity: 0.4;
        }
        .vt-check-lines {
          transition: opacity 0.25s ease;
          pointer-events: none;
        }
        .vt-check-lines.is-dimmed {
          opacity: 0.25;
        }
        @media (max-width: 700px) {
          .vt-check-section { padding: 56px 10px 72px; }
          .vt-check-label {
            font-size: clamp(0.58rem, 3.3cqi, 0.78rem);
            max-width: 30cqi;
            line-height: 1.15;
          }
        }
        @media (hover: none) {
          .vt-check-slice { cursor: default; }
        }
      `}</style>

      <section className="vt-check-section reveal-up" data-animate>
        <div className="vt-check-inner">
          <div
            className={`vt-check-stage${active !== null ? ' has-active' : ''}`}
          >
            <svg
              className="vt-check-svg"
              viewBox={`0 0 ${size} ${size}`}
              role="img"
              aria-label="Діаграма чекапу: пʼять складових програми"
            >
              <circle cx={cx} cy={cy} r={outerR + 8} fill="#faf5fb" />

              {items.map((item, i) => {
                const isActive = active === i;
                const isDimmed = active !== null && active !== i;
                return (
                  <path
                    key={item.label}
                    className={`vt-check-slice${isActive ? ' is-active' : ''}${isDimmed ? ' is-dimmed' : ''}`}
                    d={ringSlice(i, cx, cy, outerR, innerR)}
                    fill={item.color}
                    stroke="#ffffff"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    style={{
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={item.label}
                  />
                );
              })}

              <circle cx={cx} cy={cy} r={innerR - 2} fill="#ffffff" />

              {items.map((item, i) => {
                const a = midAngle(i);
                const rad = (a * Math.PI) / 180;
                const midR = (outerR + innerR) / 2;
                const xDot = cx + midR * Math.cos(rad);
                const yDot = cy + midR * Math.sin(rad);
                const xMid = cx + leaderR * Math.cos(rad);
                const yMid = cy + leaderR * Math.sin(rad);
                const isRight = Math.cos(rad) >= 0;
                const xEnd = isRight
                  ? Math.min(size - labelInset - 8, xMid + arm)
                  : Math.max(labelInset + 8, xMid - arm);
                const isDimmed = active !== null && active !== i;

                return (
                  <g
                    key={`line-${item.label}`}
                    className={`vt-check-lines${isDimmed ? ' is-dimmed' : ''}`}
                  >
                    <circle cx={xDot} cy={yDot} r={3.2} fill="#1a1a1a" />
                    <path
                      d={`M ${xDot} ${yDot} L ${xMid} ${yMid} L ${xEnd} ${yMid}`}
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="1.15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                );
              })}
            </svg>

            <div className="vt-check-photo">
              <Image
                src="/vertical/checkup-portrait.png"
                alt="Вертикаль — чекап і програма"
                fill
                sizes="(max-width: 700px) 55vw, 320px"
                className="vt-check-photo-img"
                priority={false}
              />
              <div className="vt-check-photo-filter" aria-hidden="true" />
              <div className="vt-check-photo-glow" aria-hidden="true" />
              <div className="vt-check-photo-edge" aria-hidden="true" />
            </div>

            {items.map((item, i) => {
              const a = midAngle(i);
              const rad = (a * Math.PI) / 180;
              const isRight = Math.cos(rad) >= 0;
              const yMid = cy + leaderR * Math.sin(rad);
              const xMid = cx + leaderR * Math.cos(rad);
              const xEnd = isRight
                ? Math.min(size - labelInset - 8, xMid + arm)
                : Math.max(labelInset + 8, xMid - arm);
              const topPct = (yMid / size) * 100;
              const isActive = active === i;
              const isDimmed = active !== null && active !== i;

              const style = isRight
                ? {
                    top: `${topPct}%`,
                    left: `${(xEnd / size) * 100 + 0.8}%`,
                    transform: 'translateY(-50%)',
                    textAlign: 'left' as const,
                  }
                : {
                    top: `${topPct}%`,
                    right: `${100 - (xEnd / size) * 100 + 0.8}%`,
                    transform: 'translateY(-50%)',
                    textAlign: 'right' as const,
                  };

              return (
                <span
                  key={`label-${item.label}`}
                  className={`vt-check-label${isActive ? ' is-active' : ''}${isDimmed ? ' is-dimmed' : ''}`}
                  style={style}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  {item.lines.map((line, li) => (
                    <span key={line}>
                      {li > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
