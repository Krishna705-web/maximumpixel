"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "Shooting" | "Turnaround";
  accentColor: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "about-studio",
    category: "General",
    accentColor: "#5B2EE8",
    question: "What is MaximumPixel in Jaipur?",
    answer:
      "MaximumPixel is Jaipur's dedicated creative video studio specializing in on-location 4K video shoots, viral Instagram reels editing, and turnkey Shoot + Edit bundles for cafes, restaurants, fashion labels, gyms, and content creators.",
  },
  {
    id: "pricing-breakdown",
    category: "Pricing",
    accentColor: "#FF7A1A",
    question: "How much does a video shoot or reel edit cost in Jaipur with MaximumPixel?",
    answer:
      "MaximumPixel provides transparent starter pricing in Jaipur: Single Reel Edits start at ₹499, On-Location Video Shoots start at ₹1,499, and full Shoot + Edit Turnkey Bundles start at ₹2,499. Monthly retainer bundles with full production takeovers start at ₹9,999.",
  },
  {
    id: "services-offered",
    category: "General",
    accentColor: "#1E7FE0",
    question: "What services does MaximumPixel offer in Jaipur?",
    answer:
      "MaximumPixel specializes in three core video production services: (1) On-location 4K Video Shoots with stabilized mobile cinematography, (2) High-retention Video Editing with kinetic subtitles and sound design, and (3) Complete Turnkey Shoot + Edit production packages.",
  },
  {
    id: "on-location-shoots",
    category: "Shooting",
    accentColor: "#22B14C",
    question: "Can MaximumPixel shoot on location for cafes and businesses in Jaipur?",
    answer:
      "Yes! MaximumPixel provides dedicated on-location shoot sessions across all Jaipur areas (C-Scheme, Malviya Nagar, Mansarovar, Vaishali Nagar, Raja Park, Tonk Road, etc.) for cafes, restaurants, boutiques, gyms, and corporate spaces.",
  },
  {
    id: "turnaround-delivery",
    category: "Turnaround",
    accentColor: "#FFC72C",
    question: "How fast does MaximumPixel deliver edited videos?",
    answer:
      "MaximumPixel provides industry-leading turnaround times: 24 to 48 hours for Single Reel Edits, and 48 to 72 hours for Shoot + Edit turnkey bundles, complete with up to 2 rounds of free revisions.",
  },
  {
    id: "booking-contact",
    category: "General",
    accentColor: "#5B2EE8",
    question: "How can I contact or book a video shoot with MaximumPixel?",
    answer:
      "You can book directly via WhatsApp at +91 78787 36798, send an email to info@maximumpixel.online, or submit your project details through our website contact form.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 border-t border-white/[0.08] relative overflow-hidden bg-[#0A0A0A]"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center sm:text-left mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B2EE8]/10 border border-[#5B2EE8]/30 text-[#A78BFA] text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl">
              Everything you need to know about our Jaipur video shoots, reels post-production, pricing, and rapid delivery.
            </p>
          </div>

          <Link
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-bold transition-colors shrink-0 self-start sm:self-end"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </Link>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#141416] border-white/20 shadow-xl"
                    : "bg-[#111113] border-white/[0.08] hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2EE8]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.accentColor }}
                    />
                    <h3 className="font-display font-black text-sm sm:text-base md:text-lg text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/10 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white/15 text-white" : "text-[#A0A0A0]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-[#B0B0B0] leading-relaxed border-t border-white/[0.05] ml-5 sm:ml-6 pl-0">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Footer Links for Search & AI Engines */}
        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#808080]">
          <p>
            MaximumPixel Video Studio • Jaipur, Rajasthan, India
          </p>
          <div className="flex items-center gap-3 font-semibold text-[#A0A0A0]">
            <Link href="/services" className="hover:text-[#FF7A1A] transition-colors">
              Pricing Packages
            </Link>
            <span>•</span>
            <Link href="/our-work" className="hover:text-[#5B2EE8] transition-colors">
              Video Portfolio
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#FF7A1A] transition-colors">
              Book Shoot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
