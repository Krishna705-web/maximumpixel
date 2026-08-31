"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { REELS, ReelItem } from "@/data/reels";
import { Play, X, Flame, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const ReelsShowcase: React.FC = () => {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveReel(null);
    };
    if (activeReel) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReel]);

  return (
    <section className="py-14 border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A1A]/15 border border-[#FF7A1A]/30 text-xs font-semibold tracking-wide text-[#FF7A1A]">
              <Flame className="w-3.5 h-3.5" />
              <span>Viral Content Studio</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Sample Video Edits
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-md">
              Short-form vertical videos engineered for maximum retention, hook rates, and algorithmic reach.
            </p>
          </div>
        </div>

        {/* 9:16 Vertical Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {REELS.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveReel(reel)}
              className="group relative rounded-3xl bg-[#111113] border border-white/[0.08] overflow-hidden aspect-[9/16] shadow-xl cursor-pointer transition-all hover:border-white/30"
            >
              {/* Thumbnail Image */}
              <Image
                src={reel.thumbnail}
                alt={reel.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Dark Ambient Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/20 pointer-events-none" />

              {/* Center Play Button with pulse on hover */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#5B2EE8] transition-all duration-300 shadow-xl">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Bottom Caption & Title (Top-Aligned Titles with Generous Inset) */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end min-h-[5.5rem] space-y-1.5 text-left">
                <h3 className="font-display font-bold text-sm sm:text-base text-white leading-snug min-h-[2.75rem] flex items-start group-hover:text-[#FF7A1A] transition-colors">
                  {reel.title}
                </h3>
                <p className="text-xs text-[#E4E4E7] line-clamp-2 leading-snug">
                  {reel.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Preview Modal with Side-by-Side Layout & Prominent Close Button */}
        <AnimatePresence>
          {activeReel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveReel(null)}
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
                  onClick={() => setActiveReel(null)}
                  className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-black/80 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all border border-white/25 shadow-xl cursor-pointer"
                  aria-label="Close video"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: 9:16 Video Player Container (Zero Text Overlaid) */}
                <div className="relative w-full md:w-[320px] aspect-[9/16] bg-black flex items-center justify-center overflow-hidden shrink-0">
                  {activeReel.videoUrl ? (
                    <video
                      src={activeReel.videoUrl}
                      poster={activeReel.thumbnail}
                      controls
                      autoPlay
                      playsInline
                      loop
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <Image
                        src={activeReel.thumbnail}
                        alt={activeReel.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center space-y-3 z-10">
                        <div className="w-16 h-16 rounded-full bg-[#5B2EE8] flex items-center justify-center text-white shadow-2xl animate-pulse">
                          <Play className="w-7 h-7 fill-white ml-1" />
                        </div>
                        <p className="text-xs font-bold text-white uppercase tracking-wider">
                          Previewing Concept Reel
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Right Side: Description, Credits & Action Panel */}
                <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-4 bg-[#141416]">
                  <div className="space-y-3">
                    {/* Title & Caption Description */}
                    <div className="pr-8">
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white leading-tight">
                        {activeReel.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 leading-relaxed">
                        {activeReel.caption}
                      </p>
                    </div>

                    {/* Copyright & Licensing Credits Badge */}
                    {activeReel.credits && (
                      <div className="flex items-start gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs text-[#A0A0A0] leading-relaxed">
                        <Sparkles className="w-4 h-4 text-[#FFC72C] shrink-0 mt-0.5" />
                        <span>{activeReel.credits}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={`/contact?service=reels&reel=${encodeURIComponent(activeReel.title)}`}
                      variant="primary"
                      size="md"
                      fullWidth
                      showArrow
                      className="py-3 font-bold shadow-lg"
                    >
                      Produce a Reel Like This
                    </Button>
                    <button
                      onClick={() => setActiveReel(null)}
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
    </section>
  );
};
