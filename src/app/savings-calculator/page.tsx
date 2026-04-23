import type { Metadata } from "next";
import SavingsCalculatorContent from "./SavingsCalculatorContent";

export const metadata: Metadata = {
  title: "Savings Calculator — Paperless Pipeline",
  description:
    "See how much time and money your team could save by switching to Paperless Pipeline. Calculate your monthly savings in seconds.",
};

export default function SavingsCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FDF9EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-5">
            See How Much You Could Save
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Enter a few numbers about your current setup and we&apos;ll show you exactly
            what Paperless Pipeline could save your team in time and money.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SavingsCalculatorContent />
        </div>
      </section>
    </>
  );
}
