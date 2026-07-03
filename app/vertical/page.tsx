import type { Metadata } from 'next';
import ScrollRevealProvider from '../scroll-reveal';
import HeroVertical from './HeroVertical';
import VerticalChangesSection from '@/components/VerticalChangesSection';
import VerticalFormatSection from '@/components/VerticalFormatSection';
import VerticalProgramModulesSection from '@/components/VerticalProgramModulesSection';
import VerticalWhatIncludedSection from '@/components/VerticalWhatIncludedSection';
import VerticalForWhoSection from '@/components/VerticalForWhoSection';
import VerticalPricingSection from '@/components/VerticalPricingSection';
import VerticalInventorySection from '@/components/VerticalInventorySection';
import FaqSectionVertical from '@/components/FaqSectionVertical';
import BottomContactBlock from '@/components/BottomContactBlock';
import FooterSection from '@/components/FooterSection';

export const metadata: Metadata = {
  title: 'Вертикаль — програма для постави та здорової спини',
  description:
    '8-тижнева онлайн-програма «Вертикаль»: постава, здорова спина, глибока опора тіла. Мʼяке зміцнення глибоких мʼязів без жорстких навантажень.',
  openGraph: {
    title: 'Вертикаль — постава і здорова спина',
    description:
      'Онлайн-програма для постави, спини та глибоких мʼязів: 8 тижнів, діагностика постави, супровід Юлії.',
    url: '/vertical',
  },
};

export default function VerticalPage() {
  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
        <HeroVertical />
        <VerticalChangesSection />
        <VerticalFormatSection />
        <VerticalProgramModulesSection />
        <VerticalWhatIncludedSection />
        <VerticalForWhoSection />
        <VerticalPricingSection />
        <VerticalInventorySection />
        <FaqSectionVertical />
        <BottomContactBlock />
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}
