"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Users, ClipboardList } from "lucide-react";

const roles = [
  {
    id: "brokers",
    tabLabel: "For brokers",
    tabSubtitle: "Close deals faster",
    href: "/how-it-works/brokers",
    cardHeading: "For brokers",
    cardDescription:
      "Get full visibility into every transaction in your brokerage. Track agent production, manage compliance, and scale without adding overhead.",
    Icon: Building2,
  },
  {
    id: "teams",
    tabLabel: "For teams",
    tabSubtitle: "Seamless collaboration",
    href: "/how-it-works/teams",
    cardHeading: "For teams",
    cardDescription:
      "Coordinate agents, coordinators, and support staff in one shared workspace. Standardize your process and close more deals with less back-and-forth.",
    Icon: Users,
  },
  {
    id: "tcs",
    tabLabel: "For TCs and admins",
    tabSubtitle: "Effortless management",
    href: "/how-it-works/transaction-coordinators",
    cardHeading: "For TCs and admins",
    cardDescription:
      "Manage every detail with precision using structured workflows that keep everything on track.",
    Icon: ClipboardList,
  },
];

export default function RolesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = roles[activeIndex];

  return (
    <section className="py-16 px-6 md:py-[120px] md:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
        {/* Header */}
        <div className="max-w-[757px] w-full flex flex-col items-stretch gap-3 text-center">
          <p
            className="text-[#0063EB] font-medium text-sm leading-6 uppercase"
            style={{ letterSpacing: "0.0893em" }}
          >
            Built for Every Role
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="text-black font-semibold text-4xl md:text-[48px] leading-tight">
              Built for the people keeping transactions moving
            </h2>
            <p className="text-[#4F4F4F] font-normal text-base leading-[150%]">
              Designed to support every stakeholder in the process—so brokers,
              teams, and coordinators can work smarter, stay aligned, and close
              faster.
            </p>
          </div>
        </div>

        {/* Tabs + Content panel */}
        <div className="w-full flex flex-col gap-8">
          {/* Tab row */}
          <div className="flex flex-col md:flex-row gap-6">
            {roles.map((role, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveIndex(i)}
                  className="flex-1 flex flex-col gap-6 p-4 rounded-2xl text-left transition-all"
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(250deg, rgba(255,233,91,1) 0%, rgba(13,71,193,1) 100%)",
                        }
                      : {}
                  }
                >
                  {/* Icon + text row */}
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className="flex items-center justify-center p-4 rounded-full shrink-0"
                      style={{
                        backgroundColor: isActive
                          ? "#0063EB"
                          : "rgba(79,79,79,0.25)",
                      }}
                    >
                      <role.Icon size={24} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[18px] leading-8 text-[#1E1E1E]">
                        {role.tabLabel}
                      </span>
                      <span className="font-normal text-base leading-6 text-[#4F4F4F]">
                        {role.tabSubtitle}
                      </span>
                    </div>
                  </div>
                  {/* Slider bar */}
                  <div
                    className="w-full h-0.5 rounded-full"
                    style={{
                      backgroundColor: "#ECEEF2",
                      border: isActive
                        ? "none"
                        : "0.5px solid #D5D9E2",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div
            className="relative rounded-3xl border border-[#D5D9E2] p-4 overflow-hidden min-h-[520px]"
            style={{
              background:
                "linear-gradient(135deg, #030712 0%, #061a42 50%, #0a2870 100%)",
            }}
          >
            {/* Product screenshot — left, absolute on desktop */}
            <div className="hidden md:block absolute left-[66px] top-[80px] w-[606px] h-[360px] rounded-xl overflow-hidden bg-[#1a2744] opacity-80">
              {/* Placeholder — replace with next/image when asset is available */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a2744] to-[#0a1628] flex items-center justify-center">
                <div className="w-full h-full opacity-40 bg-[url('/file.svg')] bg-center bg-no-repeat" />
              </div>
            </div>

            {/* White card — right-aligned */}
            <div
              className="relative z-10 ml-auto flex flex-col justify-between bg-white rounded-2xl p-8 w-full md:w-[526px] md:h-[488px]"
              style={{
                boxShadow: "0px 1px 2px 0px rgba(35,39,46,0.08)",
              }}
            >
              <div className="flex flex-col gap-6">
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <active.Icon size={32} className="text-[#0063EB]" />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-semibold text-[24px] leading-[40px] text-[#1E1E1E]"
                    style={{ letterSpacing: "-0.0208em" }}
                  >
                    {active.cardHeading}
                  </h3>
                  <p className="font-normal text-xl leading-8 text-[#4F4F4F]">
                    {active.cardDescription}
                  </p>
                </div>
              </div>
              {/* CTA button */}
              <Link
                href={active.href}
                className="inline-flex items-center gap-2 bg-[#0063EB] text-white font-medium text-sm leading-6 px-3 py-1.5 rounded-lg self-start"
                style={{
                  boxShadow:
                    "0px 0px 0px 1px rgba(4,110,255,1), 0px 1px 2px 0px rgba(4,110,255,0.64)",
                }}
              >
                Try Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
