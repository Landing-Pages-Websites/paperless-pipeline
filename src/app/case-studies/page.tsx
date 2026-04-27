import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import CTABanner from "@/components/home/CTABanner";

const cardGradients = [
  "linear-gradient(135deg, #0063EB 0%, #004BB5 100%)",
  "linear-gradient(135deg, #10B981 0%, #047857 100%)",
  "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
];

export const metadata: Metadata = {
  title: "Case Studies — Paperless Pipeline",
  description:
    "See how real estate brokerages, teams, and transaction coordinators use Paperless Pipeline to close more deals, eliminate errors, and scale without adding headcount.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FDF9EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            No credit card required. No setup fees.
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5 max-w-3xl mx-auto leading-tight">
            Explore How Paperless Pipeline Works in Practice
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto mb-8">
            A collection of use-case driven examples showing how teams can
            streamline transactions, manage commissions, and improve workflows
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              Explore Different Ways to Use Paperless Pipeline
            </h2>
            <p className="text-base text-[#4F4F4F] max-w-2xl mx-auto">
              A collection of practical examples showing how features can be
              applied across transactions, eSign, commissions, and team workflows
            </p>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Card image area */}
                <div
                  className="h-52 flex flex-col justify-end px-6 pb-5 relative overflow-hidden"
                  style={{ background: cardGradients[index % cardGradients.length] }}
                >
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold leading-none pointer-events-none select-none"
                    style={{
                      fontSize: "64px",
                      opacity: 0.15,
                      transform: "rotate(-6deg)",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                    aria-hidden="true"
                  >
                    {study.company}
                  </span>
                  <span className="relative inline-block text-xs font-semibold uppercase tracking-widest text-white/90">
                    {study.industry}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-[#030712] mb-3">
                    {study.company}
                  </h2>

                  {/* Key metric badge */}
                  <div className="inline-flex items-center gap-1.5 bg-[#E8F8EF] text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 self-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    {study.metric}
                  </div>

                  <p className="text-sm text-[#4F4F4F] leading-relaxed mb-6 flex-1">
                    {study.excerpt}
                  </p>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-sm font-semibold text-[#0063EB] hover:underline"
                    aria-label={`Read ${study.company} case study`}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        variant="cta"
        eyebrow="GET STARTED"
        heading="Simplify Your Transaction Management Today"
        subtext="See how easy it is to manage transactions, teams, and commissions—all in one place"
        buttonText="Start My 14-Day Free Trial →"
        buttonHref="/signup"
      />
    </>
  );
}
