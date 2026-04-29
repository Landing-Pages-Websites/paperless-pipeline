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
                You run the deals.
                <br />
                <span className="text-[#0063EB]">
                  We handle the
                  <br />
                  chaos.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-10 max-w-[584px] text-[20px] font-medium leading-8 text-black">
                Paperless Pipeline is built around the way TCs actually work —
                not the way software companies think they do. Every step is
                simple, fast, and free of the busywork that bogs down your day.
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

            {/* Right column: TC image + stat card */}
            <div className="relative w-full justify-self-end pb-[68px]">
              <div className="relative ml-auto aspect-[620/422] w-full max-w-[620px] overflow-hidden rounded-[16px]">
                <Image
                  src="/images/figma/pages/a0652331378aef12.png"
                  alt="Real estate professionals closing a deal"
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
          2. STATS
      ───────────────────────────────────────── */}
      <section className="bg-white px-6 py-[120px] sm:px-10 md:py-[125px] lg:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[70px]">

          {/* Header */}
          <div className="flex w-full max-w-[820px] flex-col items-center gap-3 text-center">
            <p
              className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
              style={{ letterSpacing: "0.0893em" }}
            >
              Proven at Scale
            </p>
            <div className="flex flex-col gap-5">
              <h2 className="text-[42px] font-semibold leading-[1.18] text-black md:text-[48px] md:leading-[1.22]">
                One platform. Every transaction.
                <br />
                Zero friction
              </h2>
              <p className="mx-auto max-w-[720px] text-[18px] font-normal leading-7 text-[#4F4F4F]">
                From opening a new file to collecting final signatures and
                closing the deal — Paperless Pipeline keeps everything moving in
                one place, without the scattered emails, missing documents, or
                frantic last-minute chases.
              </p>
            </div>
          </div>

          {/* Stat cards — 2 columns */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {stats.map(({ value, label }) => (
              <div
                key={value}
                className="flex min-h-[176px] flex-col justify-center gap-4 rounded-[16px] border border-black/10 bg-white p-6"
              >
                <p className="text-center text-[48px] font-medium leading-none text-[#0063EB]">
                  {value}
                </p>
                <p className="text-center text-[18px] font-normal leading-7 text-[#4F4F4F]">
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
      <section className="bg-white px-6 pb-[110px] pt-[95px] sm:px-10 lg:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-20">

          {/* Header */}
          <div className="flex max-w-[728px] flex-col gap-3">
            <p
              className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
              style={{ letterSpacing: "0.0893em" }}
            >
              The Process
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[38px] font-semibold leading-[1.18] text-black md:text-[42px]">
                From contract to close,{" "}
                <br className="hidden md:block" />
                step by step
              </h2>
              <p className="max-w-[660px] text-[16px] font-normal leading-6 text-[#4F4F4F]">
                Here&apos;s exactly how a transaction flows through Paperless Pipeline — and how it saves you hours every single time.
              </p>
            </div>
          </div>

          {/* Steps — 2 rows × 2 columns */}
          <div className="flex flex-col">
            {[processSteps.slice(0, 2), processSteps.slice(2, 4)].map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex flex-col gap-12 py-12 md:flex-row md:gap-20"
                style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
              >
                {row.map((step) => (
                  <div key={step.number} className="flex flex-1 gap-8">
                    <span className="flex-shrink-0 text-[36px] font-bold leading-none text-[#0063EB]">
                      {step.number}
                    </span>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] font-bold leading-[1.16] text-black md:text-[28px]">
                        {step.title}
                      </h3>
                      <p className="text-[16px] font-normal leading-6 text-[#4F4F4F]">
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
          5. BEFORE / AFTER
      ───────────────────────────────────────── */}
      <section className="bg-white px-6 py-[120px] sm:px-10 lg:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12">

          {/* Section header */}
          <div className="flex w-full max-w-[820px] flex-col items-center gap-3 text-center">
            <p
              className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
              style={{ letterSpacing: "0.0893em" }}
            >
              Why Transaction Coordinators Switch
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[42px] font-semibold leading-[1.18] text-black md:text-[58px] md:leading-[1.22]">
                Why Coordinators Switch to
                <br />
                Paperless Pipeline
              </h2>
              <p className="mx-auto max-w-[820px] text-[22px] font-normal leading-8 text-[#4F4F4F]">
                Transaction coordinators who switch tell us the same thing:
                it&apos;s not just faster — it&apos;s a completely different
                experience.
              </p>
            </div>
          </div>

          {/* Cards row */}
          <div className="flex w-full flex-col gap-8 lg:flex-row">

            {/* BEFORE card */}
            <div
              className="flex flex-1 flex-col gap-6 overflow-hidden rounded-[16px] border border-black/10 bg-[#F3F3F3] p-6"
            >
              <div className="relative h-[336px] w-full overflow-hidden rounded-[8px]">
                <Image
                  src="/images/figma/pages/c6e4b9dff5453a34.png"
                  alt="Before Paperless Pipeline — scattered transaction management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 612px"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-[28px] font-medium leading-8 text-[#131315]">
                  Before Pipeline
                </h3>
                <div className="h-px w-full bg-black/10" />
                <div className="flex flex-col gap-5">
                  {beforeItems.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-1 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <circle cx="10" cy="10" r="9" fill="#E5392D" />
                          <path d="M13 7L7 13M7 7l6 6" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                        </svg>
                      </span>
                      <p className="text-[20px] font-normal leading-8 text-[#4F4F4F]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AFTER card */}
            <div
              className="flex flex-1 flex-col gap-6 overflow-hidden rounded-[16px] border border-white/10 bg-[#0063EB] p-6"
            >
              <div className="relative h-[336px] w-full overflow-hidden rounded-[8px]">
                <Image
                  src="/images/figma/pages/7e9f003b00ec2a57.png"
                  alt="After Paperless Pipeline — organized transaction management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 612px"
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-[28px] font-medium leading-8 text-white">
                  After Pipeline
                </h3>
                <div className="h-px w-full bg-white/15" />
                <div className="flex flex-col gap-5">
                  {afterItems.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <span className="mt-1 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <circle cx="10" cy="10" r="9" fill="#18B45B" />
                          <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#0063EB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="text-[20px] font-normal leading-8 text-white">
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
            className="inline-flex h-11 items-center justify-center rounded-[8px] bg-[#0063EB] px-5 text-[16px] font-medium leading-6 text-white shadow-[0_0_0_1px_#046EFF,0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
          >
            Start a Free Trial →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. TESTIMONIALS
      ───────────────────────────────────────── */}
      <section className="bg-white px-6 pb-[120px] pt-[78px] sm:px-10 lg:px-[80px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="flex items-end justify-between gap-8">
            <div className="flex max-w-[740px] flex-col gap-4">
              <p
                className="text-[14px] font-medium uppercase leading-6 text-[#0063EB]"
                style={{ letterSpacing: "0.0893em" }}
              >
                What Transaction Coordinators Say
              </p>
              <h2 className="text-[42px] font-semibold leading-[1.2] text-black md:text-[48px]">
                Trusted by High-Performing
                <br />
                Transaction Coordinators
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
                src="/images/figma/ready-feature-image.jpg"
                alt="Transaction coordinators reviewing a file together"
                fill
                className="object-cover object-[44%_center]"
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
