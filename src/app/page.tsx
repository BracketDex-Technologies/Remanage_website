import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ModuleGridSection } from "@/components/sections/ModuleGridSection";
import { MobileApkSection } from "@/components/sections/MobileApkSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { RoleTabsSection } from "@/components/sections/RoleTabsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { TrustTickerSection } from "@/components/sections/TrustTickerSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { LegalEdgeSection } from "@/components/sections/LegalEdgeSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <TrustTickerSection />
        <PainPointsSection />
        <RoleTabsSection />
        <ModuleGridSection />
        <HowItWorksSection />
        <MobileApkSection />
        <WhyUsSection />
        <LegalEdgeSection />
        <TestimonialsSection />
        <ResourcesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
