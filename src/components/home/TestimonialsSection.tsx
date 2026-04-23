import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We manage over 200 transactions a year across a team of 12 agents. Paperless Pipeline cut our admin time in half and our TCs finally stopped missing deadlines. I honestly don't know how we ran without it.",
    name: "Sarah Mitchell",
    role: "Broker/Owner",
    company: "Mitchell Realty Group",
    initials: "SM",
    bgColor: "bg-[#0063EB]",
  },
  {
    quote:
      "The pricing model sold me immediately — we pay for transactions, not per user. Our whole brokerage is on it and the monthly bill is still lower than what we were paying for just a document tool before.",
    name: "James Okafor",
    role: "Team Lead",
    company: "Okafor Properties",
    initials: "JO",
    bgColor: "bg-emerald-600",
  },
  {
    quote:
      "As a transaction coordinator juggling 30 active files, I need a system I can trust. Paperless Pipeline keeps everything organized, sends reminders before I even think to ask, and my agents actually use it — which is half the battle.",
    name: "Tara Lindqvist",
    role: "Transaction Coordinator",
    company: "Summit Escrow Services",
    initials: "TL",
    bgColor: "bg-purple-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#ECEEF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#030712] mb-4">
            Trusted by Teams Like Yours
          </h2>
          <p className="text-lg text-[#4F4F4F] max-w-2xl mx-auto">
            Real estate professionals across the country rely on Paperless
            Pipeline to keep their transactions on track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[#4F4F4F] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-xs font-semibold text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#030712]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#6C757D]">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
