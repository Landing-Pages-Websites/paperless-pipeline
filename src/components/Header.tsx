"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems, type NavItem } from "@/data/navigation";

function DropdownMenu({ item }: { item: NavItem }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-sm font-normal text-[#000000] hover:text-[#0063EB] transition-colors py-2">
        {item.label}
        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm text-[#000000] hover:bg-[#EEF4FF] hover:text-[#0063EB] transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* Announcement banner */}
      <div className="flex items-center justify-center gap-3 bg-[#0063EB] px-4 py-4">
        <p className="text-center text-[17px] font-normal leading-6 text-white">
          See our AI Roadmap for Transaction Management
        </p>
        <a
          href="#"
          className="shrink-0 rounded-[6px] bg-[#292929] px-3 py-0.5 text-[15px] font-normal leading-6 text-white transition-colors hover:bg-black/70"
        >
          Learn More
        </a>
      </div>

      {/* Main nav bar — 96px tall */}
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-[108px]">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/figma/logo-full.png"
              alt="Paperless Pipeline"
              width={167}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-[16px] font-normal text-[#000000] transition-colors hover:text-[#0063EB]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* Try It Free — primary blue, ring shadow */}
            <Link
              href="/signup"
              className="inline-flex h-10 items-center rounded-lg border border-white/40 bg-[#0063EB] px-3 text-[16px] font-medium text-white shadow-[0_0_0_1px_#046EFF,0_1px_2px_rgba(4,110,255,0.56)] transition-colors hover:bg-[#046EFF]"
            >
              Try It Free
            </Link>
            {/* Log In — white bg, subtle shadow */}
            <Link
              href="/login"
              className="inline-flex h-10 items-center rounded-lg bg-white px-3 text-[16px] font-medium text-[#000000] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:text-[#0063EB]"
            >
              Log In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#030712] hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-[#030712]">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-5" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.href} className="mb-1">
              {item.children ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-[#030712] hover:text-[#0063EB] transition-colors"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-3 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-[#000000] hover:text-[#0063EB] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2.5 text-sm font-medium text-[#030712] hover:text-[#0063EB] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="px-5 py-5 border-t border-gray-100 flex flex-col gap-3">
          <Link
            href="/login"
            className="text-center text-sm font-medium text-[#000000] hover:text-[#0063EB] py-2.5 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-center text-sm font-medium text-white bg-[#0063EB] hover:bg-[#046EFF] px-5 py-3 rounded-lg transition-colors"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(4, 110, 255, 1), 0px 1px 2px 0px rgba(4, 110, 255, 0.56)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Try It Free
          </Link>
        </div>
      </div>
    </header>
  );
}
