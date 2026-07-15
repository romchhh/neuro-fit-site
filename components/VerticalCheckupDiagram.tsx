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

  const vbW = 840;
  const vbH = 720;
  const cx = vbW / 2;
  const cy = vbH / 2;
  const outerR = 168;
  const innerR = 114;
  const photoR = 106;
  const leaderR = outerR + 20;
  const arm = 28;
  const labelGap = 10;
  const lineHeight = 18;

  return (
    <>
      <style>{`
        .vt-check-section {
          background: #fff;
          padding: 64px 12px 80px;
          overflow: visible;
        }
        .vt-check-inner {
          max-width: 900px;
          margin: 0 auto;
          overflow: visible;
        }
        .vt-check-stage {
          position: relative;
          width: 100%;
          max-width: 840px;
          margin: 0 auto;
          aspect-ratio: ${vbW} / ${vbH};
          overflow: visible;
        }
        .vt-check-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
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
          width: ${(photoR * 2) / vbW * 100}%;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
          pointer-events: none;
          box-shadow:
            0 0 0 4px #fff,
            0 10px 28px rgba(64, 26, 75, 0.16);
        }
        .vt-check-stage.has-active .vt-check-photo {
          box-shadow:
            0 0 0 4px #fff,
            0 0 0 8px rgba(215, 171, 214, 0.35),
            0 14px 32px rgba(64, 26, 75, 0.2);
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
          box-shadow: inset 0 0 24px rgba(90, 61, 89, 0.18);
          pointer-events: none;
          z-index: 2;
        }
        .vt-check-label-hit {
          cursor: pointer;
        }
        .vt-check-label-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 17px;
          fill: #222;
          pointer-events: none;
        }
        .vt-check-label-hit.is-active .vt-check-label-text {
          font-weight: 700;
          fill: #5a3d59;
        }
        .vt-check-label-hit.is-dimmed {
          opacity: 0.4;
        }
        .vt-check-lines {
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        .vt-check-lines.is-dimmed {
          opacity: 0.25;
        }
        @media (max-width: 700px) {
          .vt-check-section {
            padding: 36px 2px 52px;
          }
          .vt-check-label-text {
            font-size: 13px;
          }
        }
        @media (hover: none) {
          .vt-check-slice,
          .vt-check-label-hit { cursor: default; }
        }
      `}</style>

      <section className="vt-check-section reveal-up" data-animate>
        <div className="vt-check-inner">
          <div
            className={`vt-check-stage${active !== null ? ' has-active' : ''}`}
          >
            <svg
              className="vt-check-svg"
              viewBox={`0 0 ${vbW} ${vbH}`}
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
                      transform: isActive ? 'scale(1.035)' : 'scale(1)',
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
                  ? Math.min(vbW - 150, xMid + arm)
                  : Math.max(150, xMid - arm);
                const isActive = active === i;
                const isDimmed = active !== null && active !== i;
                const textX = isRight ? xEnd + labelGap : xEnd - labelGap;
                const textAnchor = isRight ? 'start' : 'end';
                const blockH = (item.lines.length - 1) * lineHeight;
                const firstY = yMid - blockH / 2;

                return (
                  <g key={`anno-${item.label}`}>
                    <g
                      className={`vt-check-lines${isDimmed ? ' is-dimmed' : ''}`}
                    >
                      <circle cx={xDot} cy={yDot} r={3} fill="#1a1a1a" />
                      <path
                        d={`M ${xDot} ${yDot} L ${xMid} ${yMid} L ${xEnd} ${yMid}`}
                        fill="none"
                        stroke="#1a1a1a"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>

                    <g
                      className={`vt-check-label-hit${isActive ? ' is-active' : ''}${isDimmed ? ' is-dimmed' : ''}`}
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive(null)}
                      onClick={() => setActive(isActive ? null : i)}
                      role="button"
                      tabIndex={0}
                      aria-label={item.label}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActive(isActive ? null : i);
                        }
                      }}
                    >
                      {/* Невидима зона кліку */}
                      <rect
                        x={isRight ? textX - 4 : textX - 130}
                        y={firstY - 14}
                        width={134}
                        height={item.lines.length * lineHeight + 12}
                        fill="transparent"
                      />
                      <text
                        className="vt-check-label-text"
                        x={textX}
                        y={firstY}
                        textAnchor={textAnchor}
                        dominantBaseline="middle"
                      >
                        {item.lines.map((line, li) => (
                          <tspan
                            key={line}
                            x={textX}
                            dy={li === 0 ? 0 : lineHeight}
                          >
                            {line}
                          </tspan>
                        ))}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            <div className="vt-check-photo">
              <Image
                src="/vertical/checkup-portrait.png"
                alt="Вертикаль — чекап і програма"
                fill
                sizes="(max-width: 700px) 45vw, 280px"
                className="vt-check-photo-img"
                priority={false}
              />
              <div className="vt-check-photo-filter" aria-hidden="true" />
              <div className="vt-check-photo-glow" aria-hidden="true" />
              <div className="vt-check-photo-edge" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
