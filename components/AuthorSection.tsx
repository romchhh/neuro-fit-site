import Image from "next/image";

export default function AuthorSection() {
  const items = [
    "Дипломований хореограф та сертифікований тренер",
    "Міжнародна кваліфікація Polestar Pilates",
    "8 років досвіду у хореографічній та тренерській діяльності",
    "Засновниця курсу Smart Movement та NeuroFit",
    "Експерт у поєднанні пілатесу, функціональних тренувань і нейропрактик",
    "Працюю з тілом через усвідомлений рух, дихання та нейрозв'язки",
    "Орієнтована на м'який, але глибокий підхід до трансформації тіла й свідомості",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,275;0,400;0,700;1,275;1,400;1,700&display=swap');

        .author-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: 40px;
          line-height: 1;
          letter-spacing: 0;
          color: #EAC6EF;
        }

        .author-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
          font-size: 54px;
          line-height: 1;
          letter-spacing: 0;
          color: #1a1a1a;
        }

        .author-item {
          font-family: 'Montserrat', sans-serif;
          font-weight: 275;
          font-style: normal;
          font-size: 18px;
          line-height: 1.45;
          letter-spacing: 0;
          color: #1a1a1a;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .author-label { font-size: 32px; }
          .author-name  { font-size: 42px; }
          .author-item  { font-size: 16px; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .author-label { font-size: 24px; }
          .author-name  { font-size: 34px; }
          .author-item  { font-size: 14px; line-height: 1.5; }
        }
      `}</style>

      <section
        className="relative bg-white py-16 md:py-24 px-4 overflow-hidden reveal-up"
        data-animate
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-[28px] overflow-hidden flex flex-col md:flex-row reveal-scale"
            style={{ background: "#FFF6FF" }}
            data-animate
          >
            {/* ── TEXT SIDE ── */}
            <div className="w-full md:w-[38%] shrink-0 flex flex-col justify-center px-8 py-10 md:px-10 md:py-14" style={{ background: "#FFF6FF" }}>
              <span className="author-label block mb-3 md:mb-4">
                Авторка проєкту
              </span>

              <h2 className="author-name mb-8 md:mb-10">Юлія Бутенко</h2>

              <ul className="space-y-3 md:space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="shrink-0 rounded-full bg-gray-700"
                      style={{ width: 5, height: 5, marginTop: "0.6em" }}
                    />
                    <span className="author-item">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── IMAGE SIDE ── */}
            <div className="w-full md:w-[62%] relative">
              {/* Mobile: fixed height; desktop: fills the card */}
              <div className="relative w-full h-[360px] md:h-full md:min-h-[620px]">
                <Image
                  src="/image 2.jpg"
                  alt="Авторка проєкту Юлія Бутенко"
                  fill
                  className="object-cover object-top"
                  style={{ borderRadius: "28px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}