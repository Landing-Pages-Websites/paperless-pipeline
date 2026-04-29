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
    <section className="bg-white px-6 py-[96px] sm:px-10 lg:px-[80px]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="font-sans text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-[#0063EB]">
            Built on transparency
          </span>
          <h2 className="mt-7 font-sans text-[40px] font-semibold leading-tight text-black max-md:text-[32px]">
            Your data should always be yours
          </h2>
          <p className="mt-5 font-sans text-[15px] font-normal leading-6 text-[#4F4F4F]">
            Some platforms make it easy to get in — and hard to leave.
          </p>
          <p className="mx-auto mt-6 max-w-[760px] font-sans text-[15px] font-normal leading-6 text-[#4F4F4F]">
            We don&apos;t lock your data behind contracts, penalties, or formats that only work
            inside our system. If Paperless Pipeline ever isn&apos;t the right fit, you can take
            your data with you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = icons[i];
            const color = iconColors[i];
            return (
              <div
                key={card.title}
                className="flex min-h-[203px] flex-col justify-between rounded-[10px] border border-black/10 bg-white p-5"
              >
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: card.iconBg }}
                >
                  <Icon color={color} />
                </div>

                <div>
                  <h3 className="font-sans text-[22px] font-medium leading-8 tracking-[-0.0075em] text-[#030712]">
                    {card.title}
                  </h3>
                  <p className="mt-1 font-sans text-[15px] font-normal leading-8 tracking-[-0.0113em] text-[#4F4F4F]">
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
