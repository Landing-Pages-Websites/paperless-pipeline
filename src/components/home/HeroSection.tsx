import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

function HeroButton({ href, children, variant }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "border-white/30 bg-[#0063EB] text-white shadow-[0_0_0_1px_#046EFF,0_1px_2px_rgba(4,110,255,0.64)] hover:bg-[#046EFF]"
      : "border-[#E9ECEF] bg-white text-[#1E1E1E] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)] hover:bg-[#F8FAFC]";

  return (
    <Link
      href={href}
      className={`inline-flex h-11 w-full items-center justify-center rounded-[8px] border px-5 text-[14px] font-medium leading-6 transition-colors sm:w-auto ${classes}`}
    >
      {children}
    </Link>
  );
}

function SparkleIcon() {
  return (
    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M6 1.25L7.25 4.75L10.75 6L7.25 7.25L6 10.75L4.75 7.25L1.25 6L4.75 4.75L6 1.25Z"
          fill="#0063EB"
        />
      </svg>
    </span>
  );
}

function Stars({ className = "text-[22px]" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 text-[#E3B742] ${className}`} aria-hidden="true">
      <span>★</span>
      <span>★</span>
      <span className="text-[1.28em] leading-none">★</span>
      <span>★</span>
      <span className="text-[0.78em]">★</span>
    </div>
  );
}

function ProofStrip() {
  return (
    <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:items-end sm:gap-6">
      <div className="flex h-[104px] w-full flex-col justify-center rounded-[8px] border border-black/10 bg-[#FDF9EE] px-5 shadow-[0_1px_1px_rgba(0,0,0,0.03)] sm:h-[116px] sm:w-[214px] sm:flex-none sm:px-6">
        <div className="font-display text-[40px] font-medium leading-none text-[#23272E] sm:text-[44px]">
          4.6<span className="text-[#0063EB]">+</span>
        </div>
        <div className="mt-2 text-[14px] font-medium leading-5 text-[#23272E] sm:text-[15px]">by users on G2</div>
      </div>

      <div className="flex w-full max-w-[254px] justify-center border-b border-[#D9DDE3] pb-3">
        <Image
          src="/images/figma/homepage 3 icon.webp"
          alt="G2 Spring 2025 awards for easiest setup, easiest to do business with, and users love us"
          width={1481}
          height={579}
          className="h-auto w-full"
          sizes="754px"
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  className,
  labelClassName = "text-[#1E1E1E]",
  valueClassName = "text-[#0063EB]",
}: {
  label: React.ReactNode;
  value: string;
  className: string;
  labelClassName?: string;
  valueClassName?: string;
}) {
  return (
    <div className={`flex min-h-[140px] flex-col justify-between p-4 sm:min-h-[194px] sm:p-7 md:min-h-[186px] lg:min-h-[218px] lg:p-7 2xl:min-h-[246px] 2xl:p-8 ${className}`}>
      <div className={`text-[14px] font-medium leading-[1.2] sm:text-[19px] sm:leading-[1.18] md:text-[18px] lg:text-[22px] 2xl:text-[24px] ${labelClassName}`}>{label}</div>
      <div className={`font-display text-[38px] font-medium leading-none sm:text-[52px] md:text-[48px] lg:text-[62px] 2xl:text-[68px] ${valueClassName}`}>{value}</div>
    </div>
  );
}

function HeroStats() {
  return (
    <div className="grid w-full max-w-[650px] grid-cols-2 gap-0 2xl:max-w-[550px]">
      <StatCard
        label={
          <>
            Monthly
            <br />
            transactions
          </>
        }
        value="33K+"
        className="rounded-tl-[14px] rounded-tr-[110px] rounded-br-[110px] rounded-bl-[14px] bg-[#0063EB] 2xl:rounded-tr-[140px] 2xl:rounded-br-[140px]"
        labelClassName="text-white"
        valueClassName="text-[#FFE95B]"
      />

      <div className="flex min-h-[140px] flex-col items-center justify-center rounded-[14px] bg-white px-3 py-5 text-center sm:min-h-[194px] sm:px-5 sm:py-7 md:min-h-[186px] md:px-6 md:py-6 lg:min-h-[218px] lg:px-7 lg:py-7 2xl:min-h-[246px] 2xl:px-8">
        <Stars className="text-[13px] sm:text-[15px] md:text-[17px] 2xl:text-[20px]" />
        <p className="mt-2 max-w-[160px] text-[10px] font-normal leading-[15px] text-[#393837] sm:mt-3 sm:max-w-[180px] sm:text-[11px] sm:leading-[16px] md:mt-4 md:max-w-[210px] md:text-[12px] md:leading-[19px] 2xl:max-w-[230px] 2xl:text-[14px] 2xl:leading-[22px]">
          &quot;I saved $470,000 over 14 years with flawless service and zero issues.&quot;
        </p>
        <p className="mt-3 text-[10px] font-semibold leading-4 text-[#1E1E1E] sm:mt-4 sm:text-[11px] md:mt-4 md:text-[12px] 2xl:text-[14px]">— Tony Garrant</p>
        <p className="mt-0.5 text-[9px] font-normal leading-4 text-[#393837] md:text-[10px] 2xl:text-[12px]">
          Broker/Owner, Abundant Realty
        </p>
      </div>

      <StatCard
        label={
          <>
            Years
            <br />
            in use
          </>
        }
        value="16+"
        className="rounded-[14px] bg-white"
      />

      <StatCard
        label={
          <>
            Real estate
            <br />
            professionals
          </>
        }
        value="90K+"
        className="rounded-tl-[14px] rounded-tr-[110px] rounded-br-[14px] rounded-bl-[14px] bg-[#FFE95B] 2xl:rounded-tr-[140px]"
        labelClassName="text-[#1E1E1E] lg:text-[19px] 2xl:text-[21px]"
        valueClassName="text-[#0063EB] lg:text-[54px] 2xl:text-[60px]"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(90deg,#FDF9EE_0%,#FDF9EE_42%,#DCECFB_67%,#FAF8E9_100%)]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 items-center gap-8 py-9 sm:gap-10 sm:py-12 lg:grid-cols-[minmax(0,520px)_minmax(340px,1fr)] lg:gap-8 lg:pt-12 lg:pb-12 xl:grid-cols-[minmax(0,580px)_minmax(430px,1fr)] xl:gap-10">
          <div className="max-w-[760px]">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pr-3 pl-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:pr-4">
              <SparkleIcon />
              <span className="text-[13px] font-medium leading-5 text-[#1E1E1E] sm:text-[15px]">
                No credit card required · Free setup included
              </span>
            </div>

            <h1 className="mt-5 text-[34px] font-semibold leading-[1.12] tracking-normal text-black sm:text-[48px] lg:text-[54px] xl:text-[58px] 2xl:text-[60px]">
              <span className="block">
                Transaction management <span className="text-[#0063EB]">that</span>
              </span>
              <span className="block">
                 <span className="text-[#0063EB]">stays <em className="font-small italic">out of the way.</em></span>
              </span>
            </h1>

            <p className="mt-5 max-w-[680px] text-[15px] font-medium leading-[26px] text-black sm:mt-6 sm:text-[18px] sm:leading-[30px] lg:text-[18px] lg:leading-[32px]">
              Built for teams that need clarity, control, and predictable costs as they grow.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <HeroButton href="/signup" variant="primary">
                Start Free Trial →
              </HeroButton>
              <HeroButton href="/demo" variant="secondary">
                Book a Demo →
              </HeroButton>
            </div>

            <ProofStrip />
          </div>

          <div className="flex w-full justify-center lg:justify-end lg:pt-4">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}
