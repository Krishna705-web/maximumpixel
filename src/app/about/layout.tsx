import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Team & Creative Studio | MaximumPixel Jaipur",
  description:
    "Learn about MaximumPixel, Jaipur's passionate creative content and video production studio dedicated to visual storytelling and high-impact digital branding.",
  keywords: [
    "About MaximumPixel",
    "MaximumPixel Team",
    "Creative Agency Jaipur",
    "Video Production Team Rajasthan",
    "Content Creators Jaipur",
    "Krishna MaximumPixel",
    "Startup Studio Jaipur",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Team & Creative Studio | MaximumPixel Jaipur",
    description:
      "Meet the creative team behind MaximumPixel. An energetic startup studio in Jaipur dedicated to visual storytelling and high-impact digital content.",
    url: "https://www.maximumpixel.online/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About MaximumPixel Studio",
    "description": "About MaximumPixel creative media agency based in Jaipur, Rajasthan.",
    "url": "https://www.maximumpixel.online/about",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "MaximumPixel",
      "foundingLocation": {
        "@type": "City",
        "name": "Jaipur",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
