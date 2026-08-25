"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileActionBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after slight scroll or after 1 second
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-3 left-3 right-3 z-50 md:hidden pointer-events-none"
        >
          <div className="bg-[#111113]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-2 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(91,46,232,0.25)] flex items-center justify-between gap-2 pointer-events-auto max-w-md mx-auto">
            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/917878736798"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#22B14C]/15 border border-[#22B14C]/30 text-[#22B14C] active:scale-95 transition-all text-xs font-bold shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-[#22B14C]/20" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call */}
            <a
              href="tel:+917878736798"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.06] border border-white/10 text-white active:scale-95 transition-all text-xs font-bold"
              aria-label="Call MaximumPixel"
            >
              <Phone className="w-4 h-4 text-[#FF7A1A]" />
              <span>Call</span>
            </a>

            {/* Quick Quote / Book Shoot */}
            <Link
              href="/contact"
              className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#5B2EE8] to-[#7C4DFF] text-white active:scale-95 transition-all text-xs font-black shadow-[0_0_15px_rgba(91,46,232,0.5)]"
              aria-label="Book a Project"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Shoot</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
