export interface Founder {
  id: string;
  name: string;
  role: string;
  tagline: "Founder";
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
    role: "Founder & Creative Director",
    tagline: "Founder",
    specialty: "Direction, 3D & Creative Concepts",
    bio: "A passionate visual storyteller and creative director from Jaipur. Leads the creative vision, direction, 3D concepts, and commercial production at MaximumPixel.",
    accentColor: "#5B2EE8", // Royal purple accent
    badgeBg: "text-[#7C4DFF]",
    avatarBg: "bg-[#5B2EE8]",
    avatarPlaceholder: "/assets/founders/krishna.png",
    initials: "KR",
  },
];

export const ABOUT_MISSION = {
  title: "OUR MISSION",
  statement: "To help brands and businesses express their story in the most creative, cinematic, and impactful way possible.",
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
    label: "Founder-Led",
    sublabel: "Personal Dedication",
  },
  {
    icon: "box",
    iconColor: "text-[#FF7A1A]",
    label: "6 Services",
    sublabel: "All In-House",
  },
];
