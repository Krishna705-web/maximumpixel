export interface ProcessStage {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand the business, requirements, audience and goals.",
  },
  {
    step: "02",
    title: "Pre-production",
    description: "Plan the script, references, schedule and shoot.",
  },
  {
    step: "03",
    title: "Production",
    description: "Capture the visuals through professional filming.",
  },
  {
    step: "04",
    title: "Post-production",
    description: "Editing, sound, colour and final refinements.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Deliver final files in the agreed formats.",
  },
];
