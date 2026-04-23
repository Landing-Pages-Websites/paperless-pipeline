import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-[#FDF9EE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0063EB] hover:underline mb-8"
          >
            ← Back to Blog
          </Link>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6C757D]">
            <span className="font-medium text-[#030712]">{post.author}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <div className="bg-[#EEF4FF] h-56 md:h-72" aria-hidden="true" />

      {/* Article body */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-base text-[#4F4F4F] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#030712]">
                Written by {post.author}
              </p>
              <p className="text-sm text-[#6C757D]">{formatDate(post.date)}</p>
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

      {/* CTA */}
      <section className="py-16 bg-[#EEF4FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-[#030712] mb-3">
            See Paperless Pipeline in action
          </h2>
          <p className="text-[#4F4F4F] mb-6 max-w-md mx-auto">
            Start a free trial and bring your transactions into one organized,
            automated workflow.
          </p>
          <a
            href="/signup"
            className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </>
  );
}
