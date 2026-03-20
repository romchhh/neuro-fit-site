import Hero from './Hero';
import ScrollRevealProvider from './scroll-reveal';
import VideoTeaser from './VideoTeaser';
import AuthorSection from '@/components/AuthorSection';
import SuitableSection from '@/components/SuitableSection';
import ProjectSection from '@/components/ProjectSection';
import ProgramsSection from '@/components/ProgramsSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import InventorySection from '@/components/InventorySection';
import BottomContactBlock from '@/components/BottomContactBlock';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <ScrollRevealProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-gray-100">
        <Hero />

        {/* Відео-привітання / знайомство з методом */}
        <section
          className="relative py-20 px-4 bg-white overflow-hidden reveal-up"
          data-animate
        >
          <div
            style={{
              maxWidth: 1120,
              margin: '0 auto',
              padding: '0 16px',
            }}
          >
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1.96rem, 3.2vw, 2.24rem)',
                lineHeight: 1.7,
                color: '#4A3044',
                textAlign: 'center',
                marginBottom: 40,
              }}
            >
              Про проєкт від засновниці
            </p>

            <VideoTeaser />
          </div>
        </section>

        <ProjectSection />

        <ProgramsSection />

        <SuitableSection />
        <AuthorSection />

        <ReviewsSection />

        <FaqSection />

        <InventorySection />

        <BottomContactBlock />
        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}