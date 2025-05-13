
import Navbar from "@/components/Navbar";
import SecurityHero from "@/components/SecurityHero";
import ThreatSection from "@/components/ThreatSection";
import ResourcesSection from "@/components/ResourcesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen font-roboto">
      <Navbar />
      <div className="pt-16"> {/* Adding padding-top to account for fixed navbar */}
        <SecurityHero />
        <ThreatSection />
        <ResourcesSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
