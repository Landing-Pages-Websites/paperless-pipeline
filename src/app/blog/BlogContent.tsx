"use client";

import Link from "next/link";
import { useState } from "react";
import { blogPosts, type BlogCategory } from "@/data/blog-posts";

const ALL = "All";
const categories: (typeof ALL | BlogCategory)[] = [
  ALL,
  "Best Practices",
  "Market Trends",
  "Technology",
  "Transaction Management",
  "Team Management",
  "Compliance",
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogContent() {
  const [active, setActive] = useState<typeof ALL | BlogCategory>(ALL);

  const filtered =
    active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              active === cat
                ? "bg-[#0063EB] text-white"
                : "bg-[#ECEEF2] text-[#4F4F4F] hover:bg-[#0063EB]/10 hover:text-[#0063EB]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filtered.length === 0 ? (
        <p className="text-[#6C757D] py-12 text-center">
          No posts in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Image placeholder */}
              <div className="bg-[#EEF4FF] h-44 flex items-center justify-center flex-shrink-0">
                <div className="text-center px-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0063EB]">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#0063EB] bg-[#EEF4FF] px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6C757D]">{post.readTime}</span>
                </div>

                <h2 className="text-base font-semibold text-[#030712] mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#0063EB] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#4F4F4F] leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div>
                    <p className="text-xs font-medium text-[#030712]">
                      {post.author}
                    </p>
                    <p className="text-xs text-[#6C757D]">
                      {formatDate(post.date)}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-medium text-[#0063EB] hover:underline"
                    aria-label={`Read ${post.title}`}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
