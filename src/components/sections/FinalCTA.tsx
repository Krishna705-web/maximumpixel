import React from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface FinalCTAProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  eyebrow = "New Commissions",
  headline = "HAVE A PROJECT IN MIND?",
  description = "Let's create something worth watching.",
  ctaLabel = "START A PROJECT",
  ctaHref = "/contact",
}) => {
  return (
    <section className="bg-[#171717] text-[#F4F3EF] border-t border-[#2D2D2A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="editorial-label text-[#A78B70]">{eyebrow}</p>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.02] text-[#FFFFFF]">
              {headline}
            </h2>
            <p className="text-base sm:text-lg text-[#B8B6AF] max-w-xl leading-relaxed pt-1">
              {description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button href={ctaHref} variant="dark-outline" size="lg" showArrow>
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

