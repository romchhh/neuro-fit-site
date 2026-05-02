export const metadata = {
  title: 'Політика конфіденційності',
};

import ScrollRevealProvider from '../scroll-reveal';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <ScrollRevealProvider>
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100 text-[#1e1624]">
        <Header />

        <section className="pt-28 pb-16 md:pt-32 md:pb-20" data-animate>
          <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-6 text-2xl md:text-3xl font-semibold tracking-wide uppercase">
          Політика конфіденційності
        </h1>

        <p className="mb-4">
          Онлайн студія Юлії Бутенко (далі — «Ми», «Наш», «Сервіс») поважає вашу
          конфіденційність і прагне забезпечити захист персональних даних відповідно до вимог
          Загального регламенту захисту даних (GDPR).
        </p>
        <p className="mb-6">
          Ця Політика конфіденційності пояснює, які дані ми збираємо, як їх використовуємо,
          зберігаємо та захищаємо.
        </p>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">1. Які дані ми збираємо</h2>
          <p className="mb-2">Ми можемо збирати наступні персональні дані:</p>
          <h3 className="mb-1 font-medium">1.1. Дані, які ви надаєте добровільно:</h3>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>Ім’я та прізвище</li>
            <li>Email-адреса</li>
            <li>Номер телефону</li>
            <li>Дані для участі в курсі (анкети, відповіді, запити)</li>
          </ul>
          <h3 className="mb-1 font-medium">1.2. Дані про здоров’я (тільки за вашою згодою):</h3>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>Фізичний стан</li>
            <li>Рівень підготовки</li>
            <li>Обмеження або особливості (для безпечних тренувань)</li>
          </ul>
          <h3 className="mb-1 font-medium">1.3. Технічні дані:</h3>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>IP-адреса</li>
            <li>Дані браузера</li>
            <li>Cookies</li>
          </ul>
          <h3 className="mb-1 font-medium">1.4. Дані про використання сервісу:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Прогрес у курсі</li>
            <li>Активність у Telegram-боті</li>
            <li>Взаємодія з контентом</li>
          </ul>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">2. Як ми використовуємо ваші дані</h2>
          <p className="mb-2">Ми використовуємо персональні дані для:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Надання доступів до курсів</li>
            <li>Персоналізації тренувань і рекомендацій</li>
            <li>Зворотного зв’язку з вами</li>
            <li>Обробки платежів</li>
            <li>Надсилання інформаційних та маркетингових матеріалів (за вашою згодою)</li>
            <li>Покращення якості продуктів</li>
          </ul>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">3. Правові підстави обробки (GDPR)</h2>
          <p className="mb-2">Ми обробляємо ваші дані на підставі:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Вашої згоди</li>
            <li>Виконання договору (участь у курсі)</li>
            <li>Законних інтересів (покращення сервісу)</li>
          </ul>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">4. Де ми обробляємо дані</h2>
          <p className="mb-2">Ваші дані можуть оброблятися через:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Платформи онлайн-курсів</li>
            <li>Telegram-боти</li>
            <li>Instagram / соціальні мережі</li>
            <li>Email-сервіси</li>
            <li>Платіжні системи</li>
          </ul>
          <p className="mt-2">
            Ці сервіси можуть знаходитися за межами вашої країни, але ми забезпечуємо належний
            рівень захисту даних.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">5. Передача даних третім особам</h2>
          <p className="mb-2">Ми не продаємо ваші персональні дані.</p>
          <p className="mb-2">Дані можуть передаватися лише:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Платіжним системам (для обробки оплат)</li>
            <li>Email-платформам (для розсилок)</li>
            <li>CRM або платформам курсів</li>
            <li>Аналітичним сервісам</li>
          </ul>
          <p className="mt-2">Усі партнери зобов’язані дотримуватися конфіденційності.</p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">6. Зберігання даних</h2>
          <p className="mb-2">Ми зберігаємо ваші дані лише протягом часу, необхідного для:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Надання послуг</li>
            <li>Виконання юридичних зобов’язань</li>
          </ul>
          <p className="mt-2">
            Після цього дані видаляються або анонімізуються.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">7. Ваші права (GDPR)</h2>
          <p className="mb-2">Ви маєте право:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Отримати доступ до своїх даних</li>
            <li>Виправити або оновити дані</li>
            <li>Видалити свої дані («право на забуття»)</li>
            <li>Обмежити обробку</li>
            <li>Заперечити проти обробки</li>
            <li>Перенести дані</li>
            <li>Відкликати згоду у будь-який момент</li>
          </ul>
          <p className="mt-2">
            Для цього зв’яжіться з нами через контакти, вказані нижче.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">8. Cookies</h2>
          <p className="mb-2">Ми використовуємо cookies для:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Коректної роботи сайту</li>
            <li>Аналітики</li>
            <li>Покращення користувацького досвіду</li>
          </ul>
          <p className="mt-2">
            Ви можете змінити налаштування cookies у своєму браузері.
          </p>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">9. Захист даних</h2>
          <p className="mb-2">
            Ми застосовуємо технічні та організаційні заходи безпеки, щоб захистити ваші дані
            від:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Несанкціонованого доступу</li>
            <li>Втрати</li>
            <li>Зміни або розголошення</li>
          </ul>
        </section>

        <section className="mb-6" data-animate>
          <h2 className="mb-2 font-semibold">10. Зміни до політики</h2>
          <p>
            Ми можемо оновлювати цю Політику. Актуальна версія завжди доступна на сторінці, де
            вона розміщена.
          </p>
        </section>

        <section data-animate>
          <h2 className="mb-2 font-semibold">11. Контактна інформація</h2>
          <p className="mb-2">
            Якщо у вас є питання або запити щодо обробки даних, зв’яжіться з нами:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email: <a href="mailto:info.healthybody.online@gmail.com" className="underline">info.healthybody.online@gmail.com</a></li>
            <li>Telegram: <a href="https://t.me/juli.butenko" className="underline">@juli.butenko</a></li>
            <li>Instagram: <a href="https://www.instagram.com/juli.butenko.fit" className="underline">@juli.butenko.fit</a></li>
          </ul>
          <p className="mt-4">
            Користуючись сервісами онлайн студії Юлії Бутенко, ви підтверджуєте, що ознайомлені з
            цією Політикою конфіденційності та погоджуєтеся з її умовами.
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
            alt="NeuroFit — Neuro-Pilates"
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

