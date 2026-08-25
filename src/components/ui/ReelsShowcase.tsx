"use client";

import React, { useState } from "react";
import Image from "next/image";
import { REELS, ReelItem } from "@/data/reels";
import { Play, Eye, X, Flame, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const ReelsShowcase: React.FC = () => {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);

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
              Trending Reels &amp; Shorts
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

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/40" />

              {/* Top Tag & Views Counter */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span
                  className={`h-6 px-2.5 rounded-md ${reel.tagColor} text-white text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center`}
                >
                  {reel.category}
                </span>

                <div className="h-6 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 rounded-full text-xs font-bold text-white border border-white/10">
                  <Eye className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>{reel.views}</span>
                </div>
              </div>

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
                <p className="text-xs text-[#C0C0C0] line-clamp-2 leading-snug">
                  {reel.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Preview Modal with Spring Physics */}
        <AnimatePresence>
          {activeReel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveReel(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 25 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-sm rounded-3xl bg-[#141416] border border-white/20 overflow-hidden shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveReel(null)}
                  className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* 9:16 Video Player or Concept Preview Frame */}
                <div className="relative aspect-[9/16] w-full bg-black flex items-center justify-center overflow-hidden">
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

                {/* Reel Info */}
                <div className="p-4 bg-[#141416] space-y-3">
                  <div>
                    <h3 className="font-display font-black text-base text-white">
                      {activeReel.title}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] mt-0.5">
                      {activeReel.caption}
                    </p>
                  </div>

                  {activeReel.credits && (
                    <div className="flex items-start gap-1.5 p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11px] text-[#A0A0A0]">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFC72C] shrink-0 mt-0.5" />
                      <span>{activeReel.credits}</span>
                    </div>
                  )}

                  <Button
                    href={`/contact?service=reels&reel=${encodeURIComponent(activeReel.title)}`}
                    variant="primary"
                    size="sm"
                    fullWidth
                    showArrow
                  >
                    Produce a Reel Like This
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
