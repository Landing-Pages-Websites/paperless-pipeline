import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/home/CTABanner";

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
    image: "/images/figma/pages/team-workflow-hub.png",
    imageAlt: "Centralized transaction hub dashboard",
  },
  {
    title: "Smart Deadline Tracking",
    description:
      "Automatically track contract deadlines, contingency dates, and key milestones for every deal. Sync with your preferred calendar, trigger automated reminders, and use custom date fields to match your workflow—so nothing slips, even across multiple active transactions.",
    image: "/images/figma/pages/team-workflow-deadline.png",
    imageAlt: "Smart deadline tracking interface",
  },
  {
    title: "Task & Team Coordination",
    description:
      "Assign tasks with clear ownership, attach them to specific deadlines, and manage checklist-driven workflows across your team. Add notes, updates, and dependencies to ensure every role—from agent to coordinator—knows exactly what needs to be done and when.",
    image: "/images/figma/pages/team-workflow-task.png",
    imageAlt: "Task and team coordination checklist",
  },
  {
    title: "Real-Time Reporting & Access",
    description:
      "Generate instant reports on commissions, pending deals, and closed transactions. Monitor team performance, track production trends, and access everything securely from any device—giving your team full visibility whether they're in the office or in the field.",
    image: "/images/figma/pages/team-workflow-report.png",
    imageAlt: "Real-time reporting and team dashboard",
  },
];

export default function TeamsPage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────── */}
      <section className="overflow-hidden bg-[linear-gradient(90deg,#FDF9EE_0%,#F7F3E7_35%,#EAF4FB_65%,#F5F1DD_100%)]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-0">
          <div className="grid items-start gap-14 py-20 lg:grid-cols-[minmax(0,584px)_minmax(0,620px)] lg:gap-[76px] lg:pb-[110px] lg:pt-[48px]">

            {/* Left column */}
            <div className="flex w-full max-w-[584px] flex-col lg:pt-12">
              {/* Badge */}
              <div className="inline-flex items-center self-start rounded-full border border-black/10 bg-white py-1.5 pl-1.5 pr-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF2FF]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M5 0.75L6.15 3.85L9.25 5L6.15 6.15L5 9.25L3.85 6.15L0.75 5L3.85 3.85L5 0.75Z" fill="#0063EB" />
                  </svg>
                </span>
                <span className="ml-2.5 whitespace-nowrap text-[14px] font-medium leading-5 text-black">
                  No credit card required. No setup fees.
                </span>
              </div>

              {/* H1 */}
              <h1 className="mt-8 text-[52px] font-semibold leading-[1.12] text-black sm:text-[64px] lg:text-[64px]">
                Supercharge your
                <br />
                real <span className="text-[#0063EB]">estate team</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-10 max-w-[584px] text-[20px] font-medium leading-8 text-black">
                Define your processes, streamline collaboration, and keep every
                transaction on track with a system built for how teams actually
                work.
              </p>

              {/* CTA buttons */}
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#0063EB] px-5 text-[18px] font-medium leading-6 text-white shadow-[0_0_0_1px_#046EFF,0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
                >
                  Start Free Trial →
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center justify-center rounded-[8px] bg-white px-5 text-[18px] font-medium leading-6 text-black shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:bg-[#F8FAFC]"
                >
                  Book A Demo →
                </Link>
              </div>
            </div>

            {/* Right column: team image + stat card */}
            <div className="relative w-full justify-self-end pb-[68px]">
              <div className="relative ml-auto aspect-[620/422] w-full max-w-[620px] overflow-hidden rounded-[16px]">
                <Image
                  src="/images/figma/pages/screenshot-tc-tasks.jpg"
                  alt="Real estate team reviewing transaction details"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 620px"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 flex min-h-[92px] w-[300px] max-w-[78%] items-center justify-center gap-5 rounded-[8px] bg-[#FFE95B] px-8 shadow-[0_18px_35px_rgba(0,99,235,0.16)]">
                <span className="text-[30px] font-semibold leading-none text-[#0063EB]">
                  90k+
                </span>
                <span className="text-[22px] font-normal leading-[1.15] text-black">
                  Real estate
                  <br />
                  professionals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. WORKFLOW
      ───────────────────────────────────────── */}
      <section className="bg-[#FAFAFA] px-6 py-[120px] sm:px-10 lg:px-[80px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-[100px]">

            {/* Left: sticky heading */}
            <div className="flex w-full flex-col gap-3 lg:sticky lg:top-28 lg:w-[520px] lg:self-start">
              <p
                className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.0893em" }}
              >
                Team Workflow
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-[38px] font-semibold leading-[1.2] text-black md:text-[48px]">
                  Everything Your Team Needs to Stay in Sync
                </h2>
                <p className="max-w-[560px] text-[18px] font-normal leading-7 text-[#4F4F4F]">
                  Manage communication, tasks, deadlines, and reporting in one
                  place—so every transaction moves forward with clarity,
                  accountability, and speed.
                </p>
              </div>
            </div>

            {/* Right: feature cards */}
            <div className="flex flex-1 flex-col gap-8">
              {workflowFeatures.map(({ title, description, image, imageAlt }) => (
                <div
                  key={title}
                  className="flex flex-col overflow-hidden rounded-[16px] border border-black/10 bg-white p-6"
                >
                  {/* Screenshot */}
                  <div className="relative h-[276px] w-full overflow-hidden rounded-[8px]">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 660px"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-4 pt-6">
                    <h3 className="text-[28px] font-medium leading-9 text-black">
                      {title}
                    </h3>
                    <p className="text-[18px] font-normal leading-8 text-[#4F4F4F]">
                      {description}
                    </p>
                    <Link
                      href="/features/transaction-management"
                      className="self-start text-[14px] font-medium leading-6 text-[#0063EB] underline"
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
        features={[
          "Free account setup",
          "Free admin training",
          "Ongoing support included",
          "Start your trial in minutes",
        ]}
        buttonText="Start Free Trial →"
        buttonHref="/signup"
      />

      {/* ─────────────────────────────────────────
          4. TESTIMONIALS
      ───────────────────────────────────────── */}
      <section className="bg-white px-6 pb-[120px] pt-[78px] sm:px-10 lg:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="flex items-end justify-between gap-8">
            <div className="flex max-w-[740px] flex-col gap-4">
              <p
                className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.0893em" }}
              >
                What Teams Say
              </p>
              <h2 className="text-[42px] font-semibold leading-[1.2] text-black md:text-[48px]">
                Trusted by High-Performing
                <br />
                Real Estate Teams
              </h2>
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-black/10 bg-white text-black transition-colors hover:border-[#0063EB] hover:text-[#0063EB]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M11.25 4.5L6.75 9L11.25 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#0063EB] text-white shadow-[0_0_0_1px_#046EFF,0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M6.75 4.5L11.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid items-center gap-14 md:grid-cols-[384px_minmax(0,1fr)]">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[14px] bg-[#F5F5F6]">
              <Image
                src="/images/figma/pages/screenshot-team-dashboard.jpg"
                alt="Real estate team in a planning conversation"
                fill
                className="object-cover object-[45%_center]"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>

            <div className="flex max-w-[760px] flex-col">
              <div className="text-[72px] font-semibold leading-none text-[#0063EB]" aria-hidden="true">
                “
              </div>
              <p className="mt-14 text-[22px] font-normal leading-8 text-[#4F4F4F]">
                Paperless Pipeline has significantly improved our team&apos;s
                efficiency. Easy, on-the-go access is essential when managing
                180+ transactions per year. The platform continues to evolve
                with real user needs in mind.
              </p>

              <div className="mt-12 flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-[#E6E6E7]">
                  <Image
                    src="/images/figma/hero-avatar-1.png"
                    alt="Jennifer King"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-medium leading-6 text-black">
                    Jennifer King
                  </p>
                  <p className="text-[14px] font-normal leading-6 text-[#4F4F4F]">
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
