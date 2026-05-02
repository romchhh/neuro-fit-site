import type { Metadata } from 'next';
import ScrollRevealProvider from '../scroll-reveal';
import HeroNeurofit from './HeroNeurofit';
import ChangesSection from '@/components/ChangesSection';
import FormatSectionNeurofit from '@/components/FormatSectionNeurofit';
import NeurofitWhatIncludedSection from '@/components/NeurofitWhatIncludedSection';
import FaqSectionNeurofit from '@/components/FaqSectionNeurofit';
import NeurofitProgramModulesSection from '@/components/NeurofitProgramModulesSection';
import ForWhoSection from '@/components/ForWhoSection';
import BottomContactBlock from '@/components/BottomContactBlock';
import FooterSection from '@/components/FooterSection';

export const metadata: Metadata = {
  title: 'NeuroFit — Neuro-Pilates: основна програма',
  description:
    'Основна програма NeuroFit — Neuro-Pilates: пілатес і нейрофітнес у прогресії від бази до інтеграції в повсякденне життя. Стабільність, сила та здорова спина без перевантаження.',
  openGraph: {
    title: 'NeuroFit — Neuro-Pilates: основна програма',
    description:
      '4-модульна програма NeuroFit — Neuro-Pilates для тіла й нервової системи: постава, стабільність, координація, ресурс.',
    url: '/neurofit',
  },
};

export default function NeurofitPage() {
  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
        <HeroNeurofit />
        <ChangesSection />
        <FormatSectionNeurofit />
        <NeurofitProgramModulesSection />
        <NeurofitWhatIncludedSection />
        <ForWhoSection />
        <FaqSectionNeurofit />
        <BottomContactBlock />
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}

