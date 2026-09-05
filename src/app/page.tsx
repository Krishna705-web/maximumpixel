"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ConfettiAccent } from "@/components/ui/ConfettiAccent";
import { ProcessBadge } from "@/components/ui/ProcessBadge";
import { PROCESS_STEPS } from "@/data/process";
import { ReelsShowcase } from "@/components/ui/ReelsShowcase";
import { StudioHighlights } from "@/components/ui/StudioHighlights";
import { FAQSection } from "@/components/ui/FAQSection";
import { ArrowRight, Sparkles, Play, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import dynamic from "next/dynamic";

const Mascot3D = dynamic(
  () => import("@/components/ui/Mascot3D").then((mod) => mod.Mascot3D),
  { ssr: false }
);

const ROTATING_WORDS = [
  { text: "SHOOTS", color: "text-[#5B2EE8]", shadow: "rgba(91,46,232,0.45)" },
  { text: "EDITS", color: "text-[#FF7A1A]", shadow: "rgba(255,122,26,0.45)" },
  { text: "REELS", color: "text-[#1E7FE0]", shadow: "rgba(30,127,224,0.45)" },
];

export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [selectedWork, setSelectedWork] = React.useState<{
    title: string;
    tag: string;
    tagColor: string;
    image: string;
    videoUrl?: string;
    subtext: string;
    credits?: string;
    description?: string;
  } | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedWork(null);
    };
    if (selectedWork) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWork]);

  const latestWorkPreviews = [
    {
      title: "Artisan Cafe Commercial Reel",
      tag: "SHOOT + EDIT",
      tagColor: "bg-[#5B2EE8]",
      image: "/assets/projects/cafe-reel.jpg",
      videoUrl: "/assets/videos/cafe-edit.mp4",
      subtext: "4K 9:16 Vertical • Full On-Location Shoot + Master Post-Production",
      credits: "Stock Footage: Pexels (Free Commercial License) • Editing, Sound Design & Color Grading: Maximum Pixel Studio",
      description: "A rich, sensory commercial capturing artisan pour-over brewing, warm ambient seating, and barista craft. Produced from storyboard to final master cut.",
    },
    {
      title: "Cinematic Brand Commercial",
      tag: "VIDEO SHOOT",
      tagColor: "bg-[#1E7FE0]",
      image: "/assets/projects/brand-film.jpg",
      videoUrl: "/assets/videos/barista-edit.mp4",
      subtext: "4K Cinema & Lighting • Multi-Angle Production Rigging",
      credits: "Stock Footage: Sourced from Pexels (Commercial Creative Commons License) • Editing, Cinematography Direction & Grade: MaximumPixel Studio",
      description: "High-dynamic-range cinematography crafted with precision lighting, fluid camera movement, and dedicated director monitoring tailored for luxury brands.",
    },
    {
      title: "Espresso Craft & Greenhouse Cafe Edit",
      tag: "VIDEO EDIT",
      tagColor: "bg-[#FF7A1A]",
      image: "/assets/projects/barista-reel.jpg",
      videoUrl: "/assets/videos/barista-edit.mp4",
      subtext: "Kinetic Velocity Pacing • Warm Color Grading & Audio Foley",
      credits: "Stock Footage: Sourced from Pexels (Commercial Creative Commons License) • Post-Production, Velocity Editing, Audio Mastering & Grade: MaximumPixel Studio",
      description: "A rhythmic, sensory hospitality commercial edit capturing iced espresso preparation, barista artistry, and modern sunlit cafe ambiance with rich sound design.",
    },
  ];

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    }),
  };

  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-0 sm:pt-1 md:pt-2 pb-10 sm:pb-14 md:pb-20 overflow-hidden">
        {/* Floating Confetti Accents */}
        <ConfettiAccent variant="hero-home" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-3 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="col-span-7 sm:col-span-7 md:col-span-6 lg:col-span-6 z-10 space-y-3 sm:space-y-4 md:space-y-5 text-left">
              {/* Big Display Headline with Staggered Word Reveal & Rotating Word */}
              <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight leading-[0.92] uppercase overflow-hidden">
                <motion.span
                  custom={0}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="block text-white"
                >
                  WE
                </motion.span>
                <motion.span
                  custom={1}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="block text-white"
                >
                  CREATE
                </motion.span>
                <div className="relative block h-[1.08em] overflow-hidden align-top w-full">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_WORDS[currentWordIndex].text}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className={`block ${ROTATING_WORDS[currentWordIndex].color}`}
                      style={{
                        textShadow: `0 0 25px ${ROTATING_WORDS[currentWordIndex].shadow}`,
                      }}
                    >
                      {ROTATING_WORDS[currentWordIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="sr-only">
                  - Video Shoot, Video Editing &amp; Reels Production Studio in Jaipur
                </span>
              </h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[#FF7A1A] font-semibold text-xs sm:text-base md:text-xl lg:text-2xl pt-0.5 sm:pt-1 leading-snug"
              >
                Jaipur Video Shoot &amp; Reels Production Studio
              </motion.p>

              {/* Body Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="text-[#A0A0A0] text-xs sm:text-sm md:text-base lg:text-lg max-w-md leading-relaxed"
              >
                Video Shoot • Video Edit • Shoot + Edit — On-location 4K mobile cinematography and high-retention video editing in Jaipur.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="pt-1"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  showArrow
                  className="px-8 sm:px-10 py-4 sm:py-4.5 text-base sm:text-lg font-black shadow-[0_8px_35px_rgba(91,46,232,0.65)] hover:shadow-[0_10px_45px_rgba(91,46,232,0.85)] hover:scale-105 transition-all"
                >
                  Let&apos;s Create
                </Button>
              </motion.div>
            </div>

            {/* Right Mascot Visual (Interactive 3D Character with Abstract Faceted Polygon Background) */}
            <div className="col-span-5 sm:col-span-5 md:col-span-6 lg:col-span-6 relative flex justify-end sm:justify-center items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] xl:max-w-[680px] min-h-[350px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-[640px] xl:min-h-[700px] aspect-[4/5] flex items-center justify-center">
                {/* Faceted polygon background shape - Scaled with generous clearance */}
                <div
                  className="absolute -inset-1 sm:-inset-3 md:-inset-5 lg:-inset-6 w-[104%] sm:w-[108%] md:w-[110%] h-[104%] sm:h-[108%] md:h-[110%] pointer-events-none opacity-95 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 400 500" fill="none" className="w-full h-full object-contain">
                    <polygon points="280,40 400,140 340,240 260,180" fill="#1E7FE0" />
                    <polygon points="340,240 260,180 200,280 290,320" fill="#E53E3E" />
                    <polygon points="260,180 400,280 340,360 200,280" fill="#FFC72C" />
                    <polygon points="200,280 340,360 280,460 160,400" fill="#5B2EE8" />
                    <polygon points="160,400 280,460 180,500 80,440" fill="#22B14C" />
                  </svg>
                </div>

                {/* Interactive 3D Mascot Model with Mouse Tracking */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Mascot3D className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          OUR PROCESS SECTION (Unified Section Pattern)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 border-t border-white/[0.08] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-8 md:mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Our Process
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1 max-w-md">
              From initial brief to final delivery in 6 smooth creative steps.
            </p>
          </div>

          {/* Connected Steps Grid */}
          <div className="relative">
            {/* Horizontal clean consistent connector track on desktop */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] z-0 overflow-hidden">
              <div className="w-full h-full border-b-2 border-dotted border-white/20" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  <ProcessBadge
                    step={step.step}
                    badgeColor={step.badgeColor}
                    title={step.title}
                    description={step.description}
                    iconName={step.iconName}
                    index={idx}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TRENDING REELS SHOWCASE
          ═══════════════════════════════════════════════════════ */}
      <ReelsShowcase />

      {/* ═══════════════════════════════════════════════════════
          LATEST WORK SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Baseline-Aligned View All Link */}
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Latest Work
            </h2>
            <Link
              href="/our-work"
              className="group inline-flex items-center gap-2 text-base font-extrabold text-[#FF7A1A] hover:text-[#FF8E3C] transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* 3 Work Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {latestWorkPreviews.map((work, idx) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                onClick={() => setSelectedWork(work)}
                className="group relative rounded-2xl bg-[#111113] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/25 hover:-translate-y-1 shadow-lg flex flex-col cursor-pointer"
              >
                {/* Image Container with Top Gradient Isolation */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle top scrim */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none" />

                  {/* Hover Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-[#5B2EE8] text-white flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Dark subtle bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Card Body with Consistent Vertical Spacing */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <h3 className="font-display font-black text-lg text-white mb-1 min-h-[3.25rem] flex items-start group-hover:text-[#FF7A1A] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#CCCCCC] mt-auto">{work.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STUDIO HIGHLIGHTS & CAPABILITIES (Visible SEO & AI Overview Optimized)
          ═══════════════════════════════════════════════════════ */}
      <StudioHighlights />

      {/* ═══════════════════════════════════════════════════════
          FREQUENTLY ASKED QUESTIONS (Visible Interactive FAQ & Schema Grounding)
          ═══════════════════════════════════════════════════════ */}
      <FAQSection />

      {/* Interactive Video Preview Modal for Latest Work */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedWork(null)}
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
                onClick={() => setSelectedWork(null)}
                className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-black/80 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all border border-white/25 shadow-xl cursor-pointer"
                aria-label="Close preview"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: 9:16 Video Player or Image Container (Zero Text Overlaid) */}
              <div className="relative w-full md:w-[320px] aspect-[9/16] bg-black flex items-center justify-center overflow-hidden shrink-0">
                {selectedWork.videoUrl ? (
                  <video
                    src={selectedWork.videoUrl}
                    poster={selectedWork.image}
                    controls
                    autoPlay
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Right Side: Description, Credits & Action Panel */}
              <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-4 bg-[#141416]">
                <div className="space-y-3">
                  <div className="pr-8">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight">
                      {selectedWork.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FF7A1A] font-semibold mt-1">
                      {selectedWork.subtext}
                    </p>
                  </div>

                  {selectedWork.description && (
                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                      {selectedWork.description}
                    </p>
                  )}

                  {selectedWork.credits && (
                    <div className="flex items-start gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs text-[#A0A0A0] leading-relaxed">
                      <Sparkles className="w-4 h-4 text-[#FFC72C] shrink-0 mt-0.5" />
                      <span>{selectedWork.credits}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <Button
                    href={`/contact?service=${encodeURIComponent(selectedWork.tag)}&project=${encodeURIComponent(selectedWork.title)}`}
                    variant="primary"
                    size="md"
                    showArrow
                    fullWidth
                    className="py-3 font-bold shadow-lg"
                  >
                    Discuss Similar Project
                  </Button>
                  <button
                    onClick={() => setSelectedWork(null)}
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
    </div>
  );
}

