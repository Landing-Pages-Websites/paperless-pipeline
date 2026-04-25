import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#FDF9EE] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 pt-16 pb-16 lg:pt-[98px] lg:pb-20">

          {/* ── LEFT COLUMN ── */}
          <div className="w-full lg:w-[705px] lg:flex-shrink-0 flex flex-col gap-8">

            {/* Heading group */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">

                {/* Pill badge */}
                <div
                  className="inline-flex items-center self-start gap-2 bg-white rounded-full"
                  style={{ border: "1px solid rgba(0,0,0,0.1)", padding: "6px 12px 6px 6px" }}
                >
                  <span
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      background: "rgba(4,110,255,0.1)",
                      borderRadius: "96px",
                      padding: "4px",
                      width: "20px",
                      height: "20px",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <circle cx="5" cy="5" r="4" fill="#0063EB" />
                    </svg>
                  </span>
                  <span
                    className="font-medium text-black whitespace-nowrap"
                    style={{ fontSize: "12px", lineHeight: "20px" }}
                  >
                    No credit card required · Free setup included
                  </span>
                </div>

                {/* Headline — "Transaction management" black, "that stays out of the way." blue (italic on "out of the way") */}
                <h1
                  className="font-semibold text-black"
                  style={{
                    fontSize: "clamp(40px, 5.5vw, 64px)",
                    lineHeight: "1.125",
                    letterSpacing: "-0.0375em",
                  }}
                >
                  Transaction management{" "}
                  <span className="text-[#0063EB]">
                    that stays{" "}
                    <em className="font-semibold italic">out of the way</em>
                    {"."}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                className="text-black font-medium"
                style={{ fontSize: "18px", lineHeight: "32px" }}
              >
                Built for teams that need clarity, control, and predictable costs as they grow.
              </p>
            </div>

            {/* CTA buttons */}
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

              {/* 4.6+ rating box */}
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
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontWeight: 500,
                    fontSize: "40px",
                    lineHeight: "56px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  <span style={{ color: "#23272E" }}>4.6</span>
                  <span style={{ color: "#0063EB" }}>+</span>
                </div>
                <div
                  className="font-medium"
                  style={{ color: "#23272E", fontSize: "12px", lineHeight: "20px" }}
                >
                  by users on G2
                </div>
              </div>

              {/* G2 badge images + divider */}
              <div className="flex flex-col items-stretch gap-4 flex-1">
                <div className="flex items-center gap-6">
                  {[1, 2, 3].map((n) => (
                    <Image
                      key={n}
                      src={`/images/figma/hero-avatar-${n}.png`}
                      alt={`G2 award badge ${n}`}
                      width={56}
                      height={64}
                      className="flex-shrink-0 object-cover"
                    />
                  ))}
                </div>
                <div
                  style={{
                    height: 0,
                    border: "1px solid #D5D9E2",
                    borderRadius: "12px",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 2×2 stat card grid ── */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-start">
            <div
              className="grid grid-cols-2 w-full"
              style={{ maxWidth: "500px" }}
            >

              {/* Card 1: Monthly transactions — blue, rounded right side */}
              <div
                className="flex flex-col justify-between p-5"
                style={{
                  background: "#0063EB",
                  borderRadius: "16px 100px 100px 16px",
                  aspectRatio: "1",
                }}
              >
                <div
                  className="font-medium text-white"
                  style={{ fontSize: "clamp(14px, 1.6vw, 20px)", lineHeight: "1.3" }}
                >
                  Monthly<br />transactions
                </div>
                <div
                  className="font-medium"
                  style={{
                    color: "#FFE95B",
                    fontSize: "clamp(36px, 5vw, 64px)",
                    lineHeight: "0.875",
                    letterSpacing: "-0.0188em",
                  }}
                >
                  33K+
                </div>
              </div>

              {/* Card 2: Testimonial — white */}
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  aspectRatio: "1",
                  padding: "clamp(16px, 3.5vw, 44px) clamp(12px, 1.5vw, 18px)",
                  gap: "8px",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 justify-center">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#E3B742"
                      aria-hidden="true"
                    >
                      <path d="M12 2l2.7 5.47 6.03.87-4.37 4.25 1.03 6.01L12 15.77l-5.39 2.83 1.03-6.01L3.27 8.34l6.03-.87L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-center font-medium"
                  style={{
                    fontSize: "clamp(10px, 1.1vw, 14px)",
                    lineHeight: "1.45",
                    letterSpacing: "-0.0057em",
                    color: "#393837",
                    maxWidth: "216px",
                  }}
                >
                  <span style={{ fontWeight: 400 }}>
                    &ldquo;I saved&nbsp;$470,000&nbsp;over 14 years with flawless service and zero issues.&rdquo;
                  </span>
                  <br /><br />
                  <span style={{ color: "#1E1E1E", fontWeight: 500 }}>— Tony Garrant</span>
                  <br />
                  <span style={{ fontWeight: 400, fontSize: "clamp(9px, 0.9vw, 12px)" }}>
                    Broker/Owner, Abundant Realty
                  </span>
                </p>
              </div>

              {/* Card 3: Years in use — white */}
              <div
                className="flex flex-col justify-between p-5"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  aspectRatio: "1",
                }}
              >
                <div
                  className="font-medium"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "clamp(14px, 1.6vw, 20px)",
                    lineHeight: "1.3",
                  }}
                >
                  Years<br />in use
                </div>
                <div
                  className="font-medium"
                  style={{
                    color: "#0063EB",
                    fontSize: "clamp(36px, 5vw, 64px)",
                    lineHeight: "0.875",
                    letterSpacing: "-0.0188em",
                  }}
                >
                  16+
                </div>
              </div>

              {/* Card 4: Real estate professionals — yellow, pill top-right */}
              <div
                className="flex flex-col justify-between p-5"
                style={{
                  background: "#FFE95B",
                  borderRadius: "16px 100px 16px 16px",
                  aspectRatio: "1",
                }}
              >
                <div
                  className="font-medium"
                  style={{
                    color: "#1E1E1E",
                    fontSize: "clamp(14px, 1.6vw, 20px)",
                    lineHeight: "1.3",
                  }}
                >
                  Real estate professionals
                </div>
                <div
                  className="font-medium"
                  style={{
                    color: "#0063EB",
                    fontSize: "clamp(36px, 5vw, 64px)",
                    lineHeight: "0.875",
                    letterSpacing: "-0.0188em",
                  }}
                >
                  90K+
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
