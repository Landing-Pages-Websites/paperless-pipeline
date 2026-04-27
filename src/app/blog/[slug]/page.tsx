import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, type BlogCategory } from "@/data/blog-posts";
import CTABanner from "@/components/home/CTABanner";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Paperless Pipeline Blog`,
    description: post.excerpt,
  };
}

const categoryColors: Record<BlogCategory, string> = {
  "Best Practices": "bg-[#E8F8EF]",
  "Market Trends": "bg-[#EEF4FF]",
  Technology: "bg-[#F5F0FF]",
  "Transaction Management": "bg-[#FDF9EE]",
  "Team Management": "bg-[#FFF0E6]",
  Compliance: "bg-[#ECEEF2]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderBody(paragraphs: string[]) {
  const elements: React.ReactNode[] = [];

  paragraphs.forEach((para, paraIdx) => {
    const chunks = para.split("\n\n").filter(Boolean);
    chunks.forEach((chunk, chunkIdx) => {
      const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
      const hasBullets = lines.some((l) => /^-\s/.test(l));

      if (hasBullets) {
        elements.push(
          <div key={`${paraIdx}-${chunkIdx}`} className="space-y-2 mb-4">
            {lines.map((line, lineIdx) => {
              if (/^-\s/.test(line)) {
                return (
                  <div
                    key={lineIdx}
                    className="flex gap-3 text-base text-[#4F4F4F] leading-relaxed"
                  >
                    <span className="text-[#0063EB] flex-shrink-0 font-bold mt-0.5">
                      •
                    </span>
                    <span>{line.replace(/^-\s+/, "")}</span>
                  </div>
                );
              }
              return (
                <p
                  key={lineIdx}
                  className="text-base text-[#4F4F4F] leading-relaxed"
                >
                  {line}
                </p>
              );
            })}
          </div>
        );
      } else {
        elements.push(
          <p
            key={`${paraIdx}-${chunkIdx}`}
            className="text-base text-[#4F4F4F] leading-relaxed mb-4"
          >
            {chunk.trim()}
          </p>
        );
      }
    });
  });

  return <>{elements}</>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category)
        return -1;
      if (b.category === post.category && a.category !== post.category)
        return 1;
      return 0;
    })
    .slice(0, 2);

  return (
    <>
      {/* Article header */}
      <section className="pt-12 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {/* Breadcrumb + title (centered) */}
            <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto w-full">
              <Link
                href="/blog"
                className="text-base text-[#4F4F4F] hover:text-[#0063EB] transition-colors"
              >
                Blog
              </Link>
              <h1
                className="text-3xl md:text-[48px] font-semibold text-black leading-[120%]"
              >
                {post.title}
              </h1>
            </div>

            {/* Author row */}
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EEF4FF] flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#0063EB]">
                    {getInitials(post.author)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">
                    {post.author}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-[#4F4F4F]">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center bg-[#0063EB] text-white text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Hero image */}
            <div
              className={`w-full h-[280px] md:h-[500px] rounded-2xl ${categoryColors[post.category]}`}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          {renderBody(post.body)}

          {/* Author footer */}
          <div className="mt-16 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#EEF4FF] flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-[#0063EB]">
                  {getInitials(post.author)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-black">
                  Written by {post.author}
                </p>
                <p className="text-sm text-[#4F4F4F]">{formatDate(post.date)}</p>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#0063EB] hover:underline"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t border-black/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div className="flex flex-col gap-3">
                <p
                  className="text-sm font-medium text-[#0063EB] uppercase"
                  style={{ letterSpacing: "0.0893em" }}
                >
                  MORE TO EXPLORE
                </p>
                <h2 className="text-3xl md:text-[48px] font-semibold text-black leading-tight">
                  Continue Reading
                </h2>
                <p className="text-base text-[#4F4F4F] max-w-xl">
                  Explore more insights, tips, and strategies to help your team
                  stay organized and close deals more efficiently.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex bg-[#0063EB] hover:bg-[#046EFF] text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap transition-colors self-start md:self-auto"
              >
                Read All
              </Link>
            </div>

            {/* Related cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <article
                  key={rel.slug}
                  className="bg-white border border-black/10 rounded-3xl overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  <div
                    className={`mx-6 mt-6 h-[220px] rounded-2xl flex-shrink-0 ${categoryColors[rel.category]}`}
                  />
                  <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                    <div className="flex flex-col gap-3">
                      <span className="inline-flex items-center bg-[#0063EB] text-white text-sm font-semibold px-3 py-1 rounded-full w-fit">
                        {rel.category}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-black leading-[130%]">
                          <Link
                            href={`/blog/${rel.slug}`}
                            className="hover:text-[#0063EB] transition-colors"
                          >
                            {rel.title}
                          </Link>
                        </h3>
                        <p className="text-base text-[#4F4F4F] leading-relaxed line-clamp-3">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#EEF4FF] flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs font-semibold text-[#0063EB]">
                            {getInitials(rel.author)}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-black">
                            {rel.author}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-[#4F4F4F]">
                            <span>{formatDate(rel.date)}</span>
                            <span aria-hidden="true">•</span>
                            <span>{rel.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="inline-flex bg-[#0063EB] hover:bg-[#046EFF] text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        variant="cta"
        eyebrow="GET STARTED TODAY"
        heading="See Paperless Pipeline in Action"
        subtext="Start a free trial and bring your transactions into one organized, automated workflow."
        buttonText="Start My 14-Day Free Trial →"
      />
    </>
  );
}
