import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Zap, SlidersHorizontal, ShieldCheck } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Transaction Management — Paperless Pipeline",
  description:
    "Manage checklists, documents, deadlines, and reporting—all in one centralized platform built for real estate teams.",
};

const workflowFeatures = [
  {
    title: "Smart Transaction Checklists",
    description:
      "Customize and automatically apply checklists based on deal type, location, stage, or transaction side. Replace messy paper systems and ensure every step is followed consistently from start to finish.",
    image: "/images/figma/pages/05601d9028b3b525.png",
    alt: "Smart Transaction Checklists screenshot",
  },
  {
    title: "Automated Due Dates",
    description:
      "Set critical deadlines that are automatically calculated and applied to tasks. Keep your team on track with clear visibility into what's due, overdue, and coming up next.",
    image: "/images/figma/pages/3b099d45f01abf38.png",
    alt: "Automated Due Dates screenshot",
  },
  {
    title: "Custom Reporting & Insights",
    description:
      "Generate powerful reports using advanced filters and search options. Instantly access key data like upcoming closings, expiring deals, overdue transactions, and more.",
    image: "/images/figma/pages/cb63cf6942556a03.png",
    alt: "Custom Reporting & Insights screenshot",
  },
  {
    title: "Document Compliance & Security",
    description:
      "Stay audit-ready with real-time notifications for document uploads and built-in review tracking. Access and manage files securely from anywhere, on any device.",
    image: "/images/figma/pages/eaf77321956cac7f.png",
    alt: "Document Compliance & Security screenshot",
  },
];

const useCaseCards = [
  {
    Icon: MapPin,
    title: "Multi-Location Management",
    description:
      "Organize your business by offices, teams, or departments. Control access so users only see what they need, while leadership maintains full visibility across the organization.",
  },
  {
    Icon: Zap,
    title: "1,500+ App Integrations",
    description:
      "Connect with your favorite tools and automate workflows across systems. Trigger actions like CRM updates, accounting syncs, and notifications with simple status changes.",
  },
  {
    Icon: SlidersHorizontal,
    title: "User-Level Customization",
    description:
      "Tailor the experience for every user—whether they're tech-savvy or not. Customize permissions and workflows to create a system that works for everyone on your team.",
  },
  {
    Icon: ShieldCheck,
    title: "Audit-Ready Data & Backups",
    description:
      "Access complete transaction history, review logs, and automatic monthly backups. Stay compliant and prepared with secure, downloadable records anytime.",
  },
];

const highVolumeItems = [
  "Reduce repetitive tasks with automation",
  "Keep transactions organized from start to finish",
  "Improve team accountability and visibility",
  "Stay compliant without extra effort",
];

export default function TransactionManagementPage() {
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
                    Simplify and Automate Your Entire{" "}
                    <span className="text-[#0063EB]">Transaction Workflow</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="font-medium"
                  style={{ fontSize: "18px", lineHeight: "32px", color: "#4F4F4F" }}
                >
                  Manage checklists, documents, deadlines, and reporting—all in one
                  centralized platform built for real estate teams.
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
                  src="/images/figma/pages/product-screenshot-transactions.jpg"
                  alt="Paperless Pipeline transaction management dashboard"
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
          2. WORKFLOW
      ───────────────────────────────────────── */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-[80px]"
        style={{ background: "#FAFAFA" }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[48px]">

          {/* Left: section header (sticky on desktop) */}
          <div className="flex flex-col gap-3 lg:w-[572px] flex-shrink-0 lg:sticky lg:top-32 self-start">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Everything You Need to Manage Transactions Efficiently
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Powerful tools designed to streamline workflows, reduce manual work,
                and keep your team aligned
              </p>
            </div>
          </div>

          {/* Right: stacked feature cards */}
          <div className="flex flex-col gap-6 flex-1">
            {workflowFeatures.map(({ title, description, image, alt }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl overflow-hidden"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                {/* Screenshot */}
                <div className="relative w-full" style={{ height: "280px" }}>
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 660px"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-4 p-6">
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "24px", lineHeight: "36px" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "28px" }}
                  >
                    {description}
                  </p>
                  <span
                    className="font-medium underline self-start"
                    style={{ fontSize: "14px", lineHeight: "24px", color: "#0063EB" }}
                  >
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        variant="cta"
        eyebrow="Get Started"
        heading="Want to see how Paperless Pipeline can improve your workflow?"
        subtext="Get a quick walkthrough of how Paperless Pipeline can simplify your transaction workflow"
        buttonText="Schedule a Demo →"
        buttonHref="/demo"
      />

      {/* ─────────────────────────────────────────
          4. USE CASES
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">

          {/* Header — two columns on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-3">
            <div className="flex flex-col gap-3 flex-1">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Advanced Tools
              </p>
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Scale your operations without losing visibility or control
              </h2>
            </div>
            <p
              className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] flex-1"
              style={{ maxWidth: "560px" }}
            >
              Built to Support Growing Teams and Complex Workflows
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCaseCards.map(({ Icon, title, description }) => (
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
                <div className="flex flex-col gap-4">
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
          5. HIGH VOLUME
      ───────────────────────────────────────── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-[48px]">

          {/* Left: content */}
          <div className="flex flex-col gap-8 lg:w-[574px] flex-shrink-0">
            <div className="flex flex-col gap-3">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Why It Matters
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                  Less Manual Work. More Control. Better Results.
                </h2>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                  Eliminate inefficiencies and focus on closing more deals
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-5">
              {highVolumeItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-lg p-4"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <span className="flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <circle cx="16" cy="16" r="16" fill="#0063EB" />
                      <path
                        d="M10 16.5l4 4 8-9"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    className="text-black font-normal"
                    style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.006em" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: screenshot */}
          <div
            className="relative flex-1 rounded-3xl overflow-hidden"
            style={{ minHeight: "440px", border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/screenshot-high-volume.jpg"
              alt="Paperless Pipeline high volume transaction management"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 660px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
