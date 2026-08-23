export interface ProcessStep {
  step: string;
  badgeColor: string;
  title: string;
  description: string;
  iconName: "message" | "quote" | "camera" | "edit" | "review" | "deliver";
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    badgeColor: "bg-[#1E7FE0]",
    title: "BRIEF",
    description: "Tell us what you need.",
    iconName: "message",
  },
  {
    step: "02",
    badgeColor: "bg-[#22B14C]",
    title: "QUOTE",
    description: "We plan & price it right.",
    iconName: "quote",
  },
  {
    step: "03",
    badgeColor: "bg-[#FF7A1A]",
    title: "SHOOT",
    description: "Lights, camera, creativity.",
    iconName: "camera",
  },
  {
    step: "04",
    badgeColor: "bg-[#5B2EE8]",
    title: "EDIT",
    description: "We craft with detail.",
    iconName: "edit",
  },
  {
    step: "05",
    badgeColor: "bg-[#A3C93A]",
    title: "REVIEW",
    description: "You review, we refine.",
    iconName: "review",
  },
  {
    step: "06",
    badgeColor: "bg-[#1E7FE0]",
    title: "DELIVER",
    description: "On time. Every time.",
    iconName: "deliver",
  },
];
