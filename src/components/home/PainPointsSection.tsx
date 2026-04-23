import { X, Check } from "lucide-react";

const painPoints = [
  {
    problem: "Deals tracked in spreadsheets, email chains, and sticky notes",
    solution: "Every transaction in one organized workspace — visible to your whole team",
  },
  {
    problem: "Missed deadlines because reminders live in someone's head",
    solution: "Automated alerts and task checklists keep every deal on schedule",
  },
  {
    problem: "Hours spent chasing documents from agents and clients",
    solution: "Automated document requests and a shared folder everyone can access",
  },
  {
    problem: "No idea what's happening in your pipeline until something goes wrong",
    solution: "Real-time dashboard gives you full visibility across every active deal",
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            When Systems Fall Behind
          </h2>
          <p className="text-lg text-[#4F4F4F]">
            How this shows up in practice:
          </p>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                <X size={14} className="text-[#D92D20]" strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold text-[#D92D20] uppercase tracking-wide">
                Without Paperless Pipeline
              </span>
            </div>
            <div className="space-y-4">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-5"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <X size={12} className="text-[#D92D20]" strokeWidth={3} />
                  </div>
                  <p className="text-sm text-[#4F4F4F] leading-relaxed">
                    {item.problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-[#E8F8EF] rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-emerald-600" strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                With Paperless Pipeline
              </span>
            </div>
            <div className="space-y-4">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-[#E8F8EF] border border-emerald-100 rounded-xl p-5"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check size={12} className="text-emerald-600" strokeWidth={3} />
                  </div>
                  <p className="text-sm text-[#4F4F4F] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
