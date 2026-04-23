"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const previewFaqs = faqs.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            FAQs
          </h2>
          <p className="text-lg text-[#4F4F4F] max-w-xl mx-auto">
            Quick answers to the questions we hear most often.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-100">
          {previewFaqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-medium text-[#030712]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#6C757D] transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="pb-5 pr-8">
                  <p className="text-sm text-[#4F4F4F] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0063EB] hover:gap-3 transition-all"
          >
            View All FAQs <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
