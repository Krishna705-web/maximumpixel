export interface CoreService {
  number: string;
  id: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  includes: string[];
  clientReceives: string[];
  suitableFor: string[];
  processSummary: string;
  relatedProjectSlug?: string;
}

export const CORE_SERVICES: CoreService[] = [
  {
    number: "01",
    id: "video-production",
    title: "VIDEO PRODUCTION",
    shortDescription:
      "Professional video shoots for brands, businesses, products and campaigns.",
    detailedOverview:
      "Dedicated on-location filming sessions across Jaipur and nearby areas, tailored to capture spaces, products, hospitality, and brand stories with clean composition and lighting.",
    includes: [
      "On-location filming with stabilized framing and multi-angle coverage",
      "Shot-list execution and lighting setup for spaces and products",
      "A-roll, B-roll, detail cutaways and ambient captures",
      "Half-day (up to 4 hrs), full-day (up to 8 hrs) and reel-focused shoot sessions",
    ],
    clientReceives: [
      "Clean, organized raw footage ready for editing",
      "High-resolution clips delivered via cloud transfer",
      "Optional post-production or raw handover per project agreement",
    ],
    suitableFor: [
      "Product & handicraft brands",
      "Cafes, restaurants & hospitality venues",
      "Commercial campaigns & founder features",
      "Events, workshops & brand launches",
    ],
    processSummary:
      "Brief alignment → Shot list & location readiness → On-site filming → Organized footage transfer.",
    relatedProjectSlug: "brand-film-cinematography",
  },
  {
    number: "02",
    id: "video-editing",
    title: "VIDEO EDITING",
    shortDescription:
      "Editing, pacing, sound design, colour correction and final finishing.",
    detailedOverview:
      "Post-production built around rhythm, visual clarity, and story flow. Supply your raw footage and references, and we shape it into a cohesive final cut.",
    includes: [
      "Story assembly, rhythmic cuts and visual pacing",
      "Captions, clean typography and subtle transitions",
      "Sound design, music sync and audio balancing",
      "Colour correction, tone matching and 1 included revision round",
    ],
    clientReceives: [
      "Exported master files in agreed aspect ratios (9:16, 16:9 or 1:1)",
      "2–3 day standard post-production turnaround after complete files are received",
      "1 structured revision round included per deliverable",
    ],
    suitableFor: [
      "Short-form reels (30–40 sec) and product showcases",
      "Businesses with existing raw clips seeking polished cuts",
      "Creators and founders building consistent video output",
    ],
    processSummary:
      "Raw file intake & brief → Rough cut assembly → Sound, captions & colour grade → Review & final export.",
    relatedProjectSlug: "espresso-craft-edit",
  },
  {
    number: "03",
    id: "complete-shoot-edit",
    title: "COMPLETE SHOOT + EDIT",
    shortDescription:
      "A complete production process, from the camera to the final export.",
    detailedOverview:
      "End-to-end production handled under one roof. From pre-shoot references and filming to editing, sound, colour, and final delivery.",
    includes: [
      "Pre-shoot concept planning, shot list and visual references",
      "On-location filming (single reel, product video or pooled monthly shoot hours)",
      "Full post-production: editing, music, captions, transitions & colour",
      "Optional accompanying photo posts captured during the shoot session",
    ],
    clientReceives: [
      "Ready-to-publish master video files (3–5 days after shoot)",
      "Consistent visual look across single projects or monthly batches",
      "1 included revision round per video",
    ],
    suitableFor: [
      "Brands launching new collections or seasonal campaigns",
      "Handicraft & D2C product catalogues",
      "Cafes, studios and local businesses needing ongoing monthly reels",
    ],
    processSummary:
      "Discovery → Pre-production & references → On-location shoot → Edit, grade & review → Master delivery.",
    relatedProjectSlug: "artisan-cafe-commercial-reel",
  },
  {
    number: "04",
    id: "creative-direction",
    title: "CREATIVE DIRECTION",
    shortDescription:
      "Visual planning, concepts, references and storytelling.",
    detailedOverview:
      "Thoughtful visual preparation before cameras roll—aligning tone, framing style, pacing references, and narrative structure with your brand identity.",
    includes: [
      "Visual concept development and storytelling angles",
      "Moodboards, reference selection and framing direction",
      "Shoot schedule planning and scene sequencing",
      "Props & styling guidance (optional hands-on styling support available)",
    ],
    clientReceives: [
      "Structured pre-production plan and shot checklist",
      "Clear visual direction before shoot day",
      "Cohesive visual language across reels, product photography and brand films",
    ],
    suitableFor: [
      "Founders launching a fresh brand identity",
      "Handicraft and artisan labels preparing lifestyle shoots",
      "Campaigns requiring coordinated photo and video storytelling",
    ],
    processSummary:
      "Brand & audience study → Concept & reference curation → Shot plan & schedule → On-set creative supervision.",
  },
];
