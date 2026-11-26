import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { FOUNDERS, STUDIO_PHILOSOPHY } from "@/data/founders";
import { STUDIO_GEAR } from "@/data/pricing";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About | Maximum Pixel Studio Jaipur",
  description:
    "Meet Krishna Rajak, Vishwajeet Barman and Rahul Gyanchandani—the founders behind Maximum Pixel, an independent video production and editing studio in Jaipur.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Maximum Pixel",
    description:
      "Independent video production and post-production studio in Jaipur founded by Krishna Rajak, Vishwajeet Barman and Rahul Gyanchandani.",
    url: `${COMPANY_INFO.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Maximum Pixel",
    description:
      "Independent video production and post-production studio in Jaipur, Rajasthan.",
    url: `${COMPANY_INFO.siteUrl}/about`,
    mainEntity: {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: COMPANY_INFO.name,
      foundingLocation: {
        "@type": "City",
        name: "Jaipur",
      },
      founders: FOUNDERS.map((f) => ({
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
      })),
    },
  };

  return (
    <div className="bg-[#F4F3EF] text-[#171717]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Studio Intro */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-16 border-b border-[#DAD8D1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-5">
            <p className="editorial-label text-[#A78B70]">About the Studio · Jaipur, India</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.03]">
              GOOD VISUALS START WITH GOOD THINKING.
            </h1>
            <p className="text-base sm:text-lg text-[#777873] leading-relaxed max-w-2xl">
              Maximum Pixel is an independent video production and post-production studio in Jaipur. Founded by three creators—Krishna Rajak, Vishwajeet Barman and Rahul Gyanchandani—we work directly with businesses, handicraft and product labels, and creators from the first frame to the final cut.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#171717] text-[#F4F3EF] p-8 sm:p-10 rounded-[2px] border border-[#2D2D2A] space-y-4">
              <span className="editorial-label text-[#A78B70]">Studio Principle</span>
              <p className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] leading-[1.12]">
                IDEAS INTO VISUALS.
                <br />
                STORIES INTO IMPACT.
              </p>
              <p className="text-xs uppercase tracking-[0.14em] text-[#B8B6AF] pt-2 border-t border-[#2D2D2A]">
                From the first frame to the final cut · Jaipur, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#FFFFFF] border-b border-[#DAD8D1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-10">
          <div className="space-y-2">
            <p className="editorial-label text-[#A78B70]">Brand Philosophy</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em]">
              How We Approach Every Shoot
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#DAD8D1] pt-10">
            {STUDIO_PHILOSOPHY.map((item) => (
              <div key={item.number} className="space-y-3">
                <span className="editorial-label text-[#A78B70]">{item.number}</span>
                <h3 className="font-display font-semibold text-xl text-[#171717]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#777873] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-[#F4F3EF] border-b border-[#DAD8D1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DAD8D1] pb-6">
            <div className="space-y-2">
              <p className="editorial-label text-[#A78B70]">Founding Team</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em]">
                Three Founders. Direct Collaboration.
              </h2>
            </div>
            <p className="text-sm text-[#777873] max-w-sm">
              You collaborate directly with the people directing, shooting and editing your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder) => (
              <div key={founder.id} className="space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#171717] border border-[#DAD8D1] rounded-[2px]">
                  <Image
                    src={founder.imageUrl}
                    alt={`${founder.name} — ${founder.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5 border-b border-[#DAD8D1] pb-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-xl text-[#171717]">
                      {founder.name}
                    </h3>
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#A78B70]">
                      {founder.designation}
                    </span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#777873]">
                    {founder.role} · {founder.focus}
                  </p>
                  <p className="text-sm text-[#777873] leading-relaxed pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Setup & Behind the Scenes */}
      <section className="bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="editorial-label text-[#A78B70]">Production Approach &amp; Gear</p>
              <h2 className="font-display font-bold text-3xl tracking-[-0.02em]">
                Practical Gear. Focused Execution.
              </h2>
              <p className="text-sm text-[#777873] leading-relaxed">
                We keep our production toolkit lean and reliable so budgets go toward preparation, framing, lighting and editing rather than unnecessary overhead.
              </p>
              <dl className="divide-y divide-[#DAD8D1] border-t border-b border-[#DAD8D1] text-sm pt-1">
                {STUDIO_GEAR.map((g) => (
                  <div key={g.category} className="py-3 flex justify-between gap-4">
                    <dt className="text-[#777873]">{g.category}</dt>
                    <dd className="font-medium text-[#171717] text-right">{g.tools}</dd>
                  </div>
                ))}
              </dl>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" showArrow>
                  Discuss a Shoot
                </Button>
              </div>
            </div>

            {/* BTS Placeholder Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <figure className="space-y-2">
                <div className="aspect-[4/3] w-full bg-[#F4F3EF] border border-dashed border-[#A78B70] rounded-[2px] flex flex-col items-center justify-center p-6 text-center">
                  <span className="editorial-label text-[#A78B70]">BTS Slot 01</span>
                  <p className="text-xs text-[#777873] mt-2 max-w-[220px]">
                    Placeholder for genuine on-location filming photograph (`public/images/behind-the-scenes/`).
                  </p>
                </div>
                <figcaption className="text-xs text-[#777873]">
                  Reserved for authentic on-set photography.
                </figcaption>
              </figure>

              <figure className="space-y-2">
                <div className="aspect-[4/3] w-full bg-[#F4F3EF] border border-dashed border-[#A78B70] rounded-[2px] flex flex-col items-center justify-center p-6 text-center">
                  <span className="editorial-label text-[#A78B70]">BTS Slot 02</span>
                  <p className="text-xs text-[#777873] mt-2 max-w-[220px]">
                    Placeholder for genuine post-production or studio setup photograph (`public/images/behind-the-scenes/`).
                  </p>
                </div>
                <figcaption className="text-xs text-[#777873]">
                  Reserved for authentic studio workspace photography.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
