import Image from "next/image";

const CARD_GRADIENT =
  "linear-gradient(112deg, #E5EBF4 0%, #F6F6EE 100%)";

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
    <section className="bg-white px-6 py-24 sm:px-10 md:py-32 lg:px-[80px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
          <span className="text-[14px] font-medium uppercase leading-6 tracking-[0.18em] text-[#0063EB]">
            Trusted by teams like yours
          </span>
          <h2 className="mt-8 text-[36px] font-semibold leading-[1.18] text-black md:text-[56px]">
            For those who have outgrown the &lsquo;all-in-one&rsquo; promise
          </h2>
          <p className="mt-8 text-[18px] font-normal leading-7 text-[#4F4F4F] md:text-[20px]">
            Real experiences from professionals who needed more than what
            &ldquo;all-in-one&rdquo; tools could offer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-start gap-8 md:mt-20 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`flex w-full flex-col justify-between rounded-[16px] p-8 sm:p-10 ${
                t.featured
                  ? "min-h-[560px] lg:min-h-[611px]"
                  : "min-h-[420px] lg:mt-[86px] lg:min-h-[439px]"
              }`}
              style={{ background: CARD_GRADIENT }}
            >
              <div>
                <div className="flex items-center gap-6">
                  <Image
                    src={t.logo}
                    alt=""
                    width={t.featured ? 80 : 56}
                    height={t.featured ? 80 : 56}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-[17px] font-semibold leading-6 text-[#1E1E1E]">
                      {t.name}
                    </span>
                    <span className="text-[16px] font-normal leading-6 text-[#6C6C6C]">
                      {t.company}
                    </span>
                  </div>
                </div>

                <span className="mt-10 block select-none text-[24px] font-bold leading-none text-[#1E1E1E]" aria-hidden="true">
                  &quot;
                </span>
                <p
                  className={`mt-8 text-[#1E1E1E] ${
                    t.featured
                      ? "text-[30px] font-semibold leading-[1.18] md:text-[36px]"
                      : "text-[25px] font-normal leading-[1.28] md:text-[28px]"
                  }`}
                >
                  {t.quote}
                </p>
              </div>

              <span className="mt-10 text-[16px] font-normal leading-6 text-[#1E1E1E]">
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
