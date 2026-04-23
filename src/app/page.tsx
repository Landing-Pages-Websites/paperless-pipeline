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
        heading="Don't let another deal fall through the cracks."
        subtext="Paperless Pipeline keeps your entire team on the same page from contract to close."
      />
      <ReadySection />
      <TransparencySection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <FAQSection />
    </>
  );
}
