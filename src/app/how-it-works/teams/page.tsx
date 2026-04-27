import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/home/CTABanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata: Metadata = {
  title: "How It Works for Teams — Paperless Pipeline",
  description:
    "Give your real estate team a single system for every transaction. Define your processes, streamline collaboration, and keep every deal on track.",
};

const workflowFeatures = [
  {
    title: "Centralized Transaction Hub",
    description:
      "Keep all emails, documents, notes, and updates tied to each transaction in one organized workspace. Eliminate scattered communication and version confusion—your team always sees the latest status, complete history, and next steps without digging through inboxes or files.",
    image: "/images/figma/pages/product-screenshot-transactions.jpg",
    imageAlt: "Centralized transaction hub dashboard",
  },
  {
    title: "Smart Deadline Tracking",
    description:
      "Automatically track contract deadlines, contingency dates, and key milestones for every deal. Sync with your preferred calendar, trigger automated reminders, and use custom date fields to match your workflow—so nothing slips, even across multiple active transactions.",
    image: "/images/figma/pages/product-screenshot-workflow.jpg",
    imageAlt: "Smart deadline tracking interface",
  },
  {
    title: "Task & Team Coordination",
    description:
      "Assign tasks with clear ownership, attach them to specific deadlines, and manage checklist-driven workflows across your team. Add notes, updates, and dependencies to ensure every role—from agent to coordinator—knows exactly what needs to be done and when.",
    image: "/images/figma/pages/product-screenshot-checklist.jpg",
    imageAlt: "Task and team coordination checklist",
  },
  {
    title: "Real-Time Reporting & Access",
    description:
      "Generate instant reports on commissions, pending deals, and closed transactions. Monitor team performance, track production trends, and access everything securely from any device—giving your team full visibility whether they're in the office or in the field.",
    image: "/images/figma/pages/screenshot-team-dashboard.jpg",
    imageAlt: "Real-time reporting and team dashboard",
  },
];

export default function TeamsPage() {
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
                    Supercharge your real{" "}
                    <span className="text-[#0063EB]">estate team</span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="font-medium"
                  style={{ fontSize: "18px", lineHeight: "32px", color: "#4F4F4F" }}
                >
                  Define your processes, streamline collaboration, and keep every
                  transaction on track with a system built for how teams actually
                  work.
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
                  src="/images/figma/pages/screenshot-team-dashboard.jpg"
                  alt="Paperless Pipeline team management dashboard"
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
      <section className="py-[80px] md:py-[120px] px-5 md:px-[80px]" style={{ background: "#FAFAFA" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left: sticky heading */}
            <div className="w-full lg:w-[44%] lg:sticky lg:top-24 lg:self-start flex flex-col gap-3">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Team Workflow
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                  Everything Your Team Needs to Stay in Sync
                </h2>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                  Manage communication, tasks, deadlines, and reporting in one
                  place—so every transaction moves forward with clarity,
                  accountability, and speed.
                </p>
              </div>
            </div>

            {/* Right: feature cards */}
            <div className="flex-1 flex flex-col gap-6">
              {workflowFeatures.map(({ title, description, image, imageAlt }) => (
                <div
                  key={title}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Screenshot */}
                  <div className="relative w-full" style={{ height: "260px" }}>
                    <Image
                      src={image}
                      alt={imageAlt}
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
                    <Link
                      href="/features/transaction-management"
                      className="text-[#0063EB] font-medium underline self-start"
                      style={{ fontSize: "14px", lineHeight: "24px" }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. CTA BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        variant="cta"
        eyebrow="Get Started"
        heading="Start Without the Hassle"
        subtext="Free setup, training, and support—so your team can get up and running quickly."
        buttonText="Start Free Trial →"
        buttonHref="/signup"
      />

      {/* ─────────────────────────────────────────
          4. TESTIMONIALS
      ───────────────────────────────────────── */}
      <TestimonialsSection />
    </>
  );
}
