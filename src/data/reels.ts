export interface ReelItem {
  id: string;
  title: string;
  category: string;
  tagColor: string;
  views: string;
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
    tagColor: "bg-[#FF7A1A]",
    views: "340K Views",
    thumbnail: "/assets/projects/cafe-reel.jpg",
    videoUrl: "/assets/videos/cafe-edit.mp4",
    credits: "Stock Footage: Pexels • Editing & Production: Maximum Pixel Studio",
    caption: "Warm golden tones, sensory pour-over cuts & cozy barista craft storytelling.",
  },
  {
    id: "reel-1",
    title: "Cinematic Street Food Jaipur",
    category: "REELS",
    tagColor: "bg-[#5B2EE8]",
    views: "245K Views",
    thumbnail: "/assets/projects/brand-film.jpg",
    caption: "High-octane sound design & rapid cuts capturing Jaipur's culinary soul.",
  },
  {
    id: "reel-2",
    title: "Luxury Fashion Lookbook",
    category: "FASHION",
    tagColor: "bg-[#5B2EE8]",
    views: "180K Views",
    thumbnail: "/assets/projects/product-shoot.jpg",
    caption: "Moody low-key lighting with anamorphic lens flares.",
  },
  {
    id: "reel-3",
    title: "Live Concert Energy Recap",
    category: "EVENT",
    tagColor: "bg-[#22B14C]",
    views: "410K Views",
    thumbnail: "/assets/projects/live-event.jpg",
    caption: "Same-night turnaround for 5,000+ attendee music festival in Jaipur.",
  },
];
