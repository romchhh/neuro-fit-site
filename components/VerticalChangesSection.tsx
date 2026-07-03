export default function VerticalChangesSection() {
  const items = [
    { number: '01', title: 'Рівніша постава', text: 'Тіло виглядає більш зібраним, плечі й голова поступово повертаються у природніше положення.' },
    { number: '02', title: 'Менше скутості', text: 'Легше в шиї, попереку, між лопатками після сидіння, роботи або навантажень.' },
    { number: '03', title: 'Сильніший кор', text: 'Глибокі мʼязи живота краще підтримують спину без агресивного навантаження.' },
    { number: '04', title: 'Краща опора', text: 'Стопи, таз і корпус починають працювати більш злагоджено.' },
    { number: '05', title: 'Легший рух', text: 'Хода, нахили, вставання, сидіння і щоденні рухи стають комфортнішими.' },
    { number: '06', title: 'Більше розуміння тіла', text: 'Ти знаєш, як підтримувати поставу не тільки на тренуванні, а й у побуті.' },
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden reveal-up" data-animate>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2 className="text-[2.3rem] md:text-[3.3rem] font-light text-center mb-14 text-gray-900 leading-none reveal-fade" data-animate>
          Які зміни ти <span className="italic font-light">отримаєш</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.number}
              className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] rounded-3xl p-7 md:p-8 border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] hover:bg-white transition-all duration-300 hover:-translate-y-1 reveal-up reveal-delay-1 text-left"
              data-animate
            >
              <div className="text-4xl md:text-5xl font-light italic mb-4 text-[#b66ad4]">[{item.number}]</div>
              <p className="mt-1 text-sm md:text-base leading-snug font-light text-gray-900">
                <span className="font-semibold">{item.title}.</span> {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
