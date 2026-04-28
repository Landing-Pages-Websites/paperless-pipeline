import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  LayoutTemplate,
  Activity,
  Download,
  ShieldCheck,
  Building2,
  ClipboardList,
  Users,
  TrendingUp,
} from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Pipeline eSign — Get Documents Signed Faster — Paperless Pipeline",
  description:
    "Send signature requests in seconds directly from transactions. No extra tools, no switching tabs, and no inflated costs. Just a faster, fully integrated way to collect signatures.",
};

const benefitCards = [
  {
    Icon: Zap,
    title: "Send Faster",
    description:
      "Send signature requests in seconds directly from transactions or your Reference Library, without switching tools.",
  },
  {
    Icon: LayoutTemplate,
    title: "Work Smarter",
    description:
      "Use reusable, smart forms that automatically fill in signer roles and transaction details, reducing repetitive work.",
  },
  {
    Icon: Activity,
    title: "Track in Real Time",
    description:
      "Monitor status, send reminders, or cancel requests anytime with full visibility into every document.",
  },
  {
    Icon: Download,
    title: "Get Documents Instantly",
    description:
      "Signed documents are automatically returned and stored in your Pipeline account for easy access.",
  },
  {
    Icon: ShieldCheck,
    title: "Stay Secure & Compliant",
    description:
      "Every signature is legally binding and securely handled, giving you complete confidence in your process.",
  },
];

const beforeItems = [
  "Per-user pricing that increases costs as your team grows",
  "Multiple tools and logins that break your workflow",
  "Manual data entry that slows down every transaction",
  "Long-term contracts with inflexible pricing",
];

const afterItems = [
  "Usage-based pricing with no per-user fees",
  "Fully integrated into your existing workflow",
  "Auto-filled data to eliminate repetitive work",
  "No contracts—scale or cancel anytime",
];

const useCases = [
  {
    Icon: Building2,
    title: "Brokers & Admins",
    description:
      "Standardize how your office sends, tracks, and manages signature requests—all from one centralized system with full visibility.",
  },
  {
    Icon: ClipboardList,
    title: "Transaction Coordinators",
    description:
      "Stay on top of every request, send reminders instantly, and avoid time-consuming follow-ups with a more streamlined process.",
  },
  {
    Icon: Users,
    title: "Agents & Teams",
    description:
      "Send documents quickly without switching tools or chasing signatures, so you can focus on closing deals faster.",
  },
  {
    Icon: TrendingUp,
    title: "Growing Offices",
    description:
      "Keep your workflows efficient and scalable as your transaction volume increases, without adding complexity or extra tools.",
  },
];

const steps = [
  {
    number: 1,
    title: "Choose Documents & Signers",
    description:
      "Select the documents you need and assign the right people in just a few clicks—no manual setup required.",
    image: "/images/figma/pages/screenshot-esign-form.jpg",
  },
  {
    number: 2,
    title: "Add Fields or Use Templates",
    description:
      "Quickly place signature fields or use prebuilt, reusable forms to speed up the process and avoid repetitive work.",
    image: "/images/figma/pages/screenshot-esign-templates.jpg",
  },
  {
    number: 3,
    title: "Send & Track in Real Time",
    description:
      "Send documents instantly and monitor progress live, with the ability to send reminders or make updates anytime.",
    image: "/images/figma/pages/screenshot-esign-signing.jpg",
  },
  {
    number: 4,
    title: "Receive Signed Documents Automatically",
    description:
      "Completed documents are returned directly to your account, fully organized and ready for access.",
    image: "/images/figma/pages/screenshot-esign-workflow.jpg",
  },
];

export default function PipelineESignPage() {
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
                    Get Documents{" "}
                    <span className="text-[#0063EB]">Signed Faster</span>
                    , for Less
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="font-medium"
                  style={{ fontSize: "18px", lineHeight: "32px", color: "#4F4F4F" }}
                >
                  No extra tools, no switching tabs, and no inflated costs. Just
                  a faster, fully integrated way to collect signatures.
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

              {/* Social proof */}
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="relative rounded-full overflow-hidden border-2 border-[#FDF9EE] flex-shrink-0"
                      style={{
                        width: "36px",
                        height: "36px",
                        marginLeft: n === 1 ? "0" : "-10px",
                        zIndex: n,
                      }}
                    >
                      <Image
                        src={`/images/figma/hero-avatar-${n}.png`}
                        alt={`User avatar ${n}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{ width: "1px", height: "52px", background: "#D5D9E2", flexShrink: 0 }}
                />
                <div className="flex flex-col">
                  <div
                    style={{
                      fontFamily: "var(--font-bricolage)",
                      fontWeight: 500,
                      fontSize: "32px",
                      lineHeight: "1",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    <span style={{ color: "#23272E" }}>4.6</span>
                    <span style={{ color: "#0063EB" }}>+</span>
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#FFE95B"
                        aria-hidden="true"
                      >
                        <path d="M12 2l2.7 5.47 6.03.87-4.37 4.25 1.03 6.01L12 15.77l-5.39 2.83 1.03-6.01L3.27 8.34l6.03-.87L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    className="font-medium mt-0.5"
                    style={{ fontSize: "12px", lineHeight: "20px", color: "#6C757D" }}
                  >
                    by users on G2
                  </span>
                </div>
              </div>
            </div>

            {/* Right column: product screenshot */}
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  maxWidth: "620px",
                  aspectRatio: "621 / 524",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow:
                    "-3px 4px 11px 0px rgba(112,112,112,0.1), -13px 15px 20px 0px rgba(112,112,112,0.09), -29px 35px 27px 0px rgba(112,112,112,0.05)",
                }}
              >
                <Image
                  src="/images/figma/pages/screenshot-esign-workflow.jpg"
                  alt="Pipeline eSign — integrated document signing workflow"
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
          2. BENEFITS
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[836px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                What Makes Pipeline eSign Different
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Built to make document signing fast, simple, and fully integrated
              </p>
            </div>
          </div>

          {/* Benefit cards grid — 3 cols on first row, 2 centered on second */}
          <div className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefitCards.slice(0, 3).map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-6 rounded-xl p-8"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full bg-[#0063EB] flex-shrink-0"
                    style={{ width: "56px", height: "56px", padding: "12px" }}
                  >
                    <Icon size={24} color="white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="text-black font-normal"
                      style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.0144em" }}
                    >
                      {title}
                    </h3>
                    <div className="w-full h-px bg-[#E4E4E7]" />
                    <p
                      className="text-[#4F4F4F] font-normal"
                      style={{ fontSize: "16px", lineHeight: "32px", letterSpacing: "-0.0113em" }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[66.67%] mx-auto w-full">
              {benefitCards.slice(3).map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col gap-6 rounded-xl p-8"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full bg-[#0063EB] flex-shrink-0"
                    style={{ width: "56px", height: "56px", padding: "12px" }}
                  >
                    <Icon size={24} color="white" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3
                      className="text-black font-normal"
                      style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.0144em" }}
                    >
                      {title}
                    </h3>
                    <div className="w-full h-px bg-[#E4E4E7]" />
                    <p
                      className="text-[#4F4F4F] font-normal"
                      style={{ fontSize: "16px", lineHeight: "32px", letterSpacing: "-0.0113em" }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. BEFORE / AFTER
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Pricing Advantage
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Stop Overpaying for eSign Tools
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                See the difference between traditional tools and a fully integrated solution
              </p>
            </div>
          </div>

          {/* Cards row */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">

            {/* BEFORE card */}
            <div
              className="flex-1 flex flex-col gap-4 rounded-2xl overflow-hidden"
              style={{ background: "#F3F3F3", border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <div className="relative w-full" style={{ height: "240px" }}>
                <Image
                  src="/images/figma/pages/screenshot-esign-templates.jpg"
                  alt="Traditional eSign tools — disconnected, costly workflow"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-5 px-6 pb-8">
                <h3
                  className="font-medium"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em", color: "#131315" }}
                >
                  Traditional eSign Tools
                </h3>
                <div className="flex flex-col gap-3">
                  {beforeItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <circle cx="10" cy="10" r="9" stroke="#D92D20" strokeWidth="1.5" />
                          <path d="M13 7L7 13M7 7l6 6" stroke="#D92D20" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                      <p
                        className="font-normal text-[#4F4F4F]"
                        style={{ fontSize: "16px", lineHeight: "32px", letterSpacing: "-0.0113em" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AFTER card */}
            <div
              className="flex-1 flex flex-col gap-4 rounded-2xl overflow-hidden"
              style={{ background: "#0063EB", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="relative w-full" style={{ height: "240px" }}>
                <Image
                  src="/images/figma/pages/screenshot-esign-signing.jpg"
                  alt="Pipeline eSign — integrated, affordable, seamless"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-5 px-6 pb-8">
                <h3
                  className="font-medium text-white"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em" }}
                >
                  Pipeline eSign
                </h3>
                <div className="flex flex-col gap-3">
                  {afterItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <circle cx="10" cy="10" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                          <path d="M6.5 10l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p
                        className="font-normal text-white"
                        style={{ fontSize: "16px", lineHeight: "32px", letterSpacing: "-0.0113em" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
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
          4. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner />

      {/* ─────────────────────────────────────────
          5. USE CASES
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

          {/* Header — two columns on desktop */}
          <div className="flex flex-col md:flex-row md:items-end gap-3">
            <div className="flex flex-col gap-3 flex-1">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Built For
              </p>
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Designed for Every Role in Your Team
              </h2>
            </div>
            <p
              className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] flex-1"
              style={{ maxWidth: "560px" }}
            >
              Whether you&apos;re managing operations, coordinating transactions,
              or closing deals, Pipeline eSign adapts to your workflow—helping
              every role move faster, stay organized, and eliminate unnecessary
              back-and-forth
            </p>
          </div>

          {/* Use case cards 2×2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-6 rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <div
                  className="flex items-center justify-center rounded-full bg-[#0063EB] flex-shrink-0"
                  style={{ width: "64px", height: "64px" }}
                >
                  <Icon size={28} color="white" aria-hidden="true" />
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

      {/* ─────────────────────────────────────────
          6. HOW IT WORKS
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-12">

          {/* Left: section header */}
          <div className="flex flex-col gap-3 lg:w-[480px] flex-shrink-0">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              All-in-One Workflow
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                From Sending to Signing in 4 Simple Steps
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                A streamlined process designed to save time and reduce manual work
              </p>
            </div>
          </div>

          {/* Right: numbered steps */}
          <div className="flex gap-6 flex-1 min-w-0">

            {/* Number bubbles + connecting line */}
            <div className="flex flex-col items-center flex-shrink-0">
              {steps.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: i === 0 ? "#0063EB" : "#E9ECEF",
                    }}
                  >
                    <span
                      className="font-bold text-[24px] leading-[32px]"
                      style={{ color: i === 0 ? "#FFE95B" : "#6C757D" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-px bg-[#DEE2E6] my-3"
                      style={{ minHeight: i === 0 ? "384px" : "112px" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step cards */}
            <div className="flex flex-col gap-6 flex-1 min-w-0">

              {/* Step 1 — large card with image */}
              <div
                className="flex flex-col gap-6 rounded-3xl p-8"
                style={{
                  background: "#FFFFFF",
                  border: "0.5px solid #E9ECEF",
                  boxShadow: "0px 24px 64px 0px rgba(224,224,224,0.48)",
                }}
              >
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em" }}
                  >
                    {steps[0].title}
                  </h3>
                  <p
                    className="font-normal"
                    style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em", color: "#6C757D" }}
                  >
                    {steps[0].description}
                  </p>
                </div>
                <div
                  className="relative w-full rounded-2xl overflow-hidden"
                  style={{ height: "272px" }}
                >
                  <Image
                    src="/images/figma/pages/screenshot-esign-form.jpg"
                    alt="Choose documents and signers in Pipeline eSign"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 588px"
                  />
                </div>
              </div>

              {/* Steps 2–4 — compact cards */}
              {steps.slice(1).map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col gap-2 rounded-3xl p-8"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E9ECEF",
                  }}
                >
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-normal"
                    style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em", color: "#6C757D" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
