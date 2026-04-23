import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";

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

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#FDF9EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0063EB] hover:underline mb-8"
          >
            ← Back to Case Studies
          </Link>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            {study.industry}
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4 leading-tight">
            {study.title}
          </h1>

          <p className="text-lg text-[#4F4F4F] mb-6 max-w-2xl">
            {study.excerpt}
          </p>

          {/* Key metric badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8F8EF] text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full">
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
        </div>
      </section>

      {/* Metrics bar */}
      <section className="py-10 bg-[#030712]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {study.metrics.map(({ label, value }) => (
              <div key={label}>
                <p className="text-xl font-bold text-white mb-1">{value}</p>
                <p className="text-xs text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body: Challenge / Solution / Result */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#ECEEF2] flex items-center justify-center text-sm font-bold text-[#6C757D] flex-shrink-0">
                1
              </span>
              The Challenge
            </h2>
            <p className="text-base text-[#4F4F4F] leading-relaxed pl-11">
              {study.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#EEF4FF] flex items-center justify-center text-sm font-bold text-[#0063EB] flex-shrink-0">
                2
              </span>
              The Solution
            </h2>
            <p className="text-base text-[#4F4F4F] leading-relaxed pl-11">
              {study.solution}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#030712] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#E8F8EF] flex items-center justify-center text-sm font-bold text-emerald-600 flex-shrink-0">
                3
              </span>
              The Result
            </h2>
            <p className="text-base text-[#4F4F4F] leading-relaxed pl-11">
              {study.result}
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#EEF4FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="#0063EB"
            className="mx-auto mb-6 opacity-30"
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

      {/* Back + CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[#0063EB] hover:underline"
          >
            ← See all case studies
          </Link>
          <Link
            href="/signup"
            className="bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
