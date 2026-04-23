import Link from "next/link";

export default function ReadySection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#030712] mb-5 max-w-2xl mx-auto">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-[#4F4F4F] mb-8 max-w-xl mx-auto">
          Join the real estate professionals who run their transactions through
          Paperless Pipeline. It takes less than a day to get your team set up.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm text-center"
          >
            Start Free Trial
          </Link>
          <Link
            href="/demo"
            className="w-full sm:w-auto border border-gray-300 hover:border-[#0063EB] hover:text-[#0063EB] text-[#030712] font-medium px-8 py-3.5 rounded-lg transition-colors text-sm text-center"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
