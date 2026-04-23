import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  Banknote,
  PieChart,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commissions Management — Paperless Pipeline",
  description:
    "Automate commission split calculations, track disbursements, and forecast earnings. Paperless Pipeline makes commission management fast, accurate, and transparent.",
};

const features = [
  {
    icon: Calculator,
    title: "Automatic Split Calculations",
    description:
      "Define commission split structures once — by agent, team, or transaction type — and let Paperless Pipeline calculate the correct amounts automatically at close.",
  },
  {
    icon: Banknote,
    title: "Disbursement Tracking",
    description:
      "Track every commission payment from the time it's earned to the moment it's disbursed. Know exactly who's been paid, who's pending, and what's outstanding.",
  },
  {
    icon: PieChart,
    title: "Commission Reporting",
    description:
      "Run detailed reports by agent, date range, or transaction type. Export for your accountant or review on-screen for your monthly business review.",
  },
  {
    icon: TrendingUp,
    title: "Earnings Forecasting",
    description:
      "See your projected commission income based on deals currently in the pipeline. Plan your cash flow around what's actually closing — not just what's in contract.",
  },
];

const steps = [
  {
    number: "01",
    title: "Configure Your Commission Structures",
    description:
      "Set up agent split templates, referral fee rules, and office cap schedules once. Complex multi-party splits are handled by Paperless Pipeline automatically.",
  },
  {
    number: "02",
    title: "Commissions Calculate at Close",
    description:
      "When a transaction closes, the system calculates each party's share based on the sale price and your pre-defined rules. No manual spreadsheets, no calculation errors.",
  },
  {
    number: "03",
    title: "Approve, Pay, and Report",
    description:
      "Review calculated amounts, mark disbursements as paid, and generate commission reports for agents or accounting — all from the same screen where the deal lives.",
  },
];

export default function CommissionsManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FDF9EE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-yellow-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#D97706]">
                Feature — Commissions Management
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              Commission Calculations That{" "}
              <span className="text-[#0063EB]">Just Work</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-2xl">
              Say goodbye to commission spreadsheets and payment disputes.
              Paperless Pipeline automates every split, tracks every
              disbursement, and gives everyone full visibility into what they've
              earned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                Start Free Trial
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border border-gray-300 hover:border-[#0063EB] hover:text-[#0063EB] text-[#030712] font-medium px-7 py-3.5 rounded-lg transition-colors text-sm"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              From closing table to commission check
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto">
              Automate the math, eliminate the mistakes, and give your agents
              the transparency they expect when it comes to their earnings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 bg-[#FDF9EE] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#D97706]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#030712] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#4F4F4F] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-[#ECEEF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              How commissions work in Paperless Pipeline
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-xl mx-auto">
              Configure your rules once. Every deal that closes runs the
              numbers automatically.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-[#D97706]/30 z-10" />
                )}
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="text-4xl font-bold text-[#D97706]/20 mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-[#030712] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#4F4F4F] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail / proof section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-6">
                No more commission disputes
              </h2>
              <ul className="space-y-4">
                {[
                  "Commission structures are agreed upon and documented before the deal closes",
                  "Every agent can see exactly how their split was calculated",
                  "Automatic recalculations when sale prices change before closing",
                  "Historical commission records available for any closed transaction",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#0063EB] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#4F4F4F]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FDF9EE] rounded-2xl p-8 md:p-10">
              <p className="text-2xl font-semibold text-[#030712] leading-snug mb-6">
                "Commission disputes used to happen a few times a year. Since
                switching to Paperless Pipeline, we haven't had a single one."
              </p>
              <div>
                <p className="font-semibold text-[#030712] text-sm">
                  Rachel B.
                </p>
                <p className="text-[#6C757D] text-sm">
                  Managing Broker, 60+ agent office
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#0063EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 max-w-2xl mx-auto">
            Automate your commissions. Eliminate the disputes.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Paperless Pipeline's commissions management is included in every
            plan — no add-ons required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-block bg-white hover:bg-blue-50 text-[#0063EB] font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="inline-block border border-white/40 hover:border-white text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
