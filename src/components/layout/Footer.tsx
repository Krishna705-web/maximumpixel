import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CornerBurst } from "@/components/ui/CornerBurst";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/data/company";
import { MapPin, Mail, Phone, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const renderSocialIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-white";
    switch (name.toLowerCase()) {
      case "instagram":
        return <Instagram className={iconClass} />;
      case "youtube":
        return <Youtube className={iconClass} />;
      case "whatsapp":
        return <MessageCircle className={iconClass} />;
      case "linkedin":
        return <Linkedin className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/[0.08] pt-12 pb-16 overflow-hidden">
      {/* Decorative Corner Burst */}
      <CornerBurst size={170} className="opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Col 1: Brand & Blurb */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-[#CCCCCC] leading-relaxed max-w-sm">
              {COMPANY_INFO.shortDesc}
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div className="md:col-span-4 lg:col-span-4 space-y-3">
            <h4 className="font-display font-black text-white text-sm tracking-wider uppercase">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CCCCCC]">
              <li className="flex items-center gap-2.5 group">
                <MapPin className="w-4 h-4 text-[#5B2EE8] shrink-0" />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.location}
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-[#5B2EE8] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-[#5B2EE8] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow Us */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h4 className="font-display font-black text-white text-sm tracking-wider uppercase">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow MaximumPixel on ${social.name}`}
                  className={`w-10 h-10 rounded-xl ${social.bgColor} flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 shadow-md`}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#B5B5B5]">
          <p>© {COMPANY_INFO.copyrightYear} MaximumPixel. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
