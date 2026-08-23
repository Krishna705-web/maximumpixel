import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#121214",
          card: "#111113",
          hover: "#18181B",
        },
        primary: {
          purple: "#5B2EE8",
          purpleDark: "#451EC7",
          purpleLight: "#7345F5",
        },
        accent: {
          orange: "#FF7A1A",
          orangeLight: "#FF8E3C",
          green: "#22B14C",
          blue: "#1E7FE0",
          teal: "#14B8A6",
          lime: "#A3C93A",
          yellow: "#FFC72C",
          red: "#E53E3E",
        },
        muted: {
          DEFAULT: "#A0A0A0",
          light: "#CCCCCC",
          dark: "#71717A",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(91, 46, 232, 0.3)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        purpleGlow: "0 0 25px rgba(91, 46, 232, 0.35)",
        orangeGlow: "0 0 25px rgba(255, 122, 26, 0.3)",
        cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
