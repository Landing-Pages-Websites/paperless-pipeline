import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Start a new transaction in seconds",
    body: "Create and launch deals instantly with pre-built workflows that eliminate setup time.",
    featured: true,
  },
  {
    number: "2",
    title: "Documents, tasks, deadlines, and compliance all stay connected",
    body: "Everything lives in one organized system, so nothing slips through the cracks.",
  },
  {
    number: "3",
    title: "Track progress at a glance — no guessing, no chasing",
    body: "Get real-time visibility into every deal without constant follow-ups or manual checks.",
  },
  {
    number: "4",
    title: "Close with confidence knowing nothing was missed",
    body: "Stay fully in control with automated checks that ensure every step is completed.",
  },
];

function StepNumber({
  number,
  active,
}: {
  number: string;
  active: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex size-12 items-center justify-center rounded-full text-[24px] font-bold leading-none ${
        active ? "bg-[#0063EB] text-[#FFE95B]" : "bg-[#E9ECEF] text-[#6C757D]"
      }`}
    >
      {number}
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-[80px] lg:py-[100px]">
      <div className="mx-auto grid max-w-[1121px] grid-cols-1 gap-12 lg:grid-cols-[503px_64px_514px] lg:gap-5">
        <div className="lg:pt-1">
          <span className="text-[14px] font-medium uppercase leading-6 tracking-[0.12em] text-[#0063EB]">
            All-in-One Workflow
          </span>
          <h2 className="mt-6 max-w-[500px] text-[44px] font-semibold leading-[1.22] text-black max-md:text-[34px]">
            How Paperless Pipeline works
          </h2>
          <p className="mt-5 max-w-[500px] text-[16px] font-normal leading-6 text-[#4F4F4F]">
            Streamline your entire transaction process with a connected system designed to
            reduce manual work, eliminate errors, and help you close faster with confidence.
          </p>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="absolute top-6 bottom-0 left-1/2 w-px -translate-x-1/2 bg-[#DEE2E6]" />
          <div className="flex h-full flex-col items-center justify-between">
            {steps.map((step, index) => (
              <StepNumber key={step.number} number={step.number} active={index === 0} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="grid grid-cols-[48px_1fr] gap-4 lg:block">
              <div className="lg:hidden">
                <StepNumber number={step.number} active={index === 0} />
              </div>
              <article
                className={`rounded-[20px] border border-[#E9ECEF] bg-white px-7 py-7 ${
                  index === 0 ? "shadow-[0_18px_40px_rgba(3,7,18,0.06)]" : ""
                }`}
              >
                <h3 className="text-[24px] font-medium leading-[32px] tracking-[-0.02em] text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-[16px] font-normal leading-6 tracking-[-0.02em] text-[#6C757D]">
                  {step.body}
                </p>

                {step.featured && (
                  <div className="relative mt-6 h-[240px] overflow-hidden rounded-[12px]">
                    <Image
                      src="/images/figma/workflow-screenshot.png"
                      alt="Paperless Pipeline transaction workflow"
                      fill
                      priority
                      unoptimized
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
