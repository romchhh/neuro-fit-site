export default function NeuroIntensiveChangesSection() {
  const items = [
    {
      number: '01',
      text: "Включеність і ясність: легше концентруватися й тримати увагу",
    },
    {
      number: '02',
      text: 'Менше напруги: нервова система швидше переходить у режим відновлення',
    },
    {
      number: '03',
      text: 'Координація і баланс: рух стає точнішим, тіло — більш керованим',
    },
    {
      number: '04',
      text: 'Більше ресурсу в побуті: відчуття легкості після робочого дня',
    },
    {
      number: '05',
      text: 'Розуміння, що і навіщо: короткі пояснення допомагають тренуватись усвідомлено',
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-white overflow-hidden reveal-up"
      data-animate
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,300;1,400&display=swap');`}</style>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <h2
          className="text-[2.3rem] md:text-[3.3rem] text-center mb-14 text-gray-900 leading-none reveal-fade"
          style={{ fontWeight: 300 }}
          data-animate
        >
          Які зміни ти{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 300 }}>отримаєш</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => {
            const [before, after] = item.text.split(':');
            return (
              <div
                key={item.number}
                className="w-[calc(50%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl p-7 md:p-8 border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)] hover:bg-white transition-all duration-300 hover:-translate-y-1 reveal-up reveal-delay-1 text-left"
                data-animate
              >
                <div className="text-4xl md:text-5xl font-light italic mb-4 text-[#b66ad4]">
                  [{item.number}]
                </div>
                <p className="mt-1 text-sm md:text-base leading-snug font-light text-gray-900">
                  <span className="font-semibold">{before}:</span>
                  {after}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

