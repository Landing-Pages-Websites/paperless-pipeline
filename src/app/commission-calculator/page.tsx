import type { Metadata } from "next";
import CommissionCalculatorContent from "./CommissionCalculatorContent";

export const metadata: Metadata = {
  title: "Real Estate Commission Calculator — Paperless Pipeline",
  description:
    "Calculate your real estate commission in seconds. Enter the sale price, commission rate, and broker split to see your net payout.",
};

export default function CommissionCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FDF9EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5">
            Real Estate Commission Calculator
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Enter the sale price, commission rate, and broker split to instantly see
            your agent share, broker share, and net payout after fees.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommissionCalculatorContent />
        </div>
      </section>
    </>
  );
}
