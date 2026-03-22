export default function ProjectSection() {
  const items = [
    {
      number: '01',
      text: "Бажаєте удосконалити свій зовнішній стан, підвищити фізичні скіли",
    },
    {
      number: '02',
      text: "Хочете покращити пам'ять, концентрацію і увагу",
    },
    {
      number: '03',
      text: 'Працюєте з людьми і хочете бути більш енергетично стійкими і сфокусованими',
    },
    {
      number: '04',
      text: 'Втрачаєте концентрацію, рівновагу і тіло',
    },
    {
      number: '05',
      text: "Не бачите прогресу у тренуваннях і відчуваєте періодичні болі у тілі",
    },
    {
      number: '06',
      text: 'Проводите багато часу сидячи або тривалий час працюєте на ногах',
    },
    {
      number: '07',
      text: 'Страждаєте від заколисування у транспорті або відчуваєте головокружіння',
    },
    {
      number: '08',
      text: 'Маєте проблеми із зором, проводите багато часу у гаджетах',
    },
    {
      number: '09',
      text: 'Важко прокидаєтесь вранці і відчуваєте втому протягом дня',
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-white overflow-hidden reveal-up"
      data-animate
    >

      <div className="relative container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-[2.5rem] md:text-[4rem] font-light text-center mb-16 text-gray-900 leading-none reveal-fade"
            data-animate
        >
          Цей проект для вас, якщо{' '}
          <span className="italic font-light text-gray-900">ви:</span>
        </h2>

          {/* Grid → 2 стовпчики на мобільному, з центруванням останнього */}
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((item) => (
              <div
                key={item.number}
                className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] rounded-3xl p-8 border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_18px_45px_rgba(153,67,152,0.18)] hover:shadow-[0_26px_60px_rgba(153,67,152,0.28)] hover:bg-white/60 hover:border-pink-100/80 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] reveal-up reveal-delay-1"
                data-animate
              >
                <div className="text-5xl font-light italic mb-6 text-[#994398]">
                  [{item.number}]
                </div>
                <p className="mt-1 text-base leading-snug font-light text-black">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

