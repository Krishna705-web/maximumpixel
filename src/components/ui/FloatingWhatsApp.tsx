"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini Chat Prompt Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.25 }}
            className="mb-3 w-72 rounded-2xl bg-[#141416] border border-white/15 p-4 shadow-2xl text-left text-white relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/60 hover:text-white"
              aria-label="Close WhatsApp popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-full bg-[#22B14C] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-black text-sm text-white">MaximumPixel</p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#22B14C]">
                  <span className="w-2 h-2 rounded-full bg-[#22B14C] animate-pulse" />
                  <span>Typically replies instantly</span>
                </div>
              </div>
            </div>

            {/* Message Bubble */}
            <div className="bg-[#1C1C20] p-2.5 rounded-xl rounded-tl-sm text-xs text-[#E0E0E0] mb-3 leading-relaxed">
              Hi there! 👋 How can we help you create something epic for your brand today?
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#22B14C] hover:bg-[#209e44] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#22B14C] text-white shadow-[0_6px_25px_rgba(34,177,76,0.5)] hover:shadow-[0_8px_30px_rgba(34,177,76,0.7)] transition-all flex items-center justify-center"
        aria-label="Open WhatsApp live chat"
      >
        {/* Pulsing online status indicator */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
        </span>

        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        )}
      </motion.button>
    </div>
  );
};
