import Image from "next/image";
import { AlertTriangle, FileText, TrendingUp, type LucideIcon } from "lucide-react";

const painItems: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "The fit breaks down",
    body: "You're texting agents for updates because you can't see where a deal actually stands.",
    Icon: AlertTriangle,
  },
  {
    title: "Workarounds pile up",
    body: "The checklist is in one place, documents in another, and status updates somewhere else.",
    Icon: FileText,
  },
  {
    title: "Costs jump",
    body: "As your team grows, software expenses rise faster than the value you're getting.",
    Icon: TrendingUp,
  },
];

const stats = [
  { number: "10+", label: "Hours lost each week" },
  { number: "3–5", label: "Separate tools" },
  {
    number: "$$$",
    label: "Software spend that’s hard to tie back to real productivity",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-white px-6 py-20 md:py-[104px] sm:px-10 lg:px-[80px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="relative min-h-[760px] overflow-hidden rounded-[18px] md:min-h-[713px]">
          <Image
            src="/images/figma/painpoints-image.jpg"
            alt=""
            fill
            className="object-cover object-center md:object-right"
            aria-hidden="true"
            quality={90}
            sizes="(min-width: 1280px) 1120px, calc(100vw - 48px)"
          />

          <div className="relative z-10 m-3 flex min-h-[736px] w-[calc(100%-1.5rem)] max-w-[520px] flex-col rounded-[14px] bg-white p-6 sm:m-4 sm:min-h-[681px] sm:w-[calc(100%-2rem)] md:p-10">
            <p className="text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-[#D92D20]">
              When systems fall behind
            </p>
            <h2 className="mt-6 text-[32px] font-semibold leading-[1.25] text-black md:text-[40px] md:leading-[1.35]">
              Growth shouldn&apos;t make your brokerage harder to run
            </h2>
            <p className="mt-4 text-[15px] font-normal leading-6 text-[#4F4F4F]">
              What worked early on starts to strain as your roster and deals grow.
            </p>

            <div className="mt-11 flex flex-col gap-4">
              {painItems.map(({ title, body, Icon }) => (
                <div key={title} className="rounded-[8px] border border-black/10 bg-white p-4">
                  <Icon size={18} className="text-[#D92D20]" fill={title === "Workarounds pile up" ? "#D92D20" : "none"} />
                  <h3 className="mt-7 text-[14px] font-semibold leading-5 tracking-[-0.01em] text-[#1E1E1E]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] font-normal leading-5 text-[#4F4F4F]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-[#D92D20]">
          How this shows up in practice :
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex min-h-[163px] flex-col items-center justify-center rounded-[10px] border border-black/10 bg-white px-5 text-center"
            >
              <div className="text-[56px] font-medium leading-none tracking-[-0.02em] text-[#D92D20]">
                {stat.number}
              </div>
              <p className="mt-4 max-w-[275px] text-[18px] font-medium leading-6 text-[#1E1E1E]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
