"use client";

import React from "react";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/data/services";
import { ConfettiAccent } from "@/components/ui/ConfettiAccent";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  Video,
  Clapperboard,
  Scissors,
  Palette,
  Image as ImageIcon,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Layers,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const SERVICE_CAPABILITIES = [
  { label: "Cinema Standards", value: "4K 10-Bit", icon: Video, color: "text-[#1E7FE0]" },
  { label: "Turnkey Production", value: "Concept to Cut", icon: Clapperboard, color: "text-[#5B2EE8]" },
  { label: "Post-Production", value: "Color & Sound", icon: Sliders, color: "text-[#FF7A1A]" },
  { label: "Turnaround Time", value: "< 48 Hours", icon: Zap, color: "text-[#22B14C]" },
];

const SERVICE_FEATURES: Record<string, string[]> = {
  "video-shoot": [
    "4K Cinema Cameras & Lighting",
    "On-Location & Studio Filming",
    "Multi-Angle & Gimbal Directing",
    "Professional Direct-to-Monitor Crew",
  ],
  "video-edit": [
    "High-Retention Pacing & SFX Hooks",
    "Dynamic Animated Subtitles",
    "Sound Design & Audio Mastering",
    "9:16 Reels & 16:9 Cutdowns",
  ],
  "video-shoot-edit": [
    "Concept Ideation & Scripting",
    "Full-Day On-Location Production",
    "Master Post-Production & Color Grade",
    "Turnkey Multi-Format Export",
  ],
};

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function ServicesPage() {
  const renderServiceIcon = (iconType: ServiceItem["iconType"]) => {
    const iconClass = "w-6 h-6 text-white";
    switch (iconType) {
      case "video":
        return <Video className={iconClass} />;
      case "clapper":
        return <Clapperboard className={iconClass} />;
      case "scissors":
        return <Scissors className={iconClass} />;
      case "palette":
        return <Palette className={iconClass} />;
      case "image":
        return <ImageIcon className={iconClass} />;
      case "logo":
        return <Logo showText={false} size="sm" />;
      case "sparkles":
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-white pb-16">
      {/* Ambient Breathing Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/3 w-96 h-96 bg-[#5B2EE8]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-10 w-96 h-96 bg-[#FF7A1A]/20 rounded-full blur-3xl pointer-events-none"
      />
      <ConfettiAccent variant="hero-service" />

      {/* ═══════════════════════════════════════════════════════
          SERVICES HERO SECTION
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
            Cinematography &amp; Post-Production Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.05]"
        >
          VIDEO PRODUCTION <br />
          <span className="text-[#5B2EE8] drop-shadow-[0_0_25px_rgba(91,46,232,0.4)]">
            BUILT TO CONVERT
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#A0A0A0] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3"
        >
          We specialize exclusively in Video Shoot, Video Edit, and Shoot + Edit for high-growth brands, creators, and businesses.
        </motion.p>

        {/* Real Authentic Studio Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-white/10"
        >
          {SERVICE_CAPABILITIES.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 backdrop-blur-sm transition-all duration-300 shadow-md"
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
          SERVICES GRID SECTION
          ═══════════════════════════════════════════════════════ */}
      <section id="services-grid" className="py-8 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service) => {
              const features = SERVICE_FEATURES[service.id] || [];
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 border-t-4 ${service.borderClass.replace("border-l-", "border-t-")} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_35px_rgba(0,0,0,0.6)]`}
                >
                  <div className="space-y-4">
                    {/* Icon Badge & Direct Link */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradientBg} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                      >
                        {renderServiceIcon(service.iconType)}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold text-[#A78BFA] uppercase tracking-wider">
                        Available
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mt-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Scope Checklist */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                        What We Deliver:
                      </p>
                      <div className="space-y-1.5">
                        {features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22B14C] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action CTA Link */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <Link
                      href={service.href}
                      className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-[#5B2EE8] text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md group/btn"
                    >
                      <span>Book This Service</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRODUCTION WORKFLOW SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="py-14 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
              HOW WE WORK
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1.5">
              Simple, transparent, and direct creative workflow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-[#5B2EE8]/20 border border-[#5B2EE8]/40 text-[#5B2EE8] font-black text-sm flex items-center justify-center mb-3">
                01
              </span>
              <h4 className="font-bold text-white text-base mb-1">Creative Brief</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                We discuss your brand, shoot requirements, reference styles, and key goals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-[#FF7A1A]/20 border border-[#FF7A1A]/40 text-[#FF7A1A] font-black text-sm flex items-center justify-center mb-3">
                02
              </span>
              <h4 className="font-bold text-white text-base mb-1">The Shoot</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Our team captures clean, well-lit, high-quality footage and photos on location.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-[#22B14C]/20 border border-[#22B14C]/40 text-[#22B14C] font-black text-sm flex items-center justify-center mb-3">
                03
              </span>
              <h4 className="font-bold text-white text-base mb-1">Edit &amp; Polish</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Careful editing, pacing, music sound design, and color grading for visual impact.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="w-8 h-8 rounded-lg bg-[#1E7FE0]/20 border border-[#1E7FE0]/40 text-[#1E7FE0] font-black text-sm flex items-center justify-center mb-3">
                04
              </span>
              <h4 className="font-bold text-white text-base mb-1">Final Delivery</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                You receive clean, polished high-resolution files ready to publish and post.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#5B2EE8] to-[#401AA8] p-8 sm:p-10 md:p-12 overflow-hidden shadow-[0_10px_40px_rgba(91,46,232,0.4)] text-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
              HAVE A PROJECT IN MIND?
            </h2>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Let&apos;s discuss your ideas and create something awesome together.
            </p>
            <Button
              href="/contact"
              variant="cta"
              size="md"
              showArrow
              className="px-8 py-3.5 font-bold shadow-xl"
            >
              Start Project Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
