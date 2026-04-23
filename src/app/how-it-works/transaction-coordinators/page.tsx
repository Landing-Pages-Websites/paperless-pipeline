import type { Metadata } from "next";
import Link from "next/link";
import {
  FolderOpen,
  CalendarClock,
  FileCheck,
  LayoutGrid,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works for Transaction Coordinators — Paperless Pipeline",
  description:
    "Manage dozens of files simultaneously without dropping a deadline. Paperless Pipeline is purpose-built for transaction coordinators who run the show.",
};

const benefits = [
  {
    icon: LayoutGrid,
    title: "Multi-Deal Command Center",
    description:
      "See all your active transactions in a single dashboard. Filter by status, deadline, or client to instantly know where to focus your attention.",
  },
  {
    icon: CalendarClock,
    title: "Deadline Tracking",
    description:
      "Automated reminders ensure no contingency date or closing deadline ever slips. You get notified before it becomes a problem.",
  },
  {
    icon: FileCheck,
    title: "Document Checklists",
    description:
      "Pre-built and customizable checklists for every transaction type. Collect, review, and approve documents without the endless back-and-forth emails.",
  },
  {
    icon: FolderOpen,
    title: "Organized Files",
    description:
      "Every document uploaded to the right place, every time. No more hunting through email attachments or shared drives to find what you need.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open a New Transaction File",
    description:
      "Start each new deal from a template that matches your transaction type. Your checklist, key dates, and contact fields are pre-populated and ready to fill in.",
  },
  {
    number: "02",
    title: "Collect Documents and Hit Deadlines",
    description:
      "Send document request links to clients and agents. Automated reminders handle the follow-up so you can focus on the work that actually needs your expertise.",
  },
  {
    number: "03",
    title: "Close Clean, Every Time",
    description:
      "When every checklist item is complete, your file is ready for broker review. A clean, organized, and fully documented transaction every single time.",
  },
];

export default function TransactionCoordinatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#E8F8EF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#059669]">
                For Transaction Coordinators
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              Juggle More Deals.{" "}
              <span className="text-[#0063EB]">Drop Zero Balls.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-2xl">
              Paperless Pipeline is the system TCs rely on to manage high
              volumes of files without the chaos. Deadlines, documents, and
              communication — all in one place.
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
              Built for the way TCs work
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto">
              You're managing relationships, documents, and deadlines
              simultaneously. Your software should make that easier, not harder.
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
                  <div className="w-11 h-11 bg-[#E8F8EF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#059669]" />
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
              Your workflow, simplified
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-xl mx-auto">
              From contract to close, Paperless Pipeline guides every
              transaction through a consistent, repeatable process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-1rem)] w-8 border-t-2 border-dashed border-[#059669]/30 z-10" />
                )}
                <div className="bg-white rounded-xl p-8 shadow-sm h-full">
                  <div className="text-4xl font-bold text-[#059669]/20 mb-4 leading-none">
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
                The TC struggle is real
              </h2>
              <ul className="space-y-4">
                {[
                  "Missing a deadline means the deal could fall apart",
                  "Agents send documents to your personal email, not the file",
                  "You're spending half your day sending reminder emails",
                  "Managing 20+ files means something always gets buried",
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
            <div className="bg-[#E8F8EF] rounded-2xl p-8 md:p-10">
              <p className="text-2xl font-semibold text-[#030712] leading-snug mb-6">
                "I used to cap myself at 15 files at a time. With Paperless
                Pipeline, I'm comfortably handling 30 without any more stress."
              </p>
              <div>
                <p className="font-semibold text-[#030712] text-sm">
                  Maria T.
                </p>
                <p className="text-[#6C757D] text-sm">
                  Independent Transaction Coordinator
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
            Ready to handle twice the files with half the stress?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Paperless Pipeline gives transaction coordinators the structure they
            need to scale without burning out.
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
