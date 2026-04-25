"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How many users can I add?",
    answer:
      "As many as you'd like. Every plan includes unlimited users.\nYou can even invite team members to test with you during the trial.",
  },
  {
    question: "What about support? Is it included?",
    answer:
      "All plans include email and chat support with fast response times. Our Professional and Enterprise plans include priority support with dedicated account managers and phone access. We also maintain an extensive help center with guides, videos, and webinars.",
  },
  {
    question: "How do I move forward?",
    answer:
      "Start your free trial — no credit card required. Most teams are fully operational within a day. Our onboarding wizard walks you through setup, and our team is here to help you every step of the way.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-5">
        {/* Left column – header + CTA */}
        <div className="flex flex-col justify-between gap-8 md:gap-0 md:w-[574px] flex-shrink-0">
          <div className="flex flex-col gap-3">
            <p className="text-[#0063EB] font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase">
              FAQs
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                Questions? We&apos;ve Got Answers.
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Everything you need to know about getting started, using the
                platform, and making the most of it.
              </p>
            </div>
          </div>
          <Link
            href="/faqs"
            className="self-start inline-flex items-center gap-2 text-white font-medium text-[14px] leading-[24px] bg-[#0063EB] hover:bg-[#046EFF] transition-colors rounded-lg px-3 py-1.5"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
            }}
          >
            View All →
          </Link>
        </div>

        {/* Right column – FAQ accordion */}
        <div className="flex flex-col flex-1">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 border-b border-[#E4E4E7]"
            >
              {/* Question row */}
              <div className="flex items-center gap-5">
                <h3 className="text-[#1E1E1E] font-semibold text-[18px] leading-[32px] flex-1">
                  {faq.question}
                </h3>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className={`flex-shrink-0 flex items-center justify-center rounded-full px-2 py-1.5 transition-colors ${
                    openIndex === i
                      ? "bg-[#0063EB] text-white"
                      : "bg-white border border-[#E4E4E7] text-[#6C757D]"
                  }`}
                >
                  {openIndex === i ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </div>

              {/* Answer */}
              {openIndex === i && (
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[28px] whitespace-pre-line">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
