import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hire Video Production & Content Creators in Jaipur",
  description:
    "Ready to create cinematic videos and viral content? Get in touch with MaximumPixel creative studio in Jaipur for project quotes and creative collaboration.",
  keywords: [
    "Contact MaximumPixel",
    "Hire Video Production Agency Jaipur",
    "Book Commercial Shoot Jaipur",
    "Creative Studio Jaipur Contact",
    "MaximumPixel Phone Number",
    "MaximumPixel Email",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Hire Video Production & Content Creators in Jaipur | MaximumPixel",
    description:
      "Ready to create cinematic videos and viral content? Get in touch with MaximumPixel studio in Jaipur for a free project quote and consultation.",
    url: "https://www.maximumpixel.online/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MaximumPixel",
    "description": "Contact MaximumPixel creative studio in Jaipur for video production, reels, and photography services.",
    "url": "https://www.maximumpixel.online/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "MaximumPixel",
      "telephone": "+917878736798",
      "email": "info@maximumpixel.online",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
