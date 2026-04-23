"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { faqs, type FAQCategory } from "@/data/faqs";

const CATEGORIES: ("All" | FAQCategory)[] = [
  "All",
  "General",
  "Pricing",
  "Features",
  "Getting Started",
];

export default function FAQsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | FAQCategory>("All");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  function toggle(question: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  }

  function clearFilters() {
    setSearchTerm("");
    setActiveCategory("All");
    setOpenItems(new Set());
  }

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C757D] pointer-events-none"
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Search questions…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-10 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0063EB]/30 focus:border-[#0063EB] transition-colors"
          aria-label="Search frequently asked questions"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6C757D] hover:text-[#030712] transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="FAQ categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#0063EB] text-white"
                : "bg-[#ECEEF2] text-[#4F4F4F] hover:bg-[#EEF4FF] hover:text-[#0063EB]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(searchTerm || activeCategory !== "All") && (
        <p className="text-center text-sm text-[#6C757D] mb-6">
          {filtered.length} {filtered.length === 1 ? "result" : "results"}
          {searchTerm && (
            <> for &ldquo;<span className="font-medium text-[#030712]">{searchTerm}</span>&rdquo;</>
          )}
        </p>
      )}

      {/* FAQ accordion */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[#6C757D] mb-4">
            No questions match your search. Try different keywords.
          </p>
          <button
            onClick={clearFilters}
            className="text-sm font-medium text-[#0063EB] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto divide-y divide-gray-100">
          {filtered.map((faq) => {
            const isOpen = openItems.has(faq.question);
            return (
              <div key={faq.question}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => toggle(faq.question)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-[#030712]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-[#6C757D] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 pr-8">
                    {activeCategory === "All" && (
                      <span className="inline-block text-xs font-medium text-[#0063EB] bg-[#EEF4FF] px-2 py-0.5 rounded-full mb-3">
                        {faq.category}
                      </span>
                    )}
                    <p className="text-sm text-[#4F4F4F] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
