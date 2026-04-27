import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import CTABanner from "@/components/home/CTABanner";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.company} Case Study — Paperless Pipeline`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const related = caseStudies.filter((s) => s.slug !== slug).slice(0, 2);

  const sections = [
    {
      number: "1",
      label: "The Challenge",
      text: study.challenge,
      badgeBg: "#ECEEF2",
      badgeColor: "#6C757D",
    },
    {
      number: "2",
      label: "The Solution",
      text: study.solution,
      badgeBg: "#EEF4FF",
      badgeColor: "#0063EB",
    },
    {
      number: "3",
      label: "The Result",
      text: study.result,
      badgeBg: "#E8F8EF",
      badgeColor: "#059669",
    },
  ];

  return (
    <>
      {/* Article header */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0063EB] hover:underline mb-8"
          >
            ← Back to Case Studies
          </Link>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Case Study
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-5 leading-tight">
            {study.title}
          </h1>

          <p className="text-base text-[#4F4F4F] leading-relaxed mb-6">
            {study.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[#6C757D]">
            <span className="font-medium text-[#030712]">{study.company}</span>
            <span aria-hidden="true">·</span>
            <span>{study.industry}</span>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-10 bg-[#030712]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {study.metrics.map(({ label, value }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map(({ number, label, text, badgeBg, badgeColor }) => (
            <div key={number}>
              <h2 className="text-xl font-semibold text-[#030712] mb-4 flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: badgeBg, color: badgeColor }}
                >
                  {number}
                </span>
                {label}
              </h2>
              <p className="text-base text-[#4F4F4F] leading-relaxed pl-11">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / testimonial */}
      <section className="py-16 md:py-20 bg-[#EEF4FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#0063EB"
            className="mx-auto mb-6 opacity-25"
            aria-hidden="true"
          >
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
          </svg>
          <blockquote className="text-lg md:text-xl font-medium text-[#030712] leading-relaxed mb-6">
            &ldquo;{study.quote}&rdquo;
          </blockquote>
          <p className="text-sm font-semibold text-[#030712]">
            {study.quoteAuthor}
          </p>
          <p className="text-sm text-[#6C757D]">{study.quoteRole}</p>
        </div>
      </section>

      {/* Related case studies */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-2">
                Related
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#030712]">
                Explore More Insights
              </h2>
              <p className="text-sm text-[#4F4F4F] mt-2">
                Discover more resources to improve your workflows and efficiency
              </p>
            </div>
            <Link
              href="/case-studies"
              className="hidden sm:inline-flex text-sm font-semibold text-[#0063EB] hover:underline whitespace-nowrap"
            >
              Read All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {related.map((s) => (
              <article
                key={s.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="h-36 bg-[#EEF4FF] flex flex-col justify-end px-6 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0063EB]">
                    {s.industry}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-[#030712] mb-2">
                    {s.company}
                  </h3>
                  <p className="text-sm text-[#4F4F4F] leading-relaxed mb-4 flex-1">
                    {s.excerpt}
                  </p>
                  <Link
                    href={`/case-studies/${s.slug}`}
                    className="text-sm font-semibold text-[#0063EB] hover:underline"
                    aria-label={`Read ${s.company} case study`}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-[#0063EB] hover:underline"
            >
              Read All →
            </Link>
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
