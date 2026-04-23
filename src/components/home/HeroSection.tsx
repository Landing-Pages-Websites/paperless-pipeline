import Link from "next/link";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#FDF9EE] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* G2 badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-yellow-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#030712]">4.6+</span>
              <span className="text-xs text-[#6C757D]">by users on G2</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#030712] leading-tight tracking-tight mb-6">
              The Smarter Way to Manage{" "}
              <span className="text-[#0063EB]">Real Estate Transactions</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4F4F4F] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Built for teams that need clarity, control, and predictable costs
              as they grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-[#0063EB] hover:bg-[#046EFF] text-white font-medium px-7 py-3.5 rounded-lg transition-colors text-sm text-center"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto border border-gray-300 hover:border-[#0063EB] hover:text-[#0063EB] text-[#030712] font-medium px-7 py-3.5 rounded-lg transition-colors text-sm text-center"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <div
              className="relative w-full rounded-2xl shadow-2xl overflow-hidden"
              style={{ aspectRatio: "8/5" }}
              aria-label="Dashboard preview"
              role="img"
            >
              {/* Gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-[#dbe9ff] to-[#c7d8ff]" />

              {/* Mock UI chrome */}
              <div className="absolute inset-0 p-5">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-4 h-5 bg-white/50 rounded-md" />
                </div>
                {/* Sidebar + content grid */}
                <div className="flex gap-4 h-[calc(100%-40px)]">
                  <div className="w-40 bg-white/40 rounded-xl p-3 space-y-2 flex-shrink-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-5 rounded-md ${i === 0 ? "bg-[#0063EB]/80 w-full" : "bg-white/60 w-3/4"}`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      {["24 Active", "8 Pending", "$2.4M Volume"].map((label, i) => (
                        <div key={i} className="bg-white/60 rounded-xl p-3">
                          <div className="h-3 w-16 bg-gray-300/60 rounded mb-2" />
                          <div className="text-sm font-semibold text-[#030712]/80">{label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/60 rounded-xl p-3 space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#0063EB]/20 flex-shrink-0" />
                          <div className="flex-1 space-y-1">
                            <div className="h-2.5 bg-gray-300/60 rounded w-3/4" />
                            <div className="h-2 bg-gray-200/60 rounded w-1/2" />
                          </div>
                          <div className="h-5 w-16 bg-green-200/80 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
