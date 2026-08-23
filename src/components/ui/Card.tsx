import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = true,
  glowOnHover = false,
}) => {
  return (
    <div
      className={`
        relative rounded-2xl bg-[#111113] border border-white/[0.08] overflow-hidden
        ${hoverable ? "transition-all duration-300 hover:border-white/20 hover:-translate-y-1" : ""}
        ${glowOnHover ? "hover:shadow-[0_10px_30px_-10px_rgba(91,46,232,0.3)]" : "shadow-lg"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
