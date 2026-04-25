import Image from "next/image";

const CARD_GRADIENT =
  "linear-gradient(250deg, rgba(255,233,91,1) 0%, rgba(13,71,193,1) 100%)";

const testimonials = [
  {
    name: "Megan Walz",
    company: "Avenue Transactions",
    role: "Transaction Coordinator",
    logo: "/images/figma/testimonial-logo-1.png",
    quote:
      "I've tried everything. Paperless Pipeline makes the most financial sense and it was the easiest platform to onboard agents.",
    quoteSize: 24,
    quoteFontWeight: 400,
    quoteLineHeight: "32px",
    quoteLetterSpacing: "-0.0208em",
    companyColor: "#4F4F4F",
    profileGap: "16px",
    height: 480,
  },
  {
    name: "Kesha Kennedy",
    company: "Legacy South Real Estate Group",
    role: "Broker in Charge",
    logo: "/images/figma/testimonial-logo-2.png",
    quote:
      "When I opened my brokerage I heard other software was better. But now I’m back because of the ease of Paperless Pipeline. I’ve used it for years and I love it.",
    quoteSize: 32,
    quoteFontWeight: 500,
    quoteLineHeight: "40px",
    quoteLetterSpacing: "-0.0156em",
    companyColor: "#737373",
    profileGap: "24px",
    height: null,
  },
  {
    name: "Reed Wilson",
    company: "The Wilson Group",
    role: "Broker / Owner",
    logo: "/images/figma/testimonial-logo-3.png",
    quote:
      "I thought an all-in-one platform would keep everything in one hub. What I learned was that agents weren’t using it, and it didn’t work the way I expected.",
    quoteSize: 24,
    quoteFontWeight: 400,
    quoteLineHeight: "32px",
    quoteLetterSpacing: "-0.0208em",
    companyColor: "#4F4F4F",
    profileGap: "16px",
    height: 480,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      <div className="mx-auto flex flex-col gap-[55px]">

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-[836px] mx-auto text-center">
          <span
            className="text-[#0063EB] text-[14px] leading-[24px] uppercase"
            style={{ fontWeight: 500, letterSpacing: "0.0893em" }}
          >
            Trusted by teams like yours
          </span>
          <div className="flex flex-col gap-2">
            <h2
              className="text-black text-[48px] leading-tight max-md:text-4xl"
              style={{ fontWeight: 600 }}
            >
              For those who have outgrown the &lsquo;all-in-one&rsquo; promise
            </h2>
            <p
              className="text-[#4F4F4F] text-base leading-[150%]"
              style={{ fontWeight: 400 }}
            >
              Real experiences from professionals who needed more than what
              &ldquo;all-in-one&rdquo; tools could offer.
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-full md:flex-1 rounded-[16px] p-8 flex flex-col justify-between max-md:h-auto"
              style={{
                background: CARD_GRADIENT,
                height: t.height ? `${t.height}px` : undefined,
              }}
            >
              {/* Top: profile + quote */}
              <div className="flex flex-col gap-8">
                {/* Profile row */}
                <div
                  className="flex items-center"
                  style={{ gap: t.profileGap }}
                >
                  {/* Company logo */}
                  <div className="shrink-0">
                    <Image
                      src={t.logo}
                      alt={t.company}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  {/* Name + company */}
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[#1E1E1E] text-base leading-[24px]"
                      style={{ fontWeight: 500 }}
                    >
                      {t.name}
                    </span>
                    <span
                      className="text-[14px] leading-[20px]"
                      style={{ fontWeight: 400, color: t.companyColor }}
                    >
                      {t.company}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p
                  className="text-[#1E1E1E]"
                  style={{
                    fontSize: t.quoteSize,
                    fontWeight: t.quoteFontWeight,
                    lineHeight: t.quoteLineHeight,
                    letterSpacing: t.quoteLetterSpacing,
                  }}
                >
                  &ldquo;
                  <br />
                  {t.quote}
                </p>
              </div>

              {/* Bottom: role */}
              <div className="mt-6">
                <span
                  className="text-[#1E1E1E] text-[14px] leading-[20px]"
                  style={{ fontWeight: 400 }}
                >
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
