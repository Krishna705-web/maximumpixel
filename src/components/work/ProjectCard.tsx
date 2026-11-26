import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-b border-[#DAD8D1] pb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78B70]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171717] rounded-[2px]">
        {project.isPlaceholder ? (
          <div className="w-full h-full bg-[#1C1C1A] border border-[#2D2D2A] p-6 flex flex-col justify-between transition-colors duration-300 group-hover:bg-[#232320]">
            <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.14em] text-[#A78B70]">
              <span>{project.category}</span>
              <span>{project.durationOrFormat.split("·")[0]?.trim()}</span>
            </div>
            <div className="space-y-1.5">
              <p className="font-display font-semibold text-lg sm:text-xl text-[#F4F3EF] tracking-[-0.02em]">
                {project.title}
              </p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#777873]">
                Concept Frame Placeholder · Replace with Client Media
              </p>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={project.thumbnailUrl}
              alt={`${project.title} — ${project.category}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/15 transition-colors duration-300" />
          </>
        )}

        {project.videoUrl && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#171717]/85 text-[#F4F3EF] text-[10px] font-medium uppercase tracking-[0.14em] rounded-[2px]">
            <Play className="w-3 h-3 fill-current" />
            <span>Video Study</span>
          </div>
        )}

        <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#F4F3EF]/95 text-[#171717] text-[10px] font-medium uppercase tracking-[0.12em] rounded-[2px]">
          {project.projectStatus}
        </div>
      </div>

      <div className="pt-4 space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#777873]">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#171717] group-hover:text-[#A78B70] transition-colors">
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        <h3 className="font-display font-semibold text-xl sm:text-2xl tracking-[-0.02em] text-[#171717] group-hover:text-[#A78B70] transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-[#777873] leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </Link>
  );
};
