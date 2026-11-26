import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showMark?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  showMark = true,
  className = "",
}) => {
  const textColor = variant === "light" ? "text-[#171717]" : "text-[#FFFFFF]";
  const subColor = variant === "light" ? "text-[#777873]" : "text-[#A7A7A2]";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78B70] ${className}`}
      aria-label="Maximum Pixel Home"
    >
      {showMark && (
        <span className="relative w-7 h-7 shrink-0 flex items-center justify-center">
          <Image
            src="/images/brand/logo.png"
            alt="Maximum Pixel Mark"
            width={56}
            height={56}
            priority
            className="w-full h-full object-contain"
          />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-base sm:text-[17px] tracking-[-0.02em] uppercase ${textColor}`}
        >
          Maximum Pixel
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.16em] mt-0.5 ${subColor}`}>
          Production Studio
        </span>
      </span>
    </Link>
  );
};
