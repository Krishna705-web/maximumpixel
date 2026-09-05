"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Scissors, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

export function StudioHighlights() {
  const highlights = [
    {
      step: "01",
      title: "On-Location Video Shoot",
      subtitle: "Jaipur On-Site Cinematography",
      description:
        "Cinema-grade 4K mobile video shoots directly at your venue in Jaipur. Stabilized gimbals, multi-angle rigging, and professional lighting for cafes, restaurants, fashion labels, and retail spaces.",
      features: [
        "4K 10-Bit Cinematic Capture",
        "On-Location Setup Across Jaipur",
        "Multi-Angle Gimbal Movement",
        "Dedicated Creative Directing",
      ],
      price: "From ₹1,499",
      accentColor: "#5B2EE8",
      accentBg: "bg-[#5B2EE8]/10",
      accentBorder: "border-[#5B2EE8]/30",
      icon: Video,
      link: "/services?tab=shoot",
    },
    {
      step: "02",
      title: "High-Retention Reels Editing",
      subtitle: "Viral Post-Production",
      description:
        "Short-form video editing engineered for maximum organic reach on Instagram Reels and YouTube Shorts. Kinetic subtitles, audio foley sound design, velocity speed ramps, and warm color grading.",
      features: [
        "Dynamic Animated Subtitles",
        "Immersive SFX & Foley Sound",
        "Velocity Ramps & Pattern Interrupts",
        "Rapid 24–48h Turnaround",
      ],
      price: "From ₹499",
      accentColor: "#FF7A1A",
      accentBg: "bg-[#FF7A1A]/10",
      accentBorder: "border-[#FF7A1A]/30",
      icon: Scissors,
      link: "/services?tab=edit",
      popular: true,
    },
    {
      step: "03",
      title: "Turnkey Shoot + Edit Bundles",
      subtitle: "Complete All-in-One Solution",
      description:
        "Our all-inclusive package handles your entire visual pipeline: from creative ideation and on-set filming in Jaipur to master editing, sound design, and ready-to-post delivery.",
      features: [
        "1 Session Produces 2–12 Reels",
        "Full Concept & Storyboard",
        "Master 4K Ready-to-Post Exports",
        "Free Revision Cycles Included",
      ],
      price: "From ₹2,499",
      accentColor: "#1E7FE0",
      accentBg: "bg-[#1E7FE0]/10",
      accentBorder: "border-[#1E7FE0]/30",
      icon: Layers,
      link: "/services?tab=shoot-edit",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 border-t border-white/[0.08] relative overflow-hidden bg-[#0A0A0A]"
      aria-label="Studio Services & Highlights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-bold uppercase tracking-wider text-[#CCCCCC]">
            <span>What We Do in Jaipur</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Jaipur&apos;s Dedicated Video Shoot, Editing &amp; Reels Studio
          </h2>
          <p className="text-xs sm:text-base text-[#A0A0A0] max-w-3xl leading-relaxed">
            MaximumPixel helps cafes, restaurants, fashion brands, and local creators scale on social media with high-converting, thumb-stopping 4K video content.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className={`relative rounded-3xl bg-[#111113] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  item.popular
                    ? "border-[#FF7A1A]/40 shadow-[0_0_30px_rgba(255,122,26,0.12)]"
                    : "border-white/[0.08] hover:border-white/25"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#FF7A1A] text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  {/* Top Bar: Step & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-white/40 tracking-wider">
                      {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl ${item.accentBg} ${item.accentBorder} border flex items-center justify-center`}
                      style={{ color: item.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-snug">
                      {item.title}
                    </h3>
                    <p
                      className="text-xs font-bold mt-1 uppercase tracking-wider"
                      style={{ color: item.accentColor }}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-[#D0D0D0]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: item.accentColor }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">
                      Starting Price
                    </span>
                    <span className="font-display font-black text-lg text-white">
                      {item.price}
                    </span>
                  </div>

                  <Link
                    href={item.link}
                    className="group inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FF7A1A] transition-colors"
                  >
                    <span>View Packages</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
