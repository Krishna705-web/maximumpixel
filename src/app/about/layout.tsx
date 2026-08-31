import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MaximumPixel | Video Studio in Jaipur",
  description:
    "Meet MaximumPixel, Jaipur's video production and reels editing studio founded by Krishna Rajak, Vishwajeet Barman & Rahul Gyanchandani.",
  keywords: [
    "About MaximumPixel",
    "Video Production Team Jaipur",
    "Creative Video Studio Jaipur",
    "Krishna Rajak Jaipur",
    "Reels Creators Jaipur",
    "Mobile Cinematography Jaipur",
    "Jaipur Video Agency Founders",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About MaximumPixel | Video Studio in Jaipur",
    description:
      "Meet the creative team behind MaximumPixel: an energetic Jaipur studio dedicated to on-location video shoots, video editing, and turnkey content.",
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
    "name": "About MaximumPixel Video Production Studio",
    "description": "About MaximumPixel, a dedicated creative video studio based in Jaipur, Rajasthan.",
    "url": "https://www.maximumpixel.online/about",
    "mainEntity": {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "MaximumPixel",
      "foundingLocation": {
        "@type": "City",
        "name": "Jaipur",
      },
      "founders": [
        {
          "@type": "Person",
          "name": "Krishna Rajak",
          "jobTitle": "Founder & Creative Director",
        },
        {
          "@type": "Person",
          "name": "Vishwajeet Barman",
          "jobTitle": "Co-Founder & Visual Lead",
        },
        {
          "@type": "Person",
          "name": "Rahul Gyanchandani",
          "jobTitle": "Co-Founder & Strategist",
        },
      ],
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

