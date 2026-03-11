export default function ChangesSection() {
  const items = [
    {
      number: '01',
      text: 'Більше енергії в день: зменшує втому після буденних навантажень',
    },
    {
      number: '02',
      text: 'Кращий сон і відновлення: легше заспокоюється нервова система',
    },
    {
      number: '03',
      text: 'Ясніша голова: увага, концентрація, памʼять і швидкість реакції',
    },
    {
      number: '04',
      text: 'Стресостійкість: менше тривожності в тілі, більше внутрішньої стабільності',
    },
    {
      number: '05',
      text: 'Відчуття контролю: тіло слухається, рух стає точним і легким',
    },
    {
      number: '06',
      text: 'Постава і тонус: рівніший силует, сильніший кор, менше дефектів від сидіння/стресу',
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-white overflow-hidden reveal-up"
      data-animate
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2
          className="text-[2.3rem] md:text-[3.3rem] font-light text-center mb-14 text-gray-900 leading-none reveal-fade"
          data-animate
        >
          Які зміни ти{' '}
          <span className="italic font-light text-gray-900">отримаєш</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.number}
              className="rounded-3xl p-7 md:p-8 border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] hover:bg-white transition-all duration-300 hover:-translate-y-1 reveal-up reveal-delay-1"
              data-animate
            >
              <div className="text-4xl md:text-5xl font-light italic mb-4 text-[#b66ad4]">
                [{item.number}]
              </div>
              <p className="mt-1 text-sm md:text-base leading-snug font-light text-gray-900">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

