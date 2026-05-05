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

function AwardBadge({
  title,
  accent,
}: {
  title: string;
  accent: "blue" | "teal" | "gray";
}) {
  const accentClass =
    accent === "blue"
      ? "border-b-[#0063EB]"
      : accent === "teal"
        ? "border-b-[#10BFA7]"
        : "border-b-[#23272E]";

  return (
    <div className="relative h-[76px] w-[58px] bg-white text-center shadow-[0_0_0_1px_rgba(0,0,0,0.18)]">
      <div className="flex h-3 items-center justify-between bg-[#F2F4F7] px-1 text-[4px] font-semibold uppercase leading-none text-[#1E1E1E]">
        <span>Spring 2025</span>
        <span className="rounded-[1px] bg-[#FF492C] px-0.5 text-white">G2</span>
      </div>
      <div className="flex h-[48px] items-center justify-center px-1 text-[7px] font-semibold leading-[9px] text-[#111827]">
        {title}
      </div>
      <div
        className={`mx-auto h-0 w-0 border-x-[29px] border-b-[13px] border-x-transparent ${accentClass}`}
      />
      {accent === "gray" && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] leading-none text-[#FF492C]">
          ★
        </div>
      )}
    </div>
  );
}

function ProofStrip() {
  return (
    <div className="mt-5 flex flex-wrap items-end gap-4 sm:mt-[30px] sm:gap-7">
      <div className="flex h-[96px] w-[180px] flex-col justify-center rounded-[8px] border border-black/10 bg-[#FDF9EE] px-4 shadow-[0_1px_1px_rgba(0,0,0,0.03)] sm:h-[122px] sm:w-[242px] sm:px-5">
        <div className="font-display text-[30px] font-medium leading-none text-[#23272E] sm:text-[38px]">
          4.6<span className="text-[#0063EB]">+</span>
        </div>
        <div className="mt-2 text-[13px] font-medium leading-5 text-[#23272E] sm:mt-3 sm:text-[15px]">by users on G2</div>
      </div>

      <div className="flex h-[80px] items-end gap-4 border-b border-[#D5D9E2] px-1 pb-4 sm:h-[96px] sm:gap-7 sm:pb-5">
        <AwardBadge title="Easiest Setup" accent="blue" />
        <AwardBadge title="Easiest To Do Business With" accent="teal" />
        <AwardBadge title="Users Love Us" accent="gray" />
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
    <div className={`flex min-h-[148px] flex-col justify-between p-4 sm:min-h-[216px] sm:p-8 ${className}`}>
      <div className={`text-[14px] font-medium leading-[1.2] sm:text-[21px] sm:leading-[1.18] ${labelClassName}`}>{label}</div>
      <div className={`font-display text-[40px] font-medium leading-none sm:text-[56px] ${valueClassName}`}>{value}</div>
    </div>
  );
}

function HeroStats() {
  return (
    <div className="grid w-full max-w-[390px] grid-cols-2 gap-0 sm:max-w-[440px]">
      <StatCard
        label={
          <>
            Monthly
            <br />
            transactions
          </>
        }
        value="33K+"
        className="rounded-tl-[14px] rounded-tr-[88px] rounded-br-[88px] rounded-bl-[14px] bg-[#0063EB]"
        labelClassName="text-white"
        valueClassName="text-[#FFE95B]"
      />

      <div className="flex min-h-[148px] flex-col items-center justify-center rounded-[14px] bg-white px-3 py-5 text-center sm:min-h-[216px] sm:px-5 sm:py-8">
        <Stars className="text-[13px] sm:text-[15px]" />
        <p className="mt-2 max-w-[160px] text-[10px] font-normal leading-[15px] text-[#393837] sm:mt-3 sm:max-w-[180px] sm:text-[11px] sm:leading-[16px]">
          &quot;I saved $470,000 over 14 years with flawless service and zero issues.&quot;
        </p>
        <p className="mt-3 text-[10px] font-semibold leading-4 text-[#1E1E1E] sm:mt-5 sm:text-[11px]">— Tony Garrant</p>
        <p className="mt-0.5 text-[9px] font-normal leading-4 text-[#393837]">
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
        className="rounded-tl-[14px] rounded-tr-[88px] rounded-br-[14px] rounded-bl-[14px] bg-[#FFE95B]"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(90deg,#FDF9EE_0%,#FDF9EE_42%,#DCECFB_67%,#FAF8E9_100%)]">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-[72px]">
        <div className="grid grid-cols-1 items-center gap-8 py-8 sm:gap-12 sm:py-12 lg:grid-cols-[590px_440px] lg:gap-[86px] lg:pt-[52px] lg:pb-6">
          <div className="max-w-[590px]">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white py-1.5 pr-3 pl-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:pr-4">
              <SparkleIcon />
              <span className="text-[13px] font-medium leading-5 text-[#1E1E1E] sm:text-[15px]">
                No credit card required · Free setup included
              </span>
            </div>

            <h1 className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-tight text-black sm:text-[44px] lg:text-[48px] xl:text-[56px]">
              <span className="block">Transaction management</span>
              <span className="block sm:whitespace-nowrap">
                that{" "}
                <span className="text-[#0063EB]">
                  stays <em className="font-medium italic">out of the way.</em>
                </span>
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] font-normal leading-[26px] text-[#4F4F4F] sm:mt-7 sm:text-[17px]">
              Built for teams that need clarity, control, and predictable costs as they grow.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <HeroButton href="/signup" variant="primary">
                Start Free Trial →
              </HeroButton>
              <HeroButton href="/demo" variant="secondary">
                Book a Demo →
              </HeroButton>
            </div>

            <ProofStrip />
          </div>

          <div className="flex w-full justify-center lg:justify-end">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}
