import Image from "next/image";
import Link from "next/link";

type CTABannerProps = {
  variant?: "quote" | "cta";
  quote?: string;
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTABanner({
  variant = "quote",
  quote = "One system to manage transactions, documents, and compliance — without forcing agents to change how they work.",
  eyebrow = "CALL TO ACTION",
  heading = "Switching doesn't mean starting over",
  subtext = "We'll help you get set up without disrupting active deals.",
  buttonText = "Start My 14-Day Free Trial →",
  buttonHref = "/signup",
}: CTABannerProps) {
  return (
    <section className="px-5 py-5">
      <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden relative py-12 px-6 md:py-20 md:px-20">
        {/* Dark gradient background image */}
        <Image
          src="/images/figma/dark-gradient-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />

        {/* Person photo overlay — right side, low opacity */}
        <div className="absolute right-0 top-0 h-full w-[40%] pointer-events-none">
          <Image
            src={
              variant === "quote"
                ? "/images/figma/cta-image-1.png"
                : "/images/figma/cta-image-2.png"
            }
            alt=""
            fill
            className="object-cover object-left opacity-20"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center">
          {variant === "quote" ? (
            <div className="max-w-[1068px] w-full px-0 md:px-10 text-center">
              <p className="text-white font-semibold text-2xl md:text-[40px] leading-tight md:leading-[48px]">
                {quote}
              </p>
            </div>
          ) : (
            <div className="max-w-[1068px] w-full px-0 md:px-10 flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col items-center gap-4">
                <p
                  className="text-white font-medium text-sm leading-6 uppercase"
                  style={{ letterSpacing: "0.0893em" }}
                >
                  {eyebrow}
                </p>
                <h2 className="text-white font-semibold text-3xl md:text-[40px] leading-tight md:leading-[48px]">
                  {heading}
                </h2>
                <p
                  className="text-white font-normal text-lg md:text-xl md:leading-8"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {subtext}
                </p>
              </div>
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 bg-white text-[#0063EB] font-medium text-sm leading-6 px-3 py-1.5 rounded-lg whitespace-nowrap"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px rgba(255,255,255,1), 0px 1px 2px 0px rgba(255,255,255,0.64)",
                }}
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
