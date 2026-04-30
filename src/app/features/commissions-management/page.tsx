import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  Building2,
  Eye,
  FileText,
  Landmark,
  Sparkles,
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
  { Icon: FileText, label: "Statements", sub: "Clear Payouts" },
  { Icon: BarChart3, label: "Reports", sub: "Performance Insights" },
  { Icon: Bell, label: "Automation", sub: "Smart Updates" },
  { Icon: Eye, label: "Visibility", sub: "Real-Time Access", active: true },
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

export default function CommissionsManagementPage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────── */}
      <section
        className="overflow-hidden"
        style={{
          background:
            "linear-gradient(105deg, #FFF9EA 0%, #FFF9EA 41%, #EAF5FF 63%, #F4F0D5 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-10 lg:px-[108px]">
          <div className="grid grid-cols-1 items-center gap-9 py-10 lg:grid-cols-[minmax(0,640px)_minmax(0,620px)] lg:justify-between lg:gap-12 lg:pt-[42px] lg:pb-[68px]">

            {/* Left column */}
            <div className="flex w-full flex-col gap-7">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center self-start gap-3 rounded-full bg-white"
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "7px 17px 7px 8px",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                    }}
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(4,110,255,0.1)", width: "24px", height: "24px" }}
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
                    className="max-w-[580px] text-[42px] font-semibold leading-[1.08] text-black sm:text-[54px] lg:text-[62px]"
                    style={{ letterSpacing: "0" }}
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
                  className="inline-flex items-center justify-center text-white font-medium w-full sm:w-auto"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    background: "#0063EB",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "8px",
                    padding: "11px 18px",
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
                    fontSize: "16px",
                    lineHeight: "24px",
                    borderRadius: "8px",
                    padding: "11px 18px",
                    boxShadow:
                      "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 2px 0px rgba(0,0,0,0.06)",
                  }}
                >
                  Book A Demo →
                </Link>
              </div>
            </div>

            {/* Right column: product screenshot */}
            <div className="flex w-full justify-center lg:justify-end">
              <div
                className="relative w-full"
                style={{
                  maxWidth: "621px",
                  aspectRatio: "621 / 524",
                }}
              >
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
      <section className="bg-white px-5 py-16 sm:px-10 md:py-24 lg:px-[108px]">
        <div className="mx-auto grid w-full max-w-[1390px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,615px)_minmax(0,615px)] lg:gap-16">

          {/* Left: screenshot */}
          <div
            className="relative min-h-[420px] overflow-hidden rounded-[20px] lg:min-h-[740px]"
            style={{ border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/commission-module-dashboard.png"
              alt="Commission module dashboard"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 615px"
            />
          </div>

          {/* Right: content */}
          <div className="flex min-w-0 flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p
                className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.14em" }}
              >
                Commission Module
              </p>
              <div className="flex flex-col gap-3">
                <h2 className="max-w-[580px] text-[36px] font-semibold leading-[1.2] text-black md:text-[48px]">
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
                  className="flex min-h-[62px] items-center gap-4 rounded-lg bg-white px-5 py-3"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
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
                  <p
                    className="font-normal text-[#0063EB]"
                    style={{ fontSize: "17px", lineHeight: "24px", letterSpacing: "0" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <Link
              href="/signup"
              className="inline-flex items-center justify-center text-white font-medium self-start"
              style={{
                fontSize: "15px",
                lineHeight: "24px",
                background: "#0063EB",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                padding: "8px 14px",
                boxShadow:
                  "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
              }}
            >
              Learn More About Commission Module →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. FEATURES
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-14 sm:px-10 md:py-16 lg:px-[70px]">
        <div className="mx-auto flex w-full max-w-[1090px] flex-col items-center gap-9">

          {/* Header */}
          <div className="flex w-full max-w-[720px] flex-col items-center gap-3 text-center">
            <p
              className="text-[11px] font-medium uppercase leading-5 text-[#0063EB]"
              style={{ letterSpacing: "0.18em" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="text-[34px] font-semibold leading-[1.18] text-black md:text-[43px]">
                Tools to Simplify{" "}
                <br className="hidden md:block" />
                Commission Management
              </h2>
              <p className="text-[15px] font-normal leading-6 text-[#4F4F4F]">
                Everything you need to track, report, and share commission data efficiently
              </p>
            </div>
          </div>

          {/* Feature tabs row */}
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featureTabs.map(({ Icon, label, sub, active }) => (
              <div
                key={label}
                className="flex min-h-[84px] flex-col justify-between gap-4 rounded-[12px] px-3 py-3"
                style={
                  active
                    ? { background: "linear-gradient(112deg, #EAF5FF 0%, #F4F0D5 100%)" }
                    : {}
                }
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: "46px",
                      height: "46px",
                      background: active ? "#0063EB" : "rgba(79,79,79,0.25)",
                    }}
                  >
                    <Icon size={18} color={active ? "#FFE95B" : "#FFFFFF"} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-bold text-[#1E1E1E]"
                      style={{ fontSize: "15px", lineHeight: "22px" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-normal"
                      style={{ fontSize: "14px", lineHeight: "20px", color: "#4F4F4F" }}
                    >
                      {sub}
                    </span>
                  </div>
                </div>
                <div
                  className="w-full"
                  style={{ height: active ? "2px" : "1px", background: active ? "#0063EB" : "#ECEEF2" }}
                />
              </div>
            ))}
          </div>

          {/* Active feature: Visibility — card + screenshot */}
          <div
            className="grid w-full grid-cols-1 overflow-hidden rounded-[16px] p-4 lg:grid-cols-[minmax(0,1fr)_420px] lg:p-4"
            style={{
              border: "1px solid #D5D9E2",
              background:
                "linear-gradient(112deg, #F4F0D5 0%, #D8E9FF 62%, #0063EB 100%)",
            }}
          >
            {/* Screenshot */}
            <div className="relative min-h-[300px] lg:min-h-[360px]">
              <Image
                src="/images/figma/pages/screenshot-commission-report.jpg"
                alt="Automated monthly commission production reports"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
            </div>

            {/* White content card */}
            <div className="flex items-stretch lg:items-end">
              <div
                className="flex w-full flex-col justify-between gap-8 rounded-[14px] p-7"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 2px 0px rgba(35,39,46,0.08)",
                  minHeight: "360px",
                }}
              >
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(0,99,235,0.1)",
                    }}
                  >
                    <Eye size={18} color="#0063EB" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold"
                      style={{
                        fontSize: "23px",
                        lineHeight: "32px",
                        letterSpacing: "-0.0208em",
                        color: "#1E1E1E",
                      }}
                    >
                      Visibility
                    </h3>
                    <p
                      className="font-normal"
                      style={{ fontSize: "18px", lineHeight: "28px", color: "#4F4F4F" }}
                    >
                      Give agents direct access to their earnings and production data anytime. Reduce
                      back-and-forth communication by making financial information easy to view.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center text-white font-medium self-start"
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    background: "#0063EB",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    boxShadow:
                      "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
                  }}
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
        heading="Take the Guesswork Out of Commissions"
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
            <p
              className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
              style={{ letterSpacing: "0.14em" }}
            >
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
              className="flex flex-col gap-12 py-12 md:flex-row md:gap-20"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              {processSteps.slice(0, 2).map((step) => (
                <div key={step.number} className="flex flex-1 flex-row gap-8">
                  <span
                    className="flex-shrink-0 font-bold text-[#0063EB]"
                    style={{ fontSize: "48px", lineHeight: "120%" }}
                  >
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="font-bold text-black"
                      style={{ fontSize: "32px", lineHeight: "130%" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#4F4F4F] font-normal"
                      style={{ fontSize: "16px", lineHeight: "150%" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Step 03 alone */}
            <div
              className="py-12"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              <div className="flex flex-row gap-8 md:max-w-[608px]">
                <span
                  className="flex-shrink-0 font-bold text-[#0063EB]"
                  style={{ fontSize: "48px", lineHeight: "120%" }}
                >
                  {processSteps[2].number}
                </span>
                <div className="flex flex-col gap-4">
                  <h3
                    className="font-bold text-black"
                    style={{ fontSize: "32px", lineHeight: "130%" }}
                  >
                    {processSteps[2].title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "150%" }}
                  >
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
              <p
                className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.14em" }}
              >
                Built For
              </p>
              <h2 className="max-w-[620px] text-[36px] font-semibold leading-[1.25] text-black md:text-[48px]">
                Designed for Every Role in Your Team
              </h2>
            </div>
            <p
              className="flex-1 text-[17px] font-normal leading-7 text-[#4F4F4F]"
              style={{ maxWidth: "560px" }}
            >
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
                className="flex min-h-[230px] flex-col gap-6 rounded-xl bg-white p-6 md:p-8"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                {/* Icon */}
                <div
                  className="flex flex-shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                  style={{ width: "64px", height: "64px" }}
                >
                  <Icon size={28} color="#FFE95B" strokeWidth={2.2} aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-6">
                  <h3
                    className="font-medium text-black"
                    style={{ fontSize: "24px", lineHeight: "28px", letterSpacing: "0" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-normal text-[#4F4F4F]"
                    style={{ fontSize: "17px", lineHeight: "30px" }}
                  >
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
