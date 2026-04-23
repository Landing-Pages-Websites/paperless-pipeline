import Link from "next/link";

type CTABannerProps = {
  heading?: string;
  subtext?: string;
};

export default function CTABanner({
  heading = "Ready to simplify your real estate transactions?",
  subtext = "Join thousands of agents, brokers, and transaction coordinators who close deals faster with Paperless Pipeline.",
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-20 bg-[#0063EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 max-w-2xl mx-auto">
          {heading}
        </h2>
        {subtext && (
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            {subtext}
          </p>
        )}
        <Link
          href="/signup"
          className="inline-block bg-white hover:bg-blue-50 text-[#0063EB] font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}
