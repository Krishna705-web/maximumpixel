"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#5B2EE8] via-[#FF7A1A] to-[#22B14C] origin-left z-[100] pointer-events-none shadow-[0_0_8px_rgba(91,46,232,0.8)]"
      aria-hidden="true"
    />
  );
};
