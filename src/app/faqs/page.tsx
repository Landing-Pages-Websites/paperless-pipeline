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
      <section className="relative overflow-hidden bg-[linear-gradient(100deg,#FFF9EC_0%,#FBF7EE_35%,#DDECF8_56%,#BFD9F7_78%,#E7EEC9_100%)] py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(0,99,235,0.12),transparent_42%),radial-gradient(circle_at_96%_88%,rgba(255,233,91,0.26),transparent_30%)]"
          aria-hidden="true"
        />

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
        eyebrow="REACH OUT TO US"
        heading="Still have questions?"
        subtext="Our team is happy to walk you through anything. No sales pitch — just straightforward answers."
        buttonText="Chat With Us →"
        buttonHref="/contact"
        compact
      />

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
