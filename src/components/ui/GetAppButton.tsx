"use client";

import React, { useState, useEffect } from "react";
import { Smartphone, Download, X, Check, Share, PlusSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

interface GetAppButtonProps {
  variant?: "desktop" | "mobile-menu" | "minimal";
  className?: string;
  onActionComplete?: () => void;
}

export const GetAppButton: React.FC<GetAppButtonProps> = ({
  variant = "desktop",
  className = "",
  onActionComplete,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed)
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone)
    ) {
      setIsStandalone(true);
    }

    const userAgent = typeof window !== "undefined" ? window.navigator.userAgent.toLowerCase() : "";
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
      if (onActionComplete) onActionComplete();
      return;
    }

    // Open information modal if iOS or prompt not available
    setIsModalOpen(true);
  };

  return (
    <>
      {variant === "desktop" && (
        <button
          type="button"
          onClick={handleClick}
          className={`px-3.5 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-xs font-bold text-white transition-all flex items-center gap-1.5 active:scale-95 group ${className}`}
          title="Install MaximumPixel Web App"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#5B2EE8] group-hover:text-[#7C4DFF] transition-colors" />
          <span>Get App</span>
        </button>
      )}

      {variant === "mobile-menu" && (
        <button
          type="button"
          onClick={handleClick}
          className={`w-full py-3 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-bold text-sm flex items-center justify-between transition-all ${className}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#5B2EE8]/20 flex items-center justify-center text-[#5B2EE8]">
              <Smartphone className="w-4 h-4" />
            </div>
            <span>Download MaximumPixel App</span>
          </div>
          <Download className="w-4 h-4 text-[#A0A0A0]" />
        </button>
      )}

      {variant === "minimal" && (
        <button
          type="button"
          onClick={handleClick}
          className={`text-xs font-semibold text-[#A0A0A0] hover:text-white transition-colors flex items-center gap-1 ${className}`}
        >
          <Smartphone className="w-3.5 h-3.5 text-[#5B2EE8]" />
          <span>App</span>
        </button>
      )}

      {/* Modern Installation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md bg-[#141416] border border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white z-10 space-y-5"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 text-[#888] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header with App Icon */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                  <Image
                    src="/icon-192.png"
                    alt="MaximumPixel App"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-white">
                    MaximumPixel App
                  </h3>
                  <p className="text-xs text-[#A0A0A0] mt-0.5">
                    Fast, full-screen studio experience
                  </p>
                </div>
              </div>

              {/* iOS Specific Instructions */}
              {isIOS ? (
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold text-[#FF7A1A] uppercase tracking-wider">
                    How to install on iOS Safari:
                  </p>
                  <div className="space-y-2.5 text-xs text-[#CCCCCC] bg-white/[0.03] p-4 rounded-2xl border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#5B2EE8]/20 flex items-center justify-center text-[#5B2EE8] shrink-0 font-bold">
                        1
                      </div>
                      <p className="pt-0.5">
                        Tap the <strong className="text-white">Share</strong> icon{" "}
                        <Share className="w-3.5 h-3.5 inline text-[#5B2EE8] mx-0.5 -mt-0.5" /> at the bottom of Safari.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#5B2EE8]/20 flex items-center justify-center text-[#5B2EE8] shrink-0 font-bold">
                        2
                      </div>
                      <p className="pt-0.5">
                        Scroll down and tap <strong className="text-white">Add to Home Screen</strong>{" "}
                        <PlusSquare className="w-3.5 h-3.5 inline text-[#22B14C] mx-0.5 -mt-0.5" />.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#5B2EE8]/20 flex items-center justify-center text-[#5B2EE8] shrink-0 font-bold">
                        3
                      </div>
                      <p className="pt-0.5">
                        Tap <strong className="text-white">Add</strong> in the top-right corner.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2.5 text-left">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                      <p className="text-xs font-bold text-white">⚡ Instant Load</p>
                      <p className="text-[11px] text-[#A0A0A0] mt-0.5">0ms screen transitions</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                      <p className="text-xs font-bold text-[#22B14C]">📱 Native Feel</p>
                      <p className="text-[11px] text-[#A0A0A0] mt-0.5">Standalone full-screen</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#A0A0A0] leading-relaxed pt-1">
                    {isStandalone
                      ? "You are already using the standalone MaximumPixel web app!"
                      : "Tap install or add this page to your home screen directly from your browser menu to enjoy our studio portfolio anywhere."}
                  </p>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3 rounded-2xl bg-[#5B2EE8] hover:bg-[#6C3DF5] text-white text-sm font-bold transition-all shadow-lg active:scale-95 text-center"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
