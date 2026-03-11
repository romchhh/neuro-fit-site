export default function ProjectSection() {
  const items = [
    {
      number: '01',
      text: "Бажаєте удосконалити свій зовнішній стан підвищити фізичні скіли",
    },
    {
      number: '02',
      text: "Хочете покращити пам'ять концентрацію, увагу",
    },
    {
      number: '03',
      text: 'Працюєте з людьми й хочете бути більш енергетично стійкими й сфокусованими',
    },
    {
      number: '04',
      text: 'Втрачаєте концентрацію рівновагу тіла',
    },
    {
      number: '05',
      text: "Не бачите прогресу у тренуваннях і відчуваєте періодичні болі в тілі",
    },
    {
      number: '06',
      text: 'Проводите багато часу сидячі або тривалий час працюєте на ногах',
    },
    {
      number: '07',
      text: 'Страждаєте від заколисування у транспорті або відчуваєте головокружіння',
    },
    {
      number: '08',
      text: 'Маєте проблеми із зором проводите багато часу у гаджетах',
    },
    {
      number: '09',
      text: 'Важко прокидаєтесь вранці і відчуваєте втому впродовж дня',
    },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-50 to-white overflow-hidden reveal-up"
      data-animate
    >
      {/* Рожеве світло по центру */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[480px] h-[480px] md:w-[620px] md:h-[620px] rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-[2.5rem] md:text-[4rem] font-light text-center mb-16 text-gray-900 leading-none reveal-fade"
            data-animate
        >
          Цей проект для вас, якщо{' '}
          <span className="italic font-light text-gray-900">ви:</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.number}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 hover:-translate-y-1 reveal-up reveal-delay-1"
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

