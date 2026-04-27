import Link from "next/link";
import Image from "next/image";

const footerColumns: Record<string, { label: string; href: string }[]> = {
  COMPANY: [
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
  ],
  "FREE GUIDES": [
    { label: "Recruiting Real Estate Agents", href: "/guides/recruiting-real-estate-agents" },
    { label: "Real Estate Transaction Process", href: "/guides/real-estate-transaction-process" },
    { label: "Real Estate Checklist Template", href: "/guides/real-estate-checklist-template" },
    { label: "How to Start a Real Estate Brokerage", href: "/guides/how-to-start-a-real-estate-brokerage" },
  ],
};

export default function Footer() {
  return (
    <footer>
      {/* CTA block — dark rounded card, 80px padding, border-radius 24px */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div
          className="max-w-[1400px] mx-auto rounded-3xl flex flex-col items-center text-center gap-6 px-8 py-20 md:px-20 overflow-hidden relative"
          style={{
            backgroundImage: "url('/images/figma/dark-gradient-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Person photo overlay — right side, low opacity */}
          <div className="absolute right-0 top-0 h-full w-[40%] pointer-events-none">
            <Image
              src="/images/figma/cta-image-2.png"
              alt=""
              fill
              className="object-cover object-left opacity-40"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            {/* Eyebrow */}
            <p
              className="text-sm font-medium text-white leading-6 uppercase"
              style={{ letterSpacing: "0.0893em" }}
            >
              Call to Action
            </p>

            {/* Heading + subtext */}
            <div className="flex flex-col items-center gap-4 max-w-[1068px] w-full">
              <h2
                className="text-[40px] font-semibold text-white leading-[48px] text-center"
              >
                Switching doesn&apos;t mean starting over
              </h2>
              <p
                className="text-xl font-normal text-white leading-8 text-center"
                style={{ letterSpacing: "-0.01em" }}
              >
                We&apos;ll help you get set up without disrupting active deals.
              </p>
            </div>

            {/* CTA button — white bg, blue text */}
            <Link
              href="/signup"
              className="inline-flex items-center text-sm font-medium text-[#0063EB] bg-white hover:bg-gray-50 rounded-lg px-6 py-3 transition-colors"
              style={{
                boxShadow:
                  "0px 0px 0px 1px rgba(255, 255, 255, 1), 0px 1px 2px 0px rgba(255, 255, 255, 0.64)",
              }}
            >
              Start My 14-Day Free Trial →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer links section — white background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(footerColumns).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-10">
                {/* Column heading: 18px Regular UPPERCASE #4F4F4F */}
                <h3
                  className="text-[18px] font-normal text-[#4F4F4F] leading-6 uppercase"
                  style={{ letterSpacing: "-0.0133em" }}
                >
                  {heading}
                </h3>
                {/* Links: 18px Regular #000000, gap 24px */}
                <ul className="flex flex-col gap-6">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[18px] font-normal text-[#000000] leading-6 hover:text-[#0063EB] transition-colors"
                        style={{ letterSpacing: "-0.0133em" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo + copyright */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/figma/logo.png"
                alt="Paperless Pipeline"
                width={32}
                height={32}
                className="object-contain"
              />
              <p
                className="text-[14px] font-normal text-[#4F4F4F] leading-5"
                style={{ letterSpacing: "-0.0057em" }}
              >
                ©2026; All Rights Reserved
              </p>
            </div>

            {/* Legal links: 14px Regular #4F4F4F underlined, gap 24px */}
            <div className="flex items-center gap-6">
              <Link
                href="/cookie-policy"
                className="text-[14px] font-normal text-[#4F4F4F] leading-5 underline hover:text-[#0063EB] transition-colors"
                style={{ letterSpacing: "-0.0057em" }}
              >
                Cookies Settings
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[14px] font-normal text-[#4F4F4F] leading-5 underline hover:text-[#0063EB] transition-colors"
                style={{ letterSpacing: "-0.0057em" }}
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[14px] font-normal text-[#4F4F4F] leading-5 underline hover:text-[#0063EB] transition-colors"
                style={{ letterSpacing: "-0.0057em" }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
