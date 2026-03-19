export const metadata = {
  title: 'Публічна оферта про надання послуг',
};

import ScrollRevealProvider from '../scroll-reveal';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';

export default function PublicOfferPage() {
  return (
    <ScrollRevealProvider>
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100 text-[#1e1624]">
        <Header />

        <section className="pt-28 pb-16 md:pt-32 md:pb-20" data-animate>
          <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-6 text-2xl md:text-3xl font-semibold tracking-wide uppercase">
          Публічна оферта про надання послуг
        </h1>

        <p className="mb-4">
          Цей документ є офіційною пропозицією (публічною офертою) про надання
          інформаційно-консультаційних послуг у рамках онлайн-студії Юлії Бутенко.
        </p>
        <p className="mb-6">
          Фізична особа-підприємець / самозайнята особа Юлія Бутенко (далі — «Виконавець»)
          пропонує будь-якій фізичній особі (далі — «Клієнт») укласти договір на умовах,
          викладених нижче.
        </p>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">1. Загальні положення</h2>
          <p className="mb-2">
            1.1. Цей документ є публічною офертою відповідно до чинного законодавства.
          </p>
          <p>
            1.2. Факт оплати будь-яких послуг онлайн-студії означає повне та безумовне прийняття
            (акцепт) цієї оферти.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">2. Предмет договору</h2>
          <p className="mb-2">
            2.1. Виконавець надає Клієнту доступ до послуг онлайн-студії.
          </p>
          <p className="mb-2">2.2. Послуги можуть включати:</p>
          <ul className="mb-2 list-disc pl-5 space-y-1">
            <li>Онлайн-курси</li>
            <li>Тренувальні програми</li>
            <li>Відеоуроки</li>
            <li>Прямі ефіри</li>
            <li>Консультації</li>
            <li>Доступ до Telegram-бота або чатів</li>
          </ul>
          <p className="mb-2">
            2.3. Конкретний склад послуг визначається на сторінці продукту або в соціальних
            мережах.
          </p>
          <p>
            2.4. Послуги є інформаційно-консультаційними і не є медичними.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">3. Порядок надання послуг</h2>
          <p className="mb-2">
            3.1. Доступ до послуг надається після підтвердження оплати.
          </p>
          <p className="mb-2">
            3.2. Доступ може бути обмежений у часі залежно від формату продукту.
          </p>
          <p>
            3.3. Виконавець має право змінювати наповнення продуктів без погіршення якості.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">4. Вартість та оплата</h2>
          <p className="mb-2">
            4.1. Вартість послуг вказується на сторінках продажу, в соціальних мережах або у
            переписці.
          </p>
          <p className="mb-2">
            4.2. Оплата здійснюється через доступні платіжні системи.
          </p>
          <p>
            4.3. Клієнт несе відповідальність за правильність платіжних даних.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">5. Політика повернення коштів</h2>
          <p className="mb-2">
            5.1. Оскільки послуги надаються у цифровому форматі, після надання доступу до
            матеріалів послуга вважається такою, що почала виконуватися.
          </p>
          <p className="mb-2">
            5.2. Повернення коштів можливе лише у випадках, передбачених законодавством або
            якщо це прямо зазначено у конкретній пропозиції.
          </p>
          <p>
            5.3. Запит на повернення розглядається індивідуально.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">6. Права та обов’язки сторін</h2>
          <p className="mb-2 font-medium">Виконавець має право:</p>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>Змінювати формат і зміст продуктів</li>
            <li>Обмежити доступ у разі порушення умов</li>
            <li>Відмовити в обслуговуванні без пояснення причин</li>
          </ul>
          <p className="mb-2 font-medium">Клієнт зобов’язується:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Не передавати доступ третім особам</li>
            <li>Не копіювати та не поширювати матеріали</li>
            <li>Використовувати контент лише для особистого користування</li>
          </ul>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">7. Інтелектуальна власність</h2>
          <p className="mb-2">
            7.1. Усі матеріали онлайн-студії є інтелектуальною власністю Виконавця.
          </p>
          <p className="mb-2">7.2. Забороняється:</p>
          <ul className="mb-2 list-disc pl-5 space-y-1">
            <li>Копіювання</li>
            <li>Поширення</li>
            <li>Продаж матеріалів</li>
            <li>Передача доступу третім особам</li>
          </ul>
          <p>
            7.3. У разі порушення доступ може бути заблокований без повернення коштів.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">8. Відповідальність</h2>
          <p className="mb-2">
            8.1. Виконавець не гарантує конкретних результатів, оскільки вони залежать від
            індивідуальних особливостей Клієнта.
          </p>
          <p className="mb-2">
            8.2. Клієнт самостійно несе відповідальність за стан свого здоров’я.
          </p>
          <p>
            8.3. Перед початком тренувань Клієнт повинен оцінити свій фізичний стан.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">9. Форс-мажор</h2>
          <p>
            9.1. Сторони звільняються від відповідальності у разі обставин непереборної сили.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">10. Контактна інформація</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email: <a href="mailto:info.healthybody.online@gmail.com" className="underline">info.healthybody.online@gmail.com</a></li>
            <li>Telegram: <a href="https://t.me/juli.butenko" className="underline">@juli.butenko</a></li>
            <li>Instagram: <a href="https://www.instagram.com/juli.butenko.fit" className="underline">@juli.butenko.fit</a></li>
          </ul>
          <p className="mt-4">
            Оплачуючи будь-які послуги онлайн-студії Юлії Бутенко, Клієнт підтверджує, що
            ознайомлений з умовами цієї оферти та погоджується з ними.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold">11. Реквізити</h2>
          <p className="mb-1">ФОП Бутенко Ю.О.</p>
          <p className="mb-1">ІПН 3602302222</p>
          <p className="mb-1">
            Юр. адреса: проспект Космонавтів, Вінниця, 21021
          </p>
          <p className="mb-1">
            Телефон: <a href="tel:+380968881739" className="underline">+380968881739</a>
          </p>
          <p>
            Email: <a href="mailto:info.healthybody.online@gmail.com" className="underline">info.healthybody.online@gmail.com</a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold">12. Гарантія повернення коштів</h2>
          <p>
            Якщо протягом першого тижня з моменту оплати ви захочете повернути кошти, напишіть
            нам. Ми гарантовано виконаємо повернення.
          </p>
        </section>

        <section data-animate>
          <p className="mb-2">
            Всі права захищенні. Будь-яке копіювання матеріалів дозволяється тільки з погодження
            правовласників.
          </p>
        </section>

        {/* CTA блок: питання / написати нам */}
        <section className="mt-10 mb-4" data-animate>
          <div className="rounded-2xl bg-white/80 shadow-xl border border-white/70 px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm md:text-base font-semibold italic uppercase tracking-[0.18em] text-[#4C2440]">
                Залишилися запитання?
              </p>
            </div>
            <a
              href="https://t.me/JuliButenko"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold tracking-[0.18em] uppercase whitespace-nowrap transition-colors"
              style={{
                background: 'rgba(255, 219, 236, 0.92)',
                borderColor: 'rgba(255, 219, 236, 0.92)',
                borderWidth: 1,
                color: '#4C2440',
              }}
            >
              Напишіть нам
            </a>
          </div>
        </section>

        {/* Логотип внизу сторінки */}
        <section className="mb-6 mt-2 flex justify-center" data-animate>
          <Image
            src="/logo-neurofit.png"
            alt="NeuroFit logo"
            width={192}
            height={192}
            className="rounded-full object-contain"
            priority
          />
        </section>
          </div>
        </section>

        <FooterSection />
      </main>
    </ScrollRevealProvider>
  );
}

