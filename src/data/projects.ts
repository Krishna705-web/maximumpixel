export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Video Shoot" | "Video Edit" | "Shoot + Edit";
  conceptType: string;
  tagColor: string;
  tagBg: string;
  status: "Studio Concept" | "Creative Spec Shoot";
  imageUrl: string;
  videoUrl?: string;
  credits?: string;
  featured: boolean;
  formatBadge: string;
  deliverables: string[];
  description: string;
}

export const CATEGORIES = [
  "ALL",
  "VIDEO SHOOT",
  "VIDEO EDIT",
  "SHOOT + EDIT",
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const PROJECTS: ProjectItem[] = [
  {
    id: "barista-coffee-edit",
    title: "Espresso Craft & Greenhouse Cafe Edit",
    subtitle: "Rhythmic Flow, Color Grading & Sensory Sound Design",
    category: "Video Edit",
    conceptType: "Commercial Video Edit",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#FF7A1A]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/barista-reel.jpg",
    videoUrl: "/assets/videos/barista-edit.mp4",
    credits: "Stock Footage: Sourced from Pexels (Commercial Creative Commons License) • Post-Production, Velocity Editing, Audio Mastering & Grade: MaximumPixel Studio",
    featured: true,
    formatBadge: "9:16 60FPS Reel",
    deliverables: ["Dynamic Rhythm Pacing", "Warm Cinematic Color Grading", "Immersive SFX & Foley", "Multi-Platform Export"],
    description:
      "A rhythmic, sensory hospitality commercial edit capturing iced espresso preparation, barista artistry, and modern sunlit cafe ambiance. Assembled from stock footages with bespoke sound design, velocity speed ramps, and warm contrast color grading.",
  },
  {
    id: "brand-film",
    title: "Cinematic Brand Commercial",
    subtitle: "4K Multi-Cam On-Location Cinematography",
    category: "Video Shoot",
    conceptType: "Commercial Cinematography",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#1E7FE0]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/brand-film.jpg",
    videoUrl: "/assets/videos/barista-edit.mp4",
    credits: "Stock Footage: Sourced from Pexels (Commercial Creative Commons License) • Editing, Cinematography Direction & Grade: MaximumPixel Studio",
    featured: true,
    formatBadge: "4K Cinema / 10-Bit",
    deliverables: ["Multi-Angle Cinema Rigging", "Precision Studio Lighting", "Gimbal & Motion Tracking", "Raw ProRes Deliverables"],
    description:
      "High-dynamic-range cinematography crafted with precision lighting, fluid camera movement, and dedicated director monitoring tailored for luxury brands.",
  },
  {
    id: "viral-reel-edit",
    title: "High-Retention Reel Post-Production",
    subtitle: "Dynamic Subtitles, Sound Design & Visual Hooks",
    category: "Video Edit",
    conceptType: "Short-Form Video Editing",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#FF7A1A]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/social-content.jpg",
    featured: true,
    formatBadge: "9:16 High-Retention Cut",
    deliverables: ["Pattern-Interrupt Hooks", "Kinetic Subtitles & SFX", "Sound Design & Music Sync", "Multi-Platform Cutdowns"],
    description:
      "Fast-paced, high-retention vertical editing engineered specifically for organic reach, algorithm engagement, and viral retention on Instagram and YouTube Shorts.",
  },
  {
    id: "resort-lifestyle-commercial",
    title: "Luxury Resort & Heritage Hospitality Film",
    subtitle: "Architectural Cinematography & Master Cut",
    category: "Shoot + Edit",
    conceptType: "Turnkey Property Showcase",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#5B2EE8]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/property-shoot.jpg",
    featured: true,
    formatBadge: "4K 60FPS Cinematic",
    deliverables: ["On-Location Architectural Filming", "Precision Gimbal Sequences", "Cinematic Soundscapes", "Color Grading & Master Cut"],
    description:
      "An immersive showcase of luxury architecture, ambient interiors, and hospitality experience produced end-to-end with high-end camera rigs and bespoke editing.",
  },
  {
    id: "live-event-concert",
    title: "Live Event & Concert Experience",
    subtitle: "Multi-Camera Stage & Crowd Cinematography",
    category: "Video Shoot",
    conceptType: "Event Cinematography",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#1E7FE0]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/live-event.jpg",
    featured: true,
    formatBadge: "Multi-Cam 4K 10-Bit",
    deliverables: ["Low-Light Sensor Cinema Rigs", "Stage & Crowd Multi-Angle Coverage", "Dynamic Handheld & Gimbal Work", "Pro Audio Sync Feeds"],
    description:
      "Energetic, electrifying on-location filming capturing live performance energy, audience atmosphere, stage lighting, and performer dynamics in full 4K clarity.",
  },
  {
    id: "product-commercial-edit",
    title: "Product Showcase & Commercial Edit",
    subtitle: "Seamless 3D/2D Transitions, SFX & Visual Pacing",
    category: "Video Edit",
    conceptType: "Commercial Video Edit",
    tagColor: "#FFFFFF",
    tagBg: "bg-[#FF7A1A]",
    status: "Studio Concept",
    imageUrl: "/assets/projects/product-shoot.jpg",
    featured: false,
    formatBadge: "16:9 & 9:16 Multi-Format",
    deliverables: ["Dynamic Visual Pacing", "Seamless Velocity Cuts", "Custom Sound Design & Foley", "High-Impact Visual Overlays"],
    description:
      "Precision video editing that highlights product features, textures, and benefits with hyper-engaging pacing, crisp visual transitions, and punchy audio design.",
  },
];


