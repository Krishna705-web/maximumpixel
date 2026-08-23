import React from "react";

interface FilterPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const FilterPill: React.FC<FilterPillProps> = ({
  label,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2EE8]
        ${
          active
            ? "bg-[#5B2EE8] text-white shadow-[0_2px_12px_rgba(91,46,232,0.5)] scale-105"
            : "bg-transparent text-white/80 border border-white/20 hover:border-white/50 hover:text-white"
        }
      `}
    >
      {label}
    </button>
  );
};
