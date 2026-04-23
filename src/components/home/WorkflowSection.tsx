import { FileText, Users, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Transaction Tracking",
    description:
      "Keep every deal visible from contract to close. Track deadlines, documents, and status at a glance so nothing falls through the cracks.",
    bg: "bg-[#EEF4FF]",
    iconColor: "text-[#0063EB]",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Collect, store, and share transaction documents in a single organized workspace. Full version history and instant access for your whole team.",
    bg: "bg-[#F5F0FF]",
    iconColor: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description:
      "Set up deadline reminders, task checklists, and status notifications that run automatically — so your team spends time on deals, not admin.",
    bg: "bg-[#E8F8EF]",
    iconColor: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Assign tasks, share notes, and communicate with agents, TCs, and clients all in one place. Everyone sees what they need — nothing more.",
    bg: "bg-[#FFF8E8]",
    iconColor: "text-amber-600",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            All-in-One Workflow
          </h2>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Everything your team needs to manage real estate transactions —
            from first contact to commission check.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-11 h-11 ${feature.bg} rounded-xl flex items-center justify-center mb-5`}
                >
                  <Icon size={22} className={feature.iconColor} />
                </div>
                <h3 className="text-lg font-semibold text-[#030712] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
