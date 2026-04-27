import type { Metadata } from "next";
import Link from "next/link";
import BlogContent from "./BlogContent";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Blog — Paperless Pipeline",
  description:
    "Insights, best practices, and industry analysis for real estate professionals. Tips for brokers, teams, and transaction coordinators.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-[#FDF9EE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full pl-1.5 pr-3 py-1.5">
            <span className="w-5 h-5 rounded-full bg-[#0063EB]/10 flex-shrink-0 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M6 1L7.5 4.5L11 4.75L8.25 7.25L9.25 11L6 9.25L2.75 11L3.75 7.25L1 4.75L4.5 4.5L6 1Z"
                  fill="#0063EB"
                />
              </svg>
            </span>
            <span className="text-xs font-medium text-black">
              No credit card required. No setup fees.
            </span>
          </div>

          <h1
            className="text-[48px] md:text-[64px] font-semibold text-[#030712] leading-[1.125] max-w-[611px]"
            style={{ letterSpacing: "-0.0375em" }}
          >
            Insights for Modern{" "}
            <span className="text-[#0063EB]">Real Estate Teams.</span>
          </h1>

          <p className="text-lg font-medium text-[#030712] leading-8 max-w-[611px]">
            Tips, strategies, and product insights to help brokerages and teams
            streamline operations, close more deals, and grow with confidence.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-sm px-5 py-2 rounded-lg transition-colors"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Blog section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12">
            <p
              className="text-sm font-medium text-[#0063EB] uppercase mb-3"
              style={{ letterSpacing: "0.0893em" }}
            >
              BLOGS
            </p>
            <h2 className="text-3xl md:text-[48px] font-semibold text-black leading-tight mb-4">
              Insights to Help You{" "}
              <br className="hidden md:block" />
              Grow and Scale
            </h2>
            <p className="text-base text-[#4F4F4F] max-w-2xl">
              Explore resources built to help brokerages and teams streamline
              operations and perform at their best.
            </p>
          </div>

          <BlogContent />
        </div>
      </section>

      <CTABanner
        variant="cta"
        eyebrow="GET STARTED TODAY"
        heading="Simplify Your Transaction Management Today"
        subtext="See how easy it is to manage transactions, teams, and commissions—all in one place"
        buttonText="Start My 14-Day Free Trial →"
      />
    </>
  );
}
