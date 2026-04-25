import HeroSection from "@/components/home/HeroSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import CTABanner from "@/components/home/CTABanner";
import RolesSection from "@/components/home/RolesSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import ReadySection from "@/components/home/ReadySection";
import TransparencySection from "@/components/home/TransparencySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingPreviewSection from "@/components/home/PricingPreviewSection";
import FAQSection from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkflowSection />
      <CTABanner />
      <RolesSection />
      <PainPointsSection />
      <CTABanner
        variant="cta"
        heading="Switching doesn't mean starting over"
        subtext="We'll help you get set up without disrupting active deals."
      />
      <ReadySection />
      <TransparencySection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FAQSection />
    </>
  );
}
