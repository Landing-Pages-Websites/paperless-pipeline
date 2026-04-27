import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "How It Works for Transaction Coordinators — Paperless Pipeline",
  description:
    "Manage every deal from contract to close in one place. Paperless Pipeline is purpose-built for transaction coordinators who handle high volumes without the chaos.",
};

const stats = [
  { value: "90K+", label: "Real estate professionals" },
  { value: "33K+", label: "Monthly transactions closed" },
];

const processSteps = [
  {
    number: "01",
    title: "Open a new transaction in under 60 seconds",
    description:
      "Enter the property address, assign the agent, and choose a checklist template. Your transaction file is created instantly — complete with all the tasks, deadlines, and document slots you need. No re-entering information. No setting up folders manually.",
  },
  {
    number: "02",
    title: "Send, sign, and track every document with built-in eSign",
    description:
      "No need to jump between platforms. Paperless Pipeline's native eSign lets you prepare, send, and track signature requests without ever leaving the transaction. Know exactly who has signed, who hasn't, and send reminders with one click.",
  },
  {
    number: "03",
    title: "Keep everyone on the same page — automatically",
    description:
      "Scheduled automated updates go out to agents, buyers, sellers, and lenders at every milestone — so you're not the communication bottleneck. Customizable email templates mean you can keep your voice while eliminating the manual sending.",
  },
  {
    number: "04",
    title: "Close the file and capture commission",
    description:
      "When the deal closes, calculate commissions in just a few clicks based on your brokerage's split structure. Disbursement instructions are generated, compliance records are filed, and the transaction is archived — clean, complete, and audit-ready.",
  },
];

const beforeItems = [
  "Chasing agents for documents across email, text, and phone",
  "Managing deadlines in separate spreadsheets that fall out of sync",
  "Logging into 3–4 platforms just to handle one transaction",
  "Manually calculating commissions and building disbursement sheets",
];

const afterItems = [
  "All documents uploaded directly into the platform — no chasing",
  "Checklist deadlines tracked automatically with alerts when things slip",
  "One platform handles the full transaction lifecycle from start to close",
  "Commissions splits calculated in just a few clicks - no manual calculations required",
];

export default function TransactionCoordinatorsPage() {
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
                    You run the deals.{" "}
                    <span className="text-[#0063EB]">We handle the chaos.</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="font-medium"
                  style={{ fontSize: "18px", lineHeight: "32px", color: "#4F4F4F" }}
                >
                  Paperless Pipeline is built around the way TCs actually work — not the way software companies think they do. Every step is simple, fast, and free of the busywork that bogs down your day.
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
                  src="/images/figma/pages/screenshot-tc-tasks.jpg"
                  alt="Paperless Pipeline transaction coordinator dashboard"
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
          2. STATS
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">

          {/* Header */}
          <div className="flex flex-col items-center gap-3 max-w-[836px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Proven at Scale
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                One platform. Every transaction. Zero friction
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] max-w-[636px] mx-auto">
                From opening a new file to collecting final signatures and closing the deal — Paperless Pipeline keeps everything moving in one place, without the scattered emails, missing documents, or frantic last-minute chases.
              </p>
            </div>
          </div>

          {/* Stat cards — 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-[836px]">
            {stats.map(({ value, label }) => (
              <div
                key={value}
                className="flex flex-col justify-center gap-2 rounded-2xl p-6"
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
          3. THE PROCESS
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[112px] px-5 md:px-[64px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-20">

          {/* Header */}
          <div className="flex flex-col gap-3 max-w-[728px]">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              The Process
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                From contract to close,{" "}
                <br className="hidden md:block" />
                step by step
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Here&apos;s exactly how a transaction flows through Paperless Pipeline — and how it saves you hours every single time.
              </p>
            </div>
          </div>

          {/* Steps — 2 rows × 2 columns */}
          <div className="flex flex-col">
            {[processSteps.slice(0, 2), processSteps.slice(2, 4)].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-col md:flex-row gap-16 py-12"
                style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
              >
                {row.map((step) => (
                  <div key={step.number} className="flex gap-8 flex-1">
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
                      <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        variant="cta"
        eyebrow="Get Started"
        heading="Ready to run your transactions differently?"
        subtext="Most TCs are up and running in days, not weeks. No migration headaches. No IT required."
        buttonText="Start Free Trial →"
        buttonHref="/signup"
      />

      {/* ─────────────────────────────────────────
          5. BEFORE / AFTER
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Why Transaction Coordinators Switch
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Why Coordinators Switch to Paperless Pipeline
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Transaction coordinators who switch tell us the same thing: it&apos;s not just faster — it&apos;s a completely different experience.
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
              <div className="relative w-full" style={{ height: "336px" }}>
                <Image
                  src="/images/figma/pages/screenshot-workflow-overview.jpg"
                  alt="Before Paperless Pipeline — scattered transaction management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-5 px-4 pb-8">
                <h3
                  className="font-medium"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em", color: "#131315" }}
                >
                  Before Pipeline
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
              <div className="relative w-full" style={{ height: "336px" }}>
                <Image
                  src="/images/figma/pages/product-screenshot-checklist.jpg"
                  alt="After Paperless Pipeline — organized transaction management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-5 px-4 pb-8">
                <h3
                  className="font-medium text-white"
                  style={{ fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.0521em" }}
                >
                  After Pipeline
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
          6. TESTIMONIALS
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">

          {/* Header */}
          <div className="flex flex-col gap-3 max-w-[736px]">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              What Transaction Coordinators Say
            </p>
            <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
              Trusted by High-Performing Transaction Coordinators
            </h2>
          </div>

          {/* Testimonial layout: image left + card right */}
          <div className="flex flex-col md:flex-row items-stretch gap-6">

            {/* Image panel */}
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0 w-full md:w-[384px]"
              style={{ minHeight: "400px", background: "#F5F5F6" }}
            >
              <Image
                src="/images/figma/pages/screenshot-tc-tasks.jpg"
                alt="Transaction coordinator using Paperless Pipeline"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>

            {/* Testimonial card */}
            <div
              className="flex-1 flex flex-col justify-between rounded-2xl p-8"
              style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)", minHeight: "400px" }}
            >
              <div className="flex flex-col gap-6">
                {/* Quote mark */}
                <div
                  className="text-[#0063EB] select-none"
                  style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p
                  className="text-[#4F4F4F] font-normal"
                  style={{ fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.01em" }}
                >
                  Paperless Pipeline has significantly improved our team&apos;s efficiency. Easy, on-the-go access is essential when managing 180+ transactions per year. The platform continues to evolve with real user needs in mind.
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8">
                <div
                  className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: "0.5px solid #E6E6E7" }}
                >
                  <Image
                    src="/images/figma/hero-avatar-1.png"
                    alt="Jennifer King"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-black font-medium"
                    style={{ fontSize: "14px", lineHeight: "24px" }}
                  >
                    Jennifer King
                  </p>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "14px", lineHeight: "24px" }}
                  >
                    Reading, Pennsylvania
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
