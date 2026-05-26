import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { MobileApkSection } from "@/components/sections/MobileApkSection";
import { ModuleGridSection } from "@/components/sections/ModuleGridSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { RoleTabsSection } from "@/components/sections/RoleTabsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustTickerSection } from "@/components/sections/TrustTickerSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

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
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
