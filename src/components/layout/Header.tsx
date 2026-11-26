"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS, COMPANY_INFO } from "@/data/company";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
          scrolled
            ? "bg-[#F4F3EF]/95 backdrop-blur-sm border-[#DAD8D1]"
            : "bg-[#F4F3EF] border-[#DAD8D1]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-6">
          <div className="shrink-0">
            <Logo variant="light" />
          </div>

          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "text-[#171717]"
                      : "text-[#777873] hover:text-[#171717]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A78B70]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2.5 border border-[#171717] bg-[#171717] text-[#F4F3EF] hover:bg-transparent hover:text-[#171717] text-[11px] font-medium uppercase tracking-[0.14em] rounded-[2px] transition-colors duration-200"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 -mr-2 text-[#171717] hover:text-[#777873] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78B70] rounded-[2px]"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#F4F3EF] md:hidden flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col border-t border-[#DAD8D1]" aria-label="Mobile Menu">
            {NAV_ITEMS.map((item, idx) => {
              const active = isRouteActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-[#DAD8D1] font-display text-2xl font-semibold tracking-tight transition-colors ${
                    active ? "text-[#171717]" : "text-[#777873] hover:text-[#171717]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans font-medium tracking-[0.14em] text-[#A78B70]">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="space-y-5 pt-8">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 px-6 bg-[#171717] text-[#F4F3EF] text-xs font-medium uppercase tracking-[0.14em] rounded-[2px] flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex flex-col gap-1.5 text-xs text-[#777873]">
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#171717]">
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="hover:text-[#171717]"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="pt-1 uppercase tracking-[0.12em] text-[10px]">
                {COMPANY_INFO.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
