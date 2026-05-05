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
    <section className="bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-[80px] lg:py-16">
      <div className="mx-auto max-w-[940px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[16px] sm:min-h-[430px] md:min-h-[500px]">
          <Image
            src="/images/figma/painpoints-image.jpg"
            alt=""
            fill
            className="object-cover object-center md:object-right"
            aria-hidden="true"
            quality={90}
            sizes="(max-width: 768px) 100vw, (min-width: 1280px) 940px, calc(100vw - 48px)"
          />

          <div className="relative z-10 m-3 flex w-[calc(100%-1.5rem)] max-w-[420px] flex-col rounded-[12px] bg-white p-4 sm:m-4 sm:w-[calc(100%-2rem)] sm:p-5 md:p-6">
            <p className="text-[10px] font-medium uppercase leading-4 tracking-[0.16em] text-[#D92D20]">
              When systems fall behind
            </p>
            <h2 className="mt-4 text-[27px] font-semibold leading-[1.16] text-black md:text-[31px] md:leading-[1.18]">
              Growth shouldn&apos;t make your brokerage harder to run
            </h2>
            <p className="mt-3 text-[13px] font-normal leading-5 text-[#4F4F4F]">
              What worked early on starts to strain as your roster and deals grow.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {painItems.map(({ title, body, Icon }) => (
                <div key={title} className="rounded-[8px] border border-black/10 bg-white p-3">
                  <Icon size={15} className="text-[#D92D20]" fill={title === "Workarounds pile up" ? "#D92D20" : "none"} />
                  <h3 className="mt-3 text-[12px] font-semibold leading-4 tracking-[-0.01em] text-[#1E1E1E]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] font-normal leading-4 text-[#4F4F4F]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] font-medium uppercase leading-5 tracking-[0.14em] text-[#D92D20]">
          How this shows up in practice :
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex min-h-[130px] flex-col items-center justify-center rounded-[10px] border border-black/10 bg-white px-4 py-5 text-center sm:min-h-[163px] sm:px-5"
            >
              <div className="text-[40px] font-medium leading-none tracking-[-0.02em] text-[#D92D20] sm:text-[56px]">
                {stat.number}
              </div>
              <p className="mt-3 max-w-[275px] text-[14px] font-medium leading-5 text-[#1E1E1E] sm:mt-4 sm:text-[18px] sm:leading-6">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
