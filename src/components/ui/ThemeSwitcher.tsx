"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme, ThemeMode } from "@/context/ThemeContext";
import { Moon, Sun, Crosshair, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeSwitcherProps {
  compact?: boolean;
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  compact = false,
  className = "",
}) => {
  const { theme, setTheme, cycleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 animate-pulse ${className}`} />
    );
  }

  const themes: {
    id: ThemeMode;
    label: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  }[] = [
    {
      id: "light",
      label: "White",
      description: "Clean & Bright",
      icon: <Sun className="w-4 h-4 text-[#FF7A1A]" />,
      color: "#FF7A1A",
    },
    {
      id: "dark",
      label: "Black",
      description: "Signature Dark",
      icon: <Moon className="w-4 h-4 text-[#5B2EE8]" />,
      color: "#5B2EE8",
    },
    {
      id: "night-vision",
      label: "Night Vision",
      description: "Tactical Emerald",
      icon: <Crosshair className="w-4 h-4 text-[#00FF66]" />,
      color: "#00FF66",
    },
  ];

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  // Mobile / Compact 1-click cycle mode
  if (compact) {
    return (
      <button
        onClick={cycleTheme}
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 active:scale-90 border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.08] backdrop-blur-md shadow-sm ${className}`}
        title={`Theme: ${currentTheme.label} (Click to switch)`}
        aria-label={`Current theme ${currentTheme.label}. Click to cycle theme.`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {currentTheme.icon}
        </motion.div>
      </button>
    );
  }

  // Desktop Space-Saving Dropdown
  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 px-3 rounded-full flex items-center gap-2 border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.14] backdrop-blur-md transition-all text-xs font-semibold select-none"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select website theme"
      >
        <motion.div
          key={theme}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="flex items-center"
        >
          {currentTheme.icon}
        </motion.div>
        <span className="hidden sm:inline font-bold tracking-wide uppercase text-[11px]">
          {currentTheme.label}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-[#888] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 rounded-2xl p-1.5 shadow-2xl z-50 border border-black/10 dark:border-white/15 bg-white/95 dark:bg-[#141416]/95 backdrop-blur-xl"
            role="listbox"
          >
            <div className="space-y-1">
              {themes.map((item) => {
                const isSelected = theme === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTheme(item.id);
                      setIsOpen(false);
                    }}
                    role="option"
                    aria-selected={isSelected}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all ${
                      isSelected
                        ? "bg-black/[0.06] dark:bg-white/10 font-bold"
                        : "hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06]">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-[#0F172A] dark:text-white leading-none">
                          {item.label}
                        </p>
                        <p className="text-[10px] text-[#64748B] dark:text-[#888] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: item.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
