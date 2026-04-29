import Image from "next/image";
import { Blocks, MonitorCheck } from "lucide-react";

const featureCards = [
  {
    title: "Configured around your process",
    body: "We help set things up based on how your team runs transactions.",
    Icon: Blocks,
  },
  {
    title: "Usable from day one",
    body: "Agents and staff can work in the system as deals move forward.",
    Icon: MonitorCheck,
  },
];

export default function ReadySection() {
  return (
    <section className="bg-white px-6 py-[110px] sm:px-10 lg:px-[80px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-10 md:grid-cols-2">
        <div className="relative min-h-[418px] overflow-hidden rounded-[18px]">
          <Image
            src="/images/figma/ready-feature-image.jpg"
            alt="Real estate team reviewing documents"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute right-4 bottom-4 left-4 rounded-[12px] bg-white p-4 shadow-[0_8px_24px_rgba(3,7,18,0.10)]">
            <p className="text-[15px] font-medium leading-5 tracking-[-0.005em] text-[#1E1E1E]">
              “With many systems, you need a couple of hours of training... but with this
              system, it&apos;s so intuitive that it&apos;s hard to mess up.”
            </p>
            <p className="mt-2 text-[11px] font-normal leading-4 text-[#4F4F4F]">
              <span className="font-semibold text-[#1E1E1E]">- Michael Greer</span>
              <br />
              Managing Partner, Good 2 Go Properties &amp; Services
            </p>
          </div>
        </div>

        <div className="pt-1">
          <p className="text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-[#0063EB]">
            Ready from Day One
          </p>
          <h2 className="mt-6 max-w-[520px] text-[42px] font-semibold leading-[1.3] text-black max-md:text-[34px]">
            Up and running in days, not weeks
          </h2>
          <p className="mt-4 max-w-[550px] text-[15px] font-normal leading-6 text-[#4F4F4F]">
            Launch quickly with a setup built around your process, so your team can adopt
            it easily and start closing deals without missing a beat.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {featureCards.map(({ title, body, Icon }) => (
              <div key={title} className="min-h-[149px] rounded-[8px] border border-black/10 bg-white p-4">
                <Icon size={20} className="text-[#0063EB]" />
                <h3 className="mt-8 text-[15px] font-semibold leading-6 tracking-[-0.01em] text-[#393837]">
                  {title}
                </h3>
                <p className="mt-1 text-[13px] font-normal leading-5 tracking-[-0.006em] text-[#4F4F4F]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
