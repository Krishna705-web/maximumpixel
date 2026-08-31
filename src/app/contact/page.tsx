"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { ConfettiAccent } from "@/components/ui/ConfettiAccent";
import confetti from "canvas-confetti";
import {
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedMascot } from "@/components/ui/AnimatedMascot";

const SERVICES_OPTIONS = [
  "Shoot + Edit",
  "Video Shoot",
  "Video Edit",
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<string>("Shoot + Edit");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const triggerBrandConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#5B2EE8", "#FF7A1A", "#22B14C", "#1E7FE0", "#FFC72C"],
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setSuccessMessage("");

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please tell us about your project.");
      return;
    }

    try {
      const payload = {
        ...formData,
        message: `[Service: ${selectedService}]\n\n${formData.message}`,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setSuccessMessage(
          "Thank you! Your inquiry has been received. Our creative team will get back to you within 2 hours."
        );
        setFormData({ name: "", email: "", phone: "", message: "", hp: "" });
        triggerBrandConfetti();
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try reaching out via WhatsApp directly.");
    }
  };

  const renderSocialIcon = (name: string) => {
    const iconClass = "w-4 h-4 text-white";
    switch (name.toLowerCase()) {
      case "instagram":
        return <Instagram className={iconClass} />;
      case "youtube":
        return <Youtube className={iconClass} />;
      case "whatsapp":
        return <MessageCircle className={iconClass} />;
      case "linkedin":
        return <Linkedin className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden pb-16">
      {/* Background Ambience & Confetti */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5B2EE8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF7A1A]/10 rounded-full blur-3xl pointer-events-none" />
      <ConfettiAccent variant="hero-about" />

      {/* ═══════════════════════════════════════════════════════
          HEADER SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-6 md:pt-12 md:pb-8 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2EE8]/15 border border-[#5B2EE8]/30 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#22B14C] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
            Available For New Projects &amp; Shoots
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight"
        >
          LET&apos;S CREATE <span className="text-[#5B2EE8]">TOGETHER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#A0A0A0] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-2"
        >
          Have a video, commercial shoot, or brand redesign in mind? Drop us a line and let&apos;s turn your vision into pixel-perfect reality.
        </motion.p>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT WRAPPER
          ═══════════════════════════════════════════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* ───────────────────────────────────────────────────
            1. INLINE QUICK CONNECT CARDS ROW (3-Column Horizontal Grid)
            ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* WhatsApp Card */}
          <motion.a
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl bg-[#0D1811] border border-[#22B14C]/30 hover:border-[#22B14C]/70 transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(34,177,76,0.2)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#22B14C] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="font-display font-black text-sm sm:text-base text-white">
                    Instant WhatsApp Chat
                  </p>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#22B14C]/20 text-[#22B14C]">
                    Fastest
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#CCCCCC]">
                  {COMPANY_INFO.formattedPhone}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Email Card */}
          <motion.a
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${COMPANY_INFO.email}`}
            className="group flex items-center justify-between p-4 rounded-2xl bg-[#0D1420] border border-[#1E7FE0]/30 hover:border-[#1E7FE0]/70 transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(30,127,224,0.2)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1E7FE0] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-black text-sm sm:text-base text-white">
                  Official Email Inquiry
                </p>
                <p className="text-xs sm:text-sm text-[#CCCCCC]">
                  {COMPANY_INFO.email}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Location Card */}
          <motion.a
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl bg-[#1C130D] border border-[#FF7A1A]/30 hover:border-[#FF7A1A]/70 transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(255,122,26,0.2)]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#FF7A1A] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-black text-sm sm:text-base text-white">
                  MaximumPixel Studio HQ
                </p>
                <p className="text-xs sm:text-sm text-[#CCCCCC]">
                  {COMPANY_INFO.location}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#A0A0A0] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* ───────────────────────────────────────────────────
            2. TWO-COLUMN SPLIT: MASCOT CARD & INQUIRY FORM
            ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT (5 Cols): Mascot Stage Card */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl flex-1 flex flex-col justify-between"
            >
              {/* Decorative Glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#5B2EE8]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Speech Bubble */}
              <div className="relative z-10 p-4 rounded-2xl bg-[#5B2EE8]/20 border border-[#5B2EE8]/40 mb-2 flex items-start gap-3 shadow-inner">
                <Sparkles className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-white leading-relaxed">
                  &ldquo;Got an exciting idea or need a quote? We respond in under 2 hours!&rdquo;
                </p>
              </div>

              {/* Character Visual (2D Animated Mascot) */}
              <div className="relative z-10 w-full flex justify-center items-center py-2 my-auto">
                <AnimatedMascot className="max-w-[240px] sm:max-w-[280px]" />
              </div>

              {/* Studio Metrics Row & Socials */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="font-display font-black text-lg sm:text-xl text-white">&lt; 2hr</p>
                    <p className="text-[11px] text-[#A0A0A0] uppercase tracking-wider">Response</p>
                  </div>
                  <div className="border-x border-white/10">
                    <p className="font-display font-black text-lg sm:text-xl text-[#22B14C]">4.9 / 5</p>
                    <p className="text-[11px] text-[#A0A0A0] uppercase tracking-wider">Client Rating</p>
                  </div>
                  <div>
                    <p className="font-display font-black text-lg sm:text-xl text-[#FF7A1A]">Jaipur</p>
                    <p className="text-[11px] text-[#A0A0A0] uppercase tracking-wider">HQ Hub</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider">
                    Follow Our Work:
                  </span>
                  <div className="flex items-center gap-2">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow on ${social.name}`}
                        className={`w-8 h-8 rounded-lg ${social.bgColor} flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-md`}
                      >
                        {renderSocialIcon(social.name)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT (7 Cols): Studio Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-2xl relative h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-tight">
                    SEND US A MESSAGE
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
                    Fill out the details below and we&apos;ll prepare a tailored proposal.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-xs text-[#22B14C] bg-[#22B14C]/10 px-3 py-1.5 rounded-full border border-[#22B14C]/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Secure &amp; Direct</span>
                </div>
              </div>

              {/* Service Selection Pills */}
              <div className="pt-6 pb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-3">
                  1. What service do you need?
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES_OPTIONS.map((srv) => {
                    const isSelected = selectedService === srv;
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#5B2EE8] text-white shadow-[0_2px_12px_rgba(91,46,232,0.5)] scale-[1.02] border border-[#5B2EE8]"
                            : "bg-white/[0.05] text-[#CCCCCC] hover:text-white hover:bg-white/[0.1] border border-white/10"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-2xl bg-[#22B14C]/15 border border-[#22B14C]/40 text-white flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#22B14C] shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{successMessage}</p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-2xl bg-red-500/15 border border-red-500/40 text-white flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-5">
                {/* Honeypot Bot Trap */}
                <input
                  type="text"
                  name="hp"
                  value={formData.hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                      Your Name <span className="text-[#5B2EE8]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#5B2EE8] focus:ring-1 focus:ring-[#5B2EE8] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                      Email Address <span className="text-[#5B2EE8]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#5B2EE8] focus:ring-1 focus:ring-[#5B2EE8] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Phone / WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#5B2EE8] focus:ring-1 focus:ring-[#5B2EE8] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A0A0A0] mb-1.5">
                    Project Overview &amp; Requirements <span className="text-[#5B2EE8]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, goals, shoot locations, or reference styles..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#5B2EE8] focus:ring-1 focus:ring-[#5B2EE8] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === "loading"}
                    isLoading={status === "loading"}
                    className="py-4 text-sm sm:text-base font-bold shadow-[0_4px_25px_rgba(91,46,232,0.5)] hover:shadow-[0_8px_30px_rgba(91,46,232,0.7)]"
                  >
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4 shrink-0" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            BOTTOM SECTION: "WHAT HAPPENS NEXT?" 3-STEP PROCESS
            ═══════════════════════════════════════════════════════ */}
        <section className="mt-14 pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider">
              WHAT HAPPENS NEXT?
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
              Our seamless, transparent onboarding workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#5B2EE8]/20 border border-[#5B2EE8]/40 flex items-center justify-center text-[#5B2EE8] font-display font-black text-lg mb-3">
                1
              </div>
              <h4 className="font-bold text-white text-base mb-1">Quick Discovery</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                We review your brief within 2 hours and schedule a creative alignment call to understand your vision.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A1A]/20 border border-[#FF7A1A]/40 flex items-center justify-center text-[#FF7A1A] font-display font-black text-lg mb-3">
                2
              </div>
              <h4 className="font-bold text-white text-base mb-1">Proposal &amp; Moodboard</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                We craft a custom production timeline, visual moodboard, and transparent pricing tier tailored to your budget.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#22B14C]/20 border border-[#22B14C]/40 flex items-center justify-center text-[#22B14C] font-display font-black text-lg mb-3">
                3
              </div>
              <h4 className="font-bold text-white text-base mb-1">Shoot &amp; Pixel Perfection</h4>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Our camera, editing, and VFX crew takes charge and delivers polished, commercial-grade content ready to scale.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
