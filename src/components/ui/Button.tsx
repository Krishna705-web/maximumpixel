import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "dark-outline" | "bronze";
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
    "inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.12em] rounded-[2px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A78B70] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] gap-2",
    md: "px-6 py-3 text-xs gap-2.5",
    lg: "px-7 py-3.5 text-xs gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#171717] text-[#F4F3EF] hover:bg-[#2E2E2B] border border-[#171717]",
    outline:
      "bg-transparent text-[#171717] border border-[#171717]/30 hover:border-[#171717] hover:bg-[#171717] hover:text-[#F4F3EF]",
    "dark-outline":
      "bg-transparent text-[#FFFFFF] border border-white/30 hover:border-white hover:bg-white hover:text-[#171717]",
    bronze:
      "bg-[#A78B70] text-[#FFFFFF] hover:bg-[#8C7158] border border-[#A78B70]",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  const content = (
    <>
      {isLoading && <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />}
      <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
        {children}
      </span>
      {showArrow && !isLoading && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
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
