import type { Metadata } from "next";
import Link from "next/link";
import {
  Kanban,
  Bell,
  ClipboardCheck,
  BarChart3,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transaction Management — Paperless Pipeline",
  description:
    "Track every deal from contract to close. Paperless Pipeline's transaction management gives you deadlines, checklists, and status dashboards in one organized system.",
};

const features = [
  {
    icon: Kanban,
    title: "Deal Pipeline Tracking",
    description:
      "See every transaction's current stage at a glance. Filter by agent, status, or closing date to immediately understand the health of your pipeline.",
  },
  {
    icon: Bell,
    title: "Deadline Alerts",
    description:
      "Set key dates for inspections, contingencies, and closing — and get automatic reminders before they arrive. Never miss a contractual deadline again.",
  },
  {
    icon: ClipboardCheck,
    title: "Dynamic Checklists",
    description:
      "Build transaction checklists that adapt to your deal type. Mark items complete, attach supporting documents, and track completion percentage in real time.",
  },
  {
    icon: BarChart3,
    title: "Status Dashboard",
    description:
      "Your office-wide transaction dashboard shows volume, velocity, and bottlenecks. Know what's closing this month, what's at risk, and where to focus.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open a Transaction",
    description:
      "Create a new transaction file with property details, parties, and key dates. Apply a checklist template that matches your transaction type in one click.",
  },
  {
    number: "02",
    title: "Work Through Your Checklist",
    description:
      "Your team works through each checklist item — uploading documents, completing tasks, and hitting milestones. Every action is logged with a timestamp.",
  },
  {
    number: "03",
    title: "Close and Archive",
    description:
      "When all items are checked off, submit the file for broker review and close it out. Every document stays organized and searchable in the archive forever.",
  },
];

export default function TransactionManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5F0FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#7C3AED]">
                Feature — Transaction Management
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              Every Deal, Every Stage,{" "}
              <span className="text-[#0063EB]">Always Under Control</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-2xl">
              Paperless Pipeline's transaction management keeps every file
              organized, every deadline tracked, and your entire team working
              from the same source of truth.
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

      {/* Features grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              A smarter system for managing transactions
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto">
              From the first accepted offer to the recorded deed, Paperless
              Pipeline keeps every piece of every deal organized and accounted
              for.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 bg-[#F5F0FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#7C3AED]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#030712] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#4F4F4F] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-[#ECEEF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
              Contract to close, step by step
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-xl mx-auto">
              Paperless Pipeline imposes order on even your most complex
              transactions without slowing anyone down.
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

      {/* Detail / proof section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-6">
                Replace the chaos with a system
              </h2>
              <ul className="space-y-4">
                {[
                  "One place for every document, note, and deadline in each deal",
                  "Color-coded status indicators so at-risk deals are visible immediately",
                  "Task assignment ensures the right person owns each checklist item",
                  "Full transaction history archived and searchable for compliance",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#0063EB] mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#4F4F4F]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F0FF] rounded-2xl p-8 md:p-10">
              <p className="text-2xl font-semibold text-[#030712] leading-snug mb-6">
                "The checklist system alone was worth switching. Every agent now
                knows exactly what's expected and when — without me having to
                say it twice."
              </p>
              <div>
                <p className="font-semibold text-[#030712] text-sm">
                  Dana K.
                </p>
                <p className="text-[#6C757D] text-sm">
                  Office Manager, regional brokerage
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
            Bring order to every transaction in your pipeline.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Start managing transactions the smarter way. No credit card
            required to get started.
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
