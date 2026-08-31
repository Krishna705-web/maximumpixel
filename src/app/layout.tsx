import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5B2EE8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "MaximumPixel | Video Shoot, Edit & Reels in Jaipur",
    template: "%s | MaximumPixel Jaipur",
  },
  description:
    "Jaipur's video studio for 4K on-location video shoots, viral reels editing, and turnkey video productions for brands and creators.",
  keywords: [
    "Video Shoot in Jaipur",
    "Video Editing in Jaipur",
    "Shoot and Edit in Jaipur",
    "Instagram Reels Editor Jaipur",
    "Reels Video Shoot Jaipur",
    "Cafe Video Shoot Jaipur",
    "Restaurant Shoot Jaipur",
    "Commercial Videographer Jaipur",
    "Product Video Shoot Jaipur",
    "Mobile Cinematography Jaipur",
    "Video Production Studio Jaipur",
    "Short Form Video Agency India",
    "MaximumPixel",
    "Maximum Pixel",
    "MaximumPixel Jaipur",
    "Krishna Rajak",
  ],
  authors: [{ name: "Krishna Rajak" }, { name: "MaximumPixel Team" }],
  creator: "MaximumPixel",
  publisher: "MaximumPixel Media",
  metadataBase: new URL("https://www.maximumpixel.online"),
  alternates: {
    canonical: "https://www.maximumpixel.online",
  },
  applicationName: "MaximumPixel Studio",
  appleWebApp: {
    capable: true,
    title: "MaximumPixel",
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "k5pYJ-ctLiw362ugrGOEYiTYqQDSlKw8ewmp7iQn7d8",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.maximumpixel.online",
    siteName: "MaximumPixel Creative Video Studio",
    title: "MaximumPixel | Video Shoot, Edit & Reels in Jaipur",
    description:
      "Jaipur's video studio for 4K on-location video shoots, viral reels editing, and turnkey video productions for brands and creators.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaximumPixel Video Shoot & Video Edit Studio Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaximumPixel | Video Shoot, Edit & Reels in Jaipur",
    description:
      "Jaipur's video studio for 4K on-location video shoots, viral reels editing, and turnkey video productions for brands and creators.",
    images: ["/og-image.jpg"],
    creator: "@maximumpixel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data Schema (JSON-LD) for Google Search Engine Logo & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "MaximumPixel",
    "alternateName": [
      "Maximum Pixel",
      "Maximum Pixel Studio",
      "MaximumPixel Creative Studio",
      "Maximum Pixel Jaipur",
      "MaximumPixel Video Production",
    ],
    "url": "https://www.maximumpixel.online",
    "logo": "https://www.maximumpixel.online/assets/logo.png",
    "image": "https://www.maximumpixel.online/og-image.jpg",
    "description":
      "MaximumPixel is Jaipur's dedicated video studio providing professional on-location video shoots, viral Instagram reels editing, and turnkey shoot + edit bundles for cafes, restaurants, fashion brands, and creators.",
    "telephone": "+917878736798",
    "email": "info@maximumpixel.online",
    "priceRange": "₹499 - ₹9999",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Net Banking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Creative Hub",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873",
    },
    "areaServed": [
      { "@type": "City", "name": "Jaipur" },
      { "@type": "State", "name": "Rajasthan" },
      { "@type": "Country", "name": "India" },
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "10:00",
      "closes": "19:00",
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
    "sameAs": [
      "https://www.instagram.com/maximumpixel.jaipur",
      "https://youtube.com/@maximumpixel",
      "https://linkedin.com/company/maximumpixel",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MaximumPixel Video Services Jaipur",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Shoot in Jaipur",
            "description": "On-location 4K mobile cinematography with stabilized angles for cafes, restaurants, gyms, and stores in Jaipur starting at ₹1,499.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Editing & Reels Post-Production",
            "description": "High-retention vertical video editing with dynamic subtitles, sound effects, and color grading starting at ₹499.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shoot + Edit Turnkey Video Bundles",
            "description": "Complete on-location filming session plus edited master 4K reels delivered ready to post starting at ₹2,499.",
          },
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MaximumPixel",
    "url": "https://www.maximumpixel.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.maximumpixel.online/our-work?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is MaximumPixel in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaximumPixel is Jaipur's dedicated creative video studio specializing in on-location 4K video shoots, viral Instagram reels editing, and turnkey Shoot + Edit bundles for cafes, restaurants, retail brands, and content creators.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does a video shoot or reel edit cost in Jaipur with MaximumPixel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaximumPixel offers transparent starter pricing in Jaipur: Single Reel Edits start at ₹499, On-Location Video Shoots start at ₹1,499, and full Shoot + Edit Turnkey Bundles start at ₹2,499.",
        },
      },
      {
        "@type": "Question",
        "name": "What services does MaximumPixel offer in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaximumPixel specializes in three core video services: (1) On-location Video Shoots, (2) High-retention Video Editing, and (3) Turnkey Shoot + Edit production packages.",
        },
      },
      {
        "@type": "Question",
        "name": "Can MaximumPixel shoot on location for cafes and businesses in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! MaximumPixel provides dedicated on-location shoot sessions across Jaipur for cafes, restaurants, fashion boutiques, gyms, salons, and brand spaces.",
        },
      },
      {
        "@type": "Question",
        "name": "How fast does MaximumPixel deliver edited videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaximumPixel provides rapid turnaround times: 24–48 hours for Single Reel Edits and 48–72 hours for Shoot + Edit bundles.",
        },
      },
      {
        "@type": "Question",
        "name": "How can I contact or book a video shoot with MaximumPixel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book directly via WhatsApp at +91 78787 36798, email at info@maximumpixel.online, or through the official website at https://www.maximumpixel.online/contact.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5B2EE8" />
        <meta name="google-site-verification" content="k5pYJ-ctLiw362ugrGOEYiTYqQDSlKw8ewmp7iQn7d8" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0A] text-white flex flex-col antialiased selection:bg-[#5B2EE8] selection:text-white">
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
