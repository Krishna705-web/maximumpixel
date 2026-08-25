import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "cta" | "secondary" | "outline" | "orange";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  isLoading = false,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5B2EE8] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm md:text-base gap-2",
    lg: "px-8 py-3.5 text-base md:text-lg gap-2.5 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-[#5B2EE8] hover:bg-[#6C3DF5] text-white shadow-[0_4px_20px_rgba(91,46,232,0.4)] hover:shadow-[0_6px_25px_rgba(91,46,232,0.6)]",
    cta: "bg-[#FFC72C] hover:bg-[#FFD24D] text-[#0A0A0A] font-bold shadow-[0_4px_20px_rgba(255,199,44,0.35)]",
    orange: "bg-[#FF7A1A] hover:bg-[#FF8E3C] text-white shadow-[0_4px_20px_rgba(255,122,26,0.35)]",
    secondary:
      "bg-[#18181B] hover:bg-[#27272A] text-white border border-white/10 hover:border-white/20",
    outline:
      "bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
      <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
      </span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${combinedClasses} group`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${combinedClasses} group`}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
