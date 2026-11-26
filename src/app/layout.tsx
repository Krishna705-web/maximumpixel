import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/data/company";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F3EF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Maximum Pixel | Video Production & Editing Studio in Jaipur",
    template: "%s | Maximum Pixel",
  },
  description:
    "Maximum Pixel is a Jaipur-based video production and editing studio creating professional visual content for brands, businesses and creators.",
  keywords: [
    "Video Production Studio Jaipur",
    "Video Editing Studio Jaipur",
    "Commercial Video Production Jaipur",
    "Brand Films Jaipur",
    "Product Video Shoot Jaipur",
    "Post-Production Studio Jaipur",
    "Maximum Pixel",
    "MaximumPixel",
  ],
  authors: [{ name: "Krishna Rajak" }, { name: "Maximum Pixel Studio" }],
  creator: "Maximum Pixel",
  publisher: "Maximum Pixel",
  metadataBase: new URL(COMPANY_INFO.siteUrl),
  alternates: {
    canonical: COMPANY_INFO.siteUrl,
  },
  applicationName: "Maximum Pixel",
  verification: {
    google: "k5pYJ-ctLiw362ugrGOEYiTYqQDSlKw8ewmp7iQn7d8",
  },
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
    url: COMPANY_INFO.siteUrl,
    siteName: "Maximum Pixel",
    title: "Maximum Pixel | Video Production & Editing Studio in Jaipur",
    description:
      "Maximum Pixel is a Jaipur-based video production and editing studio creating professional visual content for brands, businesses and creators.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maximum Pixel — Video Production & Editing Studio in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximum Pixel | Video Production & Editing Studio in Jaipur",
    description:
      "Maximum Pixel is a Jaipur-based video production and editing studio creating professional visual content for brands, businesses and creators.",
    images: ["/og-image.jpg"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Maximum Pixel",
    alternateName: ["MaximumPixel", "Maximum Pixel Studio"],
    url: COMPANY_INFO.siteUrl,
    logo: `${COMPANY_INFO.siteUrl}/images/brand/logo.png`,
    image: `${COMPANY_INFO.siteUrl}/og-image.jpg`,
    description:
      "Maximum Pixel is a Jaipur-based video production and post-production studio creating commercial films, brand videos, product shoots, and editing for brands, businesses and creators.",
    telephone: "+917878736798",
    email: COMPANY_INFO.email,
    priceRange: "₹400 - ₹24500",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302001",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
    ],
    founders: [
      {
        "@type": "Person",
        name: "Krishna Rajak",
        jobTitle: "Founder & Creative Lead",
      },
      {
        "@type": "Person",
        name: "Vishwajeet Barman",
        jobTitle: "Co-Founder & Visual Lead",
      },
      {
        "@type": "Person",
        name: "Rahul Gyanchandani",
        jobTitle: "Co-Founder & Strategist",
      },
    ],
    sameAs: [
      "https://www.instagram.com/maximumpixel.jaipur",
      "https://youtube.com/@maximumpixel",
      "https://linkedin.com/company/maximumpixel",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Maximum Pixel Production Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Production",
            description:
              "Professional on-location video shoots for brands, businesses, products and campaigns in Jaipur.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Editing & Post-Production",
            description:
              "Editing, pacing, sound design, colour correction and final finishing for reels and commercial videos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Shoot + Edit",
            description:
              "Complete production process from creative direction and filming to final export.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creative Direction",
            description:
              "Visual planning, concepts, references and storytelling for video and product campaigns.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maximum Pixel",
    url: COMPANY_INFO.siteUrl,
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#F4F3EF" />
        <meta
          name="google-site-verification"
          content="k5pYJ-ctLiw362ugrGOEYiTYqQDSlKw8ewmp7iQn7d8"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F4F3EF] text-[#171717] flex flex-col antialiased">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
