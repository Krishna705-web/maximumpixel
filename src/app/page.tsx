"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ConfettiAccent } from "@/components/ui/ConfettiAccent";
import { ProcessBadge } from "@/components/ui/ProcessBadge";
import { PROCESS_STEPS } from "@/data/process";
import { ReelsShowcase } from "@/components/ui/ReelsShowcase";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";

const Mascot3D = dynamic(
  () => import("@/components/ui/Mascot3D").then((mod) => mod.Mascot3D),
  { ssr: false }
);

export default function HomePage() {
  const latestWorkPreviews = [
    {
      title: "Brand Film",
      tag: "VIDEO",
      tagColor: "bg-[#5B2EE8]",
      image: "/assets/projects/brand-film.jpg",
      subtext: "Portfolio coming soon",
    },
    {
      title: "Portrait Shoot",
      tag: "PHOTO",
      tagColor: "bg-[#65A30D]",
      image: "/assets/projects/product-shoot.jpg",
      subtext: "Portfolio coming soon",
    },
    {
      title: "Live Event",
      tag: "EVENT",
      tagColor: "bg-[#FF7A1A]",
      image: "/assets/projects/live-event.jpg",
      subtext: "Portfolio coming soon",
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
      <section className="relative pt-6 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Floating Confetti Accents */}
        <ConfettiAccent variant="hero-home" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 z-10 space-y-5 text-left">
              {/* Big Display Headline with Staggered Word Reveal */}
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase overflow-hidden">
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
                <motion.span
                  custom={2}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="block text-[#5B2EE8] drop-shadow-[0_0_25px_rgba(91,46,232,0.4)]"
                >
                  STORIES
                </motion.span>
              </h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-[#FF7A1A] font-semibold text-lg sm:text-xl md:text-2xl pt-1"
              >
                Jaipur-Based Creative <br className="hidden sm:inline" />
                Content &amp; Media Studio
              </motion.p>

              {/* Body Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="text-[#A0A0A0] text-sm sm:text-base md:text-lg max-w-md leading-relaxed"
              >
                Video. Photo. Events. Social Content. Product Shoots. Branding &amp; Design.
                All in one pixel-perfect place.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="pt-3"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  showArrow
                  className="px-8 py-3.5 text-base font-bold shadow-[0_4px_25px_rgba(91,46,232,0.5)] hover:shadow-[0_8px_30px_rgba(91,46,232,0.7)]"
                >
                  Let&apos;s Create
                </Button>
              </motion.div>
            </div>

            {/* Right Mascot Visual (Interactive 3D Character with Mouse-Look Physics) */}
            <div className="lg:col-span-6 relative flex justify-center items-center mt-4 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] aspect-[4/5] flex items-center justify-center">
                {/* Faceted polygon background shape */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 400 500" fill="none" className="w-full h-full">
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
          OUR PROCESS SECTION (Animated Connection Flow)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 border-t border-white/[0.08] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Dotted Lines */}
          <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
            <div className="flex-1 border-b-2 border-dotted border-white/20" />
            <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wider text-center px-2">
              OUR PROCESS
            </h2>
            <div className="flex-1 border-b-2 border-dotted border-white/20" />
          </div>

          {/* Connected Steps Grid */}
          <div className="relative">
            {/* Horizontal glowing animated connector line on desktop */}
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] z-0 overflow-hidden">
              <div className="w-full h-full border-b-2 border-dotted border-white/20" />
              <motion.div
                className="absolute top-0 left-0 w-36 h-[2px] bg-gradient-to-r from-transparent via-[#5B2EE8] to-transparent shadow-[0_0_8px_#5B2EE8]"
                animate={{ x: ["-100%", "900%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
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
          {/* Header with View All Link */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
              LATEST WORK
            </h2>
            <Link
              href="/our-work"
              className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#FF7A1A] hover:text-[#FF8E3C] transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
                className="group relative rounded-2xl bg-[#111113] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-white/25 hover:-translate-y-1 shadow-lg"
              >
                {/* Image Container with Tag Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`px-3 py-1 rounded-md ${work.tagColor} text-white text-[11px] font-black tracking-wider uppercase shadow-md`}
                    >
                      {work.tag}
                    </span>
                  </div>
                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-display font-black text-lg text-white mb-1">
                    {work.title}
                  </h3>
                  <p className="text-xs text-[#A0A0A0]">{work.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

