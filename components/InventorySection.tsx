"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const inventoryImages = [
  "/inventory/inventory-1.jpg",
  "/inventory/inventory-2.jpg",
  "/inventory/inventory-3.jpg",
  "/inventory/inventory-4.jpg",
  "/inventory/inventory-5.jpg",
  "/inventory/inventory-6.jpg",
  "/inventory/inventory-7.jpg",
];

export default function InventorySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % inventoryImages.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? inventoryImages.length - 1 : prev - 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % inventoryImages.length);
  };

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? inventoryImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <style>{`
        .inventory-section {
          position: relative;
          background: #ffffff;
          padding: 40px 0 56px; /* трохи вище до попереднього блоку */
        }

        .inventory-inner {
          padding: 0 32px;
        }

        .inventory-header {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
          align-items: flex-start;
          text-align: left;
        }

        .inventory-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 24px;
          color: #3a3040;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .inventory-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 32px;
          line-height: 1.1;
          color: #3a3a3a;
          max-width: none;
        }

        .inventory-bg-title-wrap {
          margin-top: 12px;
          width: 100%;
          text-align: center;
          overflow: hidden;
        }

        .inventory-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(60px, 13vw, 250px);
          line-height: 1;
          background: linear-gradient(90deg, rgba(230,218,240,0.46) 0%, rgba(233,187,232,0.46) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
          letter-spacing: 0.02em;
        }

        /* Блок із магазином BOOMERANG */
        .inventory-shop {
          margin-top: 40px;
          margin-bottom: 8px;
          padding: 22px 26px;
          border-radius: 26px;
          border: 1px solid #f0d9f3;
          background: radial-gradient(circle at top left, #fff5ff 0%, #f9ecff 40%, #fdf7ff 100%);
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 22px;
        }

        .inventory-shop-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .inventory-shop-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b58ac8;
        }

        .inventory-shop-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #2d1636;
        }

        .inventory-shop-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #3a3a3a;
        }

        .inventory-shop-highlight {
          font-weight: 600;
          color: #a0568b;
        }

        .inventory-shop-right {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
        }

        .inventory-shop-discount {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(232,160,200,0.18);
          color: #a0568b;
          border: 1px solid rgba(224,153,195,0.4);
          white-space: nowrap;
        }

        .inventory-shop-button {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 30px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: #E8A0C8;
          color: #ffffff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 8px 20px rgba(232,160,200,0.35);
        }

        .inventory-shop-button:hover {
          background: #df8fbd;
          transform: translateY(-1px) scale(1.01);
          box-shadow: 0 10px 26px rgba(232,160,200,0.45);
        }

        /* Горизонтальна стрічка з фото */
        .inventory-list {
          display: flex;
          gap: 18px;
          margin-top: -40px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 8px;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .inventory-list::-webkit-scrollbar {
          display: none;
        }

        .inventory-item {
          border-radius: 22px;
          overflow: hidden;
          background: #f7f0fb;
          border: 1px solid #f0d9f3;
          flex-shrink: 0;
          width: 260px;
        }

        .inventory-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Лайтбокс */
        .inventory-lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .inventory-lightbox-inner {
          position: relative;
          max-width: min(900px, 90vw);
          max-height: min(90vh, 900px);
          padding: 40px 72px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inventory-lightbox-image {
          max-width: min(70vw, 880px);
          max-height: 80vh;
          width: auto;
          height: auto;
          display: block;
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(15, 23, 42, 0.45);
        }

        .inventory-lightbox-close {
          position: absolute;
          top: 8px;
          right: 14px;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: none;
          background: rgba(15, 23, 42, 0.72);
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .inventory-lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: none;
          background: rgba(15, 23, 42, 0.72);
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .inventory-lightbox-arrow--left {
          left: 10px;
        }

        .inventory-lightbox-arrow--right {
          right: 10px;
        }

        @media (max-width: 1024px) {
          .inventory-item {
            width: 220px;
          }
        }

        @media (max-width: 640px) {
          .inventory-inner {
            padding: 0 20px;
          }
          .inventory-section {
            padding: 32px 0 44px;
          }
          .inventory-label {
            font-size: 20px;
          }
          .inventory-subtitle {
            font-size: 20px;
            line-height: 1.28;
          }
          .inventory-bg-title {
            font-size: clamp(40px, 17vw, 80px);
            white-space: nowrap;
            letter-spacing: 0;
          }
          .inventory-bg-title-wrap {
            text-align: center;
            width: 100%;
            overflow: hidden;
          }
          .inventory-item {
            width: 200px;
          }
          .inventory-shop {
            flex-direction: column;
            align-items: stretch;
            padding: 18px 18px 20px;
            border-radius: 22px;
            gap: 14px;
          }
          .inventory-shop-right {
            align-items: flex-start;
          }
          .inventory-shop-button {
            width: auto;
            padding-inline: 26px;
          }
        }
      `}</style>

      <section className="inventory-section reveal-up" data-animate>
        <div className="inventory-inner">
          <div className="inventory-header reveal-fade" data-animate>

            <p className="inventory-subtitle">
              Інвентар, який знадобиться вам для тренувань.
            </p>
            <div className="inventory-bg-title-wrap">
              <span className="inventory-bg-title">Інвентар</span>
            </div>
          </div>

          <div className="inventory-list reveal-up reveal-delay-1" data-animate>
            {inventoryImages.map((src, index) => (
              <button
                type="button"
                className="inventory-item"
                key={src}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={src}
                  alt={`Інвентар ${index + 1}`}
                  width={800}
                  height={600}
                  className="inventory-image"
                />
              </button>
            ))}
          </div>

          <div className="inventory-shop reveal-fade" data-animate>
            <div className="inventory-shop-left">
              <span className="inventory-shop-eyebrow">партнерський інвентар</span>
              <h3 className="inventory-shop-title">BOOMERANG — все, що потрібно для тренувань вдома</h3>
              <p className="inventory-shop-text">
                Підібраний інвентар, який ідеально доповнює програми NeuroFit:
                мʼячі, еластичні стрічки, ролери та все, що допоможе мʼяко працювати з тілом
                та відновленням.
              </p>
            </div>
            <div className="inventory-shop-right">
              <div className="inventory-shop-discount">
                ЗНИЖКА 10% ДЛЯ УЧАСНИКІВ ПРОЄКТІВ ЮЛІЇ
              </div>
              <a
                href="https://www.instagram.com/boomerang.fitstore?igsh=MXM5eThtcGJmOXlyeg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inventory-shop-button"
              >
                Магазин
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="inventory-lightbox-backdrop"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="inventory-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="inventory-lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Закрити"
            >
              ×
            </button>
            <button
              type="button"
              className="inventory-lightbox-arrow inventory-lightbox-arrow--left"
              onClick={showPrev}
              aria-label="Попереднє фото"
            >
              ←
            </button>
            <Image
              src={inventoryImages[activeIndex]}
              alt={`Інвентар ${activeIndex + 1}`}
              width={1400}
              height={1050}
              className="inventory-lightbox-image"
            />
            <button
              type="button"
              className="inventory-lightbox-arrow inventory-lightbox-arrow--right"
              onClick={showNext}
              aria-label="Наступне фото"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

