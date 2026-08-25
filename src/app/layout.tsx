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
    default: "Maximum Pixel | Creative Content & Video Production Studio in Jaipur",
    template: "%s | Maximum Pixel Creative Studio",
  },
  description:
    "Maximum Pixel is Jaipur's top creative studio for cinematic video production, commercial photography, viral reels, event coverage, and brand design.",
  keywords: [
    "Maximum Pixel",
    "Video Production Jaipur",
    "Instagram Reels Production Jaipur",
    "Commercial Photography Jaipur",
    "Product Shoot Studio Jaipur",
    "Event Videography Jaipur",
    "3D Animation Studio Jaipur",
    "Brand Film Production Rajasthan",
    "Creative Agency Jaipur",
    "Krishna Rajak",
  ],
  authors: [{ name: "Krishna Rajak" }, { name: "Maximum Pixel Team" }],
  creator: "Maximum Pixel",
  publisher: "Maximum Pixel Media",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://maximumpixel.online"),
  alternates: {
    canonical: "/",
  },
  applicationName: "Maximum Pixel Creative Studio",
  appleWebApp: {
    capable: true,
    title: "Maximum Pixel",
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
    url: "https://maximumpixel.online",
    siteName: "Maximum Pixel Creative Studio",
    title: "Maximum Pixel | Creative Content & Video Production Studio in Jaipur",
    description:
      "Maximum Pixel is Jaipur's top creative studio for cinematic video production, commercial photography, viral reels, event coverage, and brand design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maximum Pixel Creative Content & Video Production Studio Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximum Pixel | Creative Content & Video Production Studio in Jaipur",
    description:
      "Maximum Pixel is Jaipur's top creative studio for cinematic video production, commercial photography, viral reels, event coverage, and brand design.",
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
    "name": "Maximum Pixel",
    "alternateName": [
      "MaximumPixel",
      "Maximum Pixel Studio",
      "MaximumPixel Creative Studio",
      "Maximum Pixel Jaipur",
      "MaximumPixel Media"
    ],
    "url": "https://maximumpixel.online",
    "logo": "https://maximumpixel.online/assets/logo.png",
    "image": "https://maximumpixel.online/og-image.jpg",
    "description":
      "Maximum Pixel is Jaipur's premier creative media agency providing video production, commercial photography, event coverage, viral reels, and branding design.",
    "telephone": "+917878736798",
    "email": "info@maximumpixel.online",
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
      "opens": "10:00",
      "closes": "18:00",
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
    "url": "https://maximumpixel.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://maximumpixel.online/our-work?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Maximum Pixel (MaximumPixel)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maximum Pixel (MaximumPixel) is Jaipur's premier creative content, video production, 3D animation, and digital media studio specializing in commercial brand films, viral Instagram reels, event coverage, and visual storytelling.",
        },
      },
      {
        "@type": "Question",
        "name": "What services does Maximum Pixel offer in Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maximum Pixel provides cinematic commercial video production, viral Instagram reels production, product & fashion photography, live concert & event coverage, 3D VFX design, and brand identity design.",
        },
      },
      {
        "@type": "Question",
        "name": "Where is Maximum Pixel located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maximum Pixel (MaximumPixel) is headquartered in Jaipur, Rajasthan, India, delivering creative media production for clients across India and worldwide.",
        },
      },
      {
        "@type": "Question",
        "name": "Who founded Maximum Pixel?",

        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maximum Pixel was founded by Krishna Rajak, leading creative direction and commercial production in Jaipur.",
        },
      },
      {
        "@type": "Question",
        "name": "How to contact Maximum Pixel (MaximumPixel)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Maximum Pixel via official email at info@maximumpixel.online, phone/WhatsApp at +91 78787 36798, or through the official website at https://maximumpixel.online/contact.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${archivoBlack.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/mascot-3d-fast.glb" as="fetch" crossOrigin="anonymous" />
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
