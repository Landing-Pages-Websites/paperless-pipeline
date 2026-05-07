import Image from "next/image";
import Link from "next/link";

type CTABannerProps = {
  variant?: "quote" | "cta";
  quote?: string;
  title?: string;
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  features?: string[];
  buttonText?: string;
  buttonHref?: string;
  compact?: boolean;
};

export default function CTABanner({
  variant = "quote",
  quote = "One system to manage transactions, documents, and compliance — without forcing agents to change how they work.",
  title,
  eyebrow = "CALL TO ACTION",
  heading = "Switching doesn't mean starting over",
  subtext = "We'll help you get set up without disrupting active deals.",
  features,
  buttonText = "Start My 14-Day Free Trial →",
  buttonHref = "/signup",
  compact = false,
}: CTABannerProps) {
  const isQuote = variant === "quote";
  const resolvedHeading = title ?? heading;
  const ctaMinHeight = compact ? "min-h-[200px] sm:min-h-[244px] md:min-h-[304px]" : "min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]";

  return (
    <section
      className={`bg-white px-6 sm:px-10 lg:px-5 ${
        isQuote ? "py-5 sm:py-8" : compact ? "py-8 md:py-14" : "py-10 sm:py-[76px]"
      }`}
    >
      <div
        className={`relative mx-auto max-w-[1400px] overflow-hidden rounded-[20px] ${
          isQuote ? "min-h-[260px] sm:min-h-[340px] md:min-h-[407px]" : ctaMinHeight
        }`}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(255,233,91,0.50),transparent_34%),radial-gradient(circle_at_78%_44%,rgba(0,99,235,0.92),transparent_42%),linear-gradient(120deg,#C8C4A8_0%,#8AA1DD_48%,#0063EB_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center px-6 text-center">
          {isQuote ? (
            <div className="max-w-[820px]">
              <Image
                src="/images/figma/logo banner.webp"
                alt="Paperless Pipeline"
                width={358}
                height={341}
                className="mx-auto h-12 w-auto"
              />
              <p className="mt-8 text-[20px] font-semibold leading-[30px] text-white sm:mt-12 sm:text-[28px] sm:leading-9 md:text-[34px] md:leading-[42px]">
                {quote}
              </p>
            </div>
          ) : (
            <div className="flex w-full max-w-[900px] flex-col items-center">
              {eyebrow && (
                <p className="text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-white">
                  {eyebrow}
                </p>
              )}
              <h2
                className={`max-w-[620px] font-semibold text-white ${
                  eyebrow ? "mt-5" : ""
                } ${
                  compact
                    ? "text-[28px] leading-[34px] md:text-[36px] md:leading-[42px]"
                    : "text-[32px] leading-[38px] md:text-[42px] md:leading-[48px]"
                }`}
              >
                {resolvedHeading}
              </h2>
              <p
                className={`mx-auto max-w-[670px] font-normal text-white ${
                  compact
                    ? "mt-4 text-[16px] leading-6 md:text-[18px] md:leading-7"
                    : "mt-5 text-[18px] leading-7 md:text-[22px] md:leading-8"
                }`}
              >
                {subtext}
              </p>
              {features && features.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-[16px] font-normal leading-6 text-white"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0063EB]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 6.15L4.85 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              <Link
                href={buttonHref}
                className={`inline-flex items-center justify-center rounded-[8px] bg-white font-medium text-[#0063EB] shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#F8FAFC] ${
                  compact
                    ? "mt-5 h-8 px-3 text-[12px] leading-4"
                    : "mt-8 h-10 px-4 text-[14px] leading-5"
                }`}
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
