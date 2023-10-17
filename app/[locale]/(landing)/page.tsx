import { LandingNavBar } from '@/components/LandingNavBar';
import { LandingHero } from '@/components/LandingHero';
import { LandingContent } from '@/components/LandingContent';

const LangingPage = () => {
  return (
    <div className="h-full">
      <LandingNavBar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LangingPage;