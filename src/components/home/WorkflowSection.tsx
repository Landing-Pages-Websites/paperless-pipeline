import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Start a new transaction in seconds",
    body: "Create and launch deals instantly with pre-built workflows that eliminate setup time.",
    large: true,
  },
  {
    number: "2",
    title: "Documents, tasks, deadlines, and compliance all stay connected",
    body: "Everything lives in one organized system, so nothing slips through the cracks.",
    large: false,
  },
  {
    number: "3",
    title: "Track progress at a glance — no guessing, no chasing",
    body: "Get real-time visibility into every deal without constant follow-ups or manual checks.",
    large: false,
  },
  {
    number: "4",
    title: "Close with confidence knowing nothing was missed",
    body: "Stay fully in control with automated checks that ensure every step is completed.",
    large: false,
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Left: label + headline + body — 572px fixed on desktop */}
        <div className="lg:w-[572px] lg:flex-shrink-0 flex flex-col gap-3 max-lg:mb-10">
          <span className="font-sans font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase text-[#0063EB]">
            All-in-One Workflow
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-semibold text-[48px] leading-tight text-black max-md:text-[32px]">
              How Paperless Pipeline works
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4F4F4F]">
              Streamline your entire transaction process with a connected system
              designed to reduce manual work, eliminate errors, and help you
              close faster with confidence.
            </p>
          </div>
        </div>

        {/* Right: circle sidebar (48px) + cards column — gap 24px */}
        <div className="flex-1 flex gap-6 items-start">
          {/* Circle sidebar with vertical connecting line — desktop only */}
          <div className="hidden lg:block relative w-12 flex-shrink-0">
            {/* Vertical line centered in the 48px column */}
            <div className="absolute left-[23.5px] top-2 bottom-2 w-px bg-[#DEE2E6]" />
            {/* Circles — min-h mirrors each card so circles align to card tops */}
            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`flex justify-center items-start pt-2 ${
                    step.large ? "min-h-[448px]" : "min-h-[192px]"
                  }`}
                >
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-sans font-bold text-[24px] leading-[32px] flex-shrink-0 ${
                      i === 0
                        ? "bg-[#0063EB] text-[#FFE95B]"
                        : "bg-[#E9ECEF] text-[#6C757D]"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards column — gap 24px between cards */}
          <div className="flex flex-col gap-6 flex-1">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`bg-white rounded-3xl p-8 flex flex-col gap-6 ${
                  i === 0
                    ? "border border-[#DEE2E6] shadow-[0px_24px_64px_0px_rgba(224,224,224,0.48)] min-h-[448px]"
                    : "border border-[#E9ECEF] min-h-[192px]"
                }`}
              >
                {/* Step number shown inline on mobile */}
                <div
                  className={`lg:hidden w-12 h-12 rounded-full flex items-center justify-center font-sans font-bold text-[24px] leading-[32px] flex-shrink-0 ${
                    i === 0
                      ? "bg-[#0063EB] text-[#FFE95B]"
                      : "bg-[#E9ECEF] text-[#6C757D]"
                  }`}
                >
                  {step.number}
                </div>

                {step.large ? (
                  /* Card 1: text group (h3 + 8px + p) → 24px gap → image (272px, rounded-2xl) */
                  <>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-sans font-medium text-[24px] leading-[32px] tracking-[-0.02em] text-black max-md:text-[20px]">
                        {step.title}
                      </h3>
                      <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6C757D]">
                        {step.body}
                      </p>
                    </div>
                    <div className="relative w-full h-[272px] rounded-2xl overflow-hidden">
                      <Image
                        src="/images/figma/workflow-screenshot.png"
                        alt="Paperless Pipeline transaction management dashboard"
                        fill
                        className="object-cover object-top"
                        quality={85}
                      />
                    </div>
                  </>
                ) : (
                  /* Cards 2–4: h3 → 24px gap → p (separate top-level flex children) */
                  <>
                    <h3 className="font-sans font-medium text-[24px] leading-[32px] tracking-[-0.02em] text-black max-md:text-[20px]">
                      {step.title}
                    </h3>
                    <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[-0.02em] text-[#6C757D]">
                      {step.body}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
