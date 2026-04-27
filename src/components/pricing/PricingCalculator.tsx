"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  { name: "Starter", transactions: 5, price: 65 },
  { name: "Basic", transactions: 10, price: 130 },
  { name: "Growth", transactions: 25, price: 175 },
  { name: "Pro", transactions: 40, price: 220 },
  { name: "Scale", transactions: 80, price: 305 },
  { name: "Advanced", transactions: 150, price: 390 },
  { name: "Elite", transactions: 250, price: 495 },
];

const MAX_SLIDER = 500;

function getPlanInfo(count: number) {
  for (const plan of plans) {
    if (count <= plan.transactions) return { name: plan.name, price: plan.price };
  }
  const extra = Math.max(0, count - 450) * 1.5;
  return { name: "High Volume", price: Math.round(844 + extra) };
}

export default function PricingCalculator() {
  const [count, setCount] = useState(25);
  const plan = getPlanInfo(count);
  const pct = Math.min(100, (count / MAX_SLIDER) * 100);

  return (
    <section className="py-[120px] px-5 md:px-[80px] bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
        {/* Main two-column row */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch min-h-0 lg:min-h-[471px]">
          {/* Left: description */}
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <p
                className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
                style={{ letterSpacing: "0.0893em" }}
              >
                Calculator
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                  How Is Monthly Production Calculated?
                </h2>
                <div className="flex flex-col gap-4 text-[#4F4F4F] text-[16px] leading-[150%]">
                  <p>
                    When you start working on a deal (whether it&apos;s a coming soon
                    property, an active listing or a new sale) it only counts once in the
                    month you created it.
                  </p>
                  <p>
                    Once a transaction is created, it won&apos;t count again—even when the
                    status changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: calculator widget */}
          <div className="flex-1 bg-white border border-black/10 rounded-2xl p-4 flex flex-col justify-between">
            {/* Top content */}
            <div className="flex flex-col gap-8 p-4">
              {/* Widget header */}
              <div className="flex items-start gap-6">
                <div className="flex-1 flex flex-col">
                  <p
                    className="text-[#000000] font-medium text-[24px] leading-[32px] mb-1"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Calculator
                  </p>
                  <p
                    className="text-[#4F4F4F] font-medium text-[14px] leading-[20px]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Use our estimator to find the most cost-effective plan for your
                    business.
                  </p>
                </div>
              </div>

              {/* Price + slider */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-end">
                  <div className="flex items-end">
                    <span
                      className="text-[#000000] font-medium text-[48px] leading-[56px]"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      ${plan.price}
                    </span>
                    <div className="pb-2 pl-1">
                      <span
                        className="text-[#4F4F4F] text-[14px] leading-[16px]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        /month
                      </span>
                    </div>
                  </div>
                  <span className="text-[#4F4F4F] text-[14px] font-medium">
                    {plan.name} Plan
                  </span>
                </div>

                {/* Custom slider */}
                <div className="relative h-2">
                  <div
                    className="absolute inset-0 rounded-full border border-[#D7EAE0] overflow-hidden"
                    style={{ background: "#F2F8F5", opacity: 0.8 }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-150"
                      style={{ width: `${pct}%`, background: "#34d399" }}
                    />
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={MAX_SLIDER}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
                    aria-label="Monthly transaction count"
                  />
                </div>
              </div>

              {/* Transaction count */}
              <div className="flex flex-col items-end p-2">
                <span
                  className="text-[#000000] font-medium text-[14px] leading-[16px]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {count}
                </span>
                <span
                  className="text-[#4F4F4F] text-[14px] leading-[16px]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Transactions
                </span>
              </div>
            </div>

            {/* Important note */}
            <div className="bg-[#F8F9FA] rounded-lg p-4">
              <p className="text-[#4F4F4F] text-[14px] leading-[20px]">
                <strong>Important:</strong> The cost estimate is based on the annual
                production used in the calculator. Depending on actual transaction volume
                each month you can upgrade or downgrade your plan.
              </p>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-center pt-6">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-[14px] leading-[24px] px-3 py-1.5 rounded-lg transition-colors"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
            }}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
}
