import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { WavyBackground } from "@/components/ui/wavy-background";


const LandingPage = () => {
  return ( 
    <div className="h-screen ">
      <WavyBackground className="h-screen "  >
      <LandingNavbar />
      <LandingHero />
     
      <LandingContent />
      </WavyBackground>
    </div>
   );
}
 
export default LandingPage;
