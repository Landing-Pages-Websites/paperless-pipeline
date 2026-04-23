import type { Metadata } from "next";
import FAQsContent from "./FAQsContent";

export const metadata: Metadata = {
  title: "FAQs — Paperless Pipeline",
  description:
    "Answers to the most common questions about Paperless Pipeline — pricing, features, setup, security, and more.",
};

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FDF9EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Support
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Reach out to our support team
            and we&apos;ll get back to you within a few hours.
          </p>
        </div>
      </section>

      {/* FAQ content (client — search, filters, accordion) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQsContent />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#EEF4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#030712] mb-3">
            Still have questions?
          </h2>
          <p className="text-[#4F4F4F] mb-6 max-w-md mx-auto">
            Our team is happy to walk you through anything. We typically respond
            within a few hours during business days.
          </p>
          <a
            href="mailto:support@paperlesspipeline.com"
            className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3 rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
}
