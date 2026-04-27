import Image from "next/image";

const CARD_GRADIENT =
  "linear-gradient(250deg, #FFE95B 0%, #0D47C1 100%)";

const testimonials = [
  {
    name: "Megan Walz",
    company: "Avenue Transactions",
    role: "Transaction Coordinator",
    logo: "/images/figma/testimonial-logo-1.png",
    quote:
      "I've tried everything. Paperless Pipeline makes the most financial sense and it was the easiest platform to onboard agents.",
    featured: false,
  },
  {
    name: "Kesha Kennedy",
    company: "Legacy South Real Estate Group",
    role: "Broker in Charge",
    logo: "/images/figma/testimonial-logo-2.png",
    quote:
      "When I opened my brokerage I heard other software was better. But now I'm back because of the ease of Paperless Pipeline. I've used it for years and I love it.",
    featured: true,
  },
  {
    name: "Reed Wilson",
    company: "The Wilson Group",
    role: "Broker / Owner",
    logo: "/images/figma/testimonial-logo-3.png",
    quote:
      "I thought an all-in-one platform would keep everything in one hub. What I learned was that agents weren't using it, and it didn't work the way I expected.",
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[55px]">

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
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`w-full md:flex-1 rounded-[16px] p-6 flex flex-col justify-between ${
                t.featured ? "md:py-10 md:px-8" : ""
              }`}
              style={{ background: CARD_GRADIENT }}
            >
              {/* Top: logo, name/company, quote */}
              <div className="flex flex-col gap-6">
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
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-[#1E1E1E] text-base leading-[24px]"
                    style={{ fontWeight: 500 }}
                  >
                    {t.name}
                  </span>
                  <span
                    className="text-[14px] leading-[20px] text-[#4F4F4F]"
                    style={{ fontWeight: 400 }}
                  >
                    {t.company}
                  </span>
                </div>

                {/* Quote mark + quote text */}
                <div className="flex flex-col gap-3">
                  <span
                    className="text-[#1E1E1E] select-none"
                    style={{ fontSize: "48px", fontWeight: 700, lineHeight: "0.8" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p
                    className={`text-[#1E1E1E] ${
                      t.featured
                        ? "text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium"
                        : "text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-normal"
                    }`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {t.quote}
                  </p>
                </div>
              </div>

              {/* Bottom: role */}
              <div className="mt-8">
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
