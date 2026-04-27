import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, RefreshCw, Zap } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";
import SavingsCalculatorContent from "./SavingsCalculatorContent";

export const metadata: Metadata = {
  title: "Savings Calculator — Paperless Pipeline",
  description:
    "See how much time and money your team could save by switching to Paperless Pipeline. Calculate your monthly savings in seconds.",
};

const pricingPlans = [
  { name: "Starter", transactions: 5, monthlyPrice: 65, withCommission: 119 },
  { name: "Basic", transactions: 10, monthlyPrice: 130, withCommission: 184 },
  { name: "Growth", transactions: 25, monthlyPrice: 175, withCommission: 234 },
  { name: "Pro", transactions: 40, monthlyPrice: 220, withCommission: 279 },
  { name: "Scale", transactions: 80, monthlyPrice: 305, withCommission: 414 },
  { name: "Advanced", transactions: 150, monthlyPrice: 390, withCommission: 504 },
  { name: "Elite", transactions: 250, monthlyPrice: 495, withCommission: 609 },
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
    Icon: Zap,
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
      <section className="bg-[#FDF9EE] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[80px]">
          <div className="flex flex-col items-center text-center gap-8 py-[80px] lg:py-[160px]">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white rounded-full"
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
              <span className="font-medium text-black text-[12px] leading-[20px] whitespace-nowrap">
                No credit card required. No setup fees.
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-semibold text-black max-w-[611px]"
              style={{
                fontSize: "clamp(40px, 5.5vw, 64px)",
                lineHeight: "1.125",
                letterSpacing: "-0.0375em",
              }}
            >
              Stop <span className="text-[#0063EB]">Overpaying</span> for Your Tools
            </h1>

            {/* Subtext */}
            <p
              className="font-medium text-black max-w-[611px]"
              style={{ fontSize: "18px", lineHeight: "32px" }}
            >
              Find out how much you could save by switching to a simpler, more
              affordable solution
            </p>

            {/* CTA */}
            <Link
              href="/signup"
              className="inline-flex items-center text-white font-medium"
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
              Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. CALCULATOR ── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <SavingsCalculatorContent />
      </section>

      {/* ── 3. PRICING TABLE ── */}
      <section className="bg-white py-[80px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Plans
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Choose Your Monthly Transaction Plan
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Transparent pricing based on how many transactions you manage each month
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <div
              className="min-w-[640px] flex flex-row"
              style={{
                background: "#FAFAFA",
                border: "1px solid #D4D4D8",
                borderRadius: "16px",
                padding: "8px",
              }}
            >
              {/* Left column: plan names */}
              <div
                className="flex flex-col gap-0 flex-shrink-0"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "24px",
                  width: "180px",
                }}
              >
                <div style={{ paddingBottom: "16px", borderBottom: "1px solid #E4E4E7" }}>
                  <span className="text-[#0063EB] font-semibold text-[16px] leading-[28px]">
                    Plan
                  </span>
                </div>
                {pricingPlans.map((plan, i) => (
                  <div
                    key={plan.name}
                    style={{
                      paddingTop: "16px",
                      paddingBottom: i < pricingPlans.length - 1 ? "16px" : "0",
                      borderBottom:
                        i < pricingPlans.length - 1 ? "1px solid #E4E4E7" : "none",
                    }}
                  >
                    <span className="text-[#18181B] font-medium text-[16px] leading-[28px]">
                      {plan.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right: 3 data columns */}
              <div className="flex flex-1 min-w-0">
                {[
                  {
                    header: "Transactions Included",
                    values: pricingPlans.map((p) => String(p.transactions)),
                  },
                  {
                    header: "Monthly Cost",
                    values: pricingPlans.map((p) => `$${p.monthlyPrice}`),
                  },
                  {
                    header: "Cost with Commission Module",
                    values: pricingPlans.map((p) => `$${p.withCommission}`),
                  },
                ].map(({ header, values }) => (
                  <div
                    key={header}
                    className="flex flex-col flex-1 min-w-0"
                    style={{ padding: "24px" }}
                  >
                    <div style={{ paddingBottom: "16px", borderBottom: "1px solid #E4E4E7" }}>
                      <span className="text-[#0063EB] font-semibold text-[16px] leading-[28px]">
                        {header}
                      </span>
                    </div>
                    {values.map((val, i) => (
                      <div
                        key={i}
                        style={{
                          paddingTop: "16px",
                          paddingBottom: i < values.length - 1 ? "16px" : "0",
                          borderBottom:
                            i < values.length - 1 ? "1px solid #E4E4E7" : "none",
                        }}
                      >
                        <span className="text-[#18181B] font-medium text-[16px] leading-[28px]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center text-white font-medium"
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
            Contact Sales →
          </Link>
        </div>
      </section>

      {/* ── 4. BENEFITS ── */}
      <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex flex-col gap-3 flex-1">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Benefits
              </p>
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Why By-the-Transaction Pricing Works Better
              </h2>
            </div>
            <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] md:max-w-[420px]">
              Reduce costs, stay flexible, and scale your team without paying per user
            </p>
          </div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map(({ Icon, title, description }) => (
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
                    className="text-black font-medium whitespace-pre-line"
                    style={{
                      fontSize: "24px",
                      lineHeight: "28px",
                      letterSpacing: "-0.015em",
                    }}
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

      {/* ── 5. SOLUTIONS ── */}
      <section
        className="py-[80px] md:py-[120px] px-5 md:px-[80px]"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F4F4F5 50%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 max-w-[836px] mx-auto w-full text-center">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Solutions
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
                Built for Every Role{" "}
                <br className="hidden md:block" />
                in Real Estate
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                From brokerages to transaction coordinators,{" "}
                <br className="hidden md:block" />
                Paperless Pipeline supports how your team works
              </p>
            </div>
          </div>

          {/* Cards + image */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Role cards */}
            <div className="flex flex-col gap-4 lg:w-[411px] flex-shrink-0">
              {solutions.map(({ title, description, href }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 rounded-2xl p-4"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-black font-medium"
                      style={{
                        fontSize: "24px",
                        lineHeight: "28px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-[#4F4F4F] font-normal"
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        letterSpacing: "-0.0075em",
                      }}
                    >
                      {description}
                    </p>
                  </div>
                  <Link
                    href={href}
                    className="text-[#0063EB] font-medium text-[14px] leading-[24px] underline self-start"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0">
              <Image
                src="/images/figma/roles-screenshot.png"
                alt="Paperless Pipeline — transaction management for every role"
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
        heading="Switching doesn't mean starting over"
        subtext="We'll help you get set up without disrupting active deals."
        buttonText="Start My 14-Day Free Trial →"
        buttonHref="/signup"
      />
    </>
  );
}
