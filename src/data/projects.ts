export type ProjectCategory =
  | "Commercial Films"
  | "Brand Videos"
  | "Cafe & Hospitality"
  | "Event Films"
  | "Video Editing";

export interface ProjectItem {
  slug: string;
  title: string;
  category: ProjectCategory;
  serviceLine: string;
  projectStatus: "Editing Showcase (Stock Footage)" | "Studio Concept Study";
  isPlaceholder: boolean;
  clientName?: string;
  year: string;
  durationOrFormat: string;
  thumbnailUrl: string;
  videoUrl?: string;
  featured: boolean;
  shortDescription: string;
  overview: string;
  requirements: string[];
  creativeApproach: string;
  productionProcess: string[];
  deliverables: string[];
  btsImages: {
    src: string;
    caption: string;
    isPlaceholder: boolean;
  }[];
  credits: string;
}

export const PROJECT_CATEGORIES: readonly ("All" | ProjectCategory)[] = [
  "All",
  "Commercial Films",
  "Brand Videos",
  "Cafe & Hospitality",
  "Event Films",
  "Video Editing",
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "artisan-cafe-commercial-reel",
    title: "Artisan Cafe Commercial Edit",
    category: "Cafe & Hospitality",
    serviceLine: "Video Editing & Sound Design",
    projectStatus: "Editing Showcase (Stock Footage)",
    isPlaceholder: false,
    year: "2026",
    durationOrFormat: "9:16 Vertical · Commercial Edit Study",
    thumbnailUrl: "/images/projects/cafe-reel.jpg",
    videoUrl: "/videos/cafe-edit.mp4",
    featured: true,
    shortDescription:
      "Sensory hospitality edit built around warm espresso tones, rhythmic pour-over cuts and atmospheric sound design.",
    overview:
      "An internal post-production study demonstrating how Maximum Pixel shapes raw hospitality clips into a cohesive vertical commercial edit—balancing tactile sound cues, warm colour grading and deliberate pacing.",
    requirements: [
      "Establish an inviting, unhurried hospitality mood within the first three seconds",
      "Match audio transitions to espresso extraction and pour-over visuals",
      "Deliver a 9:16 vertical master optimized for mobile viewing",
    ],
    creativeApproach:
      "Rather than relying on fast flashes or loud text overlays, the cut leans into natural rhythm—pairing warm amber tones with layered ambient coffeehouse foley so viewers feel the texture of the space.",
    productionProcess: [
      "Curated licensed hospitality clips to simulate multi-angle shoot coverage",
      "Structured a beat-aligned rough cut highlighting brewing craft",
      "Built layered sound design and warm filmic colour balance",
      "Exported compressed H.264 9:16 master with clean visual pacing",
    ],
    deliverables: [
      "9:16 Vertical Commercial Master",
      "Atmospheric Foley & Audio Mix",
      "Warm Hospitality Colour Grade",
    ],
    btsImages: [
      {
        src: "/images/projects/cafe-reel.jpg",
        caption: "Frame reference — warm espresso lighting study (placeholder frame until client BTS is added).",
        isPlaceholder: true,
      },
    ],
    credits:
      "Stock footage: Pexels (Commercial License). Editing, pacing, sound design & colour grade: Maximum Pixel Studio.",
  },
  {
    slug: "espresso-craft-edit",
    title: "Espresso Craft & Greenhouse Edit",
    category: "Video Editing",
    serviceLine: "Post-Production & Colour Grading",
    projectStatus: "Editing Showcase (Stock Footage)",
    isPlaceholder: false,
    year: "2026",
    durationOrFormat: "9:16 Vertical · Rhythmic Edit Study",
    thumbnailUrl: "/images/projects/barista-reel.jpg",
    videoUrl: "/videos/barista-edit.mp4",
    featured: true,
    shortDescription:
      "Precision speed-ramped edit capturing iced espresso preparation, greenhouse daylight and crisp audio foley.",
    overview:
      "A post-production showcase highlighting rhythmic editing, smooth velocity transitions and sunlit contrast grading for food and beverage brands.",
    requirements: [
      "Build visual momentum across short beverage preparation clips",
      "Preserve crisp highlight detail across bright greenhouse lighting",
      "Synchronize micro-transitions with subtle acoustic cues",
    ],
    creativeApproach:
      "Used selective speed ramps at motion peaks (ice drop, milk swirl) while letting wide atmosphere shots breathe, maintaining a calm editorial cadence.",
    productionProcess: [
      "Clip selection and motion-peak logging",
      "Velocity curve ramping and rhythmic sequencing",
      "Contrast and green/warm channel colour balancing",
      "Final audio mastering for mobile speakers",
    ],
    deliverables: [
      "9:16 Vertical Edit Master",
      "Velocity Transition Assembly",
      "Balanced Colour & Audio Mix",
    ],
    btsImages: [
      {
        src: "/images/projects/barista-reel.jpg",
        caption: "Colour & pacing still — replace with genuine post-production timeline or studio BTS photo.",
        isPlaceholder: true,
      },
    ],
    credits:
      "Stock footage: Pexels (Commercial License). Velocity editing, sound design & grade: Maximum Pixel Studio.",
  },
  {
    slug: "brand-film-cinematography",
    title: "Brand Story Visual Concept",
    category: "Brand Videos",
    serviceLine: "Creative Direction & Cinematography Concept",
    projectStatus: "Studio Concept Study",
    isPlaceholder: true,
    year: "2026",
    durationOrFormat: "16:9 & 9:16 · Studio Concept Placeholder",
    thumbnailUrl: "/og-image.jpg",
    featured: true,
    shortDescription:
      "Concept framework for founder-led and studio-lit brand films focused on craft, texture and narrative clarity.",
    overview:
      "A placeholder slot representing Maximum Pixel's Brand Video format—structured for businesses and artisan labels looking to communicate heritage, process and product integrity. Replace this entry once your first approved client brand film is ready to publish.",
    requirements: [
      "Clear narrative arc introducing the brand, maker and product",
      "Controlled lighting and deliberate camera movement",
      "Adaptable master cutdowns for website and social channels",
    ],
    creativeApproach:
      "Combine intimate detail shots of craft and materials with grounded interview or voiceover framing, keeping visual distractions minimal.",
    productionProcess: [
      "Discovery & brand story outline",
      "Pre-production shot list and lighting notes",
      "On-location filming across primary setups",
      "Narrative editing, sound mix and colour finishing",
    ],
    deliverables: [
      "Primary Brand Film Master",
      "Vertical Social Cutdowns",
      "Key Frame Stills",
    ],
    btsImages: [
      {
        src: "/og-image.jpg",
        caption: "Studio setup placeholder — replace with real on-location production stills.",
        isPlaceholder: true,
      },
    ],
    credits:
      "Studio concept placeholder using stock reference imagery. Replace with verified client project media.",
  },
  {
    slug: "handicraft-product-showcase",
    title: "Handicraft & Product Film Concept",
    category: "Commercial Films",
    serviceLine: "Product Video & Tabletop Direction",
    projectStatus: "Studio Concept Study",
    isPlaceholder: true,
    year: "2026",
    durationOrFormat: "15–30 Sec · Product Concept Placeholder",
    thumbnailUrl: "/og-image.jpg",
    featured: true,
    shortDescription:
      "Structured 15–30 second product showcase format designed for handicraft, homeware and D2C brands.",
    overview:
      "A concept template demonstrating how Maximum Pixel approaches single-product films and catalog photography—foregrounding material texture, scale and real-world use without clutter.",
    requirements: [
      "Highlight surface detail, craftsmanship and proportions cleanly",
      "Keep duration tight (15–30 seconds) for product pages and social feeds",
      "Pair video with consistent multi-angle catalog stills",
    ],
    creativeApproach:
      "Directional soft light paired with slow push-ins and macro cutaways so the product remains the undisputed focal point.",
    productionProcess: [
      "Product inspection and prop/surface selection",
      "Multi-angle tabletop lighting and motion passes",
      "Crisp edit with clean captions and subtle music bed",
      "Final export + matching catalog photo deliverables",
    ],
    deliverables: [
      "15–30 Sec Product Video",
      "Matched Product Still Set (4+ angles)",
      "Clean Captioned Export",
    ],
    btsImages: [
      {
        src: "/og-image.jpg",
        caption: "Tabletop reference placeholder — swap with actual Jaipur handicraft shoot BTS.",
        isPlaceholder: true,
      },
    ],
    credits:
      "Studio concept placeholder using stock reference imagery. Replace with verified client product shoot.",
  },
  {
    slug: "heritage-hospitality-film",
    title: "Architectural & Space Showcase",
    category: "Cafe & Hospitality",
    serviceLine: "Location Cinematography Concept",
    projectStatus: "Studio Concept Study",
    isPlaceholder: true,
    year: "2026",
    durationOrFormat: "4K Horizontal & Vertical · Concept Placeholder",
    thumbnailUrl: "/og-image.jpg",
    featured: false,
    shortDescription:
      "Measured architectural framing and ambient soundscape concept for boutique stays, cafes and studios.",
    overview:
      "Designed for hospitality spaces and architectural interiors in Jaipur. Focuses on natural daylight transitions, spatial flow and tactile interior details.",
    requirements: [
      "Capture spatial atmosphere without distorting room proportions",
      "Time filming around golden hour and interior ambient lighting",
      "Deliver both widescreen website headers and vertical reels",
    ],
    creativeApproach:
      "Slow, stabilized walk-through movements balanced with locked-off tripod frames of architectural details.",
    productionProcess: [
      "Location recce and light timing schedule",
      "Half-day or full-day stabilized filming",
      "Ambient sound layering and true-to-life colour grading",
    ],
    deliverables: [
      "Space Overview Film",
      "Vertical Highlight Reels",
      "Interior & Detail Stills",
    ],
    btsImages: [
      {
        src: "/og-image.jpg",
        caption: "Placeholder interior frame — replace with verified hospitality shoot stills.",
        isPlaceholder: true,
      },
    ],
    credits:
      "Studio concept placeholder using stock reference imagery.",
  },
  {
    slug: "live-event-coverage-concept",
    title: "Live Event & Showcase Film",
    category: "Event Films",
    serviceLine: "Event Filming & Recap Editing",
    projectStatus: "Studio Concept Study",
    isPlaceholder: true,
    year: "2026",
    durationOrFormat: "Event Recap · Concept Placeholder",
    thumbnailUrl: "/og-image.jpg",
    featured: false,
    shortDescription:
      "Documentary-style event coverage capturing stage moments, workshops, launches and genuine audience energy.",
    overview:
      "A concept framework for pop-ups, store openings, exhibitions and cultural events in Jaipur—balancing candid atmosphere with key programme highlights.",
    requirements: [
      "Unobtrusive coverage of speakers, performers and guests",
      "Clean ambient and stage audio capture",
      "Structured recap edit ready within agreed turnaround",
    ],
    creativeApproach:
      "Pair wide room context with tight human reactions and detail shots so the recap feels grounded and authentic.",
    productionProcess: [
      "Event run-of-show briefing",
      "On-site coverage across key schedule milestones",
      "Highlight assembly, audio cleanup and colour matching",
    ],
    deliverables: [
      "Event Recap Cut",
      "Short Social Teaser Reel",
      "Optional Raw Footage Archive",
    ],
    btsImages: [
      {
        src: "/og-image.jpg",
        caption: "Placeholder event frame — replace with verified event photography.",
        isPlaceholder: true,
      },
    ],
    credits:
      "Studio concept placeholder using stock reference imagery.",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 2): ProjectItem[] {
  const current = getProjectBySlug(currentSlug);
  const others = PROJECTS.filter((p) => p.slug !== currentSlug);
  if (!current) return others.slice(0, limit);
  const sameCategory = others.filter((p) => p.category === current.category);
  const remaining = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...remaining].slice(0, limit);
}
