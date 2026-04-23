import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 md:py-28 flex-1 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#0063EB] mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#030712] mb-6">
          404 — Page Not Found
        </h1>
        <p className="text-lg text-[#4F4F4F] max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
