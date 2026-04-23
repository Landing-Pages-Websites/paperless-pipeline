import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Paperless Pipeline",
  description:
    "Insights, best practices, and industry analysis for real estate professionals. Tips for brokers, teams, and transaction coordinators.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FDF9EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5">
            Blog
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Insights and tips for real estate professionals
          </p>
        </div>
      </section>

      {/* Post grid with category filter */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogContent />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#EEF4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#030712] mb-3">
            Ready to see it in action?
          </h2>
          <p className="text-[#4F4F4F] mb-6 max-w-md mx-auto">
            Start a free trial and bring your team's transactions into one
            organized, automated workflow.
          </p>
          <a
            href="/signup"
            className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </>
  );
}
