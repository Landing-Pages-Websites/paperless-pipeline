import type { Metadata } from "next";
import Link from "next/link";
import FAQsContent from "./FAQsContent";
import CTABanner from "@/components/home/CTABanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "FAQs — Paperless Pipeline",
  description:
    "Answers to the most common questions about Paperless Pipeline — pricing, features, setup, security, and more.",
};

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FDF9EE] relative overflow-hidden py-24 md:py-32">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(4,110,255,0.35) 0%, transparent 70%)",
              filter: "blur(187px)",
              opacity: 0.4,
            }}
          />
          <div
            className="absolute right-1/4 top-1/3 w-[330px] h-[330px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,233,91,0.45) 0%, transparent 70%)",
              filter: "blur(120px)",
              opacity: 0.35,
            }}
          />
          <div
            className="absolute right-1/3 top-1/2 w-[210px] h-[210px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,73,44,0.35) 0%, transparent 70%)",
              filter: "blur(80px)",
              opacity: 0.3,
            }}
          />
        </div>

        <div className="relative z-10 max-w-[611px] mx-auto px-4 text-center">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 bg-white rounded-[96px] border border-black/10 px-3 py-1.5 mb-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "rgba(4,110,255,0.1)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#0063EB]" />
            </div>
            <span className="text-xs font-medium text-black leading-5">
              No credit card required. No setup fees.
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-semibold text-black mt-3 mb-6 text-[40px] leading-[48px] md:text-[64px] md:leading-[72px]"
            style={{ letterSpacing: "-0.0375em" }}
          >
            Questions? We&apos;ve got{" "}
            <span className="text-[#0063EB]">answers</span>
          </h1>

          {/* Subtext */}
          <p className="text-[18px] font-medium text-black leading-8 mb-8">
            Everything you need to know about Paperless Pipeline — before you
            sign up or while you&apos;re getting started.
          </p>

          {/* CTA */}
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-sm leading-6 px-5 py-1.5 rounded-lg transition-colors"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
            }}
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* FAQ accordion section */}
      <section className="bg-white py-[120px] px-5 md:px-[80px]">
        <FAQsContent />
      </section>

      {/* CTA Banner */}
      <CTABanner
        variant="cta"
        eyebrow="READY TO GET STARTED?"
        heading="Try Paperless Pipeline free for 14 days"
        subtext="No credit card required. Set up in minutes."
        buttonText="Start Free Trial →"
        buttonHref="/signup"
      />

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
