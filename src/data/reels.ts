export interface ReelItem {
  id: string;
  title: string;
  category: string;
  tagColor: string;
  thumbnail: string;
  videoUrl?: string;
  credits?: string;
  caption: string;
}

export const REELS: ReelItem[] = [
  {
    id: "reel-cafe-aesthetic",
    title: "Aesthetic Cafe & Coffee Reel",
    category: "HOSPITALITY",
    tagColor: "bg-[#C2410C]",
    thumbnail: "/assets/projects/cafe-reel.jpg",
    videoUrl: "/assets/videos/cafe-edit.mp4",
    credits: "Stock Footage: Pexels (Free Commercial License) • Editing, Sound Design & Color Grading: Maximum Pixel Studio",
    caption: "Warm golden tones, sensory pour-over cuts & cozy barista craft storytelling.",
  },
  {
    id: "reel-barista-latte",
    title: "Artisan Coffee & Barista Edit",
    category: "HOSPITALITY",
    tagColor: "bg-[#C2410C]",
    thumbnail: "/assets/projects/barista-reel.jpg",
    videoUrl: "/assets/videos/barista-edit.mp4",
    credits: "Stock Footage: Pexels (Free Commercial License) • Editing, Sound Design & Color Grading: Maximum Pixel Studio",
    caption: "Cinematic iced espresso craft, greenhouse cafe vibe & rhythmic sensory pacing.",
  },
  {
    id: "reel-1",
    title: "Cinematic Street Food Jaipur",
    category: "FOOD",
    tagColor: "bg-[#5B2EE8]",
    thumbnail: "/assets/projects/brand-film.jpg",
    caption: "High-octane sound design & rapid cuts capturing Jaipur's culinary soul.",
  },
  {
    id: "reel-3",
    title: "Live Concert Energy Recap",
    category: "EVENT",
    tagColor: "bg-[#15803D]",
    thumbnail: "/assets/projects/live-event.jpg",
    caption: "Same-night turnaround for 5,000+ attendee music festival in Jaipur.",
  },
];
