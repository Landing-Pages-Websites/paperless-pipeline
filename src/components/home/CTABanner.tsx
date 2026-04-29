import Link from "next/link";

type CTABannerProps = {
  variant?: "quote" | "cta";
  quote?: string;
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  features?: string[];
  buttonText?: string;
  buttonHref?: string;
};

function WhiteMark() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto" aria-hidden="true">
      <path d="M20 9L34 21.5C37.8 24.9 36.5 31.1 31.7 32.7L25.9 34.6L30 24L18 18L20 9Z" fill="white" />
      <path d="M16.5 20.5L27.5 26L22.5 39L12 31.5L16.5 20.5Z" fill="white" />
      <circle cx="27.5" cy="23.5" r="3.5" fill="#9DB4E5" />
    </svg>
  );
}

export default function CTABanner({
  variant = "quote",
  quote = "One system to manage transactions, documents, and compliance — without forcing agents to change how they work.",
  eyebrow = "CALL TO ACTION",
  heading = "Switching doesn't mean starting over",
  subtext = "We'll help you get set up without disrupting active deals.",
  features,
  buttonText = "Start My 14-Day Free Trial →",
  buttonHref = "/signup",
}: CTABannerProps) {
  const isQuote = variant === "quote";

  return (
    <section className={`bg-white px-6 sm:px-10 lg:px-5 ${isQuote ? "py-8" : "py-[76px]"}`}>
      <div
        className={`relative mx-auto max-w-[1400px] overflow-hidden rounded-[20px] ${
          isQuote ? "min-h-[407px]" : "min-h-[500px]"
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
              <WhiteMark />
              <p className="mt-12 text-[34px] font-semibold leading-[42px] text-white max-md:text-[28px] max-md:leading-9">
                {quote}
              </p>
            </div>
          ) : (
            <div className="flex w-full max-w-[900px] flex-col items-center">
              <p className="text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-white">
                {eyebrow}
              </p>
              <h2 className="mt-5 max-w-[560px] text-[32px] font-semibold leading-[38px] text-white md:text-[42px] md:leading-[48px]">
                {heading}
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[18px] font-normal leading-7 text-white md:text-[22px] md:leading-8">
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
                className="mt-8 inline-flex h-10 items-center justify-center rounded-[8px] bg-white px-4 text-[14px] font-medium leading-5 text-[#0063EB] shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#F8FAFC]"
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
