"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS, COMPANY_INFO } from "@/data/company";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Preload all main routes immediately so page switches are instant 0ms
  useEffect(() => {
    NAV_ITEMS.forEach((item) => {
      try {
        router.prefetch(item.href);
      } catch (e) {
        // Ignore prefetch error
      }
    });
    router.prefetch("/contact");
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.08] py-1.5 sm:py-2 shadow-lg"
            : "bg-[#0A0A0A] py-1.5 sm:py-2 md:py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  onMouseEnter={() => router.prefetch(item.href)}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-[#A0A0A0] hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="header-active-tab"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5B2EE8] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              prefetch={true}
              onMouseEnter={() => router.prefetch("/contact")}
              className="px-5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 text-white text-sm font-semibold tracking-wide transition-all active:scale-95 flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#A78BFA]" />
            </Link>
          </div>

          {/* Mobile Right: Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2EE8] rounded-lg"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-white" />
              ) : (
                <Menu className="w-7 h-7 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-3 my-auto">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      prefetch={true}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-display font-black tracking-wide py-2.5 transition-colors flex items-center justify-between border-b border-white/10 ${
                        isActive
                          ? "text-[#5B2EE8]"
                          : "text-white hover:text-[#FF7A1A]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#5B2EE8]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-white/10 space-y-3"
            >
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm text-[#A0A0A0] hover:text-white"
              >
                <Mail className="w-4 h-4 text-[#5B2EE8]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-[#A0A0A0] hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#22B14C]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <div className="pt-2 space-y-2.5">
                <Link
                  href="/contact"
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#5B2EE8] text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
