export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Video" | "Photo" | "Event" | "Social" | "Product" | "Branding";
  conceptType: string;
  tagColor: string;
  tagBg: string;
  status: "Studio Concept" | "Creative Spec Shoot";
  imageUrl: string;
  featured: boolean;
  formatBadge: string;
  deliverables: string[];
  description: string;
}

export const CATEGORIES = [
  "ALL",
  "VIDEO",
  "PHOTO",
  "EVENT",
  "PRODUCT",
  "BRANDING",
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const PROJECTS: ProjectItem[] = [
  {
    id: "brand-film",
    title: "Cinematic Brand Commercial",
    subtitle: "High-Impact Commercial Film",
    category: "Video",
    conceptType: "Commercial Spec",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#5B2EE8]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/brand-film.jpg",
    featured: true,
    formatBadge: "4K Cinema / HDR",
    deliverables: ["4K Cinema Film", "Social Cutdowns", "Custom Sound Design", "Bespoke Color Grade"],
    description:
      "A cinematic visual demonstration crafted with high-dynamic-range cinematography, bespoke sound design, and emotive pacing tailored for luxury brand storytelling.",
  },
  {
    id: "product-shoot",
    title: "Commercial Product & Lookbook",
    subtitle: "Studio & On-Location Editorial",
    category: "Photo",
    conceptType: "Editorial Photo",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#65A30D]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/product-shoot.jpg",
    featured: true,
    formatBadge: "High-Res Raw & Retouch",
    deliverables: ["Studio Photography", "Editorial On-Model Shoot", "High-End Retouching", "E-Commerce Packshots"],
    description:
      "Sharp, high-fashion editorial imagery highlighting texture, craftsmanship, and brand aesthetics for modern fashion and product brands.",
  },
  {
    id: "live-event",
    title: "Arena Concert & Festival Recap",
    subtitle: "Dynamic Multi-Camera Cinematography",
    category: "Event",
    conceptType: "Event Cinematography",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#2563EB]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/live-event.jpg",
    featured: true,
    formatBadge: "Multi-Cam 60FPS",
    deliverables: ["Multi-Cam Live Coverage", "Fast-Turnaround Recap", "4K Festival Aftermovie", "Stage & Crowd Visuals"],
    description:
      "Electrifying event cinematography capturing crowd energy, stage lighting, and unforgettable festival moments with high-octane editing.",
  },
  {
    id: "social-content",
    title: "Viral Short-Form Reels & Shorts",
    subtitle: "Hook-Driven Social Campaign",
    category: "Social",
    conceptType: "Social Strategy",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#C026D3]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/social-content.jpg",
    featured: false,
    formatBadge: "9:16 Vertical Video",
    deliverables: ["Hook & Script Strategy", "Motion Graphic Overlays", "Trend Sound Curation", "Dynamic Subtitles"],
    description:
      "Fast-paced, high-retention vertical video content engineered specifically for algorithmic reach on Instagram and YouTube Shorts.",
  },
  {
    id: "property-shoot",
    title: "Architectural & Luxury Estates",
    subtitle: "FPV Drone & Interior Showcase",
    category: "Product",
    conceptType: "Real Estate & Architecture",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#0D9488]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/property-shoot.jpg",
    featured: false,
    formatBadge: "FPV Aerial & 4K",
    deliverables: ["FPV Indoor Drone Flight", "Architectural Photography", "Day-to-Night Time-lapse", "Virtual Walkthrough"],
    description:
      "Immersive architectural documentation with sweeping aerial perspectives and warm ambient interior lighting.",
  },
  {
    id: "branding-design",
    title: "Full Brand Identity & Design System",
    subtitle: "Visual Architecture & 3D Assets",
    category: "Branding",
    conceptType: "Identity Design",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#EA580C]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/branding-design.jpg",
    featured: false,
    formatBadge: "Vector & 3D Assets",
    deliverables: ["Brand Identity Guidelines", "Logo & Typography Kit", "3D Mascot Modeling", "Digital Design Tokens"],
    description:
      "Comprehensive visual branding transforming emerging startups and businesses into memorable, recognizable brands.",
  },
];
