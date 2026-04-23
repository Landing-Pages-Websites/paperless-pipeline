import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

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
            Customer Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5">
            Case Studies
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            See how teams use Paperless Pipeline to close faster, scale smarter,
            and eliminate the friction that slows deals down.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Top accent */}
                <div className="bg-[#EEF4FF] px-6 pt-6 pb-4">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-3">
                    {study.industry}
                  </span>
                  <h2 className="text-lg font-semibold text-[#030712] leading-snug">
                    {study.company}
                  </h2>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Key metric badge */}
                  <div className="inline-flex items-center gap-2 bg-[#E8F8EF] text-emerald-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-4 self-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    className="text-sm font-semibold text-[#0063EB] hover:underline mt-auto"
                    aria-label={`Read ${study.company} case study`}
                  >
                    Read the full story →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
            Your team could be next
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Start your free trial today and see why thousands of real estate
            professionals trust Paperless Pipeline.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial — No Credit Card Required
          </Link>
        </div>
      </section>
    </>
  );
}
