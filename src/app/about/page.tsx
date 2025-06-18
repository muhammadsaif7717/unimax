import AnimatedBackground from '@/components/root/animated-background';
import CTASection from '@/components/root/cta-section';
import HeroSection from '@/components/root/hero-section';
import StatsSection from '@/components/root/stats-section';
import TeamSection from '@/components/root/team-section';
import ValuesSection from '@/components/root/values-section';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <main>
        <HeroSection />
        <StatsSection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
    </div>
  );
};

export default AboutPage;
