import Image from "next/image";

export default function SuitableSection() {
  const items = [
    "сидяча робота або навпаки багато часу “на ногах”",
    "напруга, втома, нестача енергії",
    "болі / затиски / дискомфорт у тілі",
    "проблеми з балансом, координацією, концентрацією",
    "тіло виснажене важкими тренуваннями в залі",
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">

        {/* label */}
        <div className="flex justify-end mb-6">
          <span className="text-right text-[20px] md:text-[32px] leading-[1] font-bold italic text-[#EAC6EF]">
            Кому підійде
          </span>
        </div>

        {/* title */}
        <h2 className="text-right text-[24px] md:text-[64px] leading-[1] font-bold italic text-gray-900 mb-8 md:mb-14">
          Для жінок, які хочуть результат без насилля над собою і
          <br className="hidden md:block" />
          виснажливих тренувань
        </h2>

        {/* content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

          {/* image */}
          <div className="w-full md:w-7/12">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/komu-pidiide.jpg"
                alt="Жінка займається на килимку"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* list */}
          <div className="w-full md:w-5/12">
            <ul className="space-y-3 text-[16px] md:text-[24px] font-light text-gray-800 leading-[1.25] text-right">
              {items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[14px] w-[8px] h-[8px] rounded-full bg-black shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}