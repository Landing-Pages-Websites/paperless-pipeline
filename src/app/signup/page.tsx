import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Your Free Trial — Paperless Pipeline",
  description:
    "Create your Paperless Pipeline account in minutes. No credit card required. Free setup and onboarding included.",
};

export default function SignupPage() {
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
              No credit card required
            </span>
          </div>
          <h1
            className="text-4xl md:text-[56px] font-semibold text-black leading-tight max-w-xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Start Your <span className="text-[#0063EB]">Free Trial</span>
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-lg">
            Get started in minutes with free setup, training, and support. No
            credit card required.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[520px] mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col gap-6"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <h2 className="text-2xl font-semibold text-black">
              Create your account
            </h2>

            <form className="flex flex-col gap-5" onSubmit={undefined}>
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

              <button
                type="submit"
                className="w-full bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium text-sm py-3 rounded-lg transition-colors mt-2"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(4,110,255,1), 0 1px 2px rgba(4,110,255,0.64)",
                }}
              >
                Start Free Trial →
              </button>
            </form>

            <p className="text-sm text-[#6C757D] text-center">
              Already have an account?{" "}
              <a
                href="https://app.paperlesspipeline.com"
                className="text-[#0063EB] font-medium hover:underline"
              >
                Log in
              </a>
            </p>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-[#6C757D]">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0063EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0063EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Free setup included
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0063EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
