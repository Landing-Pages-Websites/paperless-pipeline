import Link from "next/link";
import { Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#FDF9EE] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-16 pb-16 lg:pt-[100px] lg:pb-20">

          {/* Left content */}
          <div className="w-full lg:w-[705px] lg:flex-shrink-0 flex flex-col gap-8">

            <div className="flex flex-col gap-6">

              <div className="flex flex-col gap-3">

                <div
                  className="inline-flex items-center self-start gap-2 bg-white rounded-full"
                  style={{
                    border: "1px solid rgba(0,0,0,0.1)",
                    padding: "6px 12px 6px 6px",
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(4,110,255,0.1)",
                      borderRadius: "96px",
                      padding: "4px",
                    }}
                  >
                    <Check size={10} color="#0063EB" strokeWidth={2.5} />
                  </span>
                  <span
                    className="font-medium text-black whitespace-nowrap"
                    style={{ fontSize: "12px", lineHeight: "20px" }}
                  >
                    No credit card required · Free setup included
                  </span>
                </div>

                <h1
                  className="font-semibold text-black text-[40px] md:text-[52px] lg:text-[64px]"
                  style={{ lineHeight: "1.125", letterSpacing: "-0.0375em" }}
                >
                  Transaction management{" "}
                  <span className="text-[#0063EB]">
                    that stays{" "}
                    <em className="italic">out of the way</em>
                    {"."}
                  </span>
                </h1>
              </div>

              <p
                className="font-medium text-black text-[16px] lg:text-[18px]"
                style={{ lineHeight: "32px" }}
              >
                Built for teams that need clarity, control, and predictable
                costs as they grow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center text-white font-medium w-full sm:w-auto"
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontWeight: 500,
                  background: "#0063EB",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  boxShadow:
                    "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
                }}
              >
                Start Free Trial →
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center text-black font-medium bg-white w-full sm:w-auto"
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  fontWeight: 500,
                  borderRadius: "8px",
                  padding: "6px 12px",
                  boxShadow:
                    "0px 0px 0px 1px rgba(0,0,0,0.06), 0px 1px 2px 0px rgba(0,0,0,0.06)",
                }}
              >
                Book A Demo →
              </Link>
            </div>

            {/* G2 social proof */}
            <div className="flex items-end gap-6">

              <div
                style={{
                  background: "rgba(255,255,255,0.25)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  padding: "16px",
                  width: "197px",
                  flexShrink: 0,
                }}
              >
                <div
                  className="font-medium"
                  style={{
                    fontSize: "40px",
                    lineHeight: "56px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <span className="text-[#23272E]">4.6</span>
                  <span className="text-[#0063EB]">+</span>
                </div>
                <div
                  className="font-medium text-[#23272E]"
                  style={{ fontSize: "12px", lineHeight: "20px" }}
                >
                  by users on G2
                </div>
              </div>

              <div className="flex items-center gap-6">
                {[
                  "bg-slate-200",
                  "bg-slate-300",
                  "bg-slate-200",
                ].map((cls, i) => (
                  <div
                    key={i}
                    className={`${cls} rounded-[8px] flex-shrink-0`}
                    style={{ width: "56px", height: "64px" }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="flex-1 min-w-0 w-full lg:self-end">
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "904 / 671",
                border: "1px solid #D5D9E2",
                borderRadius: "12px",
              }}
              role="img"
              aria-label="Paperless Pipeline dashboard preview"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEF4FF] via-[#dbe9ff] to-[#c7d8ff]" />

              <div className="absolute inset-0 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-4 h-5 bg-white/50 rounded-md" />
                </div>

                <div className="flex gap-4 h-[calc(100%-40px)]">
                  <div className="w-32 bg-white/40 rounded-xl p-3 space-y-2 flex-shrink-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-4 rounded-md ${
                          i === 0
                            ? "bg-[#0063EB]/80 w-full"
                            : "bg-white/60 w-3/4"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      {["24 Active", "8 Pending", "$2.4M Volume"].map(
                        (label, i) => (
                          <div key={i} className="bg-white/60 rounded-xl p-3">
                            <div className="h-2.5 w-12 bg-gray-300/60 rounded mb-2" />
                            <div className="text-xs font-semibold text-[#030712]/80">
                              {label}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className="bg-white/60 rounded-xl p-3 space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-[#0063EB]/20 flex-shrink-0" />
                          <div className="flex-1 space-y-1">
                            <div className="h-2 bg-gray-300/60 rounded w-3/4" />
                            <div className="h-1.5 bg-gray-200/60 rounded w-1/2" />
                          </div>
                          <div className="h-4 w-14 bg-green-200/80 rounded-full" />
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
