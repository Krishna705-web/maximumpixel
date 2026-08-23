import React from "react";

interface CornerBurstProps {
  className?: string;
  size?: number;
}

export const CornerBurst: React.FC<CornerBurstProps> = ({
  className = "",
  size = 180,
}) => {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 right-0 z-0 overflow-hidden ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Floating small purple diamond */}
        <polygon points="120,40 132,52 120,64 108,52" fill="#5B2EE8" />
        
        {/* Main multifaceted corner cluster */}
        <g transform="translate(0, 0)">
          {/* Top blue polygon */}
          <polygon points="200,80 200,160 140,110" fill="#1E7FE0" />
          
          {/* Purple facet */}
          <polygon points="200,160 170,200 140,110" fill="#5B2EE8" />
          
          {/* Green facet */}
          <polygon points="140,110 170,200 110,200 100,160" fill="#22B14C" />
          
          {/* Yellow-Green lime facet */}
          <polygon points="140,110 100,160 70,180 110,130" fill="#A3C93A" />
          
          {/* Orange facet */}
          <polygon points="100,160 110,200 40,200 70,180" fill="#FF7A1A" />
          
          {/* Red/Crimson facet */}
          <polygon points="70,180 40,200 0,200" fill="#E53E3E" />
        </g>
      </svg>
    </div>
  );
};
