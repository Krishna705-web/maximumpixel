"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PRICING_CATEGORIES,
  PRICING_PLANS,
  PricingCategory,
  PricingTier,
} from "@/data/pricing";
import { COMPANY_INFO } from "@/data/company";
import {
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Zap,
  Clock,
  ArrowRight,
  ShieldCheck,
  Tag,
  Flame,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<PricingCategory>("shoot-edit");

  const plans = PRICING_PLANS[activeTab] || [];

  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#5B2EE8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2EE8]/15 border border-[#5B2EE8]/30 mb-3.5">
            <Tag className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              Transparent Starter Pricing • Jaipur
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            IRRESISTIBLE PACKAGES, <br />
            <span className="text-[#5B2EE8] drop-shadow-[0_0_25px_rgba(91,46,232,0.35)]">
              ZERO-RISK RESULTS
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A0A0A0] mt-3 max-w-xl mx-auto leading-relaxed">
            High-converting mobile cinematography and high-retention video edits tailored for local brands, creators, and businesses.
          </p>

          {/* Guarantee Pill */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-2xl bg-white/[0.04] border border-[#22B14C]/30 text-[#22B14C] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#22B14C]" />
            <span>Dedicated Single Shoot Sessions &amp; Up to 2–4 Free Revisions</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md max-w-full overflow-x-auto scrollbar-none">
            {PRICING_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#5B2EE8] text-white shadow-[0_4px_20px_rgba(91,46,232,0.5)]"
                      : "text-[#A0A0A0] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {cat.label}
                  {cat.id === "shoot-edit" && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-black uppercase bg-[#FF7A1A] text-white shadow-sm">
                      Hot
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {plans.map((plan) => {
              const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                plan.whatsappMessage
              )}`;

              const discountPercentage = Math.round(
                ((plan.originalPrice - plan.price) / plan.originalPrice) * 100
              );

              return (
                <div
                  key={plan.id}
                  className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                    plan.isPopular
                      ? "bg-gradient-to-b from-[#1C1736] via-[#12111D] to-[#0D0D12] border-2 border-[#5B2EE8] shadow-[0_8px_35px_rgba(91,46,232,0.25)] lg:-translate-y-2"
                      : "bg-[#111114] border border-white/10 hover:border-white/25 hover:shadow-xl"
                  }`}
                >
                  {/* Popular / Best Value Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          plan.badgeColor || "bg-[#5B2EE8]"
                        } text-white text-[10px] font-black tracking-widest uppercase shadow-md flex items-center gap-1`}
                      >
                        <Flame className="w-3 h-3 fill-current" />
                        <span>{plan.badge}</span>
                      </span>
                    </div>
                  )}

                  {/* Header info */}
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-display font-black text-xl text-white">
                        {plan.name}
                      </h3>
                      <span className="text-xs font-bold text-[#FF7A1A] bg-[#FF7A1A]/10 px-2 py-0.5 rounded-md border border-[#FF7A1A]/20">
                        {discountPercentage}% OFF
                      </span>
                    </div>

                    <p className="text-xs text-[#A0A0A0] leading-relaxed min-h-[2.5rem] mb-4">
                      {plan.tagline}
                    </p>

                    {/* Price display */}
                    <div className="pt-3 pb-4 border-t border-b border-white/[0.08] mb-5">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                          ₹{plan.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sm line-through text-[#666666] font-semibold">
                          ₹{plan.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#A78BFA] mt-1 flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-[#FFC72C]" />
                        <span>{plan.unit}</span>
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#A0A0A0]">
                        What&apos;s Included:
                      </p>
                      {plan.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs text-[#CCCCCC] leading-snug"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#22B14C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons & Turnaround */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between text-[11px] text-[#A0A0A0] pb-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#A0A0A0]" />
                        <span>Turnaround:</span>
                      </span>
                      <span className="font-bold text-white">{plan.turnaround}</span>
                    </div>

                    {/* WhatsApp Fast Book Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 group/btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Book on WhatsApp</span>
                    </a>

                    {/* Contact Form Link */}
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        plan.name
                      )}&price=${encodeURIComponent("₹" + plan.price)}`}
                      className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#CCCCCC] hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-white/[0.08]"
                    >
                      <span>Custom Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Custom Project / Bottom Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#CCCCCC]">
            Need a custom package for a wedding, concert, longform YouTube podcast, or custom reel count?
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              "Hi MaximumPixel! I have a custom video project and would like to get a quote."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF7A1A] hover:text-[#FFA15C] mt-2 transition-colors"
          >
            <span>Chat directly with us for a custom quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
