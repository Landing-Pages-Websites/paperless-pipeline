import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  ShieldCheck,
  Users,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works for Brokers — Paperless Pipeline",
  description:
    "Get full visibility into every transaction, keep your office compliant, and scale your brokerage with confidence using Paperless Pipeline.",
};

const benefits = [
  {
    icon: Eye,
    title: "Complete Visibility",
    description:
      "See every active deal across your entire office in one dashboard. Know exactly where each transaction stands without chasing down agents.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In Compliance",
    description:
      "Customizable checklists ensure every file meets your brokerage's requirements before it closes. Audit trails keep you protected.",
  },
  {
    icon: Users,
    title: "Agent Management",
    description:
      "Onboard new agents in minutes, assign roles, and set permissions. Your team works within a consistent, standardized system from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scale With Confidence",
    description:
      "Flat-rate, predictable pricing means your costs don't spike as your team grows. Add agents without budget surprises.",
  },
];

const steps = [
  {
    number: "01",
    title: "Set Up Your Office",
    description:
      "Configure your brokerage's transaction checklists, agent roles, and approval workflows once. Every deal that follows automatically inherits your standards.",
  },
  {
    number: "02",
    title: "Monitor From Your Dashboard",
    description:
      "Your broker dashboard shows every open transaction, upcoming deadlines, and pending compliance items across your entire office at a glance.",
  },
  {
    number: "03",
    title: "Review and Approve",
    description:
      "Get notified when files need your attention. Review documents, approve transactions, and sign off on completed deals — all in one place.",
  },
];

export default function BrokersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#0063EB]">For Brokers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              Run Your Brokerage With{" "}
              <span className="text-[#0063EB]">Total Clarity</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-2xl">
              Paperless Pipeline gives brokers the oversight they need without
              the micromanagement. Keep every deal compliant, every agent
              accountable, and your whole office running smoothly.
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

      {/* Benefits grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              What brokers get with Paperless Pipeline
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto">
              Stop juggling spreadsheets and chasing status updates. Get a
              system built around how brokers actually work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 bg-[#EEF4FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#0063EB]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#030712] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#4F4F4F] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works steps */}
      <section className="py-20 md:py-28 bg-[#ECEEF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              How it works for brokers
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-xl mx-auto">
              Up and running in an afternoon. No implementation consultant
              required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-[#0063EB]/30 z-10" />
                )}
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="text-4xl font-bold text-[#0063EB]/20 mb-4 leading-none">
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

      {/* Pain points callout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-6">
                Sound familiar?
              </h2>
              <ul className="space-y-4">
                {[
                  "You find out about deal problems only after it's too late",
                  "Compliance reviews happen at the last minute, causing delays",
                  "Each agent manages transactions their own way",
                  "Growing your team means growing your admin headache",
                ].map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#0063EB] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#4F4F4F]">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#EEF4FF] rounded-2xl p-8 md:p-10">
              <p className="text-2xl font-semibold text-[#030712] leading-snug mb-6">
                "Paperless Pipeline gave me visibility I didn't know was
                possible. I can see every deal in the office from my phone."
              </p>
              <div>
                <p className="font-semibold text-[#030712] text-sm">
                  Sarah M.
                </p>
                <p className="text-[#6C757D] text-sm">
                  Broker/Owner, 42-agent office
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
            Ready to run a tighter brokerage?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of brokers who close more deals with less chaos using
            Paperless Pipeline.
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
