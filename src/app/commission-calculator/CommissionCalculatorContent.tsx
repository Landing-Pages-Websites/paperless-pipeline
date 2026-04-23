"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function CommissionCalculatorContent() {
  const [salePrice, setSalePrice] = useState(500000);
  const [commissionRate, setCommissionRate] = useState(6);
  const [brokerSplit, setBrokerSplit] = useState(30);
  const [additionalFees, setAdditionalFees] = useState(500);

  const results = useMemo(() => {
    const totalCommission = salePrice * (commissionRate / 100);
    const brokerShare = totalCommission * (brokerSplit / 100);
    const agentShare = totalCommission - brokerShare;
    const netAfterFees = Math.max(0, agentShare - additionalFees);
    return { totalCommission, brokerShare, agentShare, netAfterFees };
  }, [salePrice, commissionRate, brokerSplit, additionalFees]);

  const agentPct = results.totalCommission > 0
    ? (results.agentShare / results.totalCommission) * 100
    : 100 - brokerSplit;
  const brokerPct = 100 - agentPct;
  const agentNetPct = results.agentShare > 0
    ? (results.netAfterFees / results.agentShare) * 100
    : 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-semibold text-[#030712] mb-7">
          Transaction Details
        </h2>

        {/* Sale price */}
        <div className="mb-7">
          <label className="block text-sm font-medium text-[#030712] mb-2">
            Sale price
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6C757D] text-sm pointer-events-none">
              $
            </span>
            <input
              type="number"
              min={0}
              step={10000}
              value={salePrice}
              onChange={(e) => setSalePrice(Math.max(0, Number(e.target.value)))}
              className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] transition-colors"
              aria-label="Sale price in dollars"
            />
          </div>
        </div>

        {/* Commission rate */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-[#030712]">
              Total commission rate
            </label>
            <span className="text-sm font-semibold text-[#0063EB]">
              {commissionRate}%
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={10}
            step={0.25}
            value={commissionRate}
            onChange={(e) => setCommissionRate(Number(e.target.value))}
            className="w-full accent-[#0063EB]"
            aria-label="Commission rate percentage"
          />
          <div className="flex justify-between text-xs text-[#6C757D] mt-1">
            <span>1%</span>
            <span>10%</span>
          </div>
        </div>

        {/* Broker split */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-[#030712]">
              Broker&apos;s share
            </label>
            <span className="text-sm font-semibold text-[#0063EB]">{brokerSplit}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={brokerSplit}
            onChange={(e) => setBrokerSplit(Number(e.target.value))}
            className="w-full accent-[#0063EB]"
            aria-label="Broker split percentage"
          />
          <div className="flex justify-between text-xs text-[#6C757D] mt-1">
            <span>0% (agent keeps all)</span>
            <span>100%</span>
          </div>
        </div>

        {/* Additional fees */}
        <div>
          <label className="block text-sm font-medium text-[#030712] mb-2">
            Additional fees
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6C757D] text-sm pointer-events-none">
              $
            </span>
            <input
              type="number"
              min={0}
              step={50}
              value={additionalFees}
              onChange={(e) => setAdditionalFees(Math.max(0, Number(e.target.value)))}
              className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] transition-colors"
              aria-label="Additional fees in dollars"
            />
          </div>
          <p className="text-xs text-[#6C757D] mt-1">
            E&amp;O insurance, franchise fees, transaction coordinator fees, etc.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-5">
        {/* Visual breakdown */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
          <h2 className="text-xl font-semibold text-[#030712] mb-6">
            Commission Breakdown
          </h2>

          {/* Agent vs Broker stacked bar */}
          <div className="mb-2">
            <p className="text-xs font-medium text-[#6C757D] uppercase tracking-wide mb-2">
              Agent vs. Broker split
            </p>
            <div
              className="flex h-9 rounded-xl overflow-hidden"
              role="img"
              aria-label={`Agent ${100 - brokerSplit}% broker ${brokerSplit}%`}
            >
              <div
                style={{ width: `${agentPct}%` }}
                className="bg-[#0063EB] flex items-center justify-center transition-all duration-300 min-w-0"
              >
                {agentPct > 18 && (
                  <span className="text-white text-xs font-semibold truncate px-1">
                    Agent {100 - brokerSplit}%
                  </span>
                )}
              </div>
              <div
                style={{ width: `${brokerPct}%` }}
                className="bg-[#EEF4FF] flex items-center justify-center transition-all duration-300 min-w-0"
              >
                {brokerPct > 18 && (
                  <span className="text-[#0063EB] text-xs font-semibold truncate px-1">
                    Broker {brokerSplit}%
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Agent net bar */}
          <div className="mb-6">
            <p className="text-xs font-medium text-[#6C757D] uppercase tracking-wide mb-2">
              Agent net after fees
            </p>
            <div
              className="flex h-9 rounded-xl overflow-hidden bg-gray-100"
              role="img"
              aria-label={`Net payout ${Math.round(agentNetPct)}% of agent share`}
            >
              <div
                style={{ width: `${agentNetPct}%` }}
                className="bg-emerald-500 flex items-center justify-center transition-all duration-300 min-w-0"
              >
                {agentNetPct > 20 && (
                  <span className="text-white text-xs font-semibold truncate px-1">
                    Net {Math.round(agentNetPct)}%
                  </span>
                )}
              </div>
              <div
                style={{ width: `${100 - agentNetPct}%` }}
                className="bg-red-100 flex items-center justify-center transition-all duration-300 min-w-0"
              >
                {100 - agentNetPct > 15 && (
                  <span className="text-red-500 text-xs font-semibold truncate px-1">
                    Fees
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#0063EB]" />
              <span className="text-[#6C757D]">Agent share</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#EEF4FF] border border-[#0063EB]" />
              <span className="text-[#6C757D]">Broker share</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-[#6C757D]">Net to agent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-100 border border-red-300" />
              <span className="text-[#6C757D]">Fees</span>
            </div>
          </div>

          {/* Line items */}
          <div className="divide-y divide-gray-100">
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[#4F4F4F]">Total commission</span>
              <span className="text-sm font-semibold text-[#030712]">
                {fmt(results.totalCommission)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[#4F4F4F]">
                Agent share ({100 - brokerSplit}%)
              </span>
              <span className="text-sm font-semibold text-[#0063EB]">
                {fmt(results.agentShare)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[#4F4F4F]">
                Broker share ({brokerSplit}%)
              </span>
              <span className="text-sm font-semibold text-[#6C757D]">
                {fmt(results.brokerShare)}
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm text-[#4F4F4F]">Additional fees</span>
              <span className="text-sm font-semibold text-[#D92D20]">
                − {fmt(additionalFees)}
              </span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-base font-semibold text-[#030712]">
                Net to agent
              </span>
              <span className="text-xl font-bold text-emerald-600">
                {fmt(results.netAfterFees)}
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#F5F0FF] rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-[#030712] mb-2">
            Track commissions automatically
          </h3>
          <p className="text-sm text-[#4F4F4F] mb-5">
            Paperless Pipeline calculates agent and broker splits for every
            transaction — no spreadsheets, no manual math.
          </p>
          <Link
            href="/features/commissions-management"
            className="inline-flex items-center gap-2 bg-[#0063EB] hover:bg-[#046EFF] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Learn About Commission Management <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
