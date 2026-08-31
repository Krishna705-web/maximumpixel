import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Shoot, Video Edit & Shoot + Edit Services | MaximumPixel Jaipur",
  description:
    "Explore professional video production services at MaximumPixel: Video Shoot, Video Edit, and Turnkey Shoot + Edit productions in Jaipur.",
  keywords: [
    "Video Shoot Studio in Jaipur",
    "Video Shoot and Editing Jaipur",
    "Video Editing Agency India",
    "Instagram Reels Editor Jaipur",
    "Shoot and Edit Video Agency",
    "Commercial Video Production Jaipur",
    "MaximumPixel Services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Video Shoot, Video Edit & Shoot + Edit Services | MaximumPixel",
    description:
      "Specialized creative studio for Video Shoot, Video Edit, and Shoot + Edit in Jaipur.",
    url: "https://www.maximumpixel.online/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Video Production & Editing",
    "provider": {
      "@type": "ProfessionalService",
      "name": "MaximumPixel",
      "url": "https://www.maximumpixel.online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
    },
    "areaServed": [
      { "@type": "City", "name": "Jaipur" },
      { "@type": "State", "name": "Rajasthan" },
      { "@type": "Country", "name": "India" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MaximumPixel Video Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Shoot",
            "description": "Professional 4K on-location & studio cinematography with camera crews, gimbal operations, and lighting.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Edit",
            "description": "High-retention video editing, dynamic kinetic captions, sound design, sound mastering, and color polish.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shoot + Edit",
            "description": "Full end-to-end turnkey video production from concept and filming to color grading and master delivery.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}

