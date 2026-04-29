"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerColumns: Record<string, { label: string; href: string }[]> = {
  "GET STARTED": [
    { label: "Schedule a Demo", href: "/schedule-demo" },
    { label: "Contact Us", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/faqs" },
  ],
  FEATURES: [
    { label: "Transaction Management", href: "/features/transaction-management" },
    { label: "Pipeline eSign", href: "/features/pipeline-esign" },
    { label: "Commission Module", href: "/features/commissions-management" },
  ],
  RESOURCES: [
    { label: "Blogs", href: "/blog" },
    { label: "Commissions Calculator", href: "/commission-calculator" },
    { label: "Savings Calculator", href: "/savings-calculator" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  "FREE GUIDES": [
    { label: "Recruiting Real Estate Agents", href: "/guides/recruiting-real-estate-agents" },
    { label: "Real Estate Transaction Process", href: "/guides/real-estate-transaction-process" },
    { label: "Real Estate Checklist Template", href: "/guides/real-estate-checklist-template" },
    { label: "How to Start a Real Estate Brokerage", href: "/guides/how-to-start-a-real-estate-brokerage" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const isTcPage = pathname === "/how-it-works/transaction-coordinators";

  const footerCta = isTcPage
    ? {
        heading: (
          <>
            Run Your TC Business
            <br />
            Without the Chaos
          </>
        ),
        subtext:
          "Try Paperless Pipeline free and see how simple transaction management can be.",
      }
    : {
        heading: (
          <>
            Run Your Brokerage
            <br />
            Without the Chaos
          </>
        ),
        subtext:
          "Start your free trial today and see how simple transaction and commission management can be.",
      };

  return (
    <footer className="bg-white">
      <div className="px-5 pb-10 pt-0">
        <div
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] px-5 pb-16 pt-[132px] text-center sm:px-8 lg:px-[60px] lg:pb-[92px] lg:pt-[148px]"
          style={{
            backgroundImage: "url('/images/figma/dark-gradient-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center">
            <h2 className="max-w-[560px] text-[40px] font-semibold leading-[1.15] text-white md:text-[42px]">
              {footerCta.heading}
            </h2>
            <p className="mt-7 max-w-[640px] text-[20px] font-normal leading-8 text-white">
              {footerCta.subtext}
            </p>
            <Link
              href="/signup"
              className="mt-9 inline-flex h-12 items-center justify-center rounded-[8px] bg-white px-5 text-[16px] font-medium leading-6 text-[#0063EB] shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-[#F8FAFC]"
            >
              Start My 14-Day Free Trial →
            </Link>
          </div>

          <div className="relative z-10 mx-auto mt-[78px] flex min-h-[520px] max-w-[1280px] flex-col justify-between rounded-[14px] bg-white/80 p-6 text-left shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-md sm:p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)] md:gap-12 lg:gap-16">
              <div className="flex flex-col">
                <Image
                  src="/images/figma/logo-full.png"
                  alt="Paperless Pipeline"
                  width={150}
                  height={29}
                  className="object-contain"
                />
                <p className="mt-11 max-w-[240px] text-[18px] font-normal leading-[1.25] text-[#1E1E1E]">
                  Streamlining transaction management for modern real estate
                  teams.
                </p>
                <div className="mt-11 flex items-center gap-3">
                  {[
                    { label: "LinkedIn", mark: "in" },
                    { label: "Instagram", mark: "ig" },
                    { label: "X", mark: "X" },
                  ].map(({ label, mark }) => (
                    <Link
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-[#6C757D] text-[13px] font-medium leading-none text-[#475569] transition-colors hover:border-[#0063EB] hover:text-[#0063EB]"
                    >
                      {mark}
                    </Link>
                  ))}
                </div>
              </div>

              {Object.entries(footerColumns).map(([heading, links]) => (
                <div key={heading} className="flex flex-col gap-10">
                  <h3 className="text-[16px] font-normal uppercase leading-6 text-[#4F4F4F]">
                    {heading}
                  </h3>
                  <ul className="flex flex-col gap-6">
                    {links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[18px] font-normal leading-[1.2] text-black transition-colors hover:text-[#0063EB]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <p className="text-[14px] font-normal leading-5 text-[#4F4F4F]">
                ©2026; All Rights Reserved
              </p>

              <div className="flex flex-wrap items-center gap-x-16 gap-y-3">
                <Link
                  href="/cookie-policy"
                className="text-[14px] font-normal leading-5 text-[#4F4F4F] underline transition-colors hover:text-[#0063EB]"
                >
                  Cookies Settings
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-[14px] font-normal leading-5 text-[#4F4F4F] underline transition-colors hover:text-[#0063EB]"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-[14px] font-normal leading-5 text-[#4F4F4F] underline transition-colors hover:text-[#0063EB]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
