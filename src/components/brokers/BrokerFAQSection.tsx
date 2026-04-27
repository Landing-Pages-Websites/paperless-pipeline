"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Is it free to get started?",
    answer:
      "Yes. You can start a free trial instantly—no credit card required and no setup fees.",
  },
  {
    question: "Do we pay for each agent or admin?",
    answer:
      "No. Every plan includes unlimited users, so you can add brokers, agents, admins, and assistants at no extra cost.",
  },
  {
    question: "Will we be charged when our trial is up?",
    answer:
      "No. When your trial ends, you'll be prompted to choose a plan. You won't be charged unless you decide to continue.",
  },
  {
    question: "What if we need a longer trial?",
    answer:
      "Just reach out to our team. We're happy to extend your trial if you need more time to evaluate the platform with your full team.",
  },
  {
    question: "What does it cost?",
    answer:
      "Pricing is based on your transaction volume—so you only pay for what you actually use. Visit our pricing page for full details.",
  },
  {
    question: "Can we cancel at any time?",
    answer:
      "Yes. There are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel at any time.",
  },
  {
    question: "What is brokerage management software?",
    answer:
      "It's a platform that helps brokers and admins manage transactions, documents, compliance, and team workflows in one place—replacing spreadsheets, email chains, and scattered tools.",
  },
  {
    question:
      "Can I customize Paperless Pipeline software for real estate in different states?",
    answer:
      "Yes. Paperless Pipeline supports custom checklists, workflows, and compliance requirements for brokerages operating across different states.",
  },
  {
    question: "Can we all access transactions from anywhere?",
    answer:
      "Yes. Paperless Pipeline is web-based and works on any device—so your team can manage transactions from the office, home, or on the go.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "Contact our team through the website or visit our Help Center. We're here to help you get set up and answer any questions along the way.",
  },
];

export default function BrokerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-[80px] md:py-[120px] px-5 md:px-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-5">
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
                Everything You Need to Know
              </h2>
              <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%]">
                Get quick answers about pricing, setup, and how Paperless
                Pipeline fits into your brokerage workflow.
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
