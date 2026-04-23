"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { TrendingDown, Clock, DollarSign, ArrowRight } from "lucide-react";

function getPPPlan(transactions: number): { plan: string; cost: number } {
  if (transactions <= 10) return { plan: "Starter", cost: 49 };
  if (transactions <= 50) return { plan: "Professional", cost: 99 };
  return { plan: "Enterprise", cost: 199 };
}

function formatCurrency(n: number): string {
  return Math.abs(n).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function SavingsCalculatorContent() {
  const [transactions, setTransactions] = useState(25);
  const [currentCost, setCurrentCost] = useState(150);
  const [teamMembers, setTeamMembers] = useState(5);
  const [hoursPerTx, setHoursPerTx] = useState(2);

  const results = useMemo(() => {
    const { plan, cost: ppCost } = getPPPlan(transactions);
    const monthlySavings = currentCost - ppCost;
    const annualSavings = monthlySavings * 12;
    const timeSavedMonthly = Math.round(transactions * hoursPerTx * 0.35);
    const timeSavedAnnual = timeSavedMonthly * 12;
    return { plan, ppCost, monthlySavings, annualSavings, timeSavedMonthly, timeSavedAnnual };
  }, [transactions, currentCost, hoursPerTx]);

  const saving = results.monthlySavings >= 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-semibold text-[#030712] mb-7">
          Your Current Setup
        </h2>

        {/* Transactions */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-[#030712]">
              Transactions per month
            </label>
            <span className="text-sm font-semibold text-[#0063EB]">{transactions}</span>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            value={transactions}
            onChange={(e) => setTransactions(Number(e.target.value))}
            className="w-full accent-[#0063EB]"
            aria-label="Transactions per month"
          />
          <div className="flex justify-between text-xs text-[#6C757D] mt-1">
            <span>1</span>
            <span>100</span>
          </div>
        </div>

        {/* Current cost */}
        <div className="mb-7">
          <label className="block text-sm font-medium text-[#030712] mb-2">
            Current monthly software cost
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6C757D] text-sm pointer-events-none">
              $
            </span>
            <input
              type="number"
              min={0}
              value={currentCost}
              onChange={(e) => setCurrentCost(Math.max(0, Number(e.target.value)))}
              className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] transition-colors"
              aria-label="Current monthly software cost in dollars"
            />
          </div>
          <p className="text-xs text-[#6C757D] mt-1">
            Include all transaction management, eSign, and storage tools
          </p>
        </div>

        {/* Team members */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-[#030712]">
              Number of team members
            </label>
            <span className="text-sm font-semibold text-[#0063EB]">{teamMembers}</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={teamMembers}
            onChange={(e) => setTeamMembers(Number(e.target.value))}
            className="w-full accent-[#0063EB]"
            aria-label="Number of team members"
          />
          <div className="flex justify-between text-xs text-[#6C757D] mt-1">
            <span>1</span>
            <span>50</span>
          </div>
        </div>

        {/* Hours per transaction */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-[#030712]">
              Admin hours per transaction
            </label>
            <span className="text-sm font-semibold text-[#0063EB]">{hoursPerTx}h</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={10}
            step={0.5}
            value={hoursPerTx}
            onChange={(e) => setHoursPerTx(Number(e.target.value))}
            className="w-full accent-[#0063EB]"
            aria-label="Hours spent on admin per transaction"
          />
          <div className="flex justify-between text-xs text-[#6C757D] mt-1">
            <span>0.5h</span>
            <span>10h</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-5">
        {/* Recommended plan */}
        <div className="bg-[#EEF4FF] rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-1">
            Recommended Plan
          </p>
          <p className="text-xl font-semibold text-[#030712]">
            {results.plan} — {formatCurrency(results.ppCost)}/mo
          </p>
          <p className="text-sm text-[#4F4F4F] mt-1">
            Based on {transactions} transaction{transactions !== 1 ? "s" : ""}/month
          </p>
        </div>

        {/* Cost comparison */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-base font-semibold text-[#030712] mb-4">
            Monthly Cost Comparison
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#4F4F4F]">Current tools</span>
              <span className="text-sm font-semibold text-[#030712]">
                {formatCurrency(currentCost)}/mo
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#4F4F4F]">Paperless Pipeline</span>
              <span className="text-sm font-semibold text-[#0063EB]">
                {formatCurrency(results.ppCost)}/mo
              </span>
            </div>
            <div className="h-px bg-gray-100" />
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#030712]">
                {saving ? "Monthly savings" : "Monthly premium"}
              </span>
              <span
                className={`text-sm font-bold ${
                  saving ? "text-emerald-600" : "text-[#D92D20]"
                }`}
              >
                {saving ? "+" : "-"}
                {formatCurrency(results.monthlySavings)}/mo
              </span>
            </div>
          </div>
        </div>

        {/* Savings cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`rounded-xl p-5 ${saving ? "bg-[#E8F8EF]" : "bg-[#FDF9EE]"}`}>
            <DollarSign
              size={16}
              className={`mb-2 ${saving ? "text-emerald-600" : "text-[#6C757D]"}`}
            />
            <p className="text-xs text-[#6C757D] mb-1">Annual savings</p>
            <p
              className={`text-lg font-bold leading-tight ${
                saving ? "text-emerald-700" : "text-[#D92D20]"
              }`}
            >
              {saving ? "+" : "-"}
              {formatCurrency(results.annualSavings)}
            </p>
          </div>
          <div className="bg-[#F5F0FF] rounded-xl p-5">
            <Clock size={16} className="text-purple-500 mb-2" />
            <p className="text-xs text-[#6C757D] mb-1">Hours saved/mo</p>
            <p className="text-lg font-bold text-purple-700 leading-tight">
              ~{results.timeSavedMonthly}h
            </p>
          </div>
          <div className="bg-[#EEF4FF] rounded-xl p-5">
            <TrendingDown size={16} className="text-[#0063EB] mb-2" />
            <p className="text-xs text-[#6C757D] mb-1">Hours saved/yr</p>
            <p className="text-lg font-bold text-[#0063EB] leading-tight">
              ~{results.timeSavedAnnual}h
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#030712] rounded-2xl p-7 text-white">
          <h3 className="text-lg font-semibold mb-2">Ready to start saving?</h3>
          <p className="text-sm text-gray-400 mb-5">
            Start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View Pricing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
