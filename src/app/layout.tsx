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
    default: "MaximumPixel | Best Creative Content & Video Production Studio in Jaipur",
    template: "%s | MaximumPixel Creative Studio",
  },
  description:
    "MaximumPixel is Jaipur's leading creative media agency specializing in cinematic video production, commercial photography, event coverage, social media reels, 3D/VFX, and brand strategy.",
  keywords: [
    "MaximumPixel",
    "MaximumPixel Studio",
    "Video Production Jaipur",
    "Best Video Production Agency Jaipur",
    "Commercial Photography Jaipur",
    "Event Coverage Jaipur",
    "Social Media Content Agency",
    "Instagram Reels Production",
    "Brand Strategy and Design",
    "Product Photography Jaipur",
    "Video Editing Agency Rajasthan",
    "Krishna Rajak",
    "Creative Agency Jaipur",
  ],
  authors: [{ name: "Krishna Rajak" }, { name: "MaximumPixel Team" }],
  creator: "MaximumPixel",
  publisher: "MaximumPixel Media",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://maximumpixel.online"),
  alternates: {
    canonical: "/",
  },
  applicationName: "MaximumPixel Studio",
  appleWebApp: {
    capable: true,
    title: "MaximumPixel",
    statusBarStyle: "black-translucent",
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
    url: "https://maximumpixel.online",
    siteName: "MaximumPixel Creative Studio",
    title: "MaximumPixel | Best Creative Content & Video Production Studio in Jaipur",
    description:
      "Transforming brands with cinematic videos, viral reels, commercial photography, and pixel-perfect branding. Jaipur's top creative production agency.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MaximumPixel Creative Content & Media Studio Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaximumPixel | Premier Creative Media & Video Production Studio",
    description:
      "Cinematic video production, viral social content, and brand design that convert. Based in Jaipur, delivering worldwide.",
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
  // Rich Structured Data Schema (JSON-LD) for Google Search Engine Logo & Sitelinks
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MaximumPixel",
    "alternateName": "MaximumPixel Media Studio",
    "url": "https://maximumpixel.online",
    "logo": "https://maximumpixel.online/assets/logo.png",
    "image": "https://maximumpixel.online/og-image.jpg",
    "description":
      "MaximumPixel is Jaipur's premier creative media agency providing video production, commercial photography, event coverage, viral reels, and branding design.",
    "telephone": "+917878736798",
    "email": "hello.maximumpixel@gmail.com",
    "priceRange": "₹₹",
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
      "opens": "09:00",
      "closes": "20:00",
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Krishna Rajak",
        "jobTitle": "Founder & Creative Lead",
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
      "https://www.instagram.com/maximumpixel.reels/",
      "https://youtube.com/@maximumpixel",
      "https://linkedin.com/company/maximumpixel",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Studio Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Production & Brand Films",
            "description": "High-end commercial films, cinematic ads, and corporate brand videos.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Reels & Shorts",
            "description": "Viral short-form content designed for engagement and high conversion.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Product Photography",
            "description": "Studio and on-location photography for e-commerce, lifestyle, and products.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event & Concert Coverage",
            "description": "Multi-camera live event cinematography and dynamic event recaps.",
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
    "url": "https://maximumpixel.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://maximumpixel.in/our-work?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/mascot-3d.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5B2EE8" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
