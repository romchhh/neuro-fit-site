import Image from 'next/image';

const items = [
  {
    number: '01',
    title: 'Рівніша постава',
    text: 'Тіло виглядає більш зібраним, плечі й голова поступово повертаються у природніше положення.',
    image: '/vertical/services/change-01.jpg',
  },
  {
    number: '02',
    title: 'Менше скутості',
    text: 'Легше в шиї, попереку, між лопатками після сидіння, роботи або навантажень.',
    image: '/vertical/services/change-02.jpg',
  },
  {
    number: '03',
    title: 'Сильніший кор',
    text: 'Глибокі мʼязи живота краще підтримують спину без агресивного навантаження.',
    image: '/vertical/services/change-03.jpg',
  },
  {
    number: '04',
    title: 'Краща опора',
    text: 'Стопи, таз і корпус починають працювати більш злагоджено.',
    image: '/vertical/services/change-04.jpg',
  },
  {
    number: '05',
    title: 'Легший рух',
    text: 'Хода, нахили, вставання, сидіння і щоденні рухи стають комфортнішими.',
    image: '/vertical/services/change-05.jpg',
  },
  {
    number: '06',
    title: 'Більше розуміння тіла',
    text: 'Ти знаєш, як підтримувати поставу не тільки на тренуванні, а й у побуті.',
    image: '/vertical/services/change-06.jpg',
  },
];

export default function VerticalChangesSection() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden reveal-up" data-animate>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2
          className="text-[2.3rem] md:text-[3.3rem] font-light text-center mb-14 text-gray-900 leading-none reveal-fade"
          data-animate
        >
          Які зміни ти <span className="italic font-light">отримаєш</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <article
              key={item.number}
              className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] overflow-hidden rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] hover:bg-white transition-all duration-300 hover:-translate-y-1 reveal-up reveal-delay-1 text-left"
              data-animate
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="text-3xl md:text-4xl font-light italic mb-3 text-[#b66ad4]">
                  [{item.number}]
                </div>
                <p className="text-sm md:text-base leading-snug font-light text-gray-900">
                  <span className="font-semibold">{item.title}.</span> {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
