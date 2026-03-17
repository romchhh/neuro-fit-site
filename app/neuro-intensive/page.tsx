import type { Metadata } from 'next';
import ScrollRevealProvider from '../scroll-reveal';
import HeroNeuroIntensive from './HeroNeuroIntensive';
import NeuroIntensiveChangesSection from '@/components/NeuroIntensiveChangesSection';
import NeuroIntensiveFormatSection from '@/components/NeuroIntensiveFormatSection';
import NeuroIntensiveWhatIncludedSection from '@/components/NeuroIntensiveWhatIncludedSection';
import FaqSectionNeuroIntensive from '@/components/FaqSectionNeuroIntensive';
import FooterSection from '@/components/FooterSection';
import ForWhoSection from '@/components/ForWhoSection';

export const metadata: Metadata = {
  title: 'Neuro-інтенсив — програма',
  description:
    'Neuro-інтенсив — програма, щоб швидко відчути звʼязок мозку й тіла, покращити координацію та концентрацію без перевантаження.',
  openGraph: {
    title: 'Neuro-інтенсив — програма',
    description:
      'Короткий Neuro-інтенсив: пілатес, функціональні звʼязки та нейрофітнес для швидкого старту й відчутного ефекту.',
    url: '/neuro-intensive',
  },
};

export default function NeuroIntensivePage() {
  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
        <HeroNeuroIntensive />
        <NeuroIntensiveChangesSection />
        <NeuroIntensiveFormatSection />
        <NeuroIntensiveWhatIncludedSection />
        <ForWhoSection />
        <FaqSectionNeuroIntensive />
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}

