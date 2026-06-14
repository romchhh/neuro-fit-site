import type { Metadata } from 'next';
import ScrollRevealProvider from '../scroll-reveal';
import PrerecordingClient from './PrerecordingClient';

export const metadata: Metadata = {
  title: 'Предзапис',
  description:
    'Отримайте доступ до предзапису Neuro-Pilates: залиште контакт і переходьте в Telegram, щоб забрати матеріали.',
  openGraph: {
    title: 'Предзапис Neuro-Pilates',
    description:
      'Заповніть форму — і ми надішлемо вас у Telegram, щоб ви могли одразу тестувати матеріали.',
    url: '/prerecording',
  },
  robots: { index: false, follow: true },
};

export default function PrerecordingPage() {
  return (
    <ScrollRevealProvider>
      <PrerecordingClient />
    </ScrollRevealProvider>
  );
}
