import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Paperless Pipeline",
  description:
    "Have questions about Paperless Pipeline? Get in touch with our team. We're here to help you streamline your real estate transaction management.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FDF9EE] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <h1
            className="text-4xl md:text-[56px] font-semibold text-black leading-tight max-w-xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Get in <span className="text-[#0063EB]">Touch</span>
          </h1>
          <p className="text-lg text-[#4F4F4F] max-w-lg">
            Have a question, need help getting started, or want to learn more
            about Paperless Pipeline? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
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
                  Send us a message
                </h2>

                <form className="flex flex-col gap-5">
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
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB]"
                        placeholder="jane@acmerealty.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#030712]">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB]"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#030712]">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] resize-none"
                      placeholder="Tell us about your needs..."
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
                    Send Message →
                  </button>
                </form>
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:w-[340px] flex flex-col gap-6">
              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0063EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black mb-1">Email</h3>
                  <p className="text-sm text-[#4F4F4F]">support@paperlesspipeline.com</p>
                </div>
              </div>

              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0063EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black mb-1">Phone</h3>
                  <p className="text-sm text-[#4F4F4F]">Available during business hours</p>
                </div>
              </div>

              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0063EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black mb-1">Office Hours</h3>
                  <p className="text-sm text-[#4F4F4F]">
                    Monday – Friday<br />
                    9:00 AM – 5:00 PM ET
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
