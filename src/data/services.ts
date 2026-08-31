export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  borderClass: string;
  iconType: "video" | "clapper" | "scissors" | "palette" | "image" | "logo" | "sparkles";
  gradientBg: string;
  href: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "video-shoot",
    title: "Video Shoot",
    description: "Professional on-location & studio cinematography with 4K camera packages, precision lighting, gimbal operation, and multi-angle camera crew.",
    accentColor: "#1E7FE0",
    borderClass: "border-l-[#1E7FE0]",
    iconType: "video",
    gradientBg: "from-[#1E7FE0] to-[#0D5BB5]",
    href: "/contact?service=video-shoot",
  },
  {
    id: "video-edit",
    title: "Video Edit",
    description: "Transform raw footage into high-retention reels, YouTube longform, and commercial films with kinetic subtitles, seamless pacing & sound design.",
    accentColor: "#FF7A1A",
    borderClass: "border-l-[#FF7A1A]",
    iconType: "scissors",
    gradientBg: "from-[#FF7A1A] to-[#C2410C]",
    href: "/contact?service=video-edit",
  },
  {
    id: "video-shoot-edit",
    title: "Shoot + Edit",
    description: "Complete turnkey production: concept ideation, storyboard scripting, on-set filming, full post-production, sound engineering & master delivery.",
    accentColor: "#5B2EE8",
    borderClass: "border-l-[#5B2EE8]",
    iconType: "clapper",
    gradientBg: "from-[#5B2EE8] to-[#3B0764]",
    href: "/contact?service=video-shoot-edit",
  },
];


