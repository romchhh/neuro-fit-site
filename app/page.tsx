import Hero from './Hero';
import ScrollRevealProvider from './scroll-reveal';
import AuthorSection from '@/components/AuthorSection';
import SuitableSection from '@/components/SuitableSection';
import ProjectSection from '@/components/ProjectSection';
import ProgramsSection from '@/components/ProgramsSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
        <Hero />

        <ProjectSection />

        <ProgramsSection />

        <SuitableSection />
        <AuthorSection />

        <ReviewsSection />

        <FaqSection />
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}