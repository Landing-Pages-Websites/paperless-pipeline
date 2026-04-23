import { Shield, DollarSign, Eye, MessageCircle } from "lucide-react";

const values = [
  {
    icon: DollarSign,
    title: "Honest, Predictable Pricing",
    description:
      "One flat monthly fee based on transaction volume. No per-seat charges, no feature paywalls, no surprise invoices at the end of the month.",
    bg: "bg-[#E8F8EF]",
    iconColor: "text-emerald-600",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description:
      "The price you see is the price you pay. eSign, document storage, unlimited users, and all integrations are included in every plan.",
    bg: "bg-[#EEF4FF]",
    iconColor: "text-[#0063EB]",
  },
  {
    icon: Eye,
    title: "Full Visibility",
    description:
      "We believe your team deserves to see exactly what's happening in every deal. No black boxes, no buried settings — everything is front and center.",
    bg: "bg-[#F5F0FF]",
    iconColor: "text-purple-600",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "Questions, concerns, feedback — we're always reachable. Our team responds fast and our roadmap is shaped by what our customers actually need.",
    bg: "bg-[#FDF9EE]",
    iconColor: "text-amber-600",
  },
];

export default function TransparencySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            Built on Transparency
          </h2>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            We built Paperless Pipeline on a simple belief: the tools you rely on
            to run your business shouldn't have anything to hide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-7 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-11 h-11 ${value.bg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon size={22} className={value.iconColor} />
                </div>
                <h3 className="text-base font-semibold text-[#030712] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
