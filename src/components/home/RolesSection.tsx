"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, UserRound, Users, type LucideIcon } from "lucide-react";

const roles: {
  id: string;
  tabLabel: string;
  tabSubtitle: string;
  href: string;
  cardHeading: string;
  cardDescription: string;
  Icon: LucideIcon;
}[] = [
  {
    id: "brokers",
    tabLabel: "For brokers",
    tabSubtitle: "Close deals faster",
    href: "/how-it-works/brokers",
    cardHeading: "For brokers",
    cardDescription:
      "Get full visibility into every transaction in your brokerage, from agent production to compliance.",
    Icon: UserRound,
  },
  {
    id: "teams",
    tabLabel: "For teams",
    tabSubtitle: "Seamless collaboration",
    href: "/how-it-works/teams",
    cardHeading: "For teams",
    cardDescription:
      "Coordinate agents, coordinators, and support staff in one shared workspace.",
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
  const [activeIndex, setActiveIndex] = useState(2);
  const active = roles[activeIndex];

  return (
    <section className="bg-white px-6 py-[94px] sm:px-10 lg:px-[80px]">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center">
        <div className="max-w-[700px] text-center">
          <p className="text-[12px] font-medium uppercase leading-6 tracking-[0.14em] text-[#0063EB]">
            Built for Every Role
          </p>
          <h2 className="mt-5 text-[42px] font-semibold leading-[1.28] text-black max-md:text-[34px]">
            Built for the people keeping transactions moving
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-[15px] font-normal leading-6 text-[#4F4F4F]">
            Designed to support every stakeholder in the process—so brokers, teams, and
            coordinators can work smarter, stay aligned, and close faster.
          </p>
        </div>

        <div className="mt-11 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {roles.map((role, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={role.id}
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-[90px] items-center gap-4 rounded-[12px] px-4 text-left transition-colors ${
                  isActive
                    ? "bg-[linear-gradient(100deg,#EAF2FF_0%,#F7F5E9_100%)]"
                    : "bg-white"
                }`}
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
                    isActive ? "bg-[#0063EB]" : "bg-[#D9D9D9]"
                  }`}
                >
                  <role.Icon size={18} className="text-white" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[16px] font-bold leading-6 text-[#1E1E1E]">
                    {role.tabLabel}
                  </span>
                  <span className="text-[14px] font-normal leading-5 text-[#4F4F4F]">
                    {role.tabSubtitle}
                  </span>
                  <span
                    className={`mt-5 h-0.5 w-full rounded-full ${
                      isActive ? "bg-[#0063EB]" : "bg-[#D5D9E2]"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-8 min-h-[458px] w-full overflow-hidden rounded-[18px] border border-[#D5D9E2] bg-[#EEF4FF]">
          <Image
            src="/images/figma/dark-gradient-bg.png"
            alt=""
            fill
            className="object-cover opacity-80"
            aria-hidden="true"
          />
          <div className="relative z-10 grid min-h-[458px] grid-cols-1 gap-5 p-4 md:grid-cols-[1.35fr_0.95fr]">
            <div className="relative hidden overflow-hidden rounded-[12px] md:block">
              <Image
                src="/images/figma/roles-screenshot.png"
                alt="Overdue and upcoming tasks screen"
                fill
                unoptimized
                className="object-contain object-center"
                quality={90}
              />
            </div>

            <div className="flex flex-col justify-between rounded-[14px] bg-white p-8 shadow-[0_1px_2px_rgba(35,39,46,0.08)] md:p-9">
              <div>
                <active.Icon size={24} className="text-[#0063EB]" />
                <h3 className="mt-9 text-[24px] font-semibold leading-8 tracking-[-0.02em] text-[#1E1E1E]">
                  {active.cardHeading}
                </h3>
                <p className="mt-4 max-w-[330px] text-[18px] font-normal leading-8 text-[#4F4F4F]">
                  {active.cardDescription}
                </p>
              </div>
              <Link
                href={active.href}
                className="inline-flex h-9 w-fit items-center justify-center rounded-[8px] bg-[#0063EB] px-4 text-[14px] font-medium leading-6 text-white shadow-[0_0_0_1px_#046EFF,0_1px_2px_rgba(4,110,255,0.64)] transition-colors hover:bg-[#046EFF]"
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
