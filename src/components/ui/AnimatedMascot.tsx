"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedMascotProps {
  className?: string;
}

export const AnimatedMascot: React.FC<AnimatedMascotProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse tilt tracking physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] aspect-[634/708] select-none cursor-pointer flex items-center justify-center ${className}`}
      aria-label="MaximumPixel Creator Mascot waving hello"
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformOrigin: "bottom center" }}
        animate={
          isHovered
            ? {
                y: [0, -10, 0],
                rotate: [0, 2.5, -2.5, 3, -1.5, 0],
                transition: {
                  y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                },
              }
            : {
                y: [0, -6, 0],
                rotate: [0, 1.2, -1.2, 1.2, 0],
                transition: {
                  y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                },
              }
        }
      >
        <Image
          src="/assets/mascot-wave.png"
          alt="MaximumPixel Creator Mascot"
          fill
          priority
          className="object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
        />
      </motion.div>
    </motion.div>
  );
};
