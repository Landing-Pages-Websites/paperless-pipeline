import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Folder, History, LayoutGrid, PencilLine, Sparkles } from "lucide-react";
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
    Icon: LayoutGrid,
    title: "Multi-Location Management",
    description:
      "Organize your business by offices, teams, or departments. Control access so users only see what they need, while leadership maintains full visibility across the organization.",
  },
  {
    Icon: Folder,
    title: "1,500+ App Integrations",
    description:
      "Connect with your favorite tools and automate workflows across systems. Trigger actions like CRM updates, accounting syncs, and notifications with simple status changes.",
  },
  {
    Icon: PencilLine,
    title: "User-Level Customization",
    description:
      "Tailor the experience for every user—whether they're tech-savvy or not. Customize permissions and workflows to create a system that works for everyone on your team.",
  },
  {
    Icon: History,
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
      <section
        className="overflow-hidden"
        style={{
          background:
            "linear-gradient(105deg, #FFF9EA 0%, #FFF9EA 41%, #EAF5FF 63%, #F4F0D5 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-10 lg:px-[108px]">
          <div className="flex flex-col items-start gap-8 py-10 lg:grid lg:grid-cols-[minmax(0,820px)_minmax(0,760px)] lg:items-center lg:justify-between lg:gap-8 lg:pt-[42px] lg:pb-[48px]">

            {/* Left column */}
            <div className="flex w-full flex-col gap-6">
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
                      className="font-medium text-black whitespace-nowrap"
                      style={{ fontSize: "17px", lineHeight: "22px" }}
                    >
                      No credit card required. No setup fees.
                    </span>
                  </div>

                  {/* H1 */}
                  <h1
                    className="text-[38px] font-semibold leading-[1.08] text-black sm:text-[50px] lg:text-[56px] xl:text-[62px]"
                    style={{
                      letterSpacing: "0",
                    }}
                  >
                    Simplify and Automate Your Entire{" "}
                    <span className="text-[#0063EB]">Transaction Workflow</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="max-w-[760px] text-[17px] font-medium leading-8 text-black sm:text-[20px] sm:leading-8 xl:text-[22px] xl:leading-9"
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
                    fontSize: "17px",
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
                    fontSize: "17px",
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
                className="relative w-full overflow-hidden rounded-[20px]"
                style={{
                  maxWidth: "760px",
                  aspectRatio: "836 / 620",
                }}
              >
                <Image
                  src="/images/figma/pages/transaction-hero-paperwork.png"
                  alt="Hands using a calculator while reviewing real estate transaction reports"
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
      <section className="bg-[#FAFAFA] px-5 py-16 sm:px-10 md:py-24 lg:px-[76px]">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-start lg:gap-14">

          {/* Left: section header (sticky on desktop) */}
          <div className="flex min-w-0 flex-col gap-5 self-start lg:sticky lg:top-32">
            <p
              className="text-[20px] font-medium uppercase leading-6 text-[#0063EB]"
              style={{ letterSpacing: "0.14em" }}
            >
              Features
            </p>
            <div className="flex flex-col gap-6">
              <h2 className="max-w-[780px] text-[38px] font-semibold leading-[1.28] text-black md:text-[52px] xl:text-[58px]">
                Everything You Need to Manage Transactions Efficiently
              </h2>
              <p className="max-w-[760px] text-[20px] font-normal leading-8 text-[#4F4F4F]">
                Powerful tools designed to streamline workflows, reduce manual work,
                and keep your team aligned
              </p>
            </div>
          </div>

          {/* Right: stacked feature cards */}
          <div className="flex min-w-0 flex-col gap-8">
            {workflowFeatures.map(({ title, description, image, alt }) => (
              <div
                key={title}
                className="flex flex-col overflow-hidden rounded-[20px] bg-white"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                {/* Screenshot */}
                <div
                  className="relative mx-7 mt-7 overflow-hidden rounded-2xl bg-[linear-gradient(112deg,#D8D1AC_0%,#E8E3C7_36%,#BBD4F7_72%,#0063EB_100%)]"
                  style={{ height: "390px" }}
                >
                  <Image
                    src={image}
                    alt={alt}
                    width={839}
                    height={500}
                    className="absolute left-1/2 top-[118px] w-[calc(100%-88px)] max-w-none -translate-x-1/2 rounded-t-[8px]"
                    sizes="(max-width: 1024px) calc(100vw - 112px), 820px"
                  />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-5 p-7 pt-8">
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "30px", lineHeight: "38px" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "21px", lineHeight: "34px" }}
                  >
                    {description}
                  </p>
                  <span
                    className="font-medium underline self-start"
                    style={{ fontSize: "20px", lineHeight: "28px", color: "#0063EB" }}
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
        heading="Ready to Simplify Your Transaction Management?"
        subtext="See how Paperless Pipeline can streamline your workflow and save your team valuable time"
        buttonText="Schedule a Demo →"
        buttonHref="/demo"
      />

      {/* ─────────────────────────────────────────
          4. USE CASES
      ───────────────────────────────────────── */}
      <section className="bg-white px-5 py-10 sm:px-10 md:py-12 lg:px-[76px]">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-8">

          {/* Header — two columns on desktop */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-1 flex-col gap-4">
              <p
                className="text-[18px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.14em" }}
              >
                Advanced Tools
              </p>
              <h2 className="max-w-[820px] text-[34px] font-semibold leading-[1.18] text-black md:text-[44px] xl:text-[52px]">
                Scale your operations without losing visibility or control
              </h2>
            </div>
            <p
              className="flex-1 text-[18px] font-normal leading-7 text-[#4F4F4F]"
              style={{ maxWidth: "760px" }}
            >
              Built to Support Growing Teams and Complex Workflows
            </p>
          </div>

          {/* 2×2 card grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {useCaseCards.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex min-h-[218px] flex-col gap-4 rounded-[14px] bg-white p-5 md:p-6"
                style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-full bg-[#0063EB]"
                  style={{ width: "52px", height: "52px" }}
                >
                  <Icon size={21} color="#FFE95B" strokeWidth={2.6} aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-black font-medium"
                    style={{ fontSize: "22px", lineHeight: "30px", letterSpacing: "0" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[#4F4F4F] font-normal"
                    style={{ fontSize: "16px", lineHeight: "27px" }}
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
      <section className="bg-white px-5 py-12 sm:px-10 md:py-16 lg:px-[96px]">
        <div className="mx-auto grid w-full max-w-[1660px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,760px)_minmax(0,760px)] lg:gap-14">

          {/* Left: content */}
          <div className="flex min-w-0 flex-col gap-7">
            <div className="flex flex-col gap-5">
              <p
                className="text-[18px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.14em" }}
              >
                Why It Matters
              </p>
              <div className="flex flex-col gap-5">
                <h2 className="max-w-[700px] text-[36px] font-semibold leading-[1.25] text-black md:text-[48px]">
                  Less Manual Work. More Control. Better Results.
                </h2>
                <p className="text-[20px] font-normal leading-7 text-[#4F4F4F]">
                  Eliminate inefficiencies and focus on closing more deals
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col gap-5">
              {highVolumeItems.map((item) => (
                <div
                  key={item}
                  className="flex min-h-[72px] items-center gap-4 rounded-[10px] bg-white px-6 py-3"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <span className="shrink-0">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
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
                    className="font-normal text-[#0063EB]"
                    style={{ fontSize: "20px", lineHeight: "28px", letterSpacing: "0" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: screenshot */}
          <div
            className="relative min-h-[360px] w-full overflow-hidden rounded-[24px] sm:min-h-[420px] lg:min-h-[560px] lg:max-w-[680px] lg:justify-self-end"
            style={{ border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/why-it-matters-team.png"
              alt="Paperless Pipeline high volume transaction management"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 680px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
