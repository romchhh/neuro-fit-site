"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const modules = [
  {
    number: "01",
    title: "Повернення до тіла",
    text: "Базовий рух, дихання, нейромʼязові звʼязки",
    image: "/neuro-fit/module-01.jpg",
  },
  {
    number: "02",
    title: "Усвідомлення та звʼязок",
    text: "Пропріорецепція, 3D-рух, стабільність і гнучкість",
    image: "/neuro-fit/module-02.jpg",
  },
  {
    number: "03",
    title: "Інтеграція та сила",
    text: "Вестибулярка, функціональність, енергія",
    image: "/neuro-fit/module-03.jpg",
  },
  {
    number: "04",
    title: "Розширення можливостей",
    text: "Баланс і звички, які тримають результат щодня",
    image: "/neuro-fit/module-04.jpg",
  },
];

export default function NeurofitProgramModulesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToIndex = (index: number) => {
    const container = document.querySelector<HTMLElement>(".nf-mod-scroll");
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.left - containerRect.left;

    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const nextIndex = activeIndex === 0 ? modules.length - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === modules.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(".nf-mod-scroll");
    if (!container) return;

    const onScroll = () => {
      const { scrollLeft, offsetWidth } = container;
      const containerCenter = scrollLeft + offsetWidth / 2;

      let closestIndex = 0;
      let closestDelta = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const delta = Math.abs(cardCenter - containerCenter);
        if (delta < closestDelta) {
          closestDelta = delta;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nf-mod-section {
          position: relative;
          background: white;
          padding: 40px 0 56px;
          overflow-x: visible;
          overflow-y: hidden;
        }

        .nf-mod-inner {
          padding: 0 32px;
        }

        .nf-mod-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 32px;
        }

        .nf-mod-title-main {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(40px, 7vw, 80px);
          line-height: 1;
          color: #f1d7f3;
        }

        .nf-mod-arrows {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .nf-mod-arrow {
          font-size: 24px;
          color: #c9a0d4;
          cursor: pointer;
          user-select: none;
          transition: color 0.2s;
          line-height: 1;
        }
        .nf-mod-arrow:hover { color: #9b6aad; }

        .nf-mod-scroll {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 10px;
          padding-left: 0;
          padding-right: 32px;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .nf-mod-scroll::-webkit-scrollbar { display: none; }

        .nf-mod-card {
          background: #fff6ff;
          border-radius: 28px;
          border: 1px solid #f3c4e3;
          flex-shrink: 0;
          width: min(640px, 88vw);
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          padding: 22px 22px 20px;
          box-shadow: 0 18px 45px rgba(153,67,152,0.12);
        }

        .nf-mod-card-top {
          display: grid;
          grid-template-columns: 1.2fr auto;
          gap: 18px;
          align-items: center;
          margin-bottom: 14px;
        }

        .nf-mod-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nf-mod-number {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #5d2a79;
        }

        .nf-mod-img-wrap {
          border-radius: 24px;
          overflow: hidden;
          width: 100%;
          max-width: 340px;
          justify-self: center;
        }

        .nf-mod-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 22px;
          color: #4b2759;
          margin-bottom: 6px;
        }

        .nf-mod-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
        }

        .nf-mod-dots {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
        }

        .nf-mod-dot-active {
          width: 28px; height: 10px;
          border-radius: 999px;
          background: #E8A0C8;
        }
        .nf-mod-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: 1.5px solid #E8A0C8;
          background: transparent;
        }

        @media (max-width: 640px) {
          .nf-mod-inner { padding: 0 0; }
          .nf-mod-title-main {
            font-size: clamp(34px, 11vw, 60px);
            text-align: center;
          }
          .nf-mod-header {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 0 16px;
          }
          .nf-mod-scroll {
            padding-left: 0;
            padding-right: 0;
          }
          .nf-mod-scroll::before,
          .nf-mod-scroll::after {
            content: "";
            flex-shrink: 0;
            width: calc((100vw - 88vw) / 2);
          }
          .nf-mod-card {
            scroll-snap-align: center;
          }
          .nf-mod-card-top {
            grid-template-columns: 1fr;
          }
          .nf-mod-img-wrap {
            max-width: 100%;
          }
        }
      `}</style>

      <section className="nf-mod-section reveal-up" data-animate>
        <div className="nf-mod-inner">
          <div className="nf-mod-header reveal-fade" data-animate>
            <h2 className="nf-mod-title-main">Програма (4 модулі)</h2>
            <div className="nf-mod-arrows">
              <button
                type="button"
                className="nf-mod-arrow"
                onClick={handlePrev}
                aria-label="Попередній модуль"
              >
                ←
              </button>
              <button
                type="button"
                className="nf-mod-arrow"
                onClick={handleNext}
                aria-label="Наступний модуль"
              >
                →
              </button>
            </div>
          </div>

          <div className="nf-mod-scroll reveal-up reveal-delay-1" data-animate>
            {modules.map((m, index) => (
              <article
                key={m.number}
                className="nf-mod-card"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <div className="nf-mod-card-top">
                  <div className="nf-mod-meta">
                    <div className="nf-mod-number">[{m.number}]</div>
                    <h3 className="nf-mod-title">{m.title}</h3>
                  </div>
                  <div className="nf-mod-img-wrap">
                    <Image
                      src={m.image}
                      alt={m.title}
                      width={600}
                      height={360}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="nf-mod-text">{m.text}</p>
              </article>
            ))}
          </div>

          <div className="nf-mod-dots">
            {modules.map((m, index) => (
              <button
                key={m.number}
                type="button"
                className={index === activeIndex ? "nf-mod-dot-active" : "nf-mod-dot"}
                onClick={() => scrollToIndex(index)}
                aria-label={`Модуль ${m.number}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

