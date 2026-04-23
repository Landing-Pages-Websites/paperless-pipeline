import Link from "next/link";
import { Building2, Users, ClipboardList, ArrowRight } from "lucide-react";

const roles = [
  {
    icon: Building2,
    title: "For Brokers",
    description:
      "Get full visibility into every transaction in your brokerage. Track agent production, catch compliance issues early, and grow your business without adding overhead.",
    href: "/how-it-works/brokers",
    bg: "bg-[#EEF4FF]",
    iconColor: "text-[#0063EB]",
  },
  {
    icon: Users,
    title: "For Teams",
    description:
      "Coordinate agents, transaction coordinators, and support staff in one shared workspace. Standardize your process and close more deals with less back-and-forth.",
    href: "/how-it-works/teams",
    bg: "bg-[#F5F0FF]",
    iconColor: "text-purple-600",
  },
  {
    icon: ClipboardList,
    title: "For Transaction Coordinators",
    description:
      "Manage dozens of transactions without losing your mind. Automated checklists, deadline alerts, and document collection make it easy to keep every deal on track.",
    href: "/how-it-works/transaction-coordinators",
    bg: "bg-[#E8F8EF]",
    iconColor: "text-emerald-600",
  },
];

export default function RolesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            Built for Every Role
          </h2>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Whether you're running a brokerage, leading a team, or coordinating
            transactions solo, Paperless Pipeline fits the way you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div
                  className={`w-12 h-12 ${role.bg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon size={24} className={role.iconColor} />
                </div>
                <h3 className="text-xl font-semibold text-[#030712] mb-3">
                  {role.title}
                </h3>
                <p className="text-[#4F4F4F] leading-relaxed text-sm flex-1 mb-6">
                  {role.description}
                </p>
                <Link
                  href={role.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0063EB] hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
