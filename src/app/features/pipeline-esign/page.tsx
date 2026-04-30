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
      <section
        className="overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 88% 58%, rgba(241, 202, 181, 0.42) 0%, transparent 27%), radial-gradient(circle at 78% 88%, rgba(244, 233, 146, 0.42) 0%, transparent 24%), linear-gradient(110deg, #FDF9EE 0%, #FBF8EF 36%, #EAF4FB 54%, #C7DFF7 74%, #F8F3D4 100%)",
        }}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <div className="flex flex-col items-start gap-12 pb-16 pt-16 lg:flex-row lg:gap-[70px] lg:pb-[70px] lg:pt-[43px]">

            {/* Left column */}
            <div className="flex w-full flex-col gap-8 lg:w-[590px] lg:shrink-0 lg:pt-[72px]">
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

            {/* Right column: product screenshot */}
            <div className="flex w-full justify-center lg:w-[620px] lg:shrink-0 lg:justify-end">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  maxWidth: "620px",
                  aspectRatio: "621 / 524",
                  boxShadow:
                    "-3px 4px 11px 0px rgba(112,112,112,0.1), -13px 15px 20px 0px rgba(112,112,112,0.09), -29px 35px 27px 0px rgba(112,112,112,0.05)",
                }}
              >
                <Image
                  src="/images/figma/pages/screenshot-esign-signing.jpg"
                  alt="Pipeline eSign — integrated document signing workflow"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 48%" }}
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
      <section className="bg-white px-5 py-5">
        <div className="mx-auto max-w-[1400px] rounded-2xl bg-[#0063EB] px-5 py-[80px] sm:px-10 md:py-[120px] lg:px-[80px]">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[836px] w-full text-center">
            <p
              className="font-medium text-[14px] uppercase leading-[24px] text-white"
              style={{ letterSpacing: "0.0893em" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-semibold leading-tight text-white md:text-[48px]">
                What Makes Pipeline eSign Different
              </h2>
              <p className="font-normal text-[16px] leading-[150%] text-white">
                Built to make document signing fast, simple, and fully integrated
              </p>
            </div>
          </div>

          {/* Benefit cards grid — 3 cols on first row, 2 centered on second */}
          <div className="w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {benefitCards.slice(0, 3).map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex min-h-[250px] flex-col gap-6 rounded-xl p-8"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className="flex flex-shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                      style={{ width: "48px", height: "48px", padding: "12px" }}
                    >
                      <Icon size={22} color="#FFE95B" fill="#FFE95B" aria-hidden="true" />
                    </div>
                    <h3
                      className="font-normal text-black"
                      style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.0144em" }}
                    >
                      {title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-px w-full bg-[#E4E4E7]" />
                    <p
                      className="text-[#4F4F4F] font-normal"
                      style={{ fontSize: "16px", lineHeight: "30px", letterSpacing: "-0.0113em" }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:max-w-[calc(66.67%+8px)]">
              {benefitCards.slice(3).map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex min-h-[220px] flex-col gap-6 rounded-xl p-8"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className="flex flex-shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                      style={{ width: "48px", height: "48px", padding: "12px" }}
                    >
                      <Icon size={22} color="#FFE95B" fill="#FFE95B" aria-hidden="true" />
                    </div>
                    <h3
                      className="font-normal text-black"
                      style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.0144em" }}
                    >
                      {title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-px w-full bg-[#E4E4E7]" />
                    <p
                      className="text-[#4F4F4F] font-normal"
                      style={{ fontSize: "16px", lineHeight: "30px", letterSpacing: "-0.0113em" }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. BEFORE / AFTER
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-[88px] md:px-[80px] md:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Pricing Advantage
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-semibold leading-tight text-black md:text-[48px]">
                Stop Overpaying for eSign Tools
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                See the difference between traditional tools and a fully integrated solution
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
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: "319px" }}>
                <Image
                  src="/images/figma/pages/screenshot-esign-workflow.jpg"
                  alt="Traditional eSign tools — disconnected, costly workflow"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-4 pt-5">
                <h3
                  className="font-medium"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em", color: "#131315" }}
                >
                  Traditional eSign Tools
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
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: "319px" }}>
                <Image
                  src="/images/figma/pages/screenshot-esign-form.jpg"
                  alt="Pipeline eSign — integrated, affordable, seamless"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-4 pt-5">
                <h3
                  className="font-medium text-white"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em" }}
                >
                  Pipeline eSign
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
          4. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        variant="cta"
        eyebrow="Get Started"
        heading="See Pipeline eSign in Action"
        subtext="Watch how simple your signing workflow can be"
        buttonText="Watch Demo →"
        buttonHref="/demo"
      />

      {/* ─────────────────────────────────────────
          5. USE CASES
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-[80px] md:px-[80px] md:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-16">

          {/* Header — two columns on desktop */}
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex flex-1 flex-col gap-3">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Built For
              </p>
              <h2 className="text-[32px] font-semibold leading-tight text-black md:text-[48px]">
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {useCases.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex min-h-[220px] flex-col gap-6 rounded-xl p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <div
                  className="flex flex-shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                  style={{ width: "56px", height: "56px" }}
                >
                  <Icon size={24} color="#FFE95B" fill="#FFE95B" aria-hidden="true" />
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
      <section className="bg-white px-5 py-[80px] md:px-[80px] md:py-[120px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-12">

          {/* Left: section header */}
          <div className="flex flex-shrink-0 flex-col gap-3 lg:w-[560px]">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              All-in-One Workflow
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[32px] font-semibold leading-tight text-black md:text-[48px]">
                From Sending to Signing in 4 Simple Steps
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                A streamlined process designed to save time and reduce manual work
              </p>
            </div>
          </div>

          {/* Right: numbered steps */}
          <div className="flex min-w-0 flex-1 gap-6">

            {/* Number bubbles + connecting line */}
            <div className="flex flex-shrink-0 flex-col items-center">
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
                      style={{ minHeight: i === 0 ? "384px" : "128px" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step cards */}
            <div className="flex min-w-0 flex-1 flex-col gap-6">

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
                    src="/images/figma/pages/screenshot-esign-templates.jpg"
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

      <CTABanner
        variant="cta"
        eyebrow="Ready to simplify your signing process?"
        heading="Ready to Simplify Your Signing Process?"
        subtext="Switch to a faster, smarter, and more affordable solution today"
        buttonText="Start My 14-Day Free Trial →"
        buttonHref="/signup"
      />
    </>
  );
}
