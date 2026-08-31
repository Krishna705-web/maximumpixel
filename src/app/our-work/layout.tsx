import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Portfolio & Reels Showcase | MaximumPixel",
  description:
    "Explore 4K commercial videos, brand shoots, and viral reels edited by MaximumPixel Studio in Jaipur. View our work.",
  keywords: [
    "Video Shoot Portfolio Jaipur",
    "Instagram Reels Portfolio Jaipur",
    "Commercial Video Maker Jaipur",
    "Cafe Video Shoot Jaipur",
    "Restaurant Reel Showcase",
    "Jaipur Video Editor Case Studies",
    "MaximumPixel Portfolio",
  ],
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Video Portfolio & Reels Showcase | MaximumPixel",
    description:
      "Explore 4K commercial videos, brand shoots, and viral reels edited by MaximumPixel Studio in Jaipur. View our work.",
    url: "https://www.maximumpixel.online/our-work",
  },
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "MaximumPixel Portfolio & Case Studies",
    "description": "Showcase of commercial video production, product shoots, and viral social content by MaximumPixel in Jaipur.",
    "url": "https://www.maximumpixel.online/our-work",
    "creator": {
      "@type": "ProfessionalService",
      "name": "MaximumPixel",
      "url": "https://www.maximumpixel.online",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      {children}
    </>
  );
}
