import React from "react";
import {
  MessageSquare,
  ReceiptText,
  Camera,
  Scissors,
  CheckCircle2,
  Send,
} from "lucide-react";

interface ProcessBadgeProps {
  step: string;
  badgeColor: string;
  title: string;
  description: string;
  iconName: string;
  index: number;
}

const STEP_COLORS: Record<string, { bg: string; iconColor: string }> = {
  "01": { bg: "#1E7FE0", iconColor: "text-[#1E7FE0]" }, // Blue
  "02": { bg: "#22B14C", iconColor: "text-[#22B14C]" }, // Green
  "03": { bg: "#FF7A1A", iconColor: "text-[#FF7A1A]" }, // Orange
  "04": { bg: "#5B2EE8", iconColor: "text-[#5B2EE8]" }, // Purple
  "05": { bg: "#E53E3E", iconColor: "text-[#E53E3E]" }, // Red / Review
  "06": { bg: "#1E7FE0", iconColor: "text-[#1E7FE0]" }, // Blue
};

export const ProcessBadge: React.FC<ProcessBadgeProps> = ({
  step,
  title,
  description,
  iconName,
}) => {
  const stepColor = STEP_COLORS[step] || { bg: "#5B2EE8", iconColor: "text-[#5B2EE8]" };

  const getIcon = () => {
    const iconClass = "w-7 h-7 md:w-8 md:h-8";
    switch (iconName) {
      case "message":
        return <MessageSquare strokeWidth={1.75} className={`${iconClass} text-[#1E7FE0]`} />;
      case "quote":
        return <ReceiptText strokeWidth={1.75} className={`${iconClass} text-[#22B14C]`} />;
      case "camera":
        return <Camera strokeWidth={1.75} className={`${iconClass} text-[#FF7A1A]`} />;
      case "edit":
        return <Scissors strokeWidth={1.75} className={`${iconClass} text-[#5B2EE8]`} />;
      case "review":
        return <CheckCircle2 strokeWidth={1.75} className={`${iconClass} text-[#E53E3E]`} />;
      case "deliver":
        return <Send strokeWidth={1.75} className={`${iconClass} text-[#1E7FE0]`} />;
      default:
        return <MessageSquare strokeWidth={1.75} className={iconClass} />;
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-2.5 sm:p-3 relative group">
      {/* Number Badge */}
      <div
        style={{ backgroundColor: stepColor.bg }}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg mb-2.5 group-hover:scale-110 transition-transform duration-200"
      >
        {step}
      </div>

      {/* Icon */}
      <div className="mb-3 h-10 flex items-center justify-center group-hover:translate-y-[-2px] transition-transform duration-200">
        {getIcon()}
      </div>

      {/* Step Title */}
      <h3 className="font-display font-black text-white text-sm md:text-base tracking-wider mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#B0B0B0] leading-normal max-w-[145px] md:max-w-[165px]">
        {description}
      </p>
    </div>
  );
};
