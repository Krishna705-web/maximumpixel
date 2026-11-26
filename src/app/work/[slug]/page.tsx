import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { PROJECTS, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { COMPANY_INFO } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Work`,
    description: project.shortDescription,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Maximum Pixel`,
      description: project.shortDescription,
      url: `${COMPANY_INFO.siteUrl}/work/${project.slug}`,
      images: [{ url: project.thumbnailUrl, alt: project.title }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug, 2);

  return (
    <div className="bg-[#F4F3EF] text-[#171717]">
      {/* Breadcrumb & Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#777873] hover:text-[#171717] transition-colors pb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Work</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#DAD8D1] items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="editorial-label text-[#A78B70]">{project.category}</span>
              <span className="text-[#DAD8D1]">·</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] px-2.5 py-0.5 border border-[#DAD8D1] bg-[#FFFFFF] text-[#171717] rounded-[2px]">
                {project.projectStatus}
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.03]">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-[#777873] max-w-2xl leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4 text-xs border-t lg:border-t-0 pt-6 lg:pt-0 border-[#DAD8D1]">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#777873]">
                Scope
              </p>
              <p className="text-[#171717] font-medium mt-1">{project.serviceLine}</p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#777873]">
                Format
              </p>
              <p className="text-[#171717] font-medium mt-1">{project.durationOrFormat}</p>
            </div>
            {project.clientName && (
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#777873]">
                  Client
                </p>
                <p className="text-[#171717] font-medium mt-1">{project.clientName}</p>
              </div>
            )}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#777873]">
                Year
              </p>
              <p className="text-[#171717] font-medium mt-1">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Main Video or Concept Placeholder Frame */}
        <div className="pt-10">
          {project.videoUrl ? (
            <div className="bg-[#171717] rounded-[2px] p-6 sm:p-10 flex flex-col items-center">
              <div className="w-full max-w-[360px] aspect-[9/16] bg-black overflow-hidden rounded-[2px] border border-[#2D2D2A]">
                <video
                  src={project.videoUrl}
                  poster={project.thumbnailUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#B8B6AF] mt-5 text-center max-w-xl">
                {project.credits}
              </p>
            </div>
          ) : (
            <div className="bg-[#171717] text-[#F4F3EF] rounded-[2px] border border-[#2D2D2A] p-8 sm:p-14 aspect-[16/7] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-[#A78B70]">
                <span>{project.projectStatus}</span>
                <span>{project.durationOrFormat}</span>
              </div>
              <div className="space-y-2 max-w-xl">
                <p className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em]">
                  {project.title}
                </p>
                <p className="text-sm text-[#B8B6AF] leading-relaxed">
                  {project.credits}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Case Study Breakdown */}
      <section className="border-t border-[#DAD8D1] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            {/* Requirements & Approach */}
            <div className="md:col-span-7 space-y-10">
              <div className="space-y-4">
                <p className="editorial-label text-[#A78B70]">01 / Project Brief</p>
                <h2 className="font-display font-semibold text-2xl tracking-[-0.02em]">
                  Requirements
                </h2>
                <ul className="space-y-3 border-t border-[#DAD8D1] pt-4">
                  {project.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#171717] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78B70] mt-2.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="editorial-label text-[#A78B70]">02 / Creative Approach</p>
                <h2 className="font-display font-semibold text-2xl tracking-[-0.02em]">
                  Visual Direction &amp; Pacing
                </h2>
                <p className="text-sm sm:text-base text-[#777873] leading-relaxed border-t border-[#DAD8D1] pt-4">
                  {project.creativeApproach}
                </p>
              </div>
            </div>

            {/* Process & Deliverables */}
            <div className="md:col-span-5 space-y-10">
              <div className="p-6 sm:p-8 bg-[#F4F3EF] border border-[#DAD8D1] rounded-[2px] space-y-4">
                <p className="editorial-label text-[#A78B70]">03 / Production Process</p>
                <ol className="space-y-3">
                  {project.productionProcess.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-[#171717]">
                      <span className="text-xs font-medium text-[#A78B70] pt-0.5 shrink-0">
                        0{index + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6 sm:p-8 bg-[#F4F3EF] border border-[#DAD8D1] rounded-[2px] space-y-4">
                <p className="editorial-label text-[#A78B70]">04 / Final Deliverables</p>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#171717]">
                      <Check className="w-4 h-4 text-[#A78B70] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#DAD8D1]">
                  <Button
                    href={`/contact?service=${encodeURIComponent(project.category)}&project=${encodeURIComponent(project.title)}`}
                    variant="primary"
                    size="md"
                    fullWidth
                    showArrow
                  >
                    Discuss a Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Behind-the-Scenes Placeholders */}
          <div className="pt-16 mt-16 border-t border-[#DAD8D1] space-y-6">
            <div className="space-y-2">
              <p className="editorial-label text-[#A78B70]">Production Archive</p>
              <h2 className="font-display font-semibold text-2xl tracking-[-0.02em]">
                Behind the Scenes &amp; Stills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.btsImages.map((bts) => (
                <figure key={bts.caption} className="space-y-2.5">
                  <div className="aspect-[16/9] w-full bg-[#F4F3EF] border border-dashed border-[#A78B70] rounded-[2px] flex flex-col items-center justify-center p-6 text-center">
                    <span className="editorial-label text-[#A78B70]">BTS Slot</span>
                    <p className="text-xs text-[#777873] mt-2 max-w-sm">
                      Placeholder reserved for genuine behind-the-scenes photographs (`public/images/behind-the-scenes/`).
                    </p>
                  </div>
                  <figcaption className="text-xs text-[#777873]">{bts.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="border-t border-[#DAD8D1] bg-[#F4F3EF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 space-y-10">
          <div className="flex items-end justify-between gap-4 border-b border-[#DAD8D1] pb-6">
            <div className="space-y-2">
              <p className="editorial-label text-[#A78B70]">Continue Exploring</p>
              <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-[-0.02em]">
                Related Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-medium uppercase tracking-[0.14em] text-[#171717] hover:text-[#A78B70] transition-colors"
            >
              All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel, idx) => (
              <ProjectCard key={rel.slug} project={rel} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
