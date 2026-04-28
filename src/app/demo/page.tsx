import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Demo — Paperless Pipeline",
  description:
    "See Paperless Pipeline in action. Schedule a free 30-minute walkthrough with our team and learn how it can simplify your transaction management.",
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FDF9EE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <div
            className="inline-flex items-center gap-2 bg-white rounded-full"
            style={{ border: "1px solid rgba(0,0,0,0.1)", padding: "6px 12px 6px 6px" }}
          >
            <span
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ background: "rgba(4,110,255,0.1)", width: "20px", height: "20px" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="4" fill="#0063EB" />
              </svg>
            </span>
            <span className="font-medium text-black text-xs whitespace-nowrap">
              Free, no obligation
            </span>
          </div>
          <h1
            className="text-4xl md:text-[56px] font-semibold text-black leading-tight max-w-xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Book a <span className="text-[#0063EB]">Demo</span>
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-lg">
            See how Paperless Pipeline can simplify your transaction management
            in a free 30-minute walkthrough.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="flex-1">
              <div
                className="rounded-2xl p-8 md:p-10 flex flex-col gap-6"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <h2 className="text-2xl font-semibold text-black">
                  Schedule your demo
                </h2>

                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#030712]">
                      Company / Brokerage Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB]"
                      placeholder="Acme Realty"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[#030712]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB]"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[#030712]">
                        Work Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB]"
                        placeholder="jane@acmerealty.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[#030712]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB]"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[#030712]">
                        Number of Agents
                      </label>
                      <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-[#030712] focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] bg-white">
                        <option value="">Select...</option>
                        <option value="1-10">1–10</option>
                        <option value="11-25">11–25</option>
                        <option value="26-50">26–50</option>
                        <option value="51-100">51–100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#030712]">
                      Anything specific you&apos;d like to see?
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] resize-none"
                      placeholder="Tell us about your current workflow or what you'd like to improve..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-sm py-3 rounded-lg transition-colors mt-2"
                    style={{
                      boxShadow:
                        "0 0 0 1px rgba(4,110,255,1), 0 1px 2px rgba(4,110,255,0.64)",
                    }}
                  >
                    Schedule Demo →
                  </button>
                </form>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:w-[340px] flex flex-col gap-6">
              <div className="rounded-2xl bg-[#EEF4FF] p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-black">
                  What to expect
                </h3>
                <div className="flex flex-col gap-3 text-sm text-[#4F4F4F]">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0063EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <p>A 30-minute walkthrough tailored to your team&apos;s workflow</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0063EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <p>See how transactions, documents, and deadlines come together</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0063EB] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <p>Get answers to your specific questions in real time</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <h3 className="text-lg font-semibold text-black">
                  Prefer to start now?
                </h3>
                <p className="text-sm text-[#4F4F4F]">
                  Skip the demo and jump right in with a free trial. No credit
                  card required.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#0063EB] font-medium text-sm py-2.5 rounded-lg hover:bg-[#EEF4FF] transition-colors"
                >
                  Start Free Trial →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
