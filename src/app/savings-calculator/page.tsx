import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, RefreshCw, Star } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import SavingsCalculatorContent from "./SavingsCalculatorContent";

export const metadata: Metadata = {
  title: "Savings Calculator — Paperless Pipeline",
  description:
    "See how much time and money your team could save by switching to Paperless Pipeline. Calculate your monthly savings in seconds.",
};

const pricingPlans = [
  { name: "Starter",  transactions: 5,   monthlyPrice: 65,  withCommission: 119 },
  { name: "Basic",    transactions: 10,  monthlyPrice: 130, withCommission: 184 },
  { name: "Growth",   transactions: 25,  monthlyPrice: 175, withCommission: 234 },
  { name: "Pro",      transactions: 40,  monthlyPrice: 220, withCommission: 279 },
  { name: "Scale",    transactions: 80,  monthlyPrice: 305, withCommission: 414 },
  { name: "Advanced", transactions: 150, monthlyPrice: 390, withCommission: 504 },
  { name: "Elite",    transactions: 250, monthlyPrice: 495, withCommission: 609 },
];

const benefits = [
  {
    Icon: Users,
    title: "Add everyone\nfor free",
    description:
      "Stop spending money on per-user costs. With Paperless Pipeline you can add everyone in your company who needs an account—for free.",
  },
  {
    Icon: RefreshCw,
    title: "Change plans\nanytime",
    description:
      "Ditch the annual contract. With Paperless Pipeline you can change plans directly from your account. You can also cancel anytime.",
  },
  {
    Icon: Star,
    title: "Start with unlimited transactions",
    description:
      "Make the switch, easy. New customers can add all of their current and closed transactions during the first month with a paid account.",
  },
];

const solutions = [
  {
    title: "Brokers & Brokerages",
    description:
      "Stay up to date and in compliance from anywhere. Paperless Pipeline helps brokerages keep agents on track and close more deals.",
    href: "/how-it-works/brokers",
  },
  {
    title: "Real Estate Teams",
    description:
      "Streamline the transaction process and delight your clients. Paperless Pipeline keeps real estate teams organized and on-track.",
    href: "/how-it-works/teams",
  },
  {
    title: "Transaction Coordinators",
    description:
      "Carry more transactions and help clients close on-time. Paperless Pipeline powers the country's top real estate transaction coordination companies.",
    href: "/how-it-works/transaction-coordinators",
  },
];

export default function SavingsCalculatorPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-[linear-gradient(90deg,#F8EDD0_0%,#E0D8EC_33%,#C8D4F0_58%,#3B5BDB_100%)] py-20 md:py-[160px]">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute left-[22%] top-[15%] h-[320px] w-[320px] rounded-full bg-[rgba(190,165,215,0.35)] blur-[120px]" />
          <div className="absolute right-[28%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-[rgba(160,185,235,0.30)] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF2FF]">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M6 1.25L7.25 4.75L10.75 6L7.25 7.25L6 10.75L4.75 7.25L1.25 6L4.75 4.75L6 1.25Z"
                  fill="#0063EB"
                />
              </svg>
            </span>
            <span className="text-xs font-medium text-black">
              No credit card required. No setup fees.
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[611px] text-5xl font-semibold tracking-[-0.0375em] text-black md:text-[64px] md:leading-[72px]">
            Stop <span className="text-[#0063EB]">Overpaying</span> for Your Tools
          </h1>

          {/* Subtext */}
          <p className="max-w-[540px] text-lg font-medium leading-8 text-black">
            Find out how much you could save by switching to a simpler, more affordable solution
          </p>

          {/* CTA */}
          <Link
            href="/signup"
            className="inline-flex items-center rounded-lg bg-[#0063EB] px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_#0063EB,0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* ── 2. CALCULATOR ── */}
      <section className="bg-white px-4 py-20 md:px-8 md:py-28">
        <SavingsCalculatorContent />
      </section>

      {/* ── 3. PRICING TABLE ── */}
      <section className="bg-white px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.09em] text-[#0063EB]">
              Plans
            </p>
            <h2 className="text-3xl font-semibold text-black md:text-[48px] md:leading-tight">
              Choose Your Monthly Transaction Plan
            </h2>
            <p className="text-base text-[#4F4F4F]">
              Transparent pricing based on how many transactions you manage each month
            </p>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[580px] overflow-hidden rounded-2xl border border-[#D4D4D8] bg-[#FAFAFA]">
              {/* Header row */}
              <div className="grid grid-cols-4 border-b border-[#D4D4D8] bg-white px-0">
                {["Plan", "Transactions Included", "Monthly Cost", "Cost with Commission Module"].map(
                  (col) => (
                    <div key={col} className="px-6 py-4">
                      <span className="text-sm font-semibold text-[#0063EB]">{col}</span>
                    </div>
                  )
                )}
              </div>
              {/* Data rows */}
              {pricingPlans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`grid grid-cols-4 ${
                    i < pricingPlans.length - 1 ? "border-b border-[#E4E4E7]" : ""
                  }`}
                >
                  <div className="px-6 py-4 font-medium text-[#18181B]">{plan.name}</div>
                  <div className="px-6 py-4 text-[#18181B]">{plan.transactions}</div>
                  <div className="px-6 py-4 text-[#18181B]">${plan.monthlyPrice}</div>
                  <div className="px-6 py-4 text-[#18181B]">${plan.withCommission}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-[#0063EB] px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_0_1px_#0063EB,0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
          >
            Contact Sales →
          </Link>
        </div>
      </section>

      {/* ── 4. BENEFITS ── */}
      <section className="bg-white px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm font-medium uppercase tracking-[0.09em] text-[#0063EB]">
                Benefits
              </p>
              <h2 className="text-3xl font-semibold text-black md:text-[48px] md:leading-tight">
                Why By-the-Transaction Pricing Works Better
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[#4F4F4F] md:max-w-[420px]">
              Reduce costs, stay flexible, and scale your team without paying per user
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-6 rounded-xl border border-black/10 bg-white p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0063EB]">
                  <Icon size={28} color="white" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="whitespace-pre-line text-2xl font-medium leading-[1.15] tracking-[-0.015em] text-black">
                    {title}
                  </h3>
                  <p className="text-base leading-8 text-[#4F4F4F]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SOLUTIONS ── */}
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F4F5_50%)] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl flex flex-col gap-12">
          {/* Header */}
          <div className="mx-auto flex max-w-[836px] flex-col items-center gap-3 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.09em] text-[#0063EB]">
              Solutions
            </p>
            <h2 className="text-3xl font-semibold text-black md:text-[48px] md:leading-tight">
              Built for Every Role
              <br className="hidden md:block" />
              in Real Estate
            </h2>
            <p className="text-base text-[#4F4F4F]">
              From brokerages to transaction coordinators,
              <br className="hidden md:block" />
              Paperless Pipeline supports how your team works
            </p>
          </div>

          {/* Cards + image */}
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Role cards */}
            <div className="flex flex-col gap-4 lg:w-[411px] lg:shrink-0">
              {solutions.map(({ title, description, href }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-4"
                >
                  <h3 className="text-2xl font-medium tracking-[-0.01em] text-[#0063EB]">
                    {title}
                  </h3>
                  <p className="text-base leading-7 text-[#4F4F4F]">{description}</p>
                  <Link
                    href={href}
                    className="self-start text-sm font-medium text-[#0063EB] underline"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-2xl lg:min-h-0">
              <Image
                src="/images/figma/pages/a0652331378aef12.png"
                alt="Real estate professionals working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 845px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ── */}
      <CTABanner
        variant="cta"
        eyebrow="GET STARTED"
        heading="Simplify Your Transaction Management Today"
        subtext="See how easy it is to manage transactions, teams, and commissions—all in one place"
        buttonText="Start My 14-Day Free Trial →"
        buttonHref="/signup"
      />
    </>
  );
}
