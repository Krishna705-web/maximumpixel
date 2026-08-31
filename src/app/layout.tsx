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
    default: "Maximum Pixel | Video Shoot, Video Editing & Graphic Design Studio Jaipur",
    template: "%s | Maximum Pixel Creative Studio",
  },
  description:
    "Maximum Pixel is Jaipur's premier studio for Video Shoots, Video Shoot + Edit, Video Post-Production, Social Media Posts, Carousels, High-CTR Thumbnails, and Brand Logo Design.",
  keywords: [
    "Maximum Pixel",
    "Video Shoot Jaipur",
    "Video Shoot and Edit Jaipur",
    "Video Editing Agency Jaipur",
    "Instagram Reels Editor Jaipur",
    "Social Media Carousel Design",
    "YouTube Thumbnail Designer Jaipur",
    "Brand Logo Design Jaipur",
    "Motion Graphics Rajasthan",
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
            "name": "Video Shoot",
            "description": "Professional 4K on-location and studio cinematography with camera crew and lighting.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Shoot + Edit",
            "description": "Turnkey video production from concept and shooting to master color-graded delivery.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Editing & Post-Production",
            "description": "High-retention reel editing, dynamic kinetic captions, pacing, sound design, and color grading.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Posts, Carousels & Stories",
            "description": "High-engagement swipeable carousels, single creative posts, and interactive story graphics.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-CTR Video Thumbnails",
            "description": "Click-optimized custom video and YouTube thumbnails designed for maximum CTR.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logo & Brand Identity",
            "description": "Custom vector logo design, visual style guidelines, and digital brand identity systems.",
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
          "text": "Maximum Pixel provides professional Video Shoot cinematography, high-retention Video Edit post-production, and turnkey Shoot + Edit commercial video production in Jaipur and across India.",
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
