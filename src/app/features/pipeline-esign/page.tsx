import type { Metadata } from "next";
import Link from "next/link";
import {
  PenLine,
  LayoutTemplate,
  ShieldCheck,
  Scale,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pipeline eSign — Built-In E-Signatures — Paperless Pipeline",
  description:
    "Send, sign, and store legally binding documents without leaving your transaction. Pipeline eSign is built directly into your workflow — no third-party integrations needed.",
};

const features = [
  {
    icon: PenLine,
    title: "Native E-Signatures",
    description:
      "Send documents for signature directly from any transaction file. Signers receive a simple email link — no account creation required on their end.",
  },
  {
    icon: LayoutTemplate,
    title: "Reusable Templates",
    description:
      "Create signature templates for your most common documents — listing agreements, buyer contracts, disclosures — and reuse them across every deal.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Proof Audit Trail",
    description:
      "Every signature event is timestamped and logged. Know exactly who signed, when they signed, and from which IP address — all stored automatically.",
  },
  {
    icon: Scale,
    title: "Legally Binding",
    description:
      "Pipeline eSign complies with ESIGN Act and UETA standards. Your signed documents carry the same legal weight as ink signatures.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload and Prepare Your Document",
    description:
      "Upload any PDF to your transaction file and drag signature, initials, and date fields onto the document. Add multiple signers in any order you choose.",
  },
  {
    number: "02",
    title: "Send for Signature",
    description:
      "Send a signature request to all parties with one click. Signers receive a branded email with a secure link — accessible on any device, no downloads needed.",
  },
  {
    number: "03",
    title: "Track, Remind, and Store",
    description:
      "Watch the status of each signer in real time. Send automated reminders to parties who haven't signed yet. Once complete, the document is stored in your transaction file automatically.",
  },
];

export default function PipelineESignPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#EEF4FF] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#0063EB]">
                Feature — Pipeline eSign
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              E-Signatures Built Into{" "}
              <span className="text-[#0063EB]">Your Workflow</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-2xl">
              Stop switching between tools just to get a signature. Pipeline
              eSign lives inside your transaction management system — so signing
              is one less thing to juggle.
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
              Everything you need to sign, nothing you don't
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto">
              Pipeline eSign handles the full e-signature lifecycle — document
              preparation, routing, signing, storage, and audit — all without
              leaving your transaction.
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
                  <div className="w-11 h-11 bg-[#EEF4FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#0063EB]" />
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
              From upload to signed in minutes
            </h2>
            <p className="text-[#4F4F4F] text-lg max-w-xl mx-auto">
              Pipeline eSign was designed to be fast for you and even faster for
              your clients.
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

      {/* Comparison / proof section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-6">
                Why built-in beats bolt-on
              </h2>
              <ul className="space-y-4">
                {[
                  "No separate subscription for a standalone e-sign service",
                  "Signed documents automatically attach to the right transaction file",
                  "One login for your team — not two separate platforms to manage",
                  "Audit trails live inside the transaction, not in a separate system",
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
            <div className="bg-[#EEF4FF] rounded-2xl p-8 md:p-10">
              <p className="text-2xl font-semibold text-[#030712] leading-snug mb-6">
                "We cancelled our DocuSign subscription the week we switched to
                Paperless Pipeline. Pipeline eSign does everything we need."
              </p>
              <div>
                <p className="font-semibold text-[#030712] text-sm">
                  Kevin L.
                </p>
                <p className="text-[#6C757D] text-sm">
                  Broker, 18-agent office
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
            Get signatures without leaving your transaction.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Pipeline eSign is included in every Paperless Pipeline plan. No
            add-ons, no extra fees.
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
