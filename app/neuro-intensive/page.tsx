import ScrollRevealProvider from '../scroll-reveal';
import HeroNeuroIntensive from './HeroNeuroIntensive';
import NeuroIntensiveChangesSection from '@/components/NeuroIntensiveChangesSection';
import NeuroIntensiveFormatSection from '@/components/NeuroIntensiveFormatSection';
import NeuroIntensiveWhatIncludedSection from '@/components/NeuroIntensiveWhatIncludedSection';
import FooterSection from '@/components/FooterSection';
import ForWhoSection from '@/components/ForWhoSection';

export default function NeuroIntensivePage() {
  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
        <HeroNeuroIntensive />
        <NeuroIntensiveChangesSection />
        <NeuroIntensiveFormatSection />
        <NeuroIntensiveWhatIncludedSection />
        <ForWhoSection />
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}

