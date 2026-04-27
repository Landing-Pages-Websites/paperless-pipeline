"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs, type FAQCategory } from "@/data/faqs";

const CATEGORIES: ("All" | FAQCategory)[] = [
  "All",
  "General",
  "Getting Started",
  "Pricing",
  "Features",
  "Support",
];

export default function FAQsContent() {
  const [activeCategory, setActiveCategory] = useState<"All" | FAQCategory>("All");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filtered = useMemo(
    () =>
      faqs.filter(
        (faq) => activeCategory === "All" || faq.category === activeCategory
      ),
    [activeCategory]
  );

  function toggle(question: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  }

  return (
    <div className="max-w-[1280px] mx-auto">
      {/* Category tabs */}
      <div
        className="flex flex-wrap gap-2 justify-center mb-10"
        role="tablist"
        aria-label="FAQ categories"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#0063EB] text-white"
                : "bg-[#ECEEF2] text-[#4F4F4F] hover:bg-[#EEF4FF] hover:text-[#0063EB]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ accordion */}
      <div className="divide-y divide-[#E4E4E7]">
        {filtered.map((faq) => {
          const isOpen = openItems.has(faq.question);
          return (
            <div key={faq.question} className="px-6 py-6">
              <button
                className="w-full flex items-center justify-between gap-5 text-left"
                onClick={() => toggle(faq.question)}
                aria-expanded={isOpen}
              >
                <span
                  className="text-[18px] leading-8 text-[#1E1E1E]"
                  style={{ fontWeight: 600 }}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    isOpen
                      ? "bg-[#0063EB] text-white"
                      : "bg-white border border-[#E4E4E7] text-[#4F4F4F]"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 pr-14">
                  {faq.answer.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className={`text-base leading-7 text-[#4F4F4F] ${i > 0 ? "mt-4" : ""}`}
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
