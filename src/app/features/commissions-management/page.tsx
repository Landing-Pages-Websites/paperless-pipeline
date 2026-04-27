import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  { label: "Statements", sub: "Clear Payouts" },
  { label: "Reports", sub: "Performance Insights" },
  { label: "Automation", sub: "Smart Updates" },
  { label: "Visibility", sub: "Real-Time Access", active: true },
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
    title: "Brokers & Owners",
    description:
      "Gain full visibility into financial performance and ensure accurate payouts across your entire organization.",
  },
  {
    title: "Agents",
    description:
      "Track your earnings in real time without needing to ask for updates or wait for reports.",
  },
  {
    title: "Admins & Accounting Teams",
    description:
      "Reduce manual work and streamline reporting with automated calculations and ready-to-use statements.",
  },
  {
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
      <section className="bg-[#FDF9EE] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-20">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 pt-16 pb-16 lg:pt-[98px] lg:pb-20">

            {/* Left column */}
            <div className="w-full lg:w-[55%] flex flex-col gap-8">
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
                      fontSize: "clamp(40px, 5.5vw, 64px)",
                      lineHeight: "1.125",
                      letterSpacing: "-0.0375em",
                    }}
                  >
                    Real Estate{" "}
                    <span className="text-[#0063EB]">Commission Management</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="font-medium"
                  style={{ fontSize: "18px", lineHeight: "32px", color: "#4F4F4F" }}
                >
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

            {/* Right column: product screenshot */}
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  maxWidth: "621px",
                  aspectRatio: "621 / 524",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow:
                    "-3px 4px 11px 0px rgba(112,112,112,0.1), -13px 15px 20px 0px rgba(112,112,112,0.09), -29px 35px 27px 0px rgba(112,112,112,0.05)",
                }}
              >
                <Image
                  src="/images/figma/pages/screenshot-commission-dashboard.jpg"
                  alt="Paperless Pipeline commission management dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
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
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-stretch gap-12">

          {/* Left: screenshot */}
          <div
            className="relative flex-1 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0"
            style={{ border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/screenshot-commission-dashboard.jpg"
              alt="Commission module dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p
                className="text-[#0063EB] font-medium uppercase"
                style={{ fontSize: "14px", lineHeight: "24px", letterSpacing: "0.0893em" }}
              >
                Commission Module
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                  A Simple Way to Track and Share Data
                </h2>
                <p
                  className="text-[#4F4F4F] font-normal"
                  style={{ fontSize: "16px", lineHeight: "150%" }}
                >
                  Built to reduce questions and simplify how you manage agent production
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-3">
              {commissionChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg p-4"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                    className="flex-shrink-0"
                  >
                    <circle cx="16" cy="16" r="16" fill="#0063EB" fillOpacity="0.1" />
                    <path
                      d="M10 16.5l4 4 8-8"
                      stroke="#0063EB"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    className="text-black font-normal"
                    style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.0056em" }}
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
              Learn More About Commission Module →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. FEATURES
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">

          {/* Header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium uppercase"
              style={{ fontSize: "14px", lineHeight: "24px", letterSpacing: "0.0893em" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Tools to Simplify{" "}
                <br className="hidden md:block" />
                Commission Management
              </h2>
              <p
                className="text-[#4F4F4F] font-normal"
                style={{ fontSize: "16px", lineHeight: "150%" }}
              >
                Everything you need to track, report, and share commission data efficiently
              </p>
            </div>
          </div>

          {/* Feature tabs row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {featureTabs.map(({ label, sub, active }) => (
              <div
                key={label}
                className="flex flex-col gap-6 rounded-2xl p-4"
                style={
                  active
                    ? { background: "linear-gradient(250deg, #FFE95B 0%, #0D47C1 100%)" }
                    : {}
                }
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: active ? "#0063EB" : "rgba(79,79,79,0.25)",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
                        stroke={active ? "white" : "#4F4F4F"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="font-bold"
                      style={{ fontSize: "18px", lineHeight: "32px", color: "#1E1E1E" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-normal"
                      style={{ fontSize: "16px", lineHeight: "24px", color: "#4F4F4F" }}
                    >
                      {sub}
                    </span>
                  </div>
                </div>
                <div
                  className="w-full"
                  style={{ height: "1px", background: "#ECEEF2" }}
                />
              </div>
            ))}
          </div>

          {/* Active feature: Visibility — card + screenshot */}
          <div
            className="flex flex-col lg:flex-row items-stretch w-full rounded-3xl overflow-hidden"
            style={{ border: "1px solid #D5D9E2", background: "#ECEEF2" }}
          >
            {/* White content card */}
            <div className="lg:w-[526px] flex-shrink-0 p-4 flex items-end">
              <div
                className="w-full flex flex-col justify-between rounded-2xl p-8 gap-8"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0px 1px 2px 0px rgba(35,39,46,0.08)",
                  minHeight: "488px",
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
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path
                        d="M9 3.75C5.25 3.75 2.085 6.093 1.125 9c.96 2.907 4.125 5.25 7.875 5.25s6.915-2.343 7.875-5.25C15.915 6.093 12.75 3.75 9 3.75z"
                        stroke="#0063EB"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="9" cy="9" r="2.25" stroke="#0063EB" strokeWidth="1.25" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold"
                      style={{
                        fontSize: "24px",
                        lineHeight: "40px",
                        letterSpacing: "-0.0208em",
                        color: "#1E1E1E",
                      }}
                    >
                      Visibility
                    </h3>
                    <p
                      className="font-normal"
                      style={{ fontSize: "20px", lineHeight: "32px", color: "#4F4F4F" }}
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

            {/* Screenshot */}
            <div className="relative flex-1 min-h-[360px]">
              <Image
                src="/images/figma/pages/screenshot-commission-report.jpg"
                alt="Automated monthly commission production reports"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
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
      <section className="bg-white py-[112px] px-5 md:px-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">

          {/* Header */}
          <div className="flex flex-col gap-3 max-w-[728px]">
            <p
              className="text-[#0063EB] font-medium uppercase"
              style={{ fontSize: "14px", lineHeight: "24px", letterSpacing: "0.0893em" }}
            >
              The Process
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Keep Commission Tracking Simple and Accurate
              </h2>
              <p
                className="text-[#4F4F4F] font-normal"
                style={{ fontSize: "16px", lineHeight: "150%" }}
              >
                A straightforward process that keeps your data organized and up to date
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col">

            {/* Row 1: Steps 01 + 02 */}
            <div
              className="flex flex-col md:flex-row gap-16 py-12"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              {processSteps.slice(0, 2).map((step) => (
                <div key={step.number} className="flex-1 flex flex-row gap-8">
                  <span
                    className="text-[#0063EB] font-bold flex-shrink-0"
                    style={{ fontSize: "48px", lineHeight: "120%" }}
                  >
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="text-black font-bold"
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
                  className="text-[#0063EB] font-bold flex-shrink-0"
                  style={{ fontSize: "48px", lineHeight: "120%" }}
                >
                  {processSteps[2].number}
                </span>
                <div className="flex flex-col gap-4">
                  <h3
                    className="text-black font-bold"
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
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

          {/* Header — two-column on desktop */}
          <div className="flex flex-col md:flex-row md:items-end gap-3">
            <div className="flex flex-col gap-3 flex-1">
              <p
                className="text-[#0063EB] font-medium uppercase"
                style={{ fontSize: "14px", lineHeight: "24px", letterSpacing: "0.0893em" }}
              >
                Built For
              </p>
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Designed for Every Role in Your Team
              </h2>
            </div>
            <p
              className="text-[#4F4F4F] font-normal flex-1"
              style={{ fontSize: "16px", lineHeight: "150%", maxWidth: "560px" }}
            >
              Whether you&apos;re managing operations, coordinating transactions, or closing
              deals, the Commission Module adapts to your workflow—helping every role move
              faster, stay organized, and eliminate unnecessary back-and-forth
            </p>
          </div>

          {/* Role cards 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map(({ title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-6 rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-full bg-[#0063EB] flex-shrink-0"
                  style={{ width: "64px", height: "64px" }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path
                      d="M16 8a4 4 0 100 8 4 4 0 000-8zM8 24c0-4.418 3.582-8 8-8s8 3.582 8 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-6">
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.015em" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "32px" }}
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
