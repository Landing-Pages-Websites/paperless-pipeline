import Image from "next/image";

const painItems = [
  {
    title: "The fit breaks down",
    body: "You're texting agents for updates because you can't see where a deal actually stands.",
  },
  {
    title: "Workarounds pile up",
    body: "The checklist is in one place, documents in another, and status updates somewhere else.",
  },
  {
    title: "Costs jump",
    body: "As your team grows, software expenses rise faster than the value you're getting.",
  },
];

const stats = [
  { number: "10+", label: "Hours lost each week" },
  { number: "3–5", label: "Separate tools" },
  {
    number: "$$$",
    label: "Software spend that's hard to tie back to real productivity",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      <div className="flex flex-col gap-6">
        {/* Top section: painpoints-image.png as bg, white card on left */}
        <div className="relative rounded-3xl overflow-hidden flex flex-row p-4 gap-2 min-h-[520px]">
          <Image
            src="/images/figma/painpoints-image.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />

          {/* Left white card — 593px wide on desktop */}
          <div className="relative z-10 bg-white rounded-2xl p-8 flex flex-col gap-12 lg:w-[593px] lg:flex-shrink-0 w-full max-md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <span className="font-sans font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase text-[#D92D20]">
                When systems fall behind
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-sans font-semibold text-[48px] leading-tight text-black max-md:text-[32px]">
                  Growth shouldn&apos;t make your brokerage harder to run
                </h2>
                <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4F4F4F]">
                  What worked early on starts to strain as your roster and deals
                  grow.
                </p>
              </div>
            </div>

            {/* Pain items */}
            <div className="flex flex-col gap-4">
              {painItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-6 border border-[#F0EDEA] rounded-lg p-4"
                >
                  <div className="w-6 h-6 rounded-sm bg-[#F0EDEA]" />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-semibold text-[16px] leading-[24px] tracking-[-0.0113em] text-[#393837]">
                      {item.title}
                    </span>
                    <span className="font-sans font-normal text-[14px] leading-[20px] tracking-[-0.0057em] text-[#4F4F4F]">
                      {item.body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* "How this shows up in practice" label */}
        <p className="font-sans font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase text-[#D92D20] text-center">
          How this shows up in practice :
        </p>

        {/* Stats row */}
        <div className="flex flex-col md:flex-row gap-6">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex-1 flex flex-col gap-4 items-center justify-center border border-black/10 rounded-2xl px-4 py-8"
            >
              <span className="font-sans font-medium text-[64px] leading-[56px] tracking-[-0.0188em] text-[#D92D20] text-center">
                {stat.number}
              </span>
              <span className="font-sans font-medium text-[20px] leading-[26px] text-[#1E1E1E] text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
