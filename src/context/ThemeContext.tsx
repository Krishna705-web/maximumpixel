"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "night-vision";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read saved theme from localStorage, default to 'light'
    const savedTheme = localStorage.getItem("mp_theme") as ThemeMode | null;
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark" || savedTheme === "night-vision")) {
      setThemeState(savedTheme);
      applyTheme(savedTheme);
    } else {
      setThemeState("light");
      applyTheme("light");
    }
    setMounted(true);
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark", "night-vision");
    root.classList.add(mode);
    root.setAttribute("data-theme", mode);
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem("mp_theme", newTheme);
    applyTheme(newTheme);
  };

  const cycleTheme = () => {
    const themes: ThemeMode[] = ["light", "dark", "night-vision"];
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
