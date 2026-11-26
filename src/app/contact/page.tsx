import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/data/company";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Start a Project with Maximum Pixel",
  description:
    "Start a video production, editing, or product shoot project with Maximum Pixel in Jaipur. Reach us via form, WhatsApp (+91 78787 36798) or email.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Maximum Pixel",
    description:
      "Get in touch with Maximum Pixel in Jaipur for video shoots, post-production editing, and product photography.",
    url: `${COMPANY_INFO.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Maximum Pixel",
    description:
      "Start a video production or editing project with Maximum Pixel in Jaipur, Rajasthan.",
    url: `${COMPANY_INFO.siteUrl}/contact`,
    mainEntity: {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: COMPANY_INFO.name,
      telephone: "+917878736798",
      email: COMPANY_INFO.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
  };

  const instagram = SOCIAL_LINKS.find((s) => s.name === "Instagram");

  return (
    <div className="bg-[#F4F3EF] text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-12 border-b border-[#DAD8D1]">
        <div className="max-w-3xl space-y-4">
          <p className="editorial-label text-[#A78B70]">Start a Project</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.02]">
            LET&apos;S CREATE SOMETHING WORTH WATCHING.
          </h1>
          <p className="text-base sm:text-lg text-[#777873] leading-relaxed">
            Tell us about your brand, project scope, and timeline. We review every inquiry directly and follow up with clear next steps.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Channels */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="border border-[#DAD8D1] bg-[#FFFFFF] p-6 sm:p-8 rounded-[2px] space-y-6">
              <div className="space-y-1">
                <p className="editorial-label text-[#A78B70]">Direct Contact</p>
                <h2 className="font-display font-semibold text-xl text-[#171717]">
                  Studio Channels
                </h2>
              </div>

              <div className="divide-y divide-[#DAD8D1] text-sm">
                <div className="py-4 first:pt-0">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#777873] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#A78B70]" />
                    <span>WhatsApp &amp; Phone</span>
                  </span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 font-medium text-[#171717] hover:text-[#A78B70] transition-colors"
                  >
                    <span>{COMPANY_INFO.phone}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="py-4">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#777873] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#A78B70]" />
                    <span>Email</span>
                  </span>
                  <div className="mt-1.5 flex flex-col gap-1">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-medium text-[#171717] hover:text-[#A78B70] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.secondaryEmail}`}
                      className="text-xs text-[#777873] hover:text-[#171717] transition-colors break-all"
                    >
                      {COMPANY_INFO.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="py-4 last:pb-0">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#777873] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A78B70]" />
                    <span>Location</span>
                  </span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 font-medium text-[#171717] hover:text-[#A78B70] transition-colors"
                  >
                    <span>{COMPANY_INFO.location}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {instagram && (
                <div className="pt-4 border-t border-[#DAD8D1] flex items-center justify-between text-xs">
                  <span className="text-[#777873] uppercase tracking-[0.12em]">Instagram</span>
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#171717] hover:text-[#A78B70]"
                  >
                    <span>{instagram.handle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="border border-[#DAD8D1] bg-[#171717] text-[#F4F3EF] p-6 sm:p-8 rounded-[2px] space-y-3">
              <p className="editorial-label text-[#A78B70]">After You Submit</p>
              <p className="text-sm text-[#DAD8D1] leading-relaxed">
                We review your brief, align on visual references and shoot logistics, and share a written quotation valid for 15 days.
              </p>
            </div>
          </aside>

          {/* Right Form */}
          <div className="lg:col-span-8 border border-[#DAD8D1] bg-[#FFFFFF] p-6 sm:p-10 rounded-[2px] space-y-6">
            <div className="border-b border-[#DAD8D1] pb-5 space-y-1">
              <p className="editorial-label text-[#A78B70]">Project Brief</p>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-[#171717]">
                Send an Inquiry
              </h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
