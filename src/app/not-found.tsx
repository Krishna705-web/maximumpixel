import React from "react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-[#F4F3EF] text-[#171717] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
        <p className="editorial-label text-[#A78B70]">404 — Page Not Found</p>
        <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-[-0.03em] leading-[1.02]">
          THIS FRAME DOES NOT EXIST.
        </h1>
        <p className="text-base text-[#777873] max-w-lg leading-relaxed">
          The page you requested may have moved or is no longer available. Explore our selected work or return to the studio homepage.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="/" variant="primary" size="md" showArrow>
            Back to Home
          </Button>
          <Button href="/work" variant="outline" size="md">
            Explore Work
          </Button>
        </div>
      </div>
    </div>
  );
}

