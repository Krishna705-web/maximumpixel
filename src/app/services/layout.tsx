import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Shoot, Video Edit & Shoot + Edit Pricing in Jaipur | MaximumPixel",
  description:
    "Explore transparent video production & reels packages in Jaipur: Single Reel Edit (₹499), On-Location Shoot (₹1,499), and Shoot + Edit Turnkey Bundles (₹2,499). Book directly on WhatsApp.",
  keywords: [
    "Video Shoot in Jaipur",
    "Video Editing Services Jaipur",
    "Shoot and Edit Packages Jaipur",
    "Instagram Reels Video Shoot Jaipur",
    "Cafe Shoot Packages Jaipur",
    "Restaurant Video Shoot Cost Jaipur",
    "Affordable Video Production Jaipur",
    "Mobile Cinematographer Rates Jaipur",
    "Reel Editing Charges Jaipur",
    "MaximumPixel Services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Video Shoot, Video Edit & Shoot + Edit Pricing in Jaipur | MaximumPixel",
    description:
      "Explore transparent video production & reels packages in Jaipur: Single Reel Edit (₹499), On-Location Shoot (₹1,499), and Shoot + Edit Turnkey Bundles (₹2,499).",
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
    "serviceType": "Video Production & Reels Post-Production",
    "provider": {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "MaximumPixel",
      "url": "https://www.maximumpixel.online",
      "telephone": "+917878736798",
      "priceRange": "₹499 - ₹9999",
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
      "name": "MaximumPixel Video Services Jaipur",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Video Edit Only (Single to Monthly)",
          "price": "499",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Editing & Reels Post-Production",
            "description": "High-retention video editing with kinetic subtitles, sound effects, pacing, and color polish starting at ₹499.",
          },
        },
        {
          "@type": "Offer",
          "name": "Video Shoot Only (1-2h to Full Day)",
          "price": "1499",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "On-Location Video Shoot in Jaipur",
            "description": "4K mobile cinematography with stabilized angles for cafes, restaurants, gyms, and stores in Jaipur starting at ₹1,499.",
          },
        },
        {
          "@type": "Offer",
          "name": "Shoot + Edit Turnkey Bundles",
          "price": "2499",
          "priceCurrency": "INR",
          "itemOffered": {
            "@type": "Service",
            "name": "Turnkey Shoot + Edit Bundles",
            "description": "Dedicated single shoot session on location in Jaipur plus master edited reels delivered ready to post starting at ₹2,499.",
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


