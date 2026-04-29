import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  LayoutDashboard,
  Handshake,
  TrendingUp,
  Zap,
  DollarSign,
  UserCheck,
  BarChart2,
  FileCheck,
  Bell,
  Shield,
  RefreshCcw,
} from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import BrokerFAQSection from "@/components/brokers/BrokerFAQSection";

export const metadata: Metadata = {
  title: "How It Works for Brokers — Paperless Pipeline",
  description:
    "See every deal, know every detail, and control your brokerage with Paperless Pipeline's transaction management platform.",
};

const beforeItems = [
  "Transactions are scattered across emails, folders, and spreadsheets",
  "Agents submit incomplete or inconsistent paperwork",
  "Admins chase updates and fix errors manually",
  "Brokers lack visibility into deals and performance",
];

const afterItems = [
  "Transactions are created and tracked in seconds",
  "Automated reminders keep agents and admins aligned",
  "Every deal is organized, compliant, and easy to access",
  "Brokers have full visibility across the entire pipeline",
];

const stats = [
  { value: "90,000+", label: "real estate professionals" },
  { value: "US & Canada", label: "Used across" },
  { value: "16+", label: "years of industry experience" },
];

const valueCards = [
  {
    Icon: Users,
    title: "Keep Your Agents Focused on Closing",
    description:
      "Spend less time on paperwork and more time selling. Give your agents a simple system that fits their workflow—so adoption is effortless and productivity stays high.",
  },
  {
    Icon: LayoutDashboard,
    title: "Give Your Admins Full Control",
    description:
      "Streamline transaction management with tools built for speed, accuracy, and visibility—so your team can manage every deal without bottlenecks or confusion.",
  },
  {
    Icon: Handshake,
    title: "Deliver a Better Client Experience",
    description:
      "Create smoother, more consistent transactions that build trust, reduce friction, and keep clients coming back to your brokerage.",
  },
];

const alwaysIncludedFeatures = [
  {
    title: "Unlimited users",
    description: "Add every broker, agent, admin, or assistant—for free.",
  },
  {
    title: "10-year storage",
    description:
      "Your data and transactions are stored for up to a decade.",
  },
  {
    title: "Free local backups",
    description:
      "Stay worry-free and compliant with free monthly data backups.",
  },
];

const benefitCards = [
  {
    Icon: TrendingUp,
    title: "Grow Your Brokerage with Modern Software",
    description:
      "Built for today's real estate workflows, giving you the structure and visibility needed to scale your team, transactions, and revenue without added operational complexity.",
  },
  {
    Icon: Zap,
    title: "Get Started Instantly—No Upfront Cost",
    description:
      "Create your account and start managing transactions in minutes, with no credit card, setup fees, or long onboarding process required.",
  },
  {
    Icon: DollarSign,
    title: "Reduce Overhead and Operating Costs",
    description:
      "Minimize manual work, reduce errors, and eliminate inefficient processes that increase administrative burden and slow down your business.",
  },
  {
    Icon: UserCheck,
    title: "Recruit and Retain Top Agents",
    description:
      "Offer a streamlined, easy-to-use system that improves agent experience—helping you attract high performers and keep them productive.",
  },
  {
    Icon: BarChart2,
    title: "Generate Reports in Seconds",
    description:
      "Access real-time transaction and financial data instantly, so you can track performance, monitor growth, and make informed decisions without delays.",
  },
  {
    Icon: FileCheck,
    title: "Keep Tasks and Documents on Track",
    description:
      "Organize every transaction with clear workflows, ensuring documents, deadlines, and responsibilities are always accounted for.",
  },
  {
    Icon: Bell,
    title: "Automate Reminders Across Your Team",
    description:
      "Reduce follow-ups with automated notifications that keep agents and admins aligned on tasks, deadlines, and next steps.",
  },
  {
    Icon: Shield,
    title: "Stay Compliant and Audit-Ready",
    description:
      "Maintain structured, accurate records that make audits, compliance checks, and reporting straightforward and stress-free.",
  },
  {
    Icon: RefreshCcw,
    title: "No Contracts or Long-Term Commitments",
    description:
      "Stay flexible as your business evolves with pricing that adapts to your production—upgrade, downgrade, or cancel anytime.",
  },
];

export default function BrokersPage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────── */}
      <section className="overflow-hidden bg-[#FDF9EE]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <div className="flex flex-col items-start gap-12 pb-16 pt-16 lg:flex-row lg:gap-[48px] lg:pb-[70px] lg:pt-[43px]">

            {/* Left column */}
            <div className="flex w-full flex-col gap-8 lg:w-[590px] lg:shrink-0 lg:pt-[60px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center self-start gap-2 bg-white rounded-full"
                    style={{ border: "1px solid rgba(0,0,0,0.1)", padding: "6px 12px 6px 6px" }}
                  >
                    <span
                      className="flex items-center justify-center rounded-full flex-shrink-0"
                      style={{ background: "rgba(4,110,255,0.1)", width: "20px", height: "20px" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <circle cx="5" cy="5" r="4" fill="#0063EB" />
                      </svg>
                    </span>
                    <span
                      className="font-medium text-black whitespace-nowrap"
                      style={{ fontSize: "12px", lineHeight: "20px" }}
                    >
                      No credit card required. No setup fees.
                    </span>
                  </div>

                  {/* H1 */}
                  <h1
                    className="font-semibold text-black"
                    style={{
                      fontSize: "clamp(44px, 5.55vw, 64px)",
                      lineHeight: "1.08",
                      letterSpacing: "-0.052em",
                    }}
                  >
                    Run a smarter, faster real{" "}
                    <span className="text-[#0063EB]">estate brokerage</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="font-medium"
                  style={{ fontSize: "18px", lineHeight: "32px", color: "#4F4F4F" }}
                >
                  Close more deals, simplify operations, and give your agents a
                  system they&apos;ll actually use—without adding complexity.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center text-white font-medium w-full sm:w-auto"
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    background: "#0063EB",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    boxShadow:
                      "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
                  }}
                >
                  Start Free Trial →
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center text-black font-medium bg-white w-full sm:w-auto"
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    borderRadius: "8px",
                    padding: "10px 20px",
                    boxShadow:
                      "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 2px 0px rgba(0,0,0,0.06)",
                  }}
                >
                  Book A Demo →
                </Link>
              </div>
            </div>

            {/* Right column: hero photo and stat card */}
            <div className="flex w-full justify-center lg:flex-1 lg:justify-end">
              <div className="relative w-full max-w-[704px] pb-[78px]">
                <div
                  className="relative w-full overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: "621 / 421",
                    boxShadow:
                      "-3px 4px 11px 0px rgba(112,112,112,0.1), -13px 15px 20px 0px rgba(112,112,112,0.09), -29px 35px 27px 0px rgba(112,112,112,0.05)",
                  }}
                >
                  <Image
                    src="/images/figma/pages/product-screenshot-compliance.jpg"
                    alt="Real estate professionals reviewing brokerage work together"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 64%" }}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 flex h-[112px] w-[min(425px,calc(100%-24px))] items-center justify-center gap-8 rounded-xl bg-[#FFE95B] px-9 shadow-[0_16px_32px_rgba(112,112,112,0.18)] sm:gap-10 sm:px-12">
                  <span
                    className="font-medium text-[#0063EB]"
                    style={{
                      fontSize: "40px",
                      lineHeight: "1",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    90k+
                  </span>
                  <span
                    className="max-w-[170px] font-medium text-black"
                    style={{
                      fontSize: "26px",
                      lineHeight: "30px",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    Real estate professionals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. BEFORE / AFTER
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-[88px] md:px-[80px] md:py-[124px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Why Teams Switch
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] leading-tight md:text-[48px]">
                Why Brokerages Switch to Paperless Pipeline
              </h2>
              <p className="text-[16px] font-normal leading-[150%] text-[#4F4F4F]">
                Designed to support every stakeholder in the process—so brokers,
                teams, and coordinators can work smarter, stay aligned, and close
                faster.
              </p>
            </div>
          </div>

          {/* Cards row */}
          <div className="flex w-full flex-col gap-6 lg:flex-row">

            {/* BEFORE card */}
            <div
              className="flex-1 overflow-hidden rounded-2xl p-4"
              style={{ background: "#F3F3F3", border: "1px solid rgba(0,0,0,0.1)" }}
            >
              {/* Card image */}
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: "319px" }}>
                <Image
                  src="/images/figma/pages/product-screenshot-workflow.jpg"
                  alt="Before Paperless Pipeline — scattered transaction management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Card content */}
              <div className="flex flex-col gap-4 pt-5">
                <h3
                  className="font-medium"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em", color: "#131315" }}
                >
                  Before Pipeline
                </h3>
                <div className="h-px w-full bg-black/10" />
                <div className="flex flex-col gap-4 pb-1">
                  {beforeItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E3342F]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M7.75 2.25L2.25 7.75M2.25 2.25l5.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                      <p
                        className="font-normal text-[#4F4F4F]"
                        style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.0113em" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-px w-full bg-black/10" />
              </div>
            </div>

            {/* AFTER card */}
            <div
              className="flex-1 overflow-hidden rounded-2xl p-4"
              style={{ background: "#0063EB", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Card image */}
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: "319px" }}>
                <Image
                  src="/images/figma/pages/product-screenshot-transactions.jpg"
                  alt="After Paperless Pipeline — organized transaction management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Card content */}
              <div className="flex flex-col gap-4 pt-5">
                <h3
                  className="font-medium text-white"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em" }}
                >
                  After Pipeline
                </h3>
                <div className="h-px w-full bg-white/15" />
                <div className="flex flex-col gap-4 pb-1">
                  {afterItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#26C653]">
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                          <path d="M1.4 4.5l2.6 2.6 5.6-5.6" stroke="#0063EB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p
                        className="font-normal text-white"
                        style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.0113em" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-px w-full bg-white/10" />
              </div>
            </div>
          </div>

          {/* CTA button */}
          <Link
            href="/signup"
            className="inline-flex items-center justify-center text-white font-medium"
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              background: "#0063EB",
              borderRadius: "8px",
              padding: "6px 12px",
              boxShadow:
                "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
            }}
          >
            Start a Free Trial →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. STATS
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-[88px] md:px-[80px] md:py-[118px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16">

          {/* Header */}
          <div className="flex flex-col items-center gap-3 max-w-[836px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Proven at Scale
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-semibold leading-tight text-black md:text-[48px]">
                Built for Growing Brokerages
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Paperless Pipeline powers modern real estate teams with simple,
                reliable tools.
              </p>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div
                key={value}
                className="flex min-h-[150px] flex-col justify-center gap-2 rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <p
                  className="text-[#0063EB] font-medium text-center"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: "60px", letterSpacing: "-0.02em" }}
                >
                  {value}
                </p>
                <p
                  className="text-[#4F4F4F] font-normal text-center"
                  style={{ fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.006em" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner />

      {/* ─────────────────────────────────────────
          5. VALUE
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-[80px] md:px-[80px] md:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-16">

          {/* Header — two columns on desktop */}
          <div className="flex flex-col md:flex-row md:items-end gap-3">
            <div className="flex flex-1 flex-col gap-3">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Built for Your Entire Brokerage
              </p>
              <h2 className="text-[32px] font-semibold leading-tight text-black md:text-[48px]">
                One Platform for Your Entire Team
              </h2>
            </div>
            <p
              className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] flex-1"
              style={{ maxWidth: "560px" }}
            >
              From agents to admins, give every role a simple, powerful system
              designed to streamline work, reduce friction, and keep deals moving
              forward.
            </p>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueCards.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex min-h-[292px] flex-col gap-6 rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <div
                  className="flex flex-shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                  style={{ width: "48px", height: "48px" }}
                >
                  <Icon size={22} color="#FFE95B" fill="#FFE95B" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-6">
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "22px", lineHeight: "26px", letterSpacing: "-0.015em" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "30px" }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. FEATURES
      ───────────────────────────────────────── */}
      <section
        className="px-5 py-[80px] md:px-[80px] md:py-[120px]"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F4F5 50%)" }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">

          {/* Header */}
          <div className="flex flex-col items-center gap-3 max-w-[836px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Everything You Need
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-semibold leading-tight text-black md:text-[48px]">
                Powerful Tools to Run Your Brokerage Efficiently
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                From transaction management to commission tracking, Paperless
                Pipeline gives your team the tools to stay organized, move
                faster, and maintain full visibility across every deal.
              </p>
            </div>
          </div>

          {/* Tab pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl p-0.5" style={{ background: "#FAFAFA" }}>
            <div
              className="flex items-center gap-2 rounded-lg"
              style={{ padding: "4px 12px 4px 8px", background: "#0063EB" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 11.5a3 3 0 100-6 3 3 0 000 6zM17 11.5a3 3 0 100-6 3 3 0 000 6zM4 14.5h6a2 2 0 012 2v2H2v-2a2 2 0 012-2zM14 14.5h6a2 2 0 012 2v2h-8v-2a4 4 0 00-.54-2z" fill="white" />
              </svg>
              <span className="font-medium text-white" style={{ fontSize: "16px", lineHeight: "28px" }}>
                Always included
              </span>
            </div>
            <div
              className="flex items-center gap-2 rounded-2xl"
              style={{ padding: "4px 12px 4px 8px" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#4F4F4F" strokeWidth="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="#4F4F4F" strokeWidth="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#4F4F4F" strokeWidth="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="#4F4F4F" strokeWidth="1.5" />
              </svg>
              <span className="font-medium text-[#4F4F4F]" style={{ fontSize: "16px", lineHeight: "28px" }}>
                For Transactions
              </span>
            </div>
            <div
              className="flex items-center gap-2 rounded-2xl"
              style={{ padding: "4px 12px 4px 8px" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#4F4F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium text-[#4F4F4F]" style={{ fontSize: "16px", lineHeight: "28px" }}>
                For Commissions
              </span>
            </div>
          </div>

          {/* Features content: cards + screenshot */}
          <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">

            {/* Feature cards */}
            <div className="flex flex-shrink-0 flex-col gap-4 lg:w-[390px]">
              {alwaysIncludedFeatures.map(({ title, description }) => (
                <div
                  key={title}
                  className="flex flex-1 flex-col gap-3 rounded-xl p-4"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <h3
                    className="text-[#0063EB] font-medium"
                    style={{ fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "28px", letterSpacing: "-0.0075em" }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>

            {/* Product screenshot */}
            <div
              className="relative flex-1 overflow-hidden rounded-xl"
              style={{ minHeight: "400px" }}
            >
              <Image
                src="/images/figma/pages/product-screenshot-checklist.jpg"
                alt="Paperless Pipeline compliance and document management"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 845px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. BENEFITS
      ───────────────────────────────────────── */}
      <section className="px-5 py-5 bg-white">
        <div
          className="max-w-[1400px] mx-auto rounded-3xl py-[80px] md:py-[120px] px-5 sm:px-10 lg:px-[80px]"
          style={{ background: "#0063EB" }}
        >
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12">

            {/* Header */}
            <div className="flex flex-col items-center gap-3 max-w-[836px] w-full mx-auto text-center">
              <p
                className="text-white font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Why Brokerages Choose Us
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-semibold text-[32px] md:text-[48px] leading-tight">
                  Drive Growth, Efficiency, and Control Across Your Brokerage
                </h2>
                <p className="text-white font-normal text-[16px] leading-[150%] opacity-90">
                  Paperless Pipeline helps you simplify operations, reduce
                  overhead, and scale your brokerage with confidence—without
                  adding complexity to your team&apos;s workflow.
                </p>
              </div>
            </div>

            {/* Benefit cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitCards.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-6 rounded-xl p-8"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  {/* Icon + title */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex items-center justify-center rounded-full bg-[#0063EB] flex-shrink-0"
                        style={{ padding: "12px" }}
                      >
                        <Icon size={24} color="white" aria-hidden="true" />
                      </div>
                    </div>
                    <h3
                      className="text-black font-normal"
                      style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.0144em" }}
                    >
                      {title}
                    </h3>
                  </div>
                  {/* Divider */}
                  <div className="w-full h-px bg-[#E4E4E7]" />
                  {/* Description */}
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "32px", letterSpacing: "-0.0113em" }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          8. FAQ
      ───────────────────────────────────────── */}
      <BrokerFAQSection />
    </>
  );
}
