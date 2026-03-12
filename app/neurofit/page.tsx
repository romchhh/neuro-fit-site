import ScrollRevealProvider from '../scroll-reveal';
import HeroNeurofit from './HeroNeurofit';
import ChangesSection from '@/components/ChangesSection';
import FormatSectionNeurofit from '@/components/FormatSectionNeurofit';
import NeurofitWhatIncludedSection from '@/components/NeurofitWhatIncludedSection';
import NeurofitProgramModulesSection from '@/components/NeurofitProgramModulesSection';
import FooterSection from '@/components/FooterSection';
import ForWhoSection from '@/components/ForWhoSection';

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
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}

