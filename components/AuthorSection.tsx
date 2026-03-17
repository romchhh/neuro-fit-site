import Image from "next/image";

export default function AuthorSection() {
  const items = [
    "Сертифікована тренерка та дипломована хореографиня",
    "Міжнародна кваліфікація Polestar Pilates",
    "10 років досвіду у хореографічній та тренерській діяльності",
    "Експерт у поєднанні пілатесу, функціональних тренувань і нейропрактик",
    "Робота із тілом через усвідомлений рух, дихання та нейрозв'язки",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,275;0,400;0,700;1,275;1,400;1,700&display=swap');

        .author-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: 48px;
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
          font-style: normal;
          line-height: 1.45;
          letter-spacing: 0;
          color: #1a1a1a;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .author-label { font-size: 36px; }
          .author-name  { font-size: 42px; }
          .author-item  { font-size: 16px; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .author-label { font-size: 28px; }
          .author-name  { font-size: 34px; }
        }
      `}</style>

      <section
        className="relative bg-white py-16 md:py-24 px-4 overflow-hidden reveal-up"
        data-animate
      >
        <div className="max-w-6xl mx-auto">
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

              <ul className="space-y-3 text-[16px] md:text-[24px] font-light text-gray-800 leading-[1.25] text-left">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[14px] w-[8px] h-[8px] rounded-full bg-black shrink-0" />
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
                  src="/IMG_4958.jpg"
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