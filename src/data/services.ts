export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  borderClass: string;
  iconType: "video" | "camera" | "users" | "message" | "box" | "logo";
  gradientBg: string;
  href: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "short-form-video",
    title: "Short-Form Video",
    description: "Reels, shorts, teasers & brand videos that grab attention instantly.",
    accentColor: "#1E7FE0",
    borderClass: "border-l-[#1E7FE0]",
    iconType: "video",
    gradientBg: "from-[#1E7FE0] to-[#0D5BB5]",
    href: "/contact?service=short-form-video",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Lifestyle, portraits, behind-the-scenes and more. Moments, beautifully framed.",
    accentColor: "#14B8A6",
    borderClass: "border-l-[#14B8A6]",
    iconType: "camera",
    gradientBg: "from-[#14B8A6] to-[#0F766E]",
    href: "/contact?service=photography",
  },
  {
    id: "events",
    title: "Events",
    description: "From corporate to cultural, we capture every vibe and detail.",
    accentColor: "#22B14C",
    borderClass: "border-l-[#22B14C]",
    iconType: "users",
    gradientBg: "from-[#22B14C] to-[#15803D]",
    href: "/contact?service=events",
  },
  {
    id: "social-content",
    title: "Social Content",
    description: "Content that speaks your brand's language and engages your audience.",
    accentColor: "#5B2EE8",
    borderClass: "border-l-[#5B2EE8]",
    iconType: "message",
    gradientBg: "from-[#5B2EE8] to-[#3B0764]",
    href: "/contact?service=social-content",
  },
  {
    id: "product-property",
    title: "Product / Property Shoots",
    description: "High-quality visuals that showcase your products and properties perfectly.",
    accentColor: "#FF7A1A",
    borderClass: "border-l-[#FF7A1A]",
    iconType: "box",
    gradientBg: "from-[#FF7A1A] to-[#C2410C]",
    href: "/contact?service=product-property",
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    description: "Logos, identity, creatives & everything that builds a strong brand presence.",
    accentColor: "#5B2EE8",
    borderClass: "border-l-[#FF7A1A]",
    iconType: "logo",
    gradientBg: "from-[#5B2EE8] via-[#FF7A1A] to-[#22B14C]",
    href: "/contact?service=branding-design",
  },
];
