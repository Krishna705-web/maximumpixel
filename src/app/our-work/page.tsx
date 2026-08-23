"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, CATEGORIES, CategoryFilter, ProjectItem } from "@/data/projects";
import { ConfettiAccent } from "@/components/ui/ConfettiAccent";
import { Button } from "@/components/ui/Button";
import { ReelsShowcase } from "@/components/ui/ReelsShowcase";
import {
  ArrowRight,
  X,
  ExternalLink,
  Sparkles,
  Zap,
  CheckCircle2,
  Video,
  Palette,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const STUDIO_CAPABILITIES = [
  { label: "Visual Standards", value: "High Quality", icon: Video, color: "text-[#5B2EE8]", borderGlow: "group-hover:border-[#5B2EE8]/60" },
  { label: "Fast Rough Cut", value: "< 48 Hours", icon: Zap, color: "text-[#FF7A1A]", borderGlow: "group-hover:border-[#FF7A1A]/60" },
  { label: "Creative Direction", value: "100% Custom", icon: Palette, color: "text-[#22B14C]", borderGlow: "group-hover:border-[#22B14C]/60" },
  { label: "Studio Location", value: "Jaipur, India", icon: MapPin, color: "text-[#1E7FE0]", borderGlow: "group-hover:border-[#1E7FE0]/60" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const badgeItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category.toUpperCase() === activeCategory.toUpperCase()
        );

  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-white pb-16">
      {/* Background Ambience & Confetti */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#5B2EE8]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.16, 0.1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF7A1A]/20 rounded-full blur-3xl pointer-events-none"
      />
      <ConfettiAccent variant="hero-work" />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION (Animated Headline & Capability Badges)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-8 md:pt-14 md:pb-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2EE8]/15 border border-[#5B2EE8]/30 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFC72C] animate-spin" style={{ animationDuration: "6s" }} />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
            Creative Capabilities &amp; Concept Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.05]"
        >
          CRAFTED WITH PASSION, <br />
          <span className="text-[#5B2EE8] drop-shadow-[0_0_25px_rgba(91,46,232,0.4)]">
            DELIVERED WITH PURPOSE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#A0A0A0] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3"
        >
          Explore our production styles across commercial films, high-fashion photography, dynamic event recaps, and viral vertical video formats.
        </motion.p>

        {/* Real Authentic Studio Capability Badges with Spring Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10"
        >
          {STUDIO_CAPABILITIES.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                variants={badgeItemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`group p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] ${c.borderGlow} backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-4 h-4 ${c.color}`} />
                  </div>
                  <p className="font-display font-black text-lg sm:text-xl text-white tracking-tight">
                    {c.value}
                  </p>
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider group-hover:text-white transition-colors">
                  {c.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CATEGORY FILTER PILLS
          ═══════════════════════════════════════════════════════ */}
      <section className="pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#5B2EE8] text-white shadow-[0_2px_15px_rgba(91,46,232,0.5)] border border-[#5B2EE8]"
                      : "bg-white/[0.04] text-[#A0A0A0] hover:text-white hover:bg-white/[0.08] border border-white/10"
                  }`}
                >
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROJECTS GRID (Staggered Animation)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#5B2EE8]/50 overflow-hidden transition-colors duration-300 shadow-xl flex flex-col cursor-pointer"
                >
                  {/* Image Container with Dynamic Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                      <span
                        className={`px-3 py-1 rounded-lg ${project.tagBg} text-white text-xs font-black tracking-wider uppercase shadow-md`}
                      >
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-white text-[11px] font-bold">
                        {project.formatBadge}
                      </span>
                    </div>

                    {/* Hover Inspect Indicator */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-[#5B2EE8] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span>View Concept Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Subtle Gradient Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-transparent to-transparent opacity-90 pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#A0A0A0] mb-1">
                        <span>{project.conceptType}</span>
                        <span className="text-[#A78BFA] font-semibold">{project.status}</span>
                      </div>
                      <h3 className="font-display font-black text-lg sm:text-xl text-white group-hover:text-[#5B2EE8] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Deliverables Chip Tags */}
                    <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                      {project.deliverables.slice(0, 3).map((deliv) => (
                        <span
                          key={deliv}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-[10px] sm:text-[11px] text-[#A0A0A0] group-hover:border-white/20 transition-colors"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROJECT DETAIL LIGHTBOX MODAL (Spring Pop)
          ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-[#141416] border border-white/15 overflow-hidden shadow-2xl my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black/90 flex items-center justify-center transition-colors border border-white/10"
                aria-label="Close concept preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-md ${selectedProject.tagBg} text-white text-xs font-black tracking-wider uppercase shadow-lg`}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-white text-xs font-bold">
                    {selectedProject.formatBadge}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">
                    <span>Format: {selectedProject.conceptType}</span>
                    <span className="text-[#A78BFA] font-bold">{selectedProject.status}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#FF7A1A] font-semibold mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#CCCCCC] leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-2">
                  <p className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">
                    Production Scope &amp; Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#5B2EE8] shrink-0" />
                        <span className="text-xs text-white font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    href={`/contact?service=${encodeURIComponent(selectedProject.category)}`}
                    variant="primary"
                    size="md"
                    showArrow
                    fullWidth
                    className="py-3.5 font-bold shadow-lg"
                  >
                    Discuss Similar Project
                  </Button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════
          TRENDING REELS SHOWCASE
          ═══════════════════════════════════════════════════════ */}
      <ReelsShowcase />

      {/* ═══════════════════════════════════════════════════════
          HIGH-IMPACT CTA BANNER (Animated Floating Mascot)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative rounded-3xl bg-gradient-to-r from-[#5B2EE8] to-[#401AA8] p-8 sm:p-10 md:p-12 overflow-hidden shadow-[0_10px_40px_rgba(91,46,232,0.4)] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            {/* Background Glows */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-black/20 blur-2xl pointer-events-none" />

            {/* Left Copy & CTA */}
            <div className="space-y-4 max-w-lg z-10">
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-[1.05]">
                READY TO CREATE <br />
                YOUR MASTERPIECE?
              </h2>
              <p className="text-white/80 text-sm sm:text-base">
                Let&apos;s produce high-converting commercial video, photography, or reels for your brand.
              </p>
              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="cta"
                  size="md"
                  showArrow
                  className="px-7 py-3.5 font-black text-sm sm:text-base shadow-xl"
                >
                  Start Your Project
                </Button>
              </div>
            </div>

            {/* Right Mascot Visual with Smooth Hover Float */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative z-10 shrink-0 cursor-pointer"
            >
              <Image
                src="/assets/mascot-camera.png"
                alt="MaximumPixel Mascot"
                width={260}
                height={260}
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
