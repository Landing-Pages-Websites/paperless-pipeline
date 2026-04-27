import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/home/CTABanner";
import PricingCalculator from "@/components/pricing/PricingCalculator";
import PricingFAQSection from "@/components/pricing/PricingFAQSection";

export const metadata: Metadata = {
  title: "Pricing — Paperless Pipeline",
  description:
    "Simple, transparent pricing for real estate teams of every size. Pay for transactions, not seats. Start free — no credit card required.",
};

const pricingPlans = [
  { name: "Starter", transactions: 5, price: "$65", withCommission: "$119" },
  { name: "Basic", transactions: 10, price: "$130", withCommission: "$184" },
  { name: "Growth", transactions: 25, price: "$175", withCommission: "$234" },
  { name: "Pro", transactions: 40, price: "$220", withCommission: "$279" },
  { name: "Scale", transactions: 80, price: "$305", withCommission: "$414" },
  { name: "Advanced", transactions: 150, price: "$390", withCommission: "$504" },
  { name: "Elite", transactions: 250, price: "$495", withCommission: "$609" },
];

const highVolumeFeatures = [
  "Get 450 new transactions every month for $844/month.",
  "Each new transaction after 450 is just $1.50.",
  "Billed only for monthly production. No charge for users or transactions added in previous months.",
  "No transaction limit. Automatic billing after 450 transactions.",
  "Unlimited users with every plan.",
  "No setup fee so it's easy and cost-effective to get started.",
  "Change plans depending on monthly production levels.",
  "No contract means you can cancel any time if you're not happy.",
];

const includedItems = [
  {
    number: "01",
    heading: "Effortless Setup",
    body: "Get up and running without delays or added costs. Your account is fully set up for you, with admin training included so your team knows exactly how to use the platform from day one. We'll also handle transaction imports, making your transition seamless and stress-free.",
  },
  {
    number: "02",
    heading: "Built to Scale With You",
    body: "As your business grows, your tools shouldn't hold you back. Add unlimited users, expand across multiple locations, and store as many transactions and documents as you need—without ever worrying about increased costs or system limitations.",
  },
  {
    number: "03",
    heading: "Complete Control, No Commitments",
    body: "You stay in control at all times with flexible, commitment-free pricing. There are no annual contracts, no setup fees, and no hidden charges—just a straightforward system that adapts to your business without locking you in.",
  },
  {
    number: "04",
    heading: "Unlimited Users, Always Included",
    body: "Whether you're managing a small team or a large brokerage, you can add everyone without increasing your costs. Easily onboard admins, brokers, and agents, and manage access anytime—giving your entire team the visibility they need to stay aligned and productive.",
  },
];

const commissionFeatures = [
  "Instant commission statements for agents",
  "PDF and spreadsheet financial reports",
  "Automated production emails with monthly and YTD figures",
];

const esignFeatures = [
  "Send signature requests directly from transactions",
  "Use reusable forms with auto-filled details",
  "Track status, send reminders, or cancel anytime",
];

function CheckCircleIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <circle cx="16" cy="16" r="16" fill="#0063EB" fillOpacity="0.12" />
      <path
        d="M10 16.5l4 4 8-8"
        stroke="#0063EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="bg-[#FDF9EE] py-[120px] px-5">
        <div className="max-w-[611px] mx-auto flex flex-col items-center gap-8">
          {/* Text block */}
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <div
                  className="flex items-center justify-center rounded-full p-1"
                  style={{ background: "rgba(4, 110, 255, 0.1)" }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 1l1.2 3.6H11l-3 2.2 1.1 3.6L6 8.2 2.9 10.4 4 6.8 1 4.6h3.8L6 1z"
                      fill="#0063EB"
                    />
                  </svg>
                </div>
                <span className="text-[12px] font-medium leading-[20px] text-black">
                  No credit card required. No setup fees.
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[#000000] font-semibold text-[40px] md:text-[64px] leading-[1.125] text-center w-full"
                style={{ letterSpacing: "-0.0375em" }}
              >
                Simple,{" "}
                <span className="text-[#0063EB]">scalable pricing</span>{" "}
                that grows with you
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-[#000000] font-medium text-[16px] md:text-[18px] leading-[32px] text-center w-full">
              No contracts. No hidden fees. Just pay for what you use.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-[14px] leading-[24px] px-3 py-1.5 rounded-lg transition-colors"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
            }}
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* ─── Pricing Table ───────────────────────────────────────────── */}
      <section className="bg-white py-[80px] px-5">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
          {/* Section header */}
          <div className="flex flex-col items-center gap-3 max-w-[757px] w-full">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase text-center"
              style={{ letterSpacing: "0.0893em" }}
            >
              Plans
            </p>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight text-center">
                Choose Your Monthly Transaction Plan
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] text-center">
                Transparent pricing based on how many transactions you manage each month
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <div
              className="rounded-2xl p-2 min-w-[640px]"
              style={{ background: "#FAFAFA", border: "1px solid #D4D4D8" }}
            >
              <div className="flex">
                {/* Plan name column (white card) */}
                <div
                  className="bg-white rounded-xl p-6 flex flex-col gap-0 w-[200px] md:w-[240px] flex-shrink-0"
                >
                  {/* Header */}
                  <div className="pb-4 border-b border-[#E4E4E7] mb-4">
                    <span className="text-[#0063EB] font-semibold text-[16px] leading-[28px]">
                      Plan
                    </span>
                  </div>
                  {pricingPlans.map((plan, i) => (
                    <div
                      key={plan.name}
                      className={`py-4 ${i < pricingPlans.length - 1 ? "border-b border-[#E4E4E7]" : ""}`}
                    >
                      <span className="text-[#18181B] font-medium text-[16px] leading-[28px]">
                        {plan.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Data columns */}
                <div className="flex flex-1">
                  {/* Transactions Included */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="pb-4 border-b border-[#E4E4E7] mb-4">
                      <span className="text-[#0063EB] font-semibold text-[16px] leading-[28px]">
                        Transactions Included
                      </span>
                    </div>
                    {pricingPlans.map((plan, i) => (
                      <div
                        key={plan.name}
                        className={`py-4 ${i < pricingPlans.length - 1 ? "border-b border-[#E4E4E7]" : ""}`}
                      >
                        <span className="text-[#18181B] font-medium text-[16px] leading-[28px]">
                          {plan.transactions}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Monthly Cost */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="pb-4 border-b border-[#E4E4E7] mb-4">
                      <span className="text-[#0063EB] font-semibold text-[16px] leading-[28px]">
                        Monthly Cost
                      </span>
                    </div>
                    {pricingPlans.map((plan, i) => (
                      <div
                        key={plan.name}
                        className={`py-4 ${i < pricingPlans.length - 1 ? "border-b border-[#E4E4E7]" : ""}`}
                      >
                        <span className="text-[#18181B] font-medium text-[16px] leading-[28px]">
                          {plan.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cost with Commission Module */}
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="pb-4 border-b border-[#E4E4E7] mb-4">
                      <span className="text-[#0063EB] font-semibold text-[16px] leading-[28px]">
                        Cost with Commission Module
                      </span>
                    </div>
                    {pricingPlans.map((plan, i) => (
                      <div
                        key={plan.name}
                        className={`py-4 ${i < pricingPlans.length - 1 ? "border-b border-[#E4E4E7]" : ""}`}
                      >
                        <span className="text-[#18181B] font-medium text-[16px] leading-[28px]">
                          {plan.withCommission}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sales CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-[14px] leading-[24px] px-3 py-1.5 rounded-lg transition-colors"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
            }}
          >
            Contact Sales →
          </Link>
        </div>
      </section>

      {/* ─── High Volume ─────────────────────────────────────────────── */}
      <section className="bg-white py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left: content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Heading block */}
            <div className="flex flex-col gap-3 max-w-[574px]">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                High Volume
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                  Need More Than 250 Transactions Per Month?
                </h2>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                  Flexible, high-volume pricing that scales with your production
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-5">
              {highVolumeFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-1 rounded-lg p-4"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <CheckCircleIcon />
                  <p
                    className="text-[#0063EB] font-normal text-[16px] leading-[24px]"
                    style={{ letterSpacing: "-0.0056em" }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-[14px] leading-[24px] px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
                }}
              >
                Contact for Unlimited Plan →
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div
            className="relative flex-1 min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden"
            style={{ border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/072460f16b17ae72.jpg"
              alt="High volume dashboard preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Always Included ─────────────────────────────────────────── */}
      <section className="bg-white py-[112px] px-[64px]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[80px]">
          {/* Header */}
          <div className="flex flex-col gap-3 max-w-[728px]">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Included in Every Plan
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                Everything You Need to Start, Scale, and Stay in Control
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                No setup fees, no contracts, and no limits—just powerful features
                included from day one
              </p>
            </div>
          </div>

          {/* Numbered items — 2 per row */}
          <div className="flex flex-col">
            {/* Row 1: items 01 & 02 */}
            <div
              className="flex flex-col md:flex-row gap-[64px] py-[48px]"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              {includedItems.slice(0, 2).map((item) => (
                <div key={item.number} className="flex-1 flex gap-8">
                  <span
                    className="text-[#0063EB] font-bold text-[48px] leading-[120%] flex-shrink-0 select-none"
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#000000] font-bold text-[24px] md:text-[32px] leading-[130%]">
                      {item.heading}
                    </h3>
                    <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: items 03 & 04 */}
            <div
              className="flex flex-col md:flex-row gap-[64px] py-[48px]"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              {includedItems.slice(2, 4).map((item) => (
                <div key={item.number} className="flex-1 flex gap-8">
                  <span
                    className="text-[#0063EB] font-bold text-[48px] leading-[120%] flex-shrink-0 select-none"
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[#000000] font-bold text-[24px] md:text-[32px] leading-[130%]">
                      {item.heading}
                    </h3>
                    <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Calculator ──────────────────────────────────────────────── */}
      <PricingCalculator />

      {/* ─── Add-On: Commission Module ───────────────────────────────── */}
      <section className="bg-white py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: image */}
          <div
            className="relative flex-1 w-full min-h-[360px] lg:min-h-[520px] rounded-3xl overflow-hidden"
            style={{ border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/screenshot-commission-dashboard.jpg"
              alt="Commission Module dashboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="flex-1 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-[574px]">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Add-On
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                  Commission Module
                </h2>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                  A simple way to calculate agent commissions. Give your agents access to
                  their financial production data, so you don&apos;t need to keep answering
                  questions
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {commissionFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 rounded-lg p-4"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <CheckCircleIcon />
                  <p
                    className="text-[#0063EB] font-normal text-[16px] leading-[24px]"
                    style={{ letterSpacing: "-0.0056em" }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/features/commissions-management"
                className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-[14px] leading-[24px] px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
                }}
              >
                Learn More About Commission Module →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Add-On: Pipeline eSign ──────────────────────────────────── */}
      <section className="bg-white py-[120px] px-5 md:px-[80px]">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left: content */}
          <div className="flex-1 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-[574px]">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Add-On
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                  Pipeline eSign
                </h2>
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                  A faster, simpler way to get documents signed—without extra tools or
                  added costs. Send, track, and manage signatures directly within your
                  transactions.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              {esignFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 rounded-lg p-4"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <CheckCircleIcon />
                  <p
                    className="text-[#0063EB] font-normal text-[16px] leading-[24px]"
                    style={{ letterSpacing: "-0.0056em" }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/features/pipeline-esign"
                className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-[14px] leading-[24px] px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
                }}
              >
                Learn More About Pipeline eSign →
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div
            className="relative flex-1 w-full min-h-[360px] lg:min-h-[520px] rounded-3xl overflow-hidden"
            style={{ border: "1px solid #F0EDEA" }}
          >
            <Image
              src="/images/figma/pages/706cd7bf8088fb0c.jpg"
              alt="Pipeline eSign workflow"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ──────────────────────────────────────────────── */}
      <CTABanner
        variant="cta"
        eyebrow="Get Started"
        heading="Start With a Free Setup—No Credit Card Required"
        subtext="Get your account fully configured with expert support"
        buttonText="Start Free Trial →"
        buttonHref="/signup"
      />

      {/* ─── FAQs ────────────────────────────────────────────────────── */}
      <PricingFAQSection />
    </>
  );
}
