const cards = [
  {
    iconBg: "#E8F8EF",
    title: "No lock-in",
    body: "Month-to-month subscriptions mean you're never trapped",
  },
  {
    iconBg: "#EEF4FF",
    title: "Full export",
    body: "Standard formats you can use anywhere",
  },
  {
    iconBg: "#F5F0FF",
    title: "You own it",
    body: "Your transactions, contacts, and history stay yours",
  },
];

function LockIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ExportIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v12M8 11l4 4 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function OwnerIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.5" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const icons = [LockIcon, ExportIcon, OwnerIcon];
const iconColors = ["#16A34A", "#0063EB", "#7C3AED"];

export default function TransparencySection() {
  return (
    <section className="bg-white py-[120px] px-[80px] max-md:py-16 max-md:px-4">
      {/* Inner container — max 1280px, column, 48px gap */}
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header — max 836px centered */}
        <div className="max-w-[836px] mx-auto flex flex-col gap-3 text-center">
          <span className="font-sans font-medium text-[14px] leading-[24px] tracking-[0.0893em] uppercase text-[#0063EB]">
            Built on transparency
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-semibold text-[48px] leading-tight text-black max-md:text-[32px]">
              Your data should always be yours
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4F4F4F]">
              Some platforms make it easy to get in — and hard to leave.
              <br className="max-md:hidden" />
              <br className="max-md:hidden" />
              We don&apos;t lock your data behind contracts, penalties, or formats
              that only work inside our system. If Paperless Pipeline ever
              isn&apos;t the right fit, you can take your data with you.
            </p>
          </div>
        </div>

        {/* Cards row — 3 cards, stretch height, 24px gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card, i) => {
            const Icon = icons[i];
            const color = iconColors[i];
            return (
              <div
                key={card.title}
                className="flex flex-col justify-between gap-6 border border-black/10 rounded-2xl p-6"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <Icon color={color} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans font-medium text-[24px] leading-[32px] tracking-[-0.0075em] text-[#030712]">
                    {card.title}
                  </h3>
                  <p className="font-sans font-normal text-[16px] leading-[32px] tracking-[-0.0113em] text-[#4F4F4F]">
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
