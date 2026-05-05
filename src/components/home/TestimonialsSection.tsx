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
    <section className="bg-white px-6 py-12 sm:px-10 sm:py-16 lg:px-[80px] lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
          <span className="text-[14px] font-medium uppercase leading-6 tracking-[0.18em] text-[#0063EB]">
            Trusted by teams like yours
          </span>
          <h2 className="mt-5 text-[24px] font-semibold leading-[1.18] text-black sm:mt-8 sm:text-[34px] lg:text-[48px]">
            For those who have outgrown the &lsquo;all-in-one&rsquo; promise
          </h2>
          <p className="mt-4 text-[15px] font-normal leading-6 text-[#4F4F4F] sm:mt-6 sm:text-[17px] lg:text-[20px] lg:leading-7">
            Real experiences from professionals who needed more than what
            &ldquo;all-in-one&rdquo; tools could offer.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`flex w-full flex-col justify-between rounded-[16px] p-5 sm:p-8 ${
                idx === testimonials.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              } ${
                t.featured
                  ? "sm:min-h-[420px] lg:min-h-[611px]"
                  : "sm:min-h-[320px] lg:mt-[86px] lg:min-h-[439px]"
              }`}
              style={{ background: CARD_GRADIENT }}
            >
              <div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <Image
                    src={t.logo}
                    alt=""
                    width={t.featured ? 56 : 44}
                    height={t.featured ? 56 : 44}
                    className="rounded-full object-cover sm:w-[80px] sm:h-[80px]"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-[15px] font-semibold leading-5 text-[#1E1E1E] sm:text-[17px] sm:leading-6">
                      {t.name}
                    </span>
                    <span className="text-[13px] font-normal leading-5 text-[#6C6C6C] sm:text-[16px] sm:leading-6">
                      {t.company}
                    </span>
                  </div>
                </div>

                <span className="mt-6 block select-none text-[20px] font-bold leading-none text-[#1E1E1E] sm:mt-10 sm:text-[24px]" aria-hidden="true">
                  &quot;
                </span>
                <p
                  className={`mt-4 text-[#1E1E1E] sm:mt-8 ${
                    t.featured
                      ? "text-[20px] font-semibold leading-[1.3] sm:text-[24px] lg:text-[30px] lg:leading-[1.18]"
                      : "text-[17px] font-normal leading-[1.4] sm:text-[20px] lg:text-[25px] lg:leading-[1.28]"
                  }`}
                >
                  {t.quote}
                </p>
              </div>

              <span className="mt-6 text-[14px] font-normal leading-5 text-[#1E1E1E] sm:mt-10 sm:text-[16px] sm:leading-6">
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
