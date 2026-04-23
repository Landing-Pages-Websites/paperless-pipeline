import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Paperless Pipeline",
  description:
    "Simple, transparent pricing for real estate teams of every size. Pay for transactions, not seats. Start free — no credit card required.",
};

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "The essentials for solo agents and small teams just getting started.",
    features: [
      "Up to 10 transactions/mo",
      "Unlimited users",
      "Pipeline eSign included",
      "Document storage",
      "Task checklists",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    featured: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "/mo",
    description: "Everything a growing team needs to scale without surprise bills.",
    features: [
      "Up to 50 transactions/mo",
      "Everything in Starter",
      "Commission tracking",
      "Automated workflows",
      "Custom task templates",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/mo",
    description: "Unlimited scale and dedicated support for large brokerages.",
    features: [
      "Unlimited transactions",
      "Everything in Professional",
      "Custom integrations",
      "API access",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Get Started",
    href: "/signup",
    featured: false,
  },
];

const pricingFaqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes — start free with no credit card required. You get full access to all features during your trial so you can see exactly how Paperless Pipeline fits your workflow before committing.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from your account dashboard. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
  },
  {
    question: "Are there per-seat or per-user fees?",
    answer:
      "No. All plans include unlimited users. You pay based on transaction volume, not headcount — so you can invite your entire brokerage without watching the bill climb.",
  },
  {
    question: "What counts as a transaction?",
    answer:
      "A transaction is any active deal in your pipeline — a buyer contract, a listing, a rental, or any other real estate agreement you're actively managing in Paperless Pipeline.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for annual plans. Annual billing gets you two months free compared to monthly.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes. Annual plans include two months free compared to monthly pricing. You can switch to annual at any time from your billing settings.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FDF9EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto mb-8">
            No per-seat fees. No surprise charges. One flat rate based on how many
            transactions you close each month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3 rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/savings-calculator"
              className="border border-gray-300 hover:border-[#0063EB] text-[#030712] font-medium px-7 py-3 rounded-lg transition-colors"
            >
              Calculate Your Savings
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.featured
                    ? "bg-[#0063EB] text-white shadow-xl ring-2 ring-[#0063EB]"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {tier.featured && (
                  <span className="inline-block bg-[#FFE95B] text-[#030712] text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <h2
                    className={`text-lg font-semibold mb-1 ${
                      tier.featured ? "text-white" : "text-[#030712]"
                    }`}
                  >
                    {tier.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`text-4xl font-bold ${
                        tier.featured ? "text-white" : "text-[#030712]"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`text-sm ${
                        tier.featured ? "text-blue-200" : "text-[#6C757D]"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      tier.featured ? "text-blue-100" : "text-[#4F4F4F]"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${
                          tier.featured ? "text-blue-200" : "text-emerald-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.featured ? "text-blue-50" : "text-[#4F4F4F]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`block text-center text-sm font-semibold px-6 py-3 rounded-lg transition-colors ${
                    tier.featured
                      ? "bg-white text-[#0063EB] hover:bg-blue-50"
                      : "bg-[#0063EB] hover:bg-[#046EFF] text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#6C757D] mt-8">
            All plans include a free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Trust stats */}
      <section className="py-12 bg-[#ECEEF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "10,000+", label: "Transactions managed" },
              { stat: "Unlimited", label: "Users on every plan" },
              { stat: "99.9%", label: "Uptime SLA" },
              { stat: "< 4h", label: "Avg. support response" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-[#030712] mb-1">{stat}</p>
                <p className="text-sm text-[#6C757D]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              Pricing Questions
            </h2>
            <p className="text-lg text-[#4F4F4F]">
              Everything you need to know before you commit.
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {pricingFaqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 list-none">
                  <span className="text-base font-medium text-[#030712]">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-[#6C757D] transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="pb-4 pr-8 text-sm text-[#4F4F4F] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-[#6C757D] mb-2">Still have questions?</p>
            <Link
              href="/faqs"
              className="text-sm font-medium text-[#0063EB] hover:underline"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
            Ready to clear the paperwork?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Start your free trial today and see why thousands of real estate
            professionals trust Paperless Pipeline.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Free Trial — No Credit Card Required
          </Link>
        </div>
      </section>
    </>
  );
}
