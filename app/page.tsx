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
                fontSize: 'clamp(0.98rem, 1.6vw, 1.12rem)',
                lineHeight: 1.7,
                color: '#4A3044',
                textAlign: 'center',
                marginBottom: 20,
              }}
            >
              Тут можна побачити, як виглядають заняття наживо, почути пояснення
              Юлії та відчути атмосферу методу — ще до того, як оберете програму.
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

        <FooterSection />
      </div>
    </ScrollRevealProvider>
  );
}