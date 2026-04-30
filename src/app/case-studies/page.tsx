import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import CTABanner from "@/components/home/CTABanner";

const featuredCaseStudy = {
  title: "The Complete Guide to Recruiting Real Estate Agents",
  excerpt:
    "This guide breaks down how to build a consistent recruiting process in real estate—from finding the right agents to maintaining long-term relationships and improving retention.",
  image: "/images/figma/pages/a0652331378aef12.png",
  href: `/case-studies/${caseStudies[0].slug}`,
};

const caseStudyCards = [
  {
    title: "Real Estate Transactions: A Step-by-Step Guide",
    excerpt:
      "Brokers, agents, and transaction coordinators know the truth: a single real estate transaction has a dizzying number of moving parts.",
    image: "/images/figma/ready-feature-image.jpg",
    href: `/case-studies/${caseStudies[0].slug}`,
  },
  {
    title: "Real Estate Transaction Coordinator Checklist for 2026 (With A Free Template)",
    excerpt:
      "Managing a real estate transaction from listing to closing is no small task. In fact, transactions can include as many as 198 tasks bound by strict deadlines and legal requirements.",
    image: "/images/figma/pages/screenshot-tc-tasks.jpg",
    href: `/case-studies/${caseStudies[1].slug}`,
  },
  {
    title: "Everything You Need To Know About Starting A Real Estate Brokerage",
    excerpt:
      "The complete guide to starting your own successful real estate brokerage firm in 2025.",
    image: "/images/figma/pages/transaction-hero-paperwork.png",
    href: `/case-studies/${caseStudies[2].slug}`,
  },
  {
    title: "Finding Work-life Balance, Ditching Outdated Software, and Getting 1000+ Agents to Go Paperless",
    excerpt:
      "Maximum One Realty is an agent-owned company focused on world-class service. Since its inception in 2007, Maximum One has grown rapidly to over 1000 agents across multiple offices in Georgia.",
    image: "/images/figma/pages/screenshot-high-volume.jpg",
    href: `/case-studies/${caseStudies[0].slug}`,
  },
  {
    title: "Revealed: Secrets Behind Top-Ten Century 21 Brokerage Redwood Realty's Wild Success",
    excerpt:
      "Get insights from Shawn Milletary who took his brokerage from a 3-man basement startup to a top-ten Century 21 company.",
    image: "/images/figma/workflow-screenshot.jpg",
    href: `/case-studies/${caseStudies[1].slug}`,
  },
  {
    title: "Transaction Coordinator Goes Paperless, Gains Work-Life Balance and 277% Business Growth in One Year",
    excerpt:
      "Learn from Robbie Gaston as she shares the keys to the success of her transaction coordination business.",
    image: "/images/figma/pages/commission-feature-report.jpg",
    href: `/case-studies/${caseStudies[2].slug}`,
  },
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
      <section className="relative overflow-hidden bg-[linear-gradient(105deg,#FFF9EA_0%,#FFF9EA_34%,#CDE4F8_67%,#F5EFD3_100%)] py-24 md:py-40">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pl-1.5 pr-4 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0063EB]/10">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 1L7.5 4.5L11 4.75L8.25 7.25L9.25 11L6 9.25L2.75 11L3.75 7.25L1 4.75L4.5 4.5L6 1Z"
                  fill="#0063EB"
                />
              </svg>
            </span>
            <span className="text-sm font-medium text-black">
              No credit card required. No setup fees.
            </span>
          </div>

          <h1 className="mb-8 max-w-[760px] text-[46px] font-semibold leading-[1.1] text-black sm:text-[64px] lg:text-[76px]">
            Explore How{" "}
            <span className="text-[#0063EB]">Paperless Pipeline Works</span>{" "}
            in Practice
          </h1>

          <p className="mb-9 max-w-[760px] text-[22px] font-medium leading-10 text-black">
            A collection of use-case driven examples showing how teams can
            streamline transactions, manage commissions, and improve workflows
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-[#0063EB] px-5 py-3 text-base font-medium text-white shadow-[0_0_0_1px_rgba(4,110,255,1),0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Case study cards */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1080px] px-4 sm:px-6 lg:px-8">
          <article className="grid gap-7 rounded-3xl border border-black/10 bg-white p-5 md:grid-cols-[1fr_0.95fr] md:items-center">
            <div className="relative h-[260px] overflow-hidden rounded-2xl bg-[#EAF2FF]">
              <Image
                src={featuredCaseStudy.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            <div className="flex h-full flex-col justify-center gap-6 py-2 md:pr-5">
              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-full bg-[#0063EB] px-3 py-1 text-sm font-semibold text-white">
                  Featured
                </span>
                <div className="flex flex-col gap-3">
                  <h2 className="max-w-[460px] text-2xl font-semibold leading-[1.16] text-black md:text-[30px]">
                    {featuredCaseStudy.title}
                  </h2>
                  <p className="max-w-[500px] text-base leading-7 text-[#4F4F4F]">
                    {featuredCaseStudy.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/figma/pages/c6cc3faed853d228.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-black">John Doe</p>
                    <p className="text-sm text-[#4F4F4F]">
                      11 April 2026 <span aria-hidden="true">•</span> 5 min read
                    </p>
                  </div>
                </div>
                <Link
                  href={featuredCaseStudy.href}
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-[#0063EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#046EFF]"
                >
                  Read →
                </Link>
              </div>
            </div>
          </article>

          {/* Section header */}
          <div className="mb-12 mt-28 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
              Case Studies
            </span>
            <h2 className="mx-auto mb-4 max-w-[700px] text-3xl font-semibold leading-tight text-[#030712] md:text-[42px]">
              Explore Different Ways to Use Paperless Pipeline
            </h2>
            <p className="text-base text-[#4F4F4F] max-w-2xl mx-auto">
              A collection of practical examples showing how features can be
              applied across transactions, eSign, commissions, and team workflows
            </p>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {caseStudyCards.map((study) => (
              <article
                key={study.title}
                className="flex min-h-[500px] flex-col rounded-3xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="relative h-[215px] overflow-hidden rounded-2xl bg-[#EEF4FF]">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-6 pt-7">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[27px] font-semibold leading-[1.18] text-black">
                      {study.title}
                    </h3>
                    <p className="text-[15px] leading-6 text-[#4F4F4F]">
                      {study.excerpt}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/figma/pages/c6cc3faed853d228.png"
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-black">John Doe</p>
                        <p className="text-sm text-[#4F4F4F]">
                          11 April 2026 <span aria-hidden="true">•</span> 5 min read
                        </p>
                      </div>
                    </div>
                    <Link
                      href={study.href}
                      className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#0063EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#046EFF]"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-lg bg-[#0063EB] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#046EFF]">
              Load More
            </button>
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
