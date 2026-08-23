import React from "react";

interface ConfettiAccentProps {
  variant?: "hero-home" | "hero-about" | "hero-service" | "hero-work" | "hero-contact" | "cta-banner";
  className?: string;
}

export const ConfettiAccent: React.FC<ConfettiAccentProps> = ({
  variant = "hero-home",
  className = "",
}) => {
  if (variant === "hero-home") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        {/* Purple diamond top center */}
        <svg className="absolute top-10 left-[48%] w-4 h-4 text-[#5B2EE8] animate-float" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        {/* Yellow-Orange triangle top right */}
        <svg className="absolute top-8 right-[32%] w-5 h-5 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(35 12 12)" />
        </svg>
        {/* Cyan triangle far right */}
        <svg className="absolute top-16 right-6 w-5 h-5 text-[#1E7FE0]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(-40 12 12)" />
        </svg>
        {/* Orange triangle mid right */}
        <svg className="absolute top-52 right-[44%] w-4 h-4 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(110 12 12)" />
        </svg>
        {/* Lime diamond mid right */}
        <svg className="absolute top-72 right-[46%] w-4 h-4 text-[#A3C93A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        {/* Blue triangle lower right */}
        <svg className="absolute top-80 right-8 w-5 h-5 text-[#1E7FE0]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(-60 12 12)" />
        </svg>
      </div>
    );
  }

  if (variant === "hero-about") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        {/* Orange triangle top right */}
        <svg className="absolute top-8 right-32 w-5 h-5 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(45 12 12)" />
        </svg>
        {/* Purple diamond top right */}
        <svg className="absolute top-12 right-12 w-3.5 h-3.5 text-[#5B2EE8]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        {/* Blue diamond mid right */}
        <svg className="absolute top-24 right-20 w-6 h-6 text-[#1E7FE0]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        {/* Green triangle mid right */}
        <svg className="absolute top-40 right-32 w-4 h-4 text-[#22B14C]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(-90 12 12)" />
        </svg>
        {/* Orange triangle mid right */}
        <svg className="absolute top-44 right-14 w-5 h-5 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(75 12 12)" />
        </svg>
        {/* Large purple triangle lower right */}
        <svg className="absolute top-60 right-16 w-8 h-8 text-[#5B2EE8]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(160 12 12)" />
        </svg>
      </div>
    );
  }

  if (variant === "hero-service") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        {/* Purple diamond top left */}
        <svg className="absolute top-10 left-12 w-3.5 h-3.5 text-[#5B2EE8]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        {/* Green triangle mid left */}
        <svg className="absolute top-36 left-14 w-4 h-4 text-[#22B14C]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(180 12 12)" />
        </svg>
        {/* Blue triangle lower left */}
        <svg className="absolute top-60 left-10 w-9 h-9 text-[#1E7FE0]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(-45 12 12)" />
        </svg>
        {/* Purple diamond top right */}
        <svg className="absolute top-10 right-14 w-4 h-4 text-[#5B2EE8]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        {/* Orange triangle mid right */}
        <svg className="absolute top-28 right-10 w-5 h-5 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(60 12 12)" />
        </svg>
        {/* Lime triangle lower right */}
        <svg className="absolute top-44 right-20 w-5 h-5 text-[#A3C93A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(130 12 12)" />
        </svg>
        {/* Blue diamond bottom right */}
        <svg className="absolute top-56 right-12 w-4 h-4 text-[#1E7FE0]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
      </div>
    );
  }

  if (variant === "hero-work") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        <svg className="absolute top-8 right-24 w-5 h-5 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute top-8 right-40 w-4 h-4 text-[#22B14C]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(180 12 12)" />
        </svg>
        <svg className="absolute top-10 right-8 w-5 h-5 text-[#5B2EE8]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
      </div>
    );
  }

  if (variant === "hero-contact") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
        <svg className="absolute top-6 right-52 w-4 h-4 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,20 2,20" transform="rotate(70 12 12)" />
        </svg>
        <svg className="absolute top-36 right-64 w-4 h-4 text-[#22B14C]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        <svg className="absolute top-26 right-10 w-4 h-4 text-[#FF7A1A]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        <svg className="absolute top-40 right-20 w-4 h-4 text-[#5B2EE8]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
        <svg className="absolute top-52 right-8 w-3.5 h-3.5 text-[#1E7FE0]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,12 12,22 2,12" />
        </svg>
      </div>
    );
  }

  return null;
};
