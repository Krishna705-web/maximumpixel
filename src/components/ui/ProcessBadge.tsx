import React from "react";
import {
  MessageSquare,
  FileText,
  Camera,
  Scissors,
  CheckSquare,
  Send,
  IndianRupee,
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
    const iconClass = "w-8 h-8 md:w-9 md:h-9";
    switch (iconName) {
      case "message":
        return <MessageSquare className={`${iconClass} text-[#1E7FE0]`} />;
      case "quote":
        return (
          <div className="relative flex items-center justify-center">
            <FileText className={`${iconClass} text-[#22B14C]`} />
            <IndianRupee className="w-3.5 h-3.5 text-[#22B14C] absolute top-2.5 right-2" />
          </div>
        );
      case "camera":
        return <Camera className={`${iconClass} text-[#FF7A1A]`} />;
      case "edit":
        return <Scissors className={`${iconClass} text-[#5B2EE8]`} />;
      case "review":
        return <CheckSquare className={`${iconClass} text-[#E53E3E]`} />;
      case "deliver":
        return <Send className={`${iconClass} text-[#1E7FE0]`} />;
      default:
        return <MessageSquare className={iconClass} />;
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-3 sm:p-4 relative group">
      {/* Number Badge with Guaranteed Solid Circle Color */}
      <div
        style={{ backgroundColor: stepColor.bg }}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200"
      >
        {step}
      </div>

      {/* Icon */}
      <div className="mb-3 h-10 flex items-center justify-center group-hover:translate-y-[-2px] transition-transform duration-200">
        {getIcon()}
      </div>

      {/* Step Title */}
      <h3 className="font-display font-black text-white text-base md:text-lg tracking-wider mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed max-w-[140px] md:max-w-[160px]">
        {description}
      </p>
    </div>
  );
};
