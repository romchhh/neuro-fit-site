'use client';

import Image from 'next/image';
import { useRef } from 'react';
import PaywallLeadButton from '@/components/PaywallLeadButton';

const cards = [
  {
    title: 'Естетичні проблеми',
    text: 'Випираючий живіт, холка, завернуті плечі або крилоподібні лопатки; слабкий кор і відсутність опори.',
    image: '/vertical/for-who/estetychni-problemy.jpg',
  },
  {
    title: 'Біль і дискомфорт',
    text: 'Скутість у шиї, попереку або між лопатками; дискомфорт після сидіння чи робочого дня.',
    image: '/vertical/for-who/bil-i-dyskomfort.jpg',
  },
  {
    title: 'Особливості стоп',
    text: 'Плоскостопість, сковані пальці, виступаюча кісточка.',
    image: '/vertical/for-who/osoblyvosti-stop.jpg',
  },
  {
    title: 'Слабкість тазового дна',
    text: 'Слабкість тазового дна або дискомфорт у зоні тазу.',
    image: '/vertical/for-who/slabkist-tazovogo-dna.jpg',
  },
  {
    title: 'Хронічний стрес',
    text: 'Втома, напруга, відчуття, що тіло постійно «затиснуте».',
    image: '/vertical/for-who/khronichnyy-stres.jpg',
  },
  {
    title: 'Болісні місячні',
    text: 'Делікатні симптоми, повʼязані зі слабкістю тазового дна та напругою в зоні таза.',
    image: '/vertical/for-who/bolisni-misyachni.jpg',
  },
];

export default function VerticalForWhoSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>('.vt-forwho-card');
    const gap = 16;
    const step = (card?.offsetWidth ?? 280) + gap;
    container.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .vt-forwho-section {
          background: #fff;
          padding: 72px 24px 88px;
        }
        .vt-forwho-inner {
          max-width: 1120px;
          margin: 0 auto;
          text-align: center;
        }
        .vt-forwho-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-style: italic;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          line-height: 1;
          color: #D7ABD6;
          margin-bottom: 20px;
        }
        .vt-forwho-desc {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.45;
          color: #2a2a2a;
          max-width: 720px;
          margin: 0 auto 12px;
        }
        .vt-forwho-lead-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin: 24px 0 20px;
          max-width: 1120px;
        }
        .vt-forwho-lead {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          color: #4a2f49;
          margin: 0;
          text-align: left;
        }
        .vt-forwho-arrows {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .vt-forwho-arrow {
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
        .vt-forwho-arrow:hover { color: #9b6aad; }
        .vt-forwho-scroll-wrap {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-bottom: 28px;
          overflow: hidden;
        }
        .vt-forwho-scroll {
          display: flex;
          flex-wrap: nowrap;
          gap: 16px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 8px max(24px, calc((100vw - 1120px) / 2 + 24px)) 16px;
        }
        .vt-forwho-scroll::-webkit-scrollbar { display: none; }
        .vt-forwho-card {
          flex: 0 0 min(280px, 72vw);
          width: min(280px, 72vw);
          border-radius: 24px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e8e8e8;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
          scroll-snap-align: start;
          text-align: left;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .vt-forwho-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.1);
        }
        .vt-forwho-card-image {
          position: relative;
          aspect-ratio: 1 / 1;
          width: 100%;
          overflow: hidden;
          background: #f3f3f3;
        }
        .vt-forwho-card-body {
          padding: 16px 16px 18px;
        }
        .vt-forwho-card h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #4a2f49;
          margin: 0 0 8px;
        }
        .vt-forwho-card p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 0.88rem;
          line-height: 1.5;
          color: #3b2845;
          margin: 0;
        }
        .vt-forwho-note {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          color: #4a3044;
          max-width: 640px;
          margin: 0 auto 28px;
        }
        .vt-forwho-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          font-size: clamp(1rem, 2vw, 1.4rem);
          letter-spacing: 0.08em;
          padding: 16px 52px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg, #FCE0FF 0%, #FFBEFE 100%);
          color: #805D7F;
          box-shadow: 0 12px 32px rgba(208, 132, 208, 0.4);
        }
        @media (max-width: 640px) {
          .vt-forwho-section { padding-left: 0; padding-right: 0; }
          .vt-forwho-inner { padding: 0 20px; }
          .vt-forwho-lead-row {
            margin-left: 0;
            margin-right: 0;
          }
          .vt-forwho-arrows { gap: 12px; }
          .vt-forwho-scroll-wrap { overflow: visible; }
          .vt-forwho-scroll {
            padding-left: 20px;
            padding-right: 20px;
            gap: 12px;
          }
          .vt-forwho-card {
            flex-basis: min(240px, calc(100vw - 56px));
            width: min(240px, calc(100vw - 56px));
          }
          .vt-forwho-card-body { padding: 12px; }
          .vt-forwho-card h3 { font-size: 0.9rem; }
          .vt-forwho-card p { font-size: 0.8rem; }
        }
      `}</style>

      <section className="vt-forwho-section reveal-up" data-animate>
        <div className="vt-forwho-inner">
          <h2 className="vt-forwho-title">Для кого?</h2>
          <p className="vt-forwho-desc">
            Для тих, хто хоче м&apos;яко і системно попрацювати з поставою, спиною та глибокими
            м&apos;язами без жорстких навантажень.
          </p>

          <div className="vt-forwho-lead-row">
            <p className="vt-forwho-lead">Програма підійде, якщо ти помічаєш:</p>
            <div className="vt-forwho-arrows" aria-label="Навігація картками">
              <button
                type="button"
                className="vt-forwho-arrow"
                onClick={() => scrollByCard(-1)}
                aria-label="Попередній"
              >
                ←
              </button>
              <button
                type="button"
                className="vt-forwho-arrow"
                onClick={() => scrollByCard(1)}
                aria-label="Наступний"
              >
                →
              </button>
            </div>
          </div>

          <div className="vt-forwho-scroll-wrap reveal-up reveal-delay-1" data-animate>
            <div className="vt-forwho-scroll" ref={scrollRef}>
              {cards.map((card) => (
                <article key={card.title} className="vt-forwho-card">
                  <div className="vt-forwho-card-image">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>
                  <div className="vt-forwho-card-body">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="vt-forwho-note">
            Окремо можна працювати з делікатними симптомами, пов&apos;язаними зі слабкістю
            тазового дна та напругою в зоні таза.
          </p>

          <PaywallLeadButton
            className="vt-forwho-btn"
            productLabel="Вертикаль — блок «Для кого?»"
            afterLeadSent={() => {
              document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Я хочу
          </PaywallLeadButton>
        </div>
      </section>
    </>
  );
}
