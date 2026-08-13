import smartDash from "@/assets/smart-dash-cockpit.jpg.asset.json";
import accessibility from "@/assets/accessibility-laptop1.jpg.asset.json";
import smartPot from "@/assets/smart-pot.jpg.asset.json";

export const projects = [
  {
    path: "/projects/smart-dash",
    title: "Smart Dash",
    image: smartDash.url,
    alt: "Scania truck cab with the steering wheel and Center Information Display",
  },
  {
    path: "/projects/accessibility-guide",
    title: "Accessibility Guide",
    image: accessibility.url,
    alt: "Laptop showing the Daresay Accessibility Guide on a wooden desk",
  },
  {
    path: "/projects/smart-pot",
    title: "Smart Pot",
    image: smartPot.url,
    alt: "Hands holding a glowing white origami-textured plant pot with basil",
  },
] as const;

export type ProjectPath = (typeof projects)[number]["path"];
