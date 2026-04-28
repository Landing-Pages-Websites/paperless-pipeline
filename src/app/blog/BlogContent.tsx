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

const categoryGradients: Record<BlogCategory, string> = {
  "Best Practices": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "Market Trends": "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
  Technology: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
  "Transaction Management": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  "Team Management": "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
  Compliance: "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogContent() {
  const [active, setActive] = useState<typeof ALL | BlogCategory>(ALL);

  const showFeatured = active === ALL;
  const featured = blogPosts[0];
  const gridPosts =
    active === ALL
      ? blogPosts.slice(1)
      : blogPosts.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-16">
      {/* Featured post */}
      {showFeatured && (
        <article className="bg-white border border-black/10 rounded-3xl overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
          {/* Placeholder image */}
          <div
            className="md:w-[45%] min-h-[280px] md:min-h-[420px] flex-shrink-0 relative overflow-hidden"
            style={{ background: "linear-gradient(145deg, #0063EB 0%, #004BB5 100%)" }}
          >
            {/* Mesh overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 25%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(circle at 78% 75%, rgba(0,20,80,0.35) 0%, transparent 55%), radial-gradient(circle at 55% 15%, rgba(255,255,255,0.09) 0%, transparent 38%)",
              }}
            />
            {/* Diagonal FEATURED watermark */}
            <span
              className="absolute inset-0 flex items-center justify-center text-white font-bold leading-none pointer-events-none select-none"
              style={{
                fontSize: "68px",
                opacity: 0.08,
                transform: "rotate(-35deg)",
                letterSpacing: "0.12em",
              }}
              aria-hidden="true"
            >
              FEATURED
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-8 p-6 md:p-8 flex-1">
            <div className="flex flex-col gap-5">
              <span className="inline-flex items-center bg-[#0063EB] text-white text-sm font-semibold px-3 py-1 rounded-full w-fit">
                Featured
              </span>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl md:text-[32px] font-semibold text-black leading-[130%]">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="hover:text-[#0063EB] transition-colors"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="text-base text-[#4F4F4F] leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EEF4FF] flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#0063EB]">
                    {getInitials(featured.author)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">
                    {featured.author}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-[#4F4F4F]">
                    <span>{formatDate(featured.date)}</span>
                    <span aria-hidden="true">•</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex bg-[#0063EB] hover:bg-[#046EFF] text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* Filter + grid */}
      <div className="flex flex-col gap-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                active === cat
                  ? "bg-[#0063EB] text-white"
                  : "text-black hover:text-[#0063EB] hover:bg-[#EEF4FF]"
              }`}
            >
              {cat === ALL ? "View all" : cat}
            </button>
          ))}
        </div>

        {/* Post grid */}
        {gridPosts.length === 0 ? (
          <p className="text-[#6C757D] py-12 text-center">
            No posts in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-black/10 rounded-3xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Placeholder image */}
                <div
                  className="mx-6 mt-6 h-[220px] rounded-2xl flex-shrink-0 relative overflow-hidden"
                  style={{ background: categoryGradients[post.category] }}
                >
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold leading-none pointer-events-none select-none"
                    style={{
                      fontSize: "80px",
                      opacity: 0.1,
                      transform: "rotate(-6deg)",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                    aria-hidden="true"
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="flex flex-col gap-3">
                    <span className="inline-flex items-center bg-[#0063EB] text-white text-sm font-semibold px-3 py-1 rounded-full w-fit">
                      {post.category}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-black leading-[130%]">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-[#0063EB] transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-base text-[#4F4F4F] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-[#0063EB]">
                          {getInitials(post.author)}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-black">
                          {post.author}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-[#4F4F4F]">
                          <span>{formatDate(post.date)}</span>
                          <span aria-hidden="true">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex bg-[#0063EB] hover:bg-[#046EFF] text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
