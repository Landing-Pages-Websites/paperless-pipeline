import Link from "next/link";

function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <rect width="24" height="24" rx="12" fill="#EEF4FF" />
      <path
        d="M7.5 12L10.5 15L16.5 9"
        stroke="#0063EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <span className="text-[#333333] font-semibold text-[14px] leading-[24px]">
        Includes:
      </span>
      <div className="flex flex-col">
        {features.map((feature, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 py-3">
              <CheckIcon />
              <span className="text-[#000000] font-medium text-[14px] leading-[24px]">
                {feature}
              </span>
            </div>
            {i < features.length - 1 && (
              <div className="border-t border-[#F2F2F2]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const corePricingFeatures = [
  "Custom checklists by deal type",
  "Clear visibility into every transaction",
  "Built-in compliance and audit tracking",
  "Deadlines, documents, and tasks in one place",
];

const eSignFeatures = [
  "Reusable forms with auto-fill",
  "Send requests in seconds",
  "Track status in real time",
  "Signed docs saved automatically",
];

const commissionFeatures = [
  "Custom commission plans and splits",
  "Automatic calculations",
  "Auto-generated CDAs for every deal",
  "Export-ready reports when you need them",
];

export default function PricingPreviewSection() {
  return (
    <section className="bg-white px-5 py-[80px] md:px-[80px] md:pt-16 md:pb-[120px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-[55px]">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[836px]">
          <p className="text-[#0063EB] font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase text-center">
            Pay for what matters
          </p>
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-[#000000] font-semibold text-[32px] md:text-[48px] leading-tight text-center">
              Flexible. Modular. Pay for what you need.
            </h2>
            <p className="text-[#4F4F4F] font-normal text-[16px] leading-[150%] text-center">
              Everything you need to manage transactions, with optional tools
              when you&apos;re ready.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1280px]">
          {/* Card 1 – Core Product */}
          <div className="bg-white border-2 border-[#F2F2F2] rounded-[24px] p-6 flex flex-col gap-6">
            <div className="self-start bg-[#0063EB] rounded-full px-4 py-2">
              <span className="text-white font-semibold text-[12px] leading-[16px] uppercase">
                Core Product
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-col">
                  <span className="text-[#808080] font-normal text-[16px] leading-[24px]">
                    Pricing Starts at
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="text-[#000000] font-medium text-[48px] md:text-[64px] leading-[72px] tracking-[-0.03em]">
                      $65
                    </span>
                    <span className="text-[#808080] font-normal text-[16px] leading-[24px] pb-3">
                      /month
                    </span>
                  </div>
                </div>
                <h3 className="text-[#000000] font-semibold text-[18px] leading-[32px] tracking-[-0.02em]">
                  Transaction Management
                </h3>
              </div>
              <FeatureList features={corePricingFeatures} />
            </div>
          </div>

          {/* Card 2 – Pipeline eSign (Optional Add-on) */}
          <div className="bg-white border-2 border-[#F2F2F2] rounded-[24px] p-6 flex flex-col gap-6">
            <div className="self-start bg-[#FFE95B] rounded-full px-4 py-2">
              <span className="text-[#1E1E1E] font-semibold text-[12px] leading-[16px] uppercase">
                Optional Add-on
              </span>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-end gap-1">
                  <span className="text-[#000000] font-medium text-[48px] md:text-[64px] leading-[72px] tracking-[-0.03em]">
                    $0.70
                  </span>
                  <span className="text-[#808080] font-normal text-[16px] leading-[24px] pb-3">
                    /signature request
                  </span>
                </div>
                <h3 className="text-[#000000] font-semibold text-[18px] leading-[32px] tracking-[-0.02em]">
                  Pipeline eSign
                </h3>
              </div>
              <FeatureList features={eSignFeatures} />
            </div>
            <p className="text-[#0063EB] font-medium text-[16px] leading-[32px] tracking-[-0.0113em]">
              Cheaper than DocuSign*
            </p>
          </div>

          {/* Card 3 – Commission Module (Optional Add-on) */}
          <div className="bg-white border-2 border-[#F2F2F2] rounded-[24px] p-6 flex flex-col gap-6">
            <div className="self-start bg-[#FFE95B] rounded-full px-4 py-2">
              <span className="text-[#1E1E1E] font-semibold text-[12px] leading-[16px] uppercase">
                Optional Add-on
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 p-4">
                <div className="flex flex-col">
                  <span className="text-[#808080] font-normal text-[16px] leading-[24px]">
                    Pricing Starts at
                  </span>
                  <div className="flex items-end gap-1">
                    <span className="text-[#000000] font-medium text-[48px] md:text-[64px] leading-[72px] tracking-[-0.03em]">
                      $54
                    </span>
                    <span className="text-[#808080] font-normal text-[16px] leading-[24px] pb-3">
                      /month
                    </span>
                  </div>
                </div>
                <h3 className="text-[#000000] font-semibold text-[18px] leading-[32px] tracking-[-0.02em]">
                  Commission Module
                </h3>
              </div>
              <FeatureList features={commissionFeatures} />
            </div>
          </div>
        </div>

        {/* CTA button */}
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-white font-medium text-[14px] leading-[24px] bg-[#0063EB] hover:bg-[#046EFF] transition-colors rounded-lg px-3 py-1.5"
          style={{
            boxShadow:
              "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.64)",
          }}
        >
          View plans and pricing →
        </Link>
      </div>
    </section>
  );
}
