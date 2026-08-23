export interface ReelItem {
  id: string;
  title: string;
  category: string;
  tagColor: string;
  views: string;
  thumbnail: string;
  caption: string;
}

export const REELS: ReelItem[] = [
  {
    id: "reel-1",
    title: "Cinematic Street Food Jaipur",
    category: "REELS",
    tagColor: "bg-[#FF7A1A]",
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
  {
    id: "reel-4",
    title: "Boutique Hotel Aerial Tour",
    category: "PROPERTY",
    tagColor: "bg-[#1E7FE0]",
    views: "95K Views",
    thumbnail: "/assets/projects/commercial-shoot.jpg",
    caption: "4K FPV drone flythrough showcasing architecture and royal courtyards.",
  },
];
