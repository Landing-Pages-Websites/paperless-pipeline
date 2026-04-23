import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  MessageSquare,
  ClipboardList,
  Zap,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works for Teams — Paperless Pipeline",
  description:
    "Give your real estate team a single system for every transaction. Standardize your process, improve communication, and close more deals together.",
};

const benefits = [
  {
    icon: Layers,
    title: "Standardized Process",
    description:
      "Every team member follows the same transaction workflow. No more guessing what stage a deal is in or which documents are missing.",
  },
  {
    icon: MessageSquare,
    title: "Built-In Communication",
    description:
      "Keep all deal-related communication in one place. Notes, updates, and document requests live inside each transaction — not scattered across texts and emails.",
  },
  {
    icon: ClipboardList,
    title: "Shared Checklists",
    description:
      "Create reusable checklists for your most common transaction types. Everyone on the team knows exactly what needs to happen and when.",
  },
  {
    icon: Zap,
    title: "Work Faster Together",
    description:
      "Automated deadline reminders and task notifications mean nothing falls through the cracks — even when you're juggling multiple deals at once.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Your Team Template",
    description:
      "Build transaction templates that reflect your team's workflow — standard checklists, deadlines, and roles. Set it up once and apply it to every new deal.",
  },
  {
    number: "02",
    title: "Assign Deals and Roles",
    description:
      "When a new transaction opens, assign it to the right team members. Each person sees exactly what they're responsible for, nothing more, nothing less.",
  },
  {
    number: "03",
    title: "Track Progress in Real Time",
    description:
      "The team dashboard shows every deal's status, upcoming milestones, and any blockers. Your whole team stays aligned without a single status meeting.",
  },
];

export default function TeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F0FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#7C3AED]">For Teams</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              The Operating System for{" "}
              <span className="text-[#0063EB]">High-Performance Teams</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-2xl">
              Paperless Pipeline gives real estate teams a shared playbook.
              Standardize your transaction process, cut down on back-and-forth,
              and close deals faster as a unit.
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
              What teams get with Paperless Pipeline
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto">
              Replace the group texts and scattered spreadsheets with one
              system your whole team will actually use.
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
                  <div className="w-11 h-11 bg-[#F5F0FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#7C3AED]" />
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
              How it works for teams
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-xl mx-auto">
              Get your whole team working from the same playbook in days, not
              weeks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-[#7C3AED]/30 z-10" />
                )}
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="text-4xl font-bold text-[#7C3AED]/20 mb-4 leading-none">
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
                Does this sound like your team?
              </h2>
              <ul className="space-y-4">
                {[
                  "Everyone has their own way of managing transactions",
                  "Status updates require interrupting teammates mid-day",
                  "Important documents get sent to the wrong person or get lost",
                  "New team members take weeks to get up to speed",
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
            <div className="bg-[#F5F0FF] rounded-2xl p-8 md:p-10">
              <p className="text-2xl font-semibold text-[#030712] leading-snug mb-6">
                "We doubled our deal volume without adding headcount. Paperless
                Pipeline is the only reason that was even possible."
              </p>
              <div>
                <p className="font-semibold text-[#030712] text-sm">
                  James R.
                </p>
                <p className="text-[#6C757D] text-sm">
                  Team Lead, top-producing team of 8
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
            Build a team that closes deals, not status calls.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Paperless Pipeline keeps every team member aligned from the moment
            a contract is signed to the day it closes.
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
