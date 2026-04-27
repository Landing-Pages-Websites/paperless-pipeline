"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How does pricing work?",
    answer:
      "You pay depending on how many deals you start in a month (your monthly production). There are 9 plans that begin with 5 new monthly transactions. The price you pay is for your whole brokerage; you can have unlimited users at no extra cost.",
  },
  {
    question: "How is monthly production calculated?",
    answer:
      "When you start working on a deal (whether it's a coming soon property, an active listing or a new sale) it only counts once in the month you created it. Once a transaction is created, it won't count again—even when the status changes.",
  },
  {
    question: "Can I downgrade if production drops?",
    answer:
      "Yes. You can change your plan at any time to match your actual monthly production. If your volume drops, simply downgrade to the appropriate plan—there are no penalties or lock-in periods.",
  },
  {
    question: "What about long transactions?",
    answer:
      "Long transactions that span multiple months are only counted once—in the month they were created. You'll never be charged again for a transaction just because it's still active in a subsequent month.",
  },
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free trial directly on our website. No credit card is required. We'll fully configure your account and provide admin training so you're ready from day one.",
  },
  {
    question: "Is training available?",
    answer:
      "Yes. Every plan includes admin training as part of your account setup. Our team will walk you through the platform so everyone knows exactly how to use it from day one.",
  },
  {
    question: "Are there setup fees?",
    answer:
      "No. There are no setup fees on any plan. Your account is fully configured for you at no extra cost, including transaction imports to make your transition seamless.",
  },
  {
    question: "What happens if we add more agents to the system?",
    answer:
      "Nothing changes about your bill. All plans include unlimited users, so you can add every agent, admin, and broker in your brokerage without any additional charges.",
  },
  {
    question: "Can I add multiple locations?",
    answer:
      "Yes. Paperless Pipeline supports multiple office locations under a single account. You can manage all your locations and their transactions from one centralized platform.",
  },
  {
    question: "Do we need to pay extra for storage?",
    answer:
      "No. Document and transaction storage is included in your plan at no extra cost. There are no storage limits or additional fees as your library grows.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings. There are no cancellation fees and no long-term contracts—just stop when you need to.",
  },
  {
    question: "What happens if I cancel my subscription after the free trial?",
    answer:
      "If you cancel after your free trial, your account will be deactivated. We retain your data for a period in case you decide to come back—just reach out to reactivate your account.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you're not satisfied, contact our support team. We review refund requests on a case-by-case basis and will work with you to find a fair resolution.",
  },
];

export default function PricingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-5 md:gap-[20px]">
        {/* Left column */}
        <div className="flex flex-col justify-between gap-8 md:gap-0 md:w-[574px] flex-shrink-0">
          <div className="flex flex-col gap-3">
            <p
              className="text-[#0063EB] font-medium text-[14px] leading-[24px] uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              FAQs
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight">
                Pricing &amp; Account Questions Answered
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Everything you need to know before getting started
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

        {/* Right column — accordion */}
        <div className="flex flex-col flex-1">
          {faqItems.map((faq, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 border-b border-[#E4E4E7]"
            >
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
              {openIndex === i && (
                <p className="text-[#4F4F4F] font-normal text-[16px] leading-[28px]">
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
