"use client";

import React, { useState } from "react";
import { PROJECT_CATEGORIES, PROJECTS, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";

export const WorkGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Editorial Category Filters */}
      <div
        className="flex flex-wrap items-center gap-2 sm:gap-3 pb-6 border-b border-[#DAD8D1]"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] rounded-[2px] border transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#171717] text-[#F4F3EF] border-[#171717]"
                  : "bg-transparent text-[#777873] border-[#DAD8D1] hover:border-[#171717] hover:text-[#171717]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Responsive Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      ) : (
        <div className="py-16 border-b border-[#DAD8D1]">
          <p className="text-sm text-[#777873]">
            No projects published in this category yet.
          </p>
        </div>
      )}
    </div>
  );
};

