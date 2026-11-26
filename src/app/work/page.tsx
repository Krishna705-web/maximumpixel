import React from "react";
import type { Metadata } from "next";
import { WorkGallery } from "@/components/work/WorkGallery";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Work | Video Production & Editing Portfolio",
  description:
    "Explore Maximum Pixel's editing showcases and production concepts across commercial films, brand videos, hospitality and video editing in Jaipur.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Maximum Pixel",
    description:
      "Selected editing showcases and studio concept studies by Maximum Pixel in Jaipur.",
    url: `${COMPANY_INFO.siteUrl}/work`,
  },
};

export default function WorkPage() {
  return (
    <div className="bg-[#F4F3EF] text-[#171717]">
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="space-y-4 pb-10 border-b border-[#DAD8D1]">
          <p className="editorial-label text-[#A78B70]">Portfolio / Archive</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.02]">
            SELECTED WORK.
          </h1>
          <p className="text-sm sm:text-base text-[#777873] max-w-2xl leading-relaxed">
            A curated index of post-production studies and production concepts. Concept studies and stock-footage editing showcases are explicitly labelled and will be replaced as approved client productions are added.
          </p>
        </div>

        <div className="pt-8">
          <WorkGallery />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

