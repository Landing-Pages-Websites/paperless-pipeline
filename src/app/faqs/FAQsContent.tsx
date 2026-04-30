"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/data/faqs";

const VISIBLE_CATEGORIES = [
  "Getting Started",
  "Pricing",
  "Features",
];

export default function FAQsContent() {
  const filtered = faqs.filter((faq) =>
    VISIBLE_CATEGORIES.includes(faq.category)
  );

  const [openQuestion, setOpenQuestion] = useState(filtered[0]?.question ?? "");

  function toggle(question: string) {
    setOpenQuestion((current) => (current === question ? "" : question));
  }

  return (
    <div className="mx-auto max-w-[610px]">
      <div className="border-y border-[#E4E4E7]">
        {filtered.map((faq) => {
          const isOpen = openQuestion === faq.question;
          return (
            <div key={faq.question} className="border-b border-[#E4E4E7] last:border-b-0">
              <button
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
                onClick={() => toggle(faq.question)}
                aria-expanded={isOpen}
              >
                <span
                  className="text-[16px] leading-6 text-[#1E1E1E]"
                  style={{ fontWeight: 600 }}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen
                      ? "bg-[#0063EB] text-white"
                      : "text-[#1E1E1E]"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>

              {isOpen && (
                <div className="max-w-[560px] pb-6 pr-10">
                  {faq.answer.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className={`text-[15px] leading-6 text-[#4F4F4F] ${
                        i > 0 ? "mt-7" : ""
                      }`}
                      style={{ fontWeight: 400 }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
