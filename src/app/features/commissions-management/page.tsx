import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Building2,
  CreditCard,
  File,
  Landmark,
  Sparkles,
  Table2,
  UserCheck,
  Users,
} from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Commissions Management — Paperless Pipeline",
  description:
    "Automate calculations, give agents full visibility, and eliminate manual work with a smarter commission management system.",
};

const commissionChecklist = [
  "Easily calculate agent commissions without relying on manual spreadsheets",
  "Provide agents with clear, up-to-date insights into their production",
  "Keep all commission data organized and accessible in one place",
  "Reduce repetitive questions with built-in visibility and reporting",
  "Ensure accuracy with automated calculations based on transaction data",
];

const featureTabs = [
  { Icon: CreditCard, label: "Statements", sub: "Clear Payouts" },
  { Icon: File, label: "Reports", sub: "Performance Insights" },
  { Icon: Bell, label: "Automation", sub: "Smart Updates" },
  { Icon: Table2, label: "Visibility", sub: "Real-Time Access", active: true },
];

const processSteps = [
  {
    number: "01",
    title: "Calculate Commissions Automatically",
    description:
      "Commissions are calculated based on your deal structure and transaction details. Reduce errors and eliminate the need for manual calculations.",
  },
  {
    number: "02",
    title: "Generate Statements and Reports",
    description:
      "Create commission statements and financial reports instantly when needed. Access clear, organized data in just a few clicks.",
  },
  {
    number: "03",
    title: "Share with Agents",
    description:
      "Agents can view their earnings and production at any time. Automated updates keep everyone informed without extra follow-ups.",
  },
];

const useCases = [
  {
    Icon: Landmark,
    title: "Brokers & Owners",
    description:
      "Gain full visibility into financial performance and ensure accurate payouts across your entire organization.",
  },
  {
    Icon: UserCheck,
    title: "Agents",
    description:
      "Track your earnings in real time without needing to ask for updates or wait for reports.",
  },
  {
    Icon: Users,
    title: "Admins & Accounting Teams",
    description:
      "Reduce manual work and streamline reporting with automated calculations and ready-to-use statements.",
  },
  {
    Icon: Building2,
    title: "Growing Teams",
    description:
      "Handle increasing transaction volume without adding complexity to your commission process.",
  },
];

function CommissionReportMockup() {
  const rows = [
    ["3", "Transactions Closed"],
    ["3", "Sales Closed"],
    ["$975,000.00", "in Sales Volume"],
    ["$23,100.00", "in Gross Commissions Earned"],
    ["-$650.00", "in Fees & Taxes Paid"],
    ["$22,450.00", "in Net Commission Earned"],
    ["$22,450.00", "in Net Amount Received"],
  ];

  return (
    <div className="w-full max-w-[356px] overflow-hidden bg-white shadow-sm">
      <div className="px-3 pt-3">
        <p className="text-[11px] font-semibold leading-4 text-[#4F6B8B]">
          Presidential Real Estate
        </p>
        <h3 className="text-[17px] font-bold leading-5 text-[#2569D9]">
          Stats for John Kennedy
        </h3>
        <p className="mt-1 text-[11px] font-semibold leading-4 text-[#2B3D4D]">
          Calendar Year-to-date
        </p>
        <p className="text-[9px] leading-3 text-[#7B838C]">January 1, 2018 to May 31, 2018</p>
      </div>

      <div className="mt-2">
        {rows.map(([amount, label]) => (
          <div
            key={`${amount}-${label}`}
            className="grid min-h-[38px] grid-cols-[92px_1fr] items-center border-t border-white bg-[#92C9DA]"
          >
            <div className="flex justify-center">
              <span className="inline-flex min-w-[42px] items-center justify-center rounded-full bg-white px-2 py-1 text-[11px] font-bold leading-4 text-[#41576A] shadow-sm">
                {amount}
              </span>
            </div>
            <span className="text-[11px] font-medium leading-4 text-[#345363]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CommissionsManagementPage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────── */}
      <section className="overflow-hidden bg-[linear-gradient(105deg,#FFF9EA_0%,#FFF9EA_41%,#EAF5FF_63%,#F4F0D5_100%)]">
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-10 lg:px-[108px]">
          <div className="grid grid-cols-1 items-center gap-9 py-10 lg:grid-cols-[minmax(0,640px)_minmax(0,620px)] lg:justify-between lg:gap-12 lg:pt-[42px] lg:pb-[68px]">

            {/* Left column */}
            <div className="flex w-full flex-col gap-7">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                  {/* Badge */}
                  <div className="inline-flex items-center self-start gap-3 rounded-full border border-black/10 bg-white py-[7px] pr-[17px] pl-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                    <span
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(4,110,255,0.1)]"
                    >
                      <Sparkles size={14} color="#0063EB" aria-hidden="true" />
                    </span>
                    <span
                      className="whitespace-nowrap text-[14px] font-medium leading-5 text-black sm:text-[16px]"
                    >
                      No credit card required. No setup fees.
                    </span>
                  </div>

                  {/* H1 */}
                  <h1
                    className="max-w-[580px] text-[42px] font-semibold leading-[1.08] tracking-normal text-black sm:text-[54px] lg:text-[62px]"
                  >
                    Real Estate <span className="text-[#0063EB]">Commission Management</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p className="max-w-[650px] text-[18px] font-medium leading-8 text-black sm:text-[20px]">
                  Automate calculations, give agents full visibility, and eliminate
                  manual work with a smarter commission management system
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/signup"
                  className="inline-flex w-full items-center justify-center rounded-[8px] border border-white/30 bg-[#0063EB] px-[18px] py-[11px] text-[16px] font-medium leading-6 text-white shadow-[0_0_0_1px_rgba(4,110,255,1),0_1px_2px_0_rgba(4,110,255,0.64)] sm:w-auto"
                >
                  Start Free Trial →
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex w-full items-center justify-center rounded-[8px] bg-white px-[18px] py-[11px] text-[16px] font-medium leading-6 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_0_rgba(0,0,0,0.06)] sm:w-auto"
                >
                  Book A Demo →
                </Link>
              </div>
            </div>

            {/* Right column: product screenshot */}
            <div className="flex w-full justify-center lg:justify-end">
              <div className="relative aspect-[621/524] w-full max-w-[621px]">
                <Image
                  src="/images/figma/pages/commission-hero-closing.png"
                  alt="Real estate keys and commission payout"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 621px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. COMMISSION MODULE
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-14 sm:px-10 md:py-20 lg:px-[80px]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,560px)] lg:gap-12">

          {/* Left: screenshot */}
          <div
            className="relative min-h-[380px] overflow-hidden rounded-[20px] border border-[#F0EDEA] md:min-h-[500px] lg:h-[640px] lg:min-h-0"
          >
            <Image
              src="/images/figma/pages/screenshot-commission-dashboard.jpg"
              alt="Commission module dashboard"
              fill
              className="object-cover object-[46%_center]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>

          {/* Right: content */}
          <div className="flex min-w-0 flex-col gap-7">
            <div className="flex flex-col gap-4">
              <p className="text-[14px] font-medium uppercase leading-6 tracking-[0.14em] text-[#0063EB]">
                Commission Module
              </p>
              <div className="flex flex-col gap-3">
                <h2 className="max-w-[560px] text-[36px] font-semibold leading-[1.2] text-black md:text-[46px]">
                  A Simple Way to Track and Share Data
                </h2>
                <p className="max-w-[520px] text-[18px] font-normal leading-7 text-[#4F4F4F]">
                  Built to reduce questions and simplify how you manage agent production
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3">
              {commissionChecklist.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[58px] items-center gap-4 rounded-lg border border-black/10 bg-white px-5 py-3"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                    className="flex-shrink-0"
                  >
                    <circle cx="16" cy="16" r="14" fill="#0063EB" />
                    <path
                      d="M10 16.5l4 4 8-8"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[17px] font-normal leading-6 tracking-normal text-[#0063EB]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <Link
              href="/signup"
              className="inline-flex items-center justify-center self-start rounded-[8px] border border-white/30 bg-[#0063EB] px-[14px] py-2 text-[15px] font-medium leading-6 text-white shadow-[0_0_0_1px_rgba(4,110,255,1),0_1px_2px_0_rgba(4,110,255,0.64)]"
            >
              Learn More About Commission Module →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. FEATURES
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-14 sm:px-10 md:py-16 lg:px-[54px]">
        <div className="mx-auto flex w-full max-w-[990px] flex-col items-center gap-[34px]">

          {/* Header */}
          <div className="flex w-full max-w-[690px] flex-col items-center gap-3 text-center">
            <p className="text-[10px] font-medium uppercase leading-4 tracking-[0.18em] text-[#0063EB]">
              Features
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="text-[34px] font-semibold leading-[1.18] text-black md:text-[40px]">
                Tools to Simplify{" "}
                <br className="hidden md:block" />
                Commission Management
              </h2>
              <p className="text-[13px] font-normal leading-5 text-[#4F4F4F]">
                Everything you need to track, report, and share commission data efficiently
              </p>
            </div>
          </div>

          {/* Feature tabs row */}
          <div className="grid w-full grid-cols-1 gap-[42px] sm:grid-cols-2 lg:grid-cols-[208px_208px_208px_232px]">
            {featureTabs.map(({ Icon, label, sub, active }) => (
              <div
                key={label}
                className={`flex min-h-[88px] flex-col justify-between gap-4 rounded-[12px] px-3 py-3 ${
                  active ? "bg-[linear-gradient(112deg,#EAF5FF_0%,#F4F0D5_100%)]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-11 flex-shrink-0 items-center justify-center rounded-full ${
                      active ? "bg-[#0063EB]" : "bg-[rgba(79,79,79,0.25)]"
                    }`}
                  >
                    <Icon size={16} color={active ? "#FFE95B" : "#FFFFFF"} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold leading-5 text-[#1E1E1E]">
                      {label}
                    </span>
                    <span className="text-[14px] font-normal leading-5 text-[#4F4F4F]">
                      {sub}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-full ${active ? "h-0.5 bg-[#0063EB]" : "h-px bg-[#ECEEF2]"}`}
                />
              </div>
            ))}
          </div>

          {/* Active feature: Visibility */}
          <div
            className="grid w-full grid-cols-1 overflow-hidden rounded-[16px] border border-[#D5D9E2] bg-[linear-gradient(112deg,#F4F0D5_0%,#D8E9FF_62%,#0063EB_100%)] p-3 lg:grid-cols-[minmax(0,1fr)_408px]"
          >
            {/* Report visual */}
            <div className="flex min-h-[300px] items-center justify-center px-6 py-6 lg:min-h-[378px] lg:px-10 lg:py-0">
              <CommissionReportMockup />
            </div>

            {/* White content card */}
            <div className="flex items-stretch lg:items-end">
              <div
                className="flex min-h-[378px] w-full flex-col justify-between gap-8 rounded-[14px] bg-white p-6 shadow-[0_1px_2px_0_rgba(35,39,46,0.08)]"
              >
                <div className="flex flex-col gap-7">
                  {/* Icon */}
                  <div
                    className="flex size-6 flex-shrink-0 items-center justify-center"
                  >
                    <Table2 size={18} color="#0063EB" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[22px] font-semibold leading-7 tracking-normal text-[#1E1E1E]">
                      Visibility
                    </h3>
                    <p className="text-[17px] font-normal leading-[26px] text-[#4F4F4F]">
                      Give agents direct access to their earnings and production data anytime. Reduce
                      back-and-forth communication by making financial information easy to view.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center self-start rounded-[8px] border border-white/30 bg-[#0063EB] px-3 py-1.5 text-[14px] font-medium leading-6 text-white shadow-[0_0_0_1px_rgba(4,110,255,1),0_1px_2px_0_rgba(4,110,255,0.64)]"
                >
                  Try Now →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        variant="cta"
        eyebrow="Get Started"
        title="Take the Guesswork Out of Commissions"
        subtext="See how automated commission tracking can save time and improve accuracy"
        buttonText="Watch Demo →"
        buttonHref="/demo"
      />

      {/* ─────────────────────────────────────────
          5. PROCESS (Included)
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-16 sm:px-10 md:py-24 lg:px-[108px]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16">

          {/* Header */}
          <div className="flex max-w-[760px] flex-col gap-4">
            <p className="text-[14px] font-medium uppercase leading-6 tracking-[0.14em] text-[#0063EB]">
              The Process
            </p>
            <div className="flex flex-col gap-4">
              <h2 className="text-[36px] font-semibold leading-[1.2] text-black md:text-[48px]">
                Keep Commission Tracking Simple and Accurate
              </h2>
              <p className="text-[17px] font-normal leading-7 text-[#4F4F4F]">
                A straightforward process that keeps your data organized and up to date
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col">

            {/* Row 1: Steps 01 + 02 */}
            <div
              className="flex flex-col gap-12 border-t border-black/10 py-12 md:flex-row md:gap-20"
            >
              {processSteps.slice(0, 2).map((step) => (
                <div key={step.number} className="flex flex-1 flex-row gap-8">
                  <span className="flex-shrink-0 text-[48px] font-bold leading-[120%] text-[#0063EB]">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[32px] font-bold leading-[130%] text-black">
                      {step.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-[150%] text-[#4F4F4F]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Step 03 alone */}
            <div className="border-t border-black/10 py-12">
              <div className="flex flex-row gap-8 md:max-w-[608px]">
                <span className="flex-shrink-0 text-[48px] font-bold leading-[120%] text-[#0063EB]">
                  {processSteps[2].number}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-bold leading-[130%] text-black">
                    {processSteps[2].title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[150%] text-[#4F4F4F]">
                    {processSteps[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. USE CASES
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-16 sm:px-10 md:py-24 lg:px-[108px]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-14">

          {/* Header — two-column on desktop */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-[14px] font-medium uppercase leading-6 tracking-[0.14em] text-[#0063EB]">
                Built For
              </p>
              <h2 className="max-w-[620px] text-[36px] font-semibold leading-[1.25] text-black md:text-[48px]">
                Designed for Every Role in Your Team
              </h2>
            </div>
            <p className="max-w-[560px] flex-1 text-[17px] font-normal leading-7 text-[#4F4F4F]">
              Whether you&apos;re managing operations, coordinating transactions, or closing
              deals, the Commission Module adapts to your workflow—helping every role move
              faster, stay organized, and eliminate unnecessary back-and-forth
            </p>
          </div>

          {/* Role cards 2×2 grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {useCases.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex min-h-[230px] flex-col gap-6 rounded-xl border border-black/10 bg-white p-6 md:p-8"
              >
                {/* Icon */}
                <div
                  className="flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                >
                  <Icon size={28} color="#FFE95B" strokeWidth={2.2} aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-[24px] font-medium leading-7 tracking-normal text-black">
                    {title}
                  </h3>
                  <p className="text-[17px] font-normal leading-[30px] text-[#4F4F4F]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
