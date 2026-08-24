"use client";

import React from "react";
import Image from "next/image";
import { FOUNDERS, ABOUT_MISSION, ABOUT_STATS } from "@/data/founders";
import { ConfettiAccent } from "@/components/ui/ConfettiAccent";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  Zap,
  Users,
  Box,
  ArrowRight,
  Sparkles,
  Target,
  HeartHandshake,
  Camera,
  Film,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const CORE_VALUES = [
  {
    icon: Target,
    title: "Attention to Detail",
    desc: "Every cut, frame transition, color tone, and sound element is refined with genuine care.",
    color: "text-[#5B2EE8]",
    border: "hover:border-[#5B2EE8]/50",
  },
  {
    icon: Sparkles,
    title: "Creative Storytelling",
    desc: "We focus on visuals that tell an authentic story and connect directly with your audience.",
    color: "text-[#FF7A1A]",
    border: "hover:border-[#FF7A1A]/50",
  },
  {
    icon: HeartHandshake,
    title: "Direct Collaboration",
    desc: "No middlemen or corporate layers. You collaborate directly with the creators working on your project.",
    color: "text-[#22B14C]",
    border: "hover:border-[#22B14C]/50",
  },
  {
    icon: Zap,
    title: "Fast & Agile",
    desc: "As an energetic, nimble startup team, we move quickly, communicate clearly, and deliver on time.",
    color: "text-[#1E7FE0]",
    border: "hover:border-[#1E7FE0]/50",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-white pb-16">
      {/* Ambient Breathing Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#5B2EE8]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF7A1A]/20 rounded-full blur-3xl pointer-events-none"
      />
      <ConfettiAccent variant="hero-about" />

      {/* ═══════════════════════════════════════════════════════
          ABOUT HERO SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-8 md:pt-14 md:pb-12 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2EE8]/15 border border-[#5B2EE8]/30 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFC72C] animate-spin" style={{ animationDuration: "6s" }} />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
            Our Story &amp; Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.05]"
        >
          THREE CREATORS. <br />
          <span className="text-[#5B2EE8] drop-shadow-[0_0_25px_rgba(91,46,232,0.4)]">
            ONE VISION.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#A0A0A0] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 leading-relaxed"
        >
          We are Krishna, Vishwajeet, and Rahul — three friends and creators starting our journey in Jaipur. We love visual storytelling and crafting clean, engaging content for brands and people.
        </motion.p>

        {/* Authentic Studio Quick Facts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10 max-w-3xl mx-auto"
        >
          {ABOUT_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-center"
            >
              <p className="font-display font-black text-lg sm:text-xl text-white">
                {stat.label}
              </p>
              <p className="text-[11px] sm:text-xs text-[#A0A0A0] uppercase tracking-wider mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          THE FOUNDERS SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-10 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
              MEET THE TEAM
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
              The creative founders behind MaximumPixel
            </p>
          </div>

          {/* Founder Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {FOUNDERS.map((founder) => (
              <motion.div
                key={founder.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Accent Color Line on Top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 opacity-80"
                  style={{ backgroundColor: founder.accentColor }}
                />

                {/* Avatar */}
                <div
                  className={`w-28 h-28 sm:w-32 sm:h-32 rounded-2xl ${founder.avatarBg} shrink-0 overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center mb-4 mt-2 border-2 border-white/10`}
                >
                  <Image
                    src={founder.avatarPlaceholder}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl text-white tracking-wide">
                      {founder.name}
                    </h3>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mt-0.5"
                      style={{ color: founder.accentColor }}
                    >
                      {founder.role}
                    </p>
                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed pt-2.5">
                      {founder.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/10 w-full flex items-center justify-between text-[11px]">
                    <span
                      className="px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider text-[10px]"
                      style={{
                        backgroundColor: `${founder.accentColor}20`,
                        color: founder.accentColor,
                      }}
                    >
                      {founder.tagline}
                    </span>
                    <span className="text-[#A0A0A0] text-[11px] font-medium">
                      {founder.specialty}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STUDIO VALUES SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-12 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
              OUR VALUES
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
              How we approach every single project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 ${val.border} transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                      <Icon className={`w-5 h-5 ${val.color}`} />
                    </div>
                    <h3 className="font-display font-black text-lg text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#5B2EE8] to-[#401AA8] p-8 sm:p-10 md:p-12 overflow-hidden shadow-[0_10px_40px_rgba(91,46,232,0.4)] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-lg">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase leading-[1.05]">
                LET&apos;S BRING YOUR <br />
                IDEAS TO LIFE
              </h2>
              <p className="text-white/80 text-sm sm:text-base">
                Ready to collaborate with Krishna, Vishwajeet, and Rahul on your next project?
              </p>
              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="cta"
                  size="md"
                  showArrow
                  className="px-7 py-3.5 font-bold shadow-xl"
                >
                  Get In Touch With Us
                </Button>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <Image
                src="/assets/mascot-camera.png"
                alt="MaximumPixel Mascot"
                width={240}
                height={240}
                className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
