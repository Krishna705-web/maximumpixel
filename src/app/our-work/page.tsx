"use client";

import React, { useState, useEffect } from "react";
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
  Play,
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

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          const cat = p.category.toUpperCase();
          const act = activeCategory.toUpperCase();
          if (act === "VIDEO SHOOT" || act === "SHOOT") {
            return cat.includes("SHOOT") && !cat.includes("EDIT");
          }
          if (act === "VIDEO EDIT" || act === "EDIT") {
            return cat.includes("EDIT") && !cat.includes("SHOOT");
          }
          if (act === "SHOOT + EDIT" || act === "SHOOT & EDIT") {
            return cat.includes("SHOOT") && cat.includes("EDIT");
          }
          return cat === act;
        });

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
            Video Production &amp; Post-Production Portfolio
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
          Explore our portfolio across Video Shoot, Video Edit, and Turnkey Shoot + Edit productions.
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

      {/* Category Filter Pills */}
      <section className="pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg shadow-[#5B2EE8]/20 bg-[#5B2EE8]"
                      : "text-[#A0A0A0] bg-white/[0.04] border border-white/[0.08] hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Projects Grid */}
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
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-3xl bg-[#111113] border border-white/[0.08] overflow-hidden shadow-xl hover:border-white/25 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Media Header Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-black/30 pointer-events-none" />

                    {/* Hover Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 z-10">
                      <div className="w-14 h-14 rounded-full bg-[#5B2EE8] text-white flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-[#A0A0A0] font-semibold">
                        <span>{project.conceptType}</span>
                      </div>

                      <h3 className="font-display font-black text-xl text-white group-hover:text-[#FF7A1A] transition-colors leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#CCCCCC] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Deliverables Tag List */}
                    <div className="pt-2 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                      {project.deliverables.slice(0, 2).map((d) => (
                        <span
                          key={d}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] text-[#A0A0A0]"
                        >
                          {d}
                        </span>
                      ))}
                      {project.deliverables.length > 2 && (
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[11px] text-[#FF7A1A] font-semibold">
                          +{project.deliverables.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROJECT DETAIL LIGHTBOX MODAL (Side-by-Side Layout)
          ═══════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 25 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl sm:max-w-3xl rounded-3xl bg-[#141416] border border-white/20 overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
            >
              {/* Prominent High-Contrast Close Button in Top-Right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-black/80 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all border border-white/25 shadow-xl cursor-pointer"
                aria-label="Close concept preview"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: 9:16 Video Player or Media Container (Zero Text Overlaid) */}
              <div className="relative w-full md:w-[320px] aspect-[9/16] bg-black flex items-center justify-center overflow-hidden shrink-0">
                {selectedProject.videoUrl ? (
                  <video
                    src={selectedProject.videoUrl}
                    poster={selectedProject.imageUrl}
                    controls
                    autoPlay
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Right Side: Description, Scope, Credits & Action Panel */}
              <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-4 bg-[#141416]">
                <div className="space-y-3">
                  <div className="pr-8">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FF7A1A] font-semibold mt-1">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Credits Badge */}
                  {selectedProject.credits && (
                    <div className="flex items-start gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs text-[#A0A0A0] leading-relaxed">
                      <Sparkles className="w-4 h-4 text-[#FFC72C] shrink-0 mt-0.5" />
                      <span>{selectedProject.credits}</span>
                    </div>
                  )}

                  {/* Deliverables List */}
                  <div className="pt-1">
                    <p className="text-[11px] font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">
                      Scope &amp; Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedProject.deliverables.map((d) => (
                        <div
                          key={d}
                          className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B2EE8] shrink-0" />
                          <span className="text-[11px] text-white font-medium">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    href={`/contact?service=${encodeURIComponent(selectedProject.category)}`}
                    variant="primary"
                    size="md"
                    showArrow
                    fullWidth
                    className="py-3 font-bold shadow-lg"
                  >
                    Discuss Similar Project
                  </Button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors cursor-pointer"
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
