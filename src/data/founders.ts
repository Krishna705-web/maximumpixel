export interface Founder {
  id: string;
  name: string;
  role: string;
  designation: "Founder" | "Co-Founder";
  focus: string;
  bio: string;
  imageUrl: string;
  initials: string;
}

export const FOUNDERS: Founder[] = [
  {
    id: "krishna",
    name: "Krishna Rajak",
    role: "Founder & Creative Lead",
    designation: "Founder",
    focus: "Direction & Creative Concepts",
    bio: "Leads creative direction, concepts, scripting and on-set storytelling from initial brief through final cut.",
    imageUrl: "/images/team/krishna.png",
    initials: "KR",
  },
  {
    id: "vishwajeet",
    name: "Vishwajeet Barman",
    role: "Co-Founder & Visual Lead",
    designation: "Co-Founder",
    focus: "Cinematography & Editing",
    bio: "Oversees camera framing, lighting, visual pacing, editing and colour polish across shoots and post-production.",
    imageUrl: "/images/team/vishwajeet.png",
    initials: "VB",
  },
  {
    id: "rahul",
    name: "Rahul Gyanchandani",
    role: "Co-Founder & Strategist",
    designation: "Co-Founder",
    focus: "Production Planning & Client Delivery",
    bio: "Translates brand objectives into clear production schedules, shot plans and structured delivery workflows.",
    imageUrl: "/images/team/rahul.png",
    initials: "RG",
  },
];

export const STUDIO_PHILOSOPHY = [
  {
    number: "01",
    title: "Purpose Before Camera",
    description:
      "Every shoot begins with clarity on what the visual needs to communicate, who will watch it, and how it fits the brand.",
  },
  {
    number: "02",
    title: "Disciplined Craft",
    description:
      "Attention to framing, natural and controlled lighting, clean audio, deliberate pacing, and cohesive colour finishing.",
  },
  {
    number: "03",
    title: "Direct Collaboration",
    description:
      "Clients work directly with the founders and production team—no middle layers, clear feedback cycles, and transparent timelines.",
  },
];
