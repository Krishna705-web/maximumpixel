import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact MaximumPixel | Book Video Shoot in Jaipur",
  description:
    "Book a 4K video shoot or viral reel edit in Jaipur with MaximumPixel. Direct WhatsApp at +91 78787 36798 or submit your project inquiry.",
  keywords: [
    "Book Video Shoot Jaipur",
    "Hire Reels Editor Jaipur",
    "Contact MaximumPixel Jaipur",
    "Video Studio WhatsApp Jaipur",
    "Shoot and Edit Booking Jaipur",
    "MaximumPixel Contact Number",
    "Video Production Consultation Jaipur",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MaximumPixel | Book Video Shoot in Jaipur",
    description:
      "Book a 4K video shoot or viral reel edit in Jaipur with MaximumPixel. Direct WhatsApp at +91 78787 36798 or submit your project inquiry.",
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
    "name": "Contact MaximumPixel Video Studio",
    "description": "Contact MaximumPixel creative video studio in Jaipur for video shoots, reels editing, and pricing.",
    "url": "https://www.maximumpixel.online/contact",
    "mainEntity": {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "name": "MaximumPixel",
      "telephone": "+917878736798",
      "email": "info@maximumpixel.online",
      "priceRange": "₹499 - ₹9999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917878736798",
        "contactType": "Customer Support & Direct Booking",
        "areaServed": "Jaipur, Rajasthan, India",
        "availableLanguage": ["English", "Hindi"],
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

