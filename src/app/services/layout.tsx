import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Services & Video Production in Jaipur",
  description:
    "Explore creative services at MaximumPixel Jaipur: Commercial video production, viral short-form reels, product photography, live event coverage, and 3D VFX design.",
  keywords: [
    "Video Production Studio in Jaipur",
    "Best Video Production Agency Jaipur",
    "Instagram Reels Production Agency Jaipur",
    "Commercial Photography Studio Jaipur",
    "Product Shoot Studio Jaipur",
    "3D Animation & VFX Studio Jaipur",
    "Corporate Film Makers in Rajasthan",
    "Brand Storytelling Jaipur",
    "MaximumPixel Services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Video Production, Reels, Photography & 3D Studio in Jaipur | MaximumPixel",
    description:
      "High-impact commercial video production, viral Instagram reels, professional studio photography, and 3D design in Jaipur.",
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
    "serviceType": "Video Production & Creative Content",
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
      "name": "MaximumPixel Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Video Production & Brand Films",
            "description": "High-end cinematic commercials, corporate films, and brand storytelling.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Viral Instagram Reels & Short-Form Content",
            "description": "High-engagement 9:16 vertical video production for Instagram and YouTube Shorts.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Product Photography",
            "description": "Studio lighting, e-commerce lookbooks, lifestyle shoots, and product imagery.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Live Event & Concert Cinematography",
            "description": "Dynamic multi-camera coverage and fast-turnaround event recap films.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3D Animation, VFX & Visual Design",
            "description": "Custom 3D modeling, visual effects, and digital branding assets.",
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
