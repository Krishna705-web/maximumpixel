---
name: ui-animation-craft
description: >-
  Expert guidelines and code recipes for creating fluid, high-performance UI micro-animations,
  staggered scroll reveals, interactive hover effects, and celebratory particle bursts with
  Framer Motion, Canvas Confetti, and Tailwind CSS.
---

# UI & Animation Craft Skill

This skill provides patterns for building state-of-the-art animations in the MaximumPixel web application.

---

## 1. Framer Motion Best Practices

### A. Fade Up Scroll Reveal (Single Element)
```tsx
"use client";
import { motion } from "framer-motion";

export const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);
```

### B. Staggered Container (For Lists / Grids)
```tsx
"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const StaggerGrid = ({ items }: { items: React.ReactNode[] }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    {items.map((item, idx) => (
      <motion.div key={idx} variants={itemVariants}>
        {item}
      </motion.div>
    ))}
  </motion.div>
);
```

### C. Interactive Hover & Tap Micro-Interactions
```tsx
<motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
  className="..."
>
  Click Me
</motion.button>
```

---

## 2. Canvas Confetti Explosions

### Triggering Confetti on Form Submit / CTA Click
```tsx
import confetti from "canvas-confetti";

export const triggerBrandConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#5B2EE8", "#FF7A1A", "#22B14C", "#1E7FE0", "#FFC72C"],
  });
};
```
