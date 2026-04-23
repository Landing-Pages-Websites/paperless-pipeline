import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for solo agents and small teams just getting started.",
    features: [
      "Up to 20 transactions/mo",
      "Unlimited users",
      "Document storage",
      "Task checklists",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For growing teams that need more volume and advanced tools.",
    features: [
      "Up to 75 transactions/mo",
      "Unlimited users",
      "Pipeline eSign included",
      "Automated workflows",
      "Commissions management",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "High-volume brokerages with custom needs and dedicated support.",
    features: [
      "Unlimited transactions",
      "Unlimited users",
      "All Pro features",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/contact",
    featured: false,
  },
];

export default function PricingPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            Pay for What Matters
          </h2>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            No per-seat fees. No surprise charges. Just one simple price based on
            how many transactions you close each month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
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
              <div className="mb-5">
                <h3
                  className={`text-lg font-semibold mb-1 ${
                    tier.featured ? "text-white" : "text-[#030712]"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.featured ? "text-white" : "text-[#030712]"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`text-sm ${
                        tier.featured ? "text-blue-200" : "text-[#6C757D]"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    tier.featured ? "text-blue-100" : "text-[#4F4F4F]"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
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

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0063EB] hover:gap-3 transition-all"
          >
            View Plans and Pricing <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
