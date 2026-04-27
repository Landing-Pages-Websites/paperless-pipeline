"use client";

import { useState, useMemo } from "react";
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

function getPlan(count: number) {
  for (const plan of plans) {
    if (count <= plan.transactions) return plan;
  }
  return plans[plans.length - 1];
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.abs(n));
}

export default function SavingsCalculatorContent() {
  const [transactions, setTransactions] = useState(25);
  const [currentCost, setCurrentCost] = useState(300);

  const plan = useMemo(() => getPlan(transactions), [transactions]);
  const monthlySavings = currentCost - plan.price;
  const annualSavings = monthlySavings * 12;
  const saving = monthlySavings > 0;
  const pct = Math.min(100, (transactions / 250) * 100);

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
      {/* Left: description + inputs */}
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p
            className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
            style={{ letterSpacing: "0.0893em" }}
          >
            Calculator
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="text-black font-semibold text-[32px] md:text-[48px] leading-tight">
              How Much Could You Save?
            </h2>
            <div className="flex flex-col gap-4 text-[#4F4F4F] text-[16px] leading-[150%]">
              <p>
                Enter your current monthly software spend and transaction volume to
                see your potential savings with Paperless Pipeline.
              </p>
              <p>
                Unlike per-user tools, Paperless Pipeline charges by transactions—so
                you can add your whole team for free.
              </p>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-8">
          {/* Transactions slider */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label
                htmlFor="transactions-slider"
                className="text-black font-medium text-[16px] leading-[28px]"
              >
                Monthly Transactions
              </label>
              <span className="text-[#0063EB] font-semibold text-[16px]">
                {transactions}
              </span>
            </div>
            <div className="relative h-2">
              <div className="absolute inset-0 rounded-full bg-[#EEF4FF] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#0063EB] transition-all duration-150"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <input
                id="transactions-slider"
                type="range"
                min={1}
                max={250}
                value={transactions}
                onChange={(e) => setTransactions(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
                aria-label="Monthly transactions"
              />
            </div>
            <div className="flex justify-between text-[14px] text-[#6C757D]">
              <span>1</span>
              <span>250+</span>
            </div>
          </div>

          {/* Current cost input */}
          <div className="flex flex-col gap-3">
            <label
              htmlFor="current-cost"
              className="text-black font-medium text-[16px] leading-[28px]"
            >
              Current Monthly Software Cost
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C757D] font-medium text-[16px] pointer-events-none">
                $
              </span>
              <input
                id="current-cost"
                type="number"
                min={0}
                value={currentCost}
                onChange={(e) =>
                  setCurrentCost(Math.max(0, Number(e.target.value)))
                }
                className="w-full pl-8 pr-4 py-3 border border-black/10 rounded-xl text-[16px] text-black focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] transition-colors"
                aria-label="Current monthly software cost"
              />
            </div>
            <p className="text-[14px] text-[#6C757D]">
              Include transaction management, eSign, storage, and any per-user tools
            </p>
          </div>
        </div>
      </div>

      {/* Right: results widget */}
      <div className="flex-1 bg-white border border-black/10 rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-6 p-4 flex-1">
          {/* Widget header */}
          <div className="flex flex-col gap-1">
            <p
              className="text-black font-medium text-[24px] leading-[32px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your Savings Estimate
            </p>
            <p
              className="text-[#4F4F4F] text-[14px] leading-[20px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Based on {transactions} transaction{transactions !== 1 ? "s" : ""}/month
            </p>
          </div>

          {/* Recommended plan + price */}
          <div className="flex flex-col gap-1 pb-4 border-b border-[#E4E4E7]">
            <p
              className="text-[#6C757D] font-medium text-[12px] uppercase"
              style={{ letterSpacing: "0.08em" }}
            >
              Recommended Plan
            </p>
            <div className="flex items-end gap-1">
              <span
                className="text-black font-medium text-[48px] leading-[56px]"
                style={{ letterSpacing: "-0.04em" }}
              >
                {fmt(plan.price)}
              </span>
              <span className="text-[#4F4F4F] text-[14px] leading-[24px] pb-2">
                /month
              </span>
            </div>
            <p className="text-[#0063EB] font-medium text-[14px]">
              {plan.name} Plan
            </p>
          </div>

          {/* Cost comparison */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-[#4F4F4F] text-[14px]">Your current tools</span>
              <span className="text-black font-medium text-[14px]">
                {fmt(currentCost)}/mo
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#4F4F4F] text-[14px]">Paperless Pipeline</span>
              <span className="text-[#0063EB] font-medium text-[14px]">
                {fmt(plan.price)}/mo
              </span>
            </div>
            <div className="h-px bg-[#E4E4E7]" />
            <div className="flex justify-between items-center">
              <span className="text-black font-semibold text-[14px]">
                {saving ? "Monthly savings" : "Monthly difference"}
              </span>
              <span
                className={`font-bold text-[16px] ${
                  saving ? "text-emerald-600" : "text-[#D92D20]"
                }`}
              >
                {saving ? "+" : "-"}
                {fmt(monthlySavings)}/mo
              </span>
            </div>
          </div>

          {/* Annual savings highlight */}
          <div
            className={`rounded-xl p-4 flex justify-between items-center ${
              saving ? "bg-[#E8F8EF]" : "bg-[#FDF9EE]"
            }`}
          >
            <div>
              <p
                className="text-[#6C757D] font-medium text-[12px] uppercase"
                style={{ letterSpacing: "0.08em" }}
              >
                Annual savings
              </p>
              <p
                className={`font-bold text-[24px] leading-[32px] ${
                  saving ? "text-emerald-700" : "text-[#D92D20]"
                }`}
              >
                {saving ? "+" : "-"}
                {fmt(annualSavings)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[12px] text-[#6C757D]">per year</p>
              {saving && (
                <p className="text-emerald-600 font-medium text-[14px]">
                  You save!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-4 pb-4 flex flex-col gap-2">
          <Link
            href="/signup"
            className="flex items-center justify-center w-full text-white font-medium text-[14px] leading-[24px] py-3 px-5 rounded-lg bg-[#0063EB] hover:bg-[#046EFF] transition-colors"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
            }}
          >
            Start Free Trial →
          </Link>
          <p className="text-center text-[12px] text-[#6C757D]">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
