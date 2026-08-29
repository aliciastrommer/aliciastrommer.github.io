import smartDash from "@/assets/smart-dash-cockpit.jpg.asset.json";
import accessibility from "@/assets/accessibility-laptop1.jpg.asset.json";
import smartPot from "@/assets/smart-pot.jpg.asset.json";

export const projects = [
  {
    path: "/projects/smart-dash",
    title: "Designing a Driver Experience That Keeps Attention on the Road",
    period: "2023 – Present",
    role: "UX/UI Designer & Area Lead",
    image: smartDash.url,
    alt: "Scania truck cab with the steering wheel and Center Information Display",
  },
  {
    path: "/projects/accessibility-guide",
    title: "Bridging the Gap Between Accessibility Standards and Everyday Design",
    period: "2022 – 2023",
    role: "UX/UI Designer",
    image: accessibility.url,
    alt: "Laptop showing the Daresay Accessibility Guide on a wooden desk",
  },
  {
    path: "/projects/smart-pot",
    title: "Using Tangible Interaction to Inspire Sustainable Behavior",
    period: "2021",
    role: "Interaction Designer",
    image: smartPot.url,
    alt: "Hands holding a glowing white origami-textured plant pot with basil",
  },
] as const;

export type ProjectPath = (typeof projects)[number]["path"];
