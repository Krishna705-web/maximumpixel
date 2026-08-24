import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | MaximumPixel Jaipur",
  description:
    "Watch commercial films, brand campaigns, live concert recaps, and viral social media reels crafted by MaximumPixel Creative Studio in Jaipur.",
  keywords: [
    "MaximumPixel Portfolio",
    "Video Production Case Studies Jaipur",
    "Commercial Films Portfolio",
    "Instagram Reels Portfolio",
    "Event Videographer Jaipur",
    "Brand Film Production Studio India",
    "Creative Work Jaipur",
  ],
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Portfolio & Case Studies | MaximumPixel Creative Studio Jaipur",
    description:
      "Explore cinematic video projects, commercial campaigns, and viral social content produced by MaximumPixel.",
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
