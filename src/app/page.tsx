import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PROJECTS } from "@/data/projects";
import { CORE_SERVICES } from "@/data/services";
import { PROCESS_STAGES } from "@/data/process";
import { FOUNDERS } from "@/data/founders";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Maximum Pixel | Video Production & Editing Studio in Jaipur",
  description:
    "Maximum Pixel is a Jaipur-based video production and editing studio creating professional visual content for brands, businesses and creators.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="bg-[#F4F3EF] text-[#171717]">
      {/* ═══════════════════════════════════════════════════════
          SECTION 01 — HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#DAD8D1]">
          <span className="editorial-label text-[#777873]">
            {COMPANY_INFO.cityLabel} · Video Production &amp; Post-Production
          </span>
          <span className="editorial-label text-[#A78B70]">
            {COMPANY_INFO.tagline}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-10 sm:pt-14 items-end">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-[-0.035em] leading-[0.95] text-[#171717]">
              WE MAKE
              <br />
              IDEAS VISIBLE.
            </h1>

            <p className="text-base sm:text-lg text-[#777873] max-w-xl leading-relaxed">
              Video production and post-production for brands, businesses and creators.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/work" variant="primary" size="lg" showArrow>
                EXPLORE OUR WORK
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                START A PROJECT
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171717] rounded-[2px] border border-[#DAD8D1]">
              <video
                src="/videos/cafe-edit.mp4"
                poster="/images/projects/cafe-reel.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Maximum Pixel editing showcase preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#171717]/80 text-[#F4F3EF] text-[10px] font-medium uppercase tracking-[0.14em] rounded-[2px]">
                Post-Production Reel Study
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[#777873]">
              <span>From the first frame to the final cut</span>
              <span>Jaipur, IN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 02 — SELECTED WORK
          ═══════════════════════════════════════════════════════ */}
      <section className="border-t border-[#DAD8D1] bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DAD8D1]">
            <div className="space-y-3">
              <p className="editorial-label text-[#A78B70]">02 / Portfolio</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#171717]">
                SELECTED WORK.
              </h2>
              <p className="text-sm sm:text-base text-[#777873] max-w-md">
                A selection of projects, ideas and visual stories.
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#171717] hover:text-[#A78B70] transition-colors self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pt-12">
            {featuredProjects.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 0.05}>
                <ProjectCard project={project} index={idx} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 03 — SERVICES (DARK CINEMATIC SECTION)
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#171717] text-[#F4F3EF] border-t border-[#2D2D2A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2D2D2A]">
            <div className="space-y-3">
              <p className="editorial-label text-[#A78B70]">03 / Capabilities</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#FFFFFF]">
                PRODUCTION MEETS PRECISION.
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#DAD8D1] hover:text-[#FFFFFF] transition-colors self-start md:self-auto"
            >
              <span>Explore Services &amp; Pricing</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 divide-y md:divide-y-0 border-b border-[#2D2D2A]">
            {CORE_SERVICES.map((service, idx) => (
              <Reveal
                key={service.id}
                delay={idx * 0.05}
                className="py-8 sm:py-10 border-b border-[#2D2D2A] md:last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 flex flex-col justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#A78B70]">
                      {service.number} —
                    </span>
                    <Link
                      href={`/services#${service.id}`}
                      className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#777873] hover:text-[#FFFFFF] transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-[#FFFFFF]">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#B8B6AF] leading-relaxed max-w-md">
                    {service.shortDescription}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#F4F3EF] hover:text-[#A78B70] transition-colors"
                  >
                    <span>Enquire About {service.title.toLowerCase()}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 04 — OUR PROCESS
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F3EF] border-t border-[#DAD8D1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <Reveal className="space-y-3 pb-12 border-b border-[#DAD8D1]">
            <p className="editorial-label text-[#A78B70]">04 / Workflow</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#171717]">
              FROM CONCEPT TO FINAL CUT.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-b border-[#DAD8D1]">
            {PROCESS_STAGES.map((stage, idx) => (
              <Reveal
                key={stage.step}
                delay={idx * 0.05}
                className="py-8 sm:py-10 lg:pr-6 border-b sm:border-b-0 lg:border-r last:border-r-0 last:border-b-0 border-[#DAD8D1] lg:pl-6 first:lg:pl-0 flex flex-col justify-between gap-6"
              >
                <span className="font-display font-bold text-xs tracking-[0.14em] text-[#A78B70]">
                  {stage.step}
                </span>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-xl tracking-[-0.02em] text-[#171717]">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#777873] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 05 — ABOUT THE STUDIO
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFFFF] border-t border-[#DAD8D1]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-5 space-y-5">
              <p className="editorial-label text-[#A78B70]">05 / The Studio</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.03em] leading-[1.08] text-[#171717]">
                GOOD VISUALS START WITH GOOD THINKING.
              </h2>
              <p className="text-sm sm:text-base text-[#777873] leading-relaxed">
                Maximum Pixel is an independent video production and post-production studio in Jaipur led by founders Krishna Rajak, Vishwajeet Barman and Rahul Gyanchandani. We focus on thoughtful pre-production, disciplined camera work and clean editing—without agency bloat.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="outline" size="md" showArrow>
                  Read About the Studio
                </Button>
              </div>
            </Reveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {FOUNDERS.map((founder, idx) => (
                <Reveal key={founder.id} delay={idx * 0.06} className="space-y-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#171717] rounded-[2px] border border-[#DAD8D1]">
                    <Image
                      src={founder.imageUrl}
                      alt={`${founder.name} — ${founder.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-[#171717]">
                      {founder.name}
                    </h3>
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#777873] mt-0.5">
                      {founder.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 06 — FINAL CTA
          ═══════════════════════════════════════════════════════ */}
      <FinalCTA />
    </div>
  );
}
