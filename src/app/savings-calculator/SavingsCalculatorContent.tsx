"use client";

import { useState } from "react";

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

export default function SavingsCalculatorContent() {
  const [closings, setClosings] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [result, setResult] = useState<{ plan: (typeof plans)[0]; savings: number } | null>(null);

  function handleSubmit() {
    const c = parseInt(closings, 10);
    const b = parseFloat(monthlyBill);
    if (!c || !b || c <= 0 || b <= 0) return;
    const plan = getPlan(c);
    setResult({ plan, savings: b - plan.price });
  }

  const canSubmit = closings !== "" && monthlyBill !== "";

  return (
    <div className="mx-auto flex max-w-[680px] flex-col items-center gap-6">
      <h2 className="text-center text-3xl font-bold text-[#0063EB]">Savings Calculator</h2>

      {/* Form card */}
      <div className="w-full overflow-hidden rounded-lg border border-[#D0D9F0] bg-[#EEF2FB]">
        {/* Monthly Transactions row */}
        <div className="flex items-start justify-between gap-6 border-b border-[#D0D9F0] px-6 py-5">
          <div className="flex flex-col gap-1">
            <p className="text-base font-bold text-[#0D1B4B]">Monthly Transactions</p>
            <p className="text-sm text-[#4F4F4F]">
              How many new transactions (listings and sales) do you average each month?
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-sm text-[#1E1E1E]">Closings:</span>
            <input
              type="number"
              min={0}
              value={closings}
              onChange={(e) => setClosings(e.target.value)}
              aria-label="Monthly closings"
              className="w-[80px] rounded border border-[#CDD3DA] bg-white px-2 py-1.5 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Current Monthly Bill row */}
        <div className="flex items-start justify-between gap-6 px-6 py-5">
          <div className="flex flex-col gap-1">
            <p className="text-base font-bold text-[#0D1B4B]">Current Monthly Bill</p>
            <p className="text-sm text-[#4F4F4F]">
              How much do you pay each month for your current system?
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-sm text-[#1E1E1E]">Monthly Bill:</span>
            <div className="flex items-stretch overflow-hidden rounded border border-[#CDD3DA] bg-white">
              <span className="flex items-center border-r border-[#CDD3DA] px-2 text-sm text-[#1E1E1E]">
                $
              </span>
              <input
                type="number"
                min={0}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                aria-label="Current monthly bill"
                className="w-[70px] px-2 py-1.5 text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!canSubmit}
        className={`w-full rounded py-3.5 text-base font-medium text-white transition-colors ${
          canSubmit ? "cursor-pointer bg-[#0063EB] hover:bg-[#046EFF]" : "cursor-not-allowed bg-[#9CA3AF]"
        }`}
      >
        See how much you can save
      </button>

      {/* Results */}
      {result && (
        <div className="w-full rounded-lg border border-[#E5E7EB] bg-white p-6 flex flex-col gap-4">
          <p className="text-lg font-bold text-[#1E1E1E]">Your Savings Estimate</p>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <span className="text-sm text-[#4F4F4F]">Recommended plan</span>
              <span className="text-sm font-semibold text-[#0063EB]">{result.plan.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#4F4F4F]">Paperless Pipeline cost</span>
              <span className="text-sm font-semibold text-[#1E1E1E]">${result.plan.price}/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-[#4F4F4F]">Your current cost</span>
              <span className="text-sm font-semibold text-[#1E1E1E]">${monthlyBill}/mo</span>
            </div>
            <div className="h-px bg-[#E5E7EB]" />
            <div className="flex justify-between">
              <span className="text-sm font-semibold text-[#1E1E1E]">Monthly savings</span>
              <span
                className={`text-base font-bold ${
                  result.savings > 0 ? "text-emerald-600" : "text-[#D92D20]"
                }`}
              >
                {result.savings > 0 ? "+" : "-"}$
                {Math.abs(result.savings).toLocaleString()}/mo
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
