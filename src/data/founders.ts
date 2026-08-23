export interface Founder {
  id: string;
  name: string;
  role: string;
  tagline: "Founder" | "Co-Founder";
  specialty: string;
  bio: string;
  accentColor: string;
  badgeBg: string;
  avatarBg: string;
  avatarPlaceholder: string;
  initials: string;
}

export const FOUNDERS: Founder[] = [
  {
    id: "krishna",
    name: "Krishna Rajak",
    role: "Founder & Creative Lead",
    tagline: "Founder",
    specialty: "Direction & Creative Concepts",
    bio: "A visual storyteller from concept to final cut. Leads the creative vision, scripts, and production direction.",
    accentColor: "#E53E3E", // Red accent
    badgeBg: "text-[#FF4A4A]",
    avatarBg: "bg-[#E53E3E]",
    avatarPlaceholder: "/assets/founders/krishna.png",
    initials: "KR",
  },
  {
    id: "vishwajeet",
    name: "Vishwajeet Barman",
    role: "Co-Founder & Visual Lead",
    tagline: "Co-Founder",
    specialty: "Cinematography & Visual Editing",
    bio: "The eye behind the lens. Handles camera framing, lighting, visual editing, and post-production color polish.",
    accentColor: "#14B8A6", // Teal accent
    badgeBg: "text-[#14B8A6]",
    avatarBg: "bg-[#0D9488]",
    avatarPlaceholder: "/assets/founders/vishwajeet.png",
    initials: "VB",
  },
  {
    id: "rahul",
    name: "Rahul Gyanchandani",
    role: "Co-Founder & Strategist",
    tagline: "Co-Founder",
    specialty: "Brand Strategy & Planning",
    bio: "The strategist and problem solver. Turns brand objectives into clear roadmaps, timelines, and client execution.",
    accentColor: "#FF7A1A", // Orange accent
    badgeBg: "text-[#FF7A1A]",
    avatarBg: "bg-[#EA580C]",
    avatarPlaceholder: "/assets/founders/rahul.png",
    initials: "RG",
  },
];

export const ABOUT_MISSION = {
  title: "OUR MISSION",
  statement: "To help brands and people express their story in the most creative, authentic and impactful way possible.",
};

export const ABOUT_STATS = [
  {
    icon: "zap",
    iconColor: "text-[#FFC72C]",
    label: "Young Startup",
    sublabel: "Full Energy",
  },
  {
    icon: "users",
    iconColor: "text-[#5B2EE8]",
    label: "3 Creators",
    sublabel: "1 Founder, 2 Co-Founders",
  },
  {
    icon: "box",
    iconColor: "text-[#FF7A1A]",
    label: "6 Services",
    sublabel: "All In-House",
  },
];
