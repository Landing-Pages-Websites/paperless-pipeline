import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import CTABanner from "@/components/home/CTABanner";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — Paperless Pipeline`,
    description: guide.description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#FDF9EE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <div
            className="inline-flex items-center gap-2 bg-white rounded-full"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              padding: "6px 12px 6px 6px",
            }}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{
                background: "rgba(4,110,255,0.1)",
                width: "20px",
                height: "20px",
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="5" cy="5" r="4" fill="#0063EB" />
              </svg>
            </span>
            <span className="font-medium text-black text-xs whitespace-nowrap">
              Free Resource Guide
            </span>
          </div>

          <h1
            className="text-4xl md:text-[56px] font-semibold text-black leading-tight max-w-3xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {guide.title}
          </h1>

          <p className="text-lg text-[#4F4F4F] max-w-2xl">
            {guide.description}
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            style={{
              boxShadow:
                "0 0 0 1px rgba(4,110,255,1), 0 1px 2px rgba(4,110,255,0.64)",
            }}
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {guide.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl md:text-[32px] font-semibold text-black leading-tight mb-6">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.content.map((para, j) => (
                    <p
                      key={j}
                      className="text-base text-[#4F4F4F] leading-[170%]"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-black/[0.06]">
            <Link
              href="/"
              className="text-sm font-medium text-[#0063EB] hover:underline"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        variant="cta"
        eyebrow="GET STARTED"
        heading="Simplify Your Transaction Management Today"
        subtext="See how easy it is to manage transactions, teams, and commissions — all in one place"
        buttonText="Start My 14-Day Free Trial →"
        buttonHref="/signup"
      />
    </>
  );
}
