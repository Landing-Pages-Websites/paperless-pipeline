import Image from "next/image";

export default function ReadySection() {
  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-stretch gap-12">

        {/* Left: dark card with dark-gradient-bg.png, white inner quote card at bottom */}
        <div className="relative w-full md:flex-1 rounded-[24px] border border-[#F0EDEA] overflow-hidden flex flex-col justify-end p-4 min-h-[420px]">
          <Image
            src="/images/figma/dark-gradient-bg.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />

          {/* White quote box */}
          <div className="relative z-10 bg-white rounded-[16px] p-4 flex flex-col gap-2">
            <p
              className="text-[#393837] text-base leading-[20px]"
              style={{ fontWeight: 500, letterSpacing: "-0.005em" }}
            >
              With many systems, you need a couple of hours of training… but
              with this system, it&apos;s so intuitive that it&apos;s hard to
              mess up.
            </p>
            <div className="flex gap-2 items-start">
              <span
                className="text-[#1E1E1E] text-[14px] leading-[20px] shrink-0"
                style={{ fontWeight: 600, letterSpacing: "-0.0057em" }}
              >
                -
              </span>
              <p
                className="text-[#4F4F4F] text-[14px] leading-[20px]"
                style={{ letterSpacing: "-0.0057em" }}
              >
                <span className="font-semibold text-[#1E1E1E]">
                  Michael Greer
                </span>{" "}
                Managing Partner, Good 2 Go Properties &amp; Services
              </p>
            </div>
          </div>
        </div>

        {/* Right: heading + feature cards */}
        <div className="w-full md:flex-1 flex flex-col justify-between gap-8">

          {/* Heading block */}
          <div className="flex flex-col gap-3 max-w-[574px]">
            <span
              className="text-[#0063EB] text-[14px] leading-[24px] uppercase"
              style={{ fontWeight: 500, letterSpacing: "0.0893em" }}
            >
              Ready from Day One
            </span>
            <div className="flex flex-col gap-2">
              <h2
                className="text-black text-[48px] leading-tight max-md:text-4xl"
                style={{ fontWeight: 600 }}
              >
                Up and running in days, not weeks
              </h2>
              <p
                className="text-[#4F4F4F] text-base leading-[150%]"
                style={{ fontWeight: 400 }}
              >
                Launch quickly with a setup built around your process, so your
                team can adopt it easily and start closing deals without missing
                a beat.
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Card: Configured around your process */}
            <div
              className="flex-1 flex flex-col gap-6 p-4 rounded-[8px]"
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#0063EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                  stroke="#0063EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-[#393837] text-base leading-[24px]"
                  style={{ fontWeight: 600, letterSpacing: "-0.0113em" }}
                >
                  Configured around your process
                </h3>
                <p
                  className="text-[#4F4F4F] text-[14px] leading-[20px]"
                  style={{ fontWeight: 400, letterSpacing: "-0.0057em" }}
                >
                  We help set things up based on how your team runs
                  transactions.
                </p>
              </div>
            </div>

            {/* Card: Usable from day one */}
            <div
              className="flex-1 flex flex-col gap-6 p-4 rounded-[8px]"
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11.08V12a10 10 0 11-5.93-9.14"
                  stroke="#0063EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01l-3-3"
                  stroke="#0063EB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col gap-1">
                <h3
                  className="text-[#393837] text-base leading-[24px]"
                  style={{ fontWeight: 600, letterSpacing: "-0.0113em" }}
                >
                  Usable from day one
                </h3>
                <p
                  className="text-[#4F4F4F] text-[14px] leading-[20px]"
                  style={{ fontWeight: 400, letterSpacing: "-0.0057em" }}
                >
                  Agents and staff can work in the system as deals move forward.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
