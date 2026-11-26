import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CORE_SERVICES } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { PricingTables } from "@/components/services/PricingTables";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services & Rates | Video Production & Editing in Jaipur",
  description:
    "Explore Maximum Pixel's video production, video editing, shoot + edit packages, creative direction, product photography and transparent INR pricing in Jaipur.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Rates | Maximum Pixel",
    description:
      "Video production, editing, turnkey shoot + edit, creative direction and transparent INR rate card in Jaipur.",
    url: `${COMPANY_INFO.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Video Production & Post-Production",
    provider: {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.siteUrl,
      telephone: "+917878736798",
      priceRange: "₹400 - ₹24500",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
    ],
  };

  return (
    <div className="bg-[#F4F3EF] text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Services Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-14 border-b border-[#DAD8D1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="editorial-label text-[#A78B70]">Services &amp; Production</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.02]">
              PRODUCTION MEETS PRECISION.
            </h1>
            <p className="text-base sm:text-lg text-[#777873] max-w-2xl leading-relaxed">
              Structured production and post-production services for brands, handicraft labels, hospitality venues and creators—from initial planning through final export.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button href="#pricing" variant="outline" size="md">
              Jump to Rate Card
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Core Services */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 space-y-16">
        {CORE_SERVICES.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="border-b border-[#DAD8D1] pb-14 last:border-b-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Left Heading Column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="editorial-label text-[#A78B70]">{service.number} / Service</span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-[-0.02em] text-[#171717]">
                {service.title}
              </h2>
              <p className="text-sm text-[#777873] leading-relaxed">
                {service.detailedOverview}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="primary"
                  size="sm"
                  showArrow
                >
                  Enquire Now
                </Button>
                {service.relatedProjectSlug && (
                  <Link
                    href={`/work/${service.relatedProjectSlug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#171717] hover:text-[#A78B70] transition-colors"
                  >
                    <span>View Example</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Detail Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-[#FFFFFF] border border-[#DAD8D1] rounded-[2px] space-y-3">
                <h3 className="editorial-label text-[#171717]">What It Includes</h3>
                <ul className="space-y-2.5 text-sm text-[#777873]">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#A78B70] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#FFFFFF] border border-[#DAD8D1] rounded-[2px] space-y-3">
                <h3 className="editorial-label text-[#171717]">What You Receive</h3>
                <ul className="space-y-2.5 text-sm text-[#777873]">
                  {service.clientReceives.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#A78B70] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#FFFFFF] border border-[#DAD8D1] rounded-[2px] space-y-3">
                <h3 className="editorial-label text-[#171717]">Suitable Project Types</h3>
                <ul className="space-y-1.5 text-sm text-[#777873]">
                  {service.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#A78B70]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#FFFFFF] border border-[#DAD8D1] rounded-[2px] space-y-3">
                <h3 className="editorial-label text-[#171717]">Production Process</h3>
                <p className="text-sm text-[#777873] leading-relaxed">
                  {service.processSummary}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Complete Pricing Reference Section */}
      <section id="pricing" className="border-t border-[#DAD8D1] bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <PricingTables />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
