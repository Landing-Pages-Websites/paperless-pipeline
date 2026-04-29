"use client";

import { useState, useMemo } from "react";

function numVal(s: string): number | null {
  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}

function fmtAmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function CalcInput({
  label,
  prefix,
  suffix,
  value,
  onChange,
}: {
  label: string;
  prefix?: string;
  suffix?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-[#1E1E1E]">{label}</span>
      <div className="flex items-stretch border border-[#CDD3DA] rounded bg-white overflow-hidden shrink-0">
        {prefix && (
          <span className="flex items-center px-2 text-sm text-[#1E1E1E] border-r border-[#CDD3DA] select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="w-[100px] px-2 py-[5px] text-sm focus:outline-none"
        />
        {suffix && (
          <span className="flex items-center px-2 text-sm text-[#1E1E1E] border-l border-[#CDD3DA] select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultField({
  label,
  prefix,
  value,
  muted,
}: {
  label: string;
  prefix?: string;
  value: string | null;
  muted: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={`text-sm ${muted ? "text-[#9CA3AF]" : "text-[#1E1E1E]"}`}>{label}</span>
      <div
        className={`flex items-stretch border rounded overflow-hidden shrink-0 ${
          muted ? "border-[#E5E7EB]" : "border-[#CDD3DA]"
        }`}
      >
        {prefix && (
          <span
            className={`flex items-center px-2 text-sm border-r select-none ${
              muted
                ? "text-[#9CA3AF] border-[#E5E7EB] bg-[#F9FAFB]"
                : "text-[#1E1E1E] border-[#CDD3DA] bg-white"
            }`}
          >
            {prefix}
          </span>
        )}
        <span
          className={`flex items-center w-[100px] px-2 py-[5px] text-sm ${
            muted ? "text-[#9CA3AF] bg-[#F9FAFB]" : "text-[#1E1E1E] bg-white"
          }`}
        >
          {value === null ? "----" : value}
        </span>
      </div>
    </div>
  );
}

function StepRow({
  step,
  description,
  shaded,
  children,
}: {
  step: string;
  description: string;
  shaded: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-start gap-6 px-6 py-5 border-b border-[#E5E7EB] ${
        shaded ? "bg-[#F8F9FA]" : "bg-white"
      }`}
    >
      <div className="w-[185px] shrink-0">
        <p className="font-bold text-[#0063EB] text-sm">{step}</p>
        <p className="text-sm text-[#4F4F4F] mt-0.5 leading-snug">{description}</p>
      </div>
      <div className="flex flex-col gap-[10px] flex-1 min-w-0">{children}</div>
    </div>
  );
}

function StandardCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [commissionPct, setCommissionPct] = useState("");
  const [agentRate, setAgentRate] = useState("");
  const [agentFees, setAgentFees] = useState("");
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    const price = numVal(salePrice);
    const commPct = numVal(commissionPct);
    const rate = numVal(agentRate);
    if (price === null || commPct === null || rate === null) return null;
    if (price <= 0 || commPct <= 0 || rate <= 0) return null;
    const gross = price * (commPct / 100);
    const agentSplit = gross * (rate / 100);
    const fees = numVal(agentFees) ?? 0;
    return {
      brokerageCollects: Math.max(0, gross - agentSplit + fees),
      agentEarned: Math.max(0, agentSplit - fees),
    };
  }, [salePrice, commissionPct, agentRate, agentFees]);

  const hasData = results !== null;

  function copyNetPayables() {
    if (!results) return;
    const text = `Brokerage Collects: $${fmtAmt(results.brokerageCollects)}\nAgent Earned: $${fmtAmt(results.agentEarned)}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="rounded-[8px] border border-[#0063EB] overflow-hidden bg-white">
      {/* Card header */}
      <div className="px-6 py-4 border-b border-[#E5E7EB] bg-white">
        <p className="text-[#0063EB] font-bold text-sm leading-5">Standard</p>
        <p className="font-bold text-[#1E1E1E] text-base leading-6">
          Real Estate Commission Calculator (Split or Flat Fee)
        </p>
      </div>

      {/* Step 1 */}
      <StepRow step="Step 1" description="Enter your commission details:" shaded>
        <CalcInput label="Sale Price:" prefix="$" value={salePrice} onChange={setSalePrice} />
        <CalcInput label="Commission Percent:" suffix="%" value={commissionPct} onChange={setCommissionPct} />
      </StepRow>

      {/* Step 2 */}
      <StepRow step="Step 2" description="Enter your agent commission plan:" shaded={false}>
        <CalcInput label="Agent Commission Rate:" suffix="%" value={agentRate} onChange={setAgentRate} />
        <CalcInput label="Agent Fees Owed:" prefix="$" value={agentFees} onChange={setAgentFees} />
      </StepRow>

      {/* Results */}
      <div className={`flex items-start gap-6 px-6 py-5 ${hasData ? "bg-white" : "bg-[#F8F9FA]"}`}>
        <div className="w-[185px] shrink-0">
          {hasData ? (
            <p className="font-bold text-sm text-[#1E1E1E] leading-snug">
              Here are your final net payables:
            </p>
          ) : (
            <>
              <p className="font-bold text-sm text-[#9CA3AF] leading-5">Waiting for data entry...</p>
              <p className="text-sm text-[#9CA3AF] mt-0.5 leading-snug">
                Here are your final net payables:
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[10px] flex-1 min-w-0">
          <ResultField
            label="Brokerage Collects:"
            prefix="$"
            value={hasData ? fmtAmt(results!.brokerageCollects) : null}
            muted={!hasData}
          />
          <ResultField
            label="Agent Earned:"
            prefix="$"
            value={hasData ? fmtAmt(results!.agentEarned) : null}
            muted={!hasData}
          />
          <div className="mt-1">
            <button
              type="button"
              onClick={copyNetPayables}
              disabled={!hasData}
              className={`inline-flex items-center gap-1.5 px-4 py-[5px] rounded border text-sm font-medium transition-colors ${
                hasData
                  ? "border-[#CDD3DA] bg-white text-[#1E1E1E] hover:border-[#0063EB] hover:text-[#0063EB] cursor-pointer"
                  : "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed"
              }`}
            >
              {copied ? "Copied!" : "Copy Net Payables →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedCalculator() {
  const [salePrice, setSalePrice] = useState("");
  const [commissionPct, setCommissionPct] = useState("");
  const [currentTierRate, setCurrentTierRate] = useState("");
  const [nextTierRate, setNextTierRate] = useState("");
  const [tierThreshold, setTierThreshold] = useState("");
  const [alreadyEarned, setAlreadyEarned] = useState("");
  const [agentFees, setAgentFees] = useState("");
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => {
    const price = numVal(salePrice);
    const commPct = numVal(commissionPct);
    const currRate = numVal(currentTierRate);
    const nextRate = numVal(nextTierRate);
    const threshold = numVal(tierThreshold);
    const earned = numVal(alreadyEarned);
    if (
      price === null ||
      commPct === null ||
      currRate === null ||
      nextRate === null ||
      threshold === null ||
      earned === null
    )
      return null;
    if (price <= 0 || commPct <= 0) return null;

    const gross = price * (commPct / 100);
    const remaining = Math.max(0, threshold - earned);
    const pastThreshold = earned >= threshold;

    let currentTierAmt: number;
    let nextTierAmt: number;

    if (pastThreshold) {
      currentTierAmt = 0;
      nextTierAmt = gross;
    } else if (gross <= remaining) {
      currentTierAmt = gross;
      nextTierAmt = 0;
    } else {
      currentTierAmt = remaining;
      nextTierAmt = gross - remaining;
    }

    const agentTotal =
      currentTierAmt * (currRate / 100) + nextTierAmt * (nextRate / 100);
    const fees = numVal(agentFees) ?? 0;

    return {
      brokerageCollects: Math.max(0, gross - agentTotal + fees),
      agentEarned: Math.max(0, agentTotal - fees),
    };
  }, [salePrice, commissionPct, currentTierRate, nextTierRate, tierThreshold, alreadyEarned, agentFees]);

  const hasData = results !== null;

  function copyNetPayables() {
    if (!results) return;
    const text = `Brokerage Collects: $${fmtAmt(results.brokerageCollects)}\nAgent Earned: $${fmtAmt(results.agentEarned)}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="rounded-[8px] border border-[#0063EB] overflow-hidden bg-white">
      <div className="px-6 py-4 border-b border-[#E5E7EB] bg-white">
        <p className="text-[#0063EB] font-bold text-sm leading-5">Advanced</p>
        <p className="font-bold text-[#1E1E1E] text-base leading-6">
          Tiered Real Estate Commission Calculator
        </p>
      </div>

      <StepRow step="Step 1" description="Enter your commission details:" shaded>
        <CalcInput label="Sale Price:" prefix="$" value={salePrice} onChange={setSalePrice} />
        <CalcInput label="Commission Percent:" suffix="%" value={commissionPct} onChange={setCommissionPct} />
      </StepRow>

      <StepRow step="Step 2" description="Enter tier rates and threshold:" shaded={false}>
        <CalcInput label="Current Tier Rate:" suffix="%" value={currentTierRate} onChange={setCurrentTierRate} />
        <CalcInput label="Next Tier Rate:" suffix="%" value={nextTierRate} onChange={setNextTierRate} />
        <CalcInput label="Tier Threshold:" prefix="$" value={tierThreshold} onChange={setTierThreshold} />
      </StepRow>

      <StepRow step="Step 3" description="Enter agent earnings and fees:" shaded>
        <CalcInput
          label="Already Earned This Period:"
          prefix="$"
          value={alreadyEarned}
          onChange={setAlreadyEarned}
        />
        <CalcInput label="Agent Fees Owed:" prefix="$" value={agentFees} onChange={setAgentFees} />
      </StepRow>

      <div className={`flex items-start gap-6 px-6 py-5 ${hasData ? "bg-white" : "bg-[#F8F9FA]"}`}>
        <div className="w-[185px] shrink-0">
          {hasData ? (
            <p className="font-bold text-sm text-[#1E1E1E] leading-snug">
              Here are your final net payables:
            </p>
          ) : (
            <>
              <p className="font-bold text-sm text-[#9CA3AF] leading-5">Waiting for data entry...</p>
              <p className="text-sm text-[#9CA3AF] mt-0.5 leading-snug">
                Here are your final net payables:
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col gap-[10px] flex-1 min-w-0">
          <ResultField
            label="Brokerage Collects:"
            prefix="$"
            value={hasData ? fmtAmt(results!.brokerageCollects) : null}
            muted={!hasData}
          />
          <ResultField
            label="Agent Earned:"
            prefix="$"
            value={hasData ? fmtAmt(results!.agentEarned) : null}
            muted={!hasData}
          />
          <div className="mt-1">
            <button
              type="button"
              onClick={copyNetPayables}
              disabled={!hasData}
              className={`inline-flex items-center gap-1.5 px-4 py-[5px] rounded border text-sm font-medium transition-colors ${
                hasData
                  ? "border-[#CDD3DA] bg-white text-[#1E1E1E] hover:border-[#0063EB] hover:text-[#0063EB] cursor-pointer"
                  : "border-[#E5E7EB] bg-white text-[#9CA3AF] cursor-not-allowed"
              }`}
            >
              {copied ? "Copied!" : "Copy Net Payables →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommissionCalculatorContent() {
  const [activeTab, setActiveTab] = useState<"standard" | "advanced">("standard");

  return (
    <div className="max-w-[680px] mx-auto">
      <p className="text-[#0063EB] font-bold text-sm mb-3">
        Choose a Commission Calculator:
      </p>
      <div className="flex mb-5">
        <button
          type="button"
          onClick={() => setActiveTab("standard")}
          className={`px-5 py-[7px] text-sm font-semibold border transition-colors rounded-l-[4px] ${
            activeTab === "standard"
              ? "bg-[#0063EB] text-white border-[#0063EB]"
              : "bg-white text-[#1E1E1E] border-[#CDD3DA] hover:border-[#0063EB]"
          }`}
        >
          Standard
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("advanced")}
          className={`px-5 py-[7px] text-sm font-semibold border-t border-b border-r transition-colors rounded-r-[4px] ${
            activeTab === "advanced"
              ? "bg-[#0063EB] text-white border-[#0063EB]"
              : "bg-white text-[#1E1E1E] border-[#CDD3DA] hover:border-[#0063EB]"
          }`}
        >
          Advanced
        </button>
      </div>

      {activeTab === "standard" ? <StandardCalculator /> : <AdvancedCalculator />}
    </div>
  );
}
