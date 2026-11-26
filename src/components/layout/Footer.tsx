import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO, NAV_ITEMS, SOCIAL_LINKS } from "@/data/company";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const instagram = SOCIAL_LINKS.find((s) => s.name === "Instagram");
  const whatsapp = SOCIAL_LINKS.find((s) => s.name === "WhatsApp");

  return (
    <footer className="bg-[#171717] text-[#F4F3EF] border-t border-[#2D2D2A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2D2D2A]">
          {/* Col 1: Brand & Studio Description */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-[#B8B6AF] leading-relaxed max-w-sm">
              {COMPANY_INFO.shortDesc}
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#A78B70]">
              {COMPANY_INFO.location}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#777873]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#DAD8D1] hover:text-[#FFFFFF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact & Channels */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#777873]">
              Contact &amp; Channels
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#DAD8D1] hover:text-[#FFFFFF] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              {whatsapp && (
                <li>
                  <a
                    href={whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#DAD8D1] hover:text-[#FFFFFF] transition-colors"
                  >
                    <span>WhatsApp ({COMPANY_INFO.phone})</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A78B70]" />
                  </a>
                </li>
              )}
              {instagram && (
                <li>
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#DAD8D1] hover:text-[#FFFFFF] transition-colors"
                  >
                    <span>Instagram ({instagram.handle})</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A78B70]" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#777873]">
          <p>
            © {COMPANY_INFO.copyrightYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#DAD8D1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#DAD8D1] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
