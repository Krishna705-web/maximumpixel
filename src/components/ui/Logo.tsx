import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  showText = true,
  className = "",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2EE8] rounded-md transition-opacity hover:opacity-95 ${className}`}
      aria-label="MaximumPixel Homepage"
    >
      {/* High-Resolution Polygonal Logo */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <Image
          src="/assets/logo.png"
          alt="MaximumPixel Logo"
          width={80}
          height={80}
          priority
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <span
          className={`font-display font-black tracking-tight text-white ${textSizes[size]} leading-none select-none`}
        >
          MAXIMUMPIXEL
        </span>
      )}
    </Link>
  );
};
