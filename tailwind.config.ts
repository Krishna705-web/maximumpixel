import type { NextConfig } from "next";

const config: NextConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F4F3EF",
        charcoal: "#171717",
        ink: "#171717",
        "muted-grey": "#777873",
        stone: "#DAD8D1",
        bronze: "#A78B70",
        "bronze-dark": "#8C7158",
        "dark-surface": "#1F1F1D",
        "dark-border": "#2D2D2A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Manrope", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
      },
      letterSpacing: {
        editorial: "-0.03em",
        label: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
