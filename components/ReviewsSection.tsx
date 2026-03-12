"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Review = {
  id: number;
  name: string;
  tag: string;
  text: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Ірина, 32",
    tag: "Після NeuroFit",
    text: "Вперше відчуваю, що тренування підтримують мене, а не виснажують. Спина перестала ниити, зʼявилась легкість у русі протягом дня.",
  },
  {
    id: 2,
    name: "Марія, 28",
    tag: "Офісна робота",
    text: "Сиджу за компʼютером по 8–10 годин. Вправи з курсу допомогли зняти напругу в шиї та плечах, і головні болі майже зникли.",
  },
  {
    id: 3,
    name: "Олена, 40",
    tag: "Повернення до тіла",
    text: "Після перерви у спорті боялася повертатися. Формат NeuroFit виявився дуже мʼяким, але тіло швидко стало сильнішим і стійкішим.",
  },
  {
    id: 4,
    name: "Наталя, 35",
    tag: "Мама двох дітей",
    text: "Помітила, що після занять зʼявилося більше енергії на побут і дітей, а не навпаки. Тіло тримає навантаження набагато спокійніше.",
  },
  {
    id: 5,
    name: "Галина, 45",
    tag: "Здорова спина",
    text: "Раніше регулярно прокидалась від болю в попереку. Зараз тримаю спину впевненіше, а болі стали рідкісними та значно слабшими.",
  },
  {
    id: 6,
    name: "Оксана, 30",
    tag: "Про усвідомлений рух",
    text: "Найцінніше — навчилась відчувати, де в тілі напруга, і мʼяко її розпускати. Це вплинуло не тільки на поставу, а й на емоційний стан.",
  },
  {
    id: 7,
    name: "Катерина, 27",
    tag: "Фріланс та гаджети",
    text: "Постійно в телефоні й за ноутбуком, шия була як камінь. Після кількох тижнів практики рухи стали вільніші, а голова ясніша.",
  },
  {
    id: 8,
    name: "Світлана, 38",
    tag: "Про баланс",
    text: "Вправи на баланс і координацію дуже зайшли. Відчуваю себе стійкішою фізично та психологічно, менше реагую на стрес.",
  },
  {
    id: 9,
    name: "Юлія, 34",
    tag: "Мʼякий формат",
    text: "Приємно, що можна працювати з тілом без стрибків і агресивних навантажень, але при цьому почувати ефект уже через кілька занять.",
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const cardRect = card.getBoundingClientRect();

    // Центруємо картку відносно вікна (viewport), а не ширини всього скрол-контейнера
    const viewportCenter = window.innerWidth / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;
    const delta = cardCenter - viewportCenter;

    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex === 0 ? reviews.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(activeIndex === reviews.length - 1 ? 0 : activeIndex + 1);
  };

  // Визначаємо активну картку при ручному скролі
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      // Визначаємо найближчу до центру екрана картку
      const viewportCenter = window.innerWidth / 2;

      let closestIndex = 0;
      let closestDelta = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const delta = Math.abs(cardCenter - viewportCenter);
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

  // Scroll to first card after mount
  useEffect(() => {
    const id = window.setTimeout(() => scrollToIndex(0), 50);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <style>{`
        .reviews-section {
          position: relative;
          background: white;
          padding: 40px 0 56px;
          overflow: visible; /* щоб підсвічування та масштаб не обрізались */
        }

        .reviews-inner {
          padding: 0 32px;
        }

        .reviews-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 8px;
        }

        .reviews-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: 32px;
          line-height: 1.1;
          color: #3a3a3a;
        }

        .reviews-arrows {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .reviews-arrow {
          font-size: 24px;
          color: #c9a0d4;
          cursor: pointer;
          user-select: none;
          transition: color 0.2s;
          line-height: 1;
          background: transparent;
          border: none;
          padding: 0;
        }
        .reviews-arrow:hover { color: #9b6aad; }

        .reviews-bg-title-wrap {
          overflow: hidden;
          margin-bottom: -60px;
          position: relative;
          z-index: 0;
          text-align: center; /* центруємо контейнер */
        }

        .reviews-bg-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: clamp(60px, 13vw, 250px);
          line-height: 1;
          white-space: nowrap;
          display: inline-block;
          background: linear-gradient(90deg, rgba(230,218,240,0.46) 0%, rgba(233,187,232,0.46) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        /* The scroll container spans full viewport width */
        .reviews-scroll-outer {
          position: relative;
          z-index: 1;
          width: 100vw;
          margin-left: calc(-32px);  /* pull out of .reviews-inner padding */
          overflow: visible;
          padding-top: 20px; /* простір щоб scale і тінь зверху не обрізались */
          margin-top: -20px; /* компенсуємо відступ, щоб не зміщувати лейаут */
        }

        .reviews-scroll {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          overflow-y: visible; /* дозволяємо картці та тіням виходити за межі контейнера по вертикалі */
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          scroll-behavior: smooth;
          padding-top: 8px;   /* щоб тінь і scale зверху не обрізались */
          padding-bottom: 16px;
        }
        .reviews-scroll::-webkit-scrollbar { display: none; }

        /* Desktop: порожній простір зліва/справа,
           щоб перший/останній відгук мали «пусту» сторону */
        @media (min-width: 1024px) {
          .reviews-scroll::before,
          .reviews-scroll::after {
            content: "";
            flex-shrink: 0;
            width: calc((100vw - 620px) / 2);
          }
        }

        /* Mobile: теж додаємо відступи,
           щоб перша/остання картка могли стати по центру */
        @media (max-width: 640px) {
          .reviews-scroll-outer {
            margin-left: -16px; /* вже є, дублюємо для надійності */
            margin-top: 16px;   /* трохи опускаємо самі картки відгуків */
          }
          .reviews-scroll::before,
          .reviews-scroll::after {
            content: "";
            flex-shrink: 0;
            width: calc((100vw - 85vw) / 2); /* половина вільного простору */
          }
        }

        .review-card {
          background: #ffffff;
          border-radius: 28px;
          box-shadow: 0 18px 45px rgba(15,23,42,0.08);
          border: 1px solid #e5e7eb;
          flex-shrink: 0;
          width: 620px;
          max-width: 82vw;
          scroll-snap-align: center;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, filter 0.3s ease;
        }

        .review-card--active {
          transform: scale(1.04);
          box-shadow: 0 26px 60px rgba(15,23,42,0.12);
          opacity: 1;
          filter: none;
          z-index: 2;
        }

        .review-card--dim {
          opacity: 0.4;
          filter: blur(1.5px);
        }

        .review-avatar {
          width: 90px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 24px;
        }

        .review-avatar-dot {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          overflow: hidden;
        }

        .review-content {
          flex: 1;
          padding: 22px 26px 22px 10px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .review-name-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
        }

        .review-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #333333;
        }

        .review-tag {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 12px;
          color: #b5a0c9;
          white-space: nowrap;
        }

        .review-text {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.7;
          color: #4a4a4a;
        }

        .reviews-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
        }

        .reviews-dot {
          width: 10px; height: 10px;
          border-radius: 999px;
          border: 1.5px solid #e8a0c8;
          background: transparent;
          cursor: pointer;
          padding: 0;
        }

        .reviews-dot-active {
          width: 28px; height: 10px;
          border-radius: 999px;
          background: #e8a0c8;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        @media (max-width: 640px) {
          .reviews-section {
            padding-top: 24px; /* трохи вище на мобільній версії */
          }
          .reviews-inner { padding: 0 16px; }
          .reviews-scroll-outer {
            margin-left: -16px;
            padding-top: 20px;
            margin-top: -20px;
          }
          .reviews-subtitle { font-size: 20px; }
          .review-card { width: 85vw; }
          .review-avatar { width: 70px; padding-left: 18px; }
          .review-avatar-dot { width: 44px; height: 44px; }
          .reviews-bg-title {
            font-size: clamp(40px, 17vw, 80px);
            white-space: nowrap;
            letter-spacing: 0;
          }
          .reviews-bg-title-wrap {
            margin-bottom: -30px;
          }
        }
      `}</style>

      <section className="reviews-section reveal-up" data-animate>
        <div className="reviews-inner">

          {/* Header */}
          <div className="reviews-header reveal-fade" data-animate>
            <p className="reviews-subtitle">Відгуки тих, хто вже обрав NeuroFit</p>
            <div className="reviews-arrows">
              <button type="button" className="reviews-arrow" onClick={handlePrev} aria-label="Попередній">←</button>
              <button type="button" className="reviews-arrow" onClick={handleNext} aria-label="Наступний">→</button>
            </div>
          </div>

          {/* Big BG title */}
          <div className="reviews-bg-title-wrap">
            <span className="reviews-bg-title">Відгуки</span>
          </div>

          {/* Full-width scroll with centred cards */}
          <div className="reviews-scroll-outer reveal-up reveal-delay-1" data-animate>
            <div
              className="reviews-scroll"
              ref={scrollRef}
            >
              {reviews.map((review, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={review.id}
                    className={`review-card ${isActive ? "review-card--active" : "review-card--dim"}`}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    onClick={() => scrollToIndex(index)}
                  >
                    <div className="review-avatar">
                      <div className="review-avatar-dot">
                        <Image
                          src="/review-avatar.png"
                          alt={review.name}
                          width={52}
                          height={52}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="review-content">
                      <div className="review-name-row">
                        <span className="review-name">{review.name}</span>
                        <span className="review-tag">{review.tag}</span>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="reviews-dots">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                className={index === activeIndex ? "reviews-dot-active" : "reviews-dot"}
                onClick={() => scrollToIndex(index)}
                aria-label={`Відгук ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}