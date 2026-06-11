import { createFileRoute } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import {
  CaseLayout,
  CaseHero,
  CaseSection,
  ChallengeList,
  ChipRow,
  CaseFooterNav,
} from "@/components/case-study";

import hero from "@/assets/smart-pot.jpg.asset.json";

export const Route = createFileRoute("/projects/smart-pot")({
  head: () => ({
    meta: [
      { title: "Smart Pot — Alicia Strömmer" },
      {
        name: "description",
        content:
          "Case study: an interactive pot encouraging sustainable habits through tangible interactions.",
      },
      { property: "og:title", content: "Smart Pot — Alicia Strömmer" },
      {
        property: "og:description",
        content:
          "Case study: an interactive pot encouraging sustainable habits through tangible interactions.",
      },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: SmartPotPage,
});

function SmartPotPage() {
  return (
    <CaseLayout>
      <CaseHero
        heroImage={hero.url}
        heroAlt="Hands holding a glowing white origami-textured plant pot with basil"
        meta={[
          { label: "Course", value: "Interaction Design" },
          { label: "Role", value: "Interaction Designer" },
          { label: "Time frame", value: "2021" },
          { label: "Team", value: "Student project" },
        ]}
        title="Smart Pot"
        tagline="An interactive pot that encourages sustainable habits through engaging and caring tangible interactions"
      />

      <CaseSection title="About">
        <p>
          Smart Pot is an exploration of how tangible, expressive products can
          nudge everyday sustainable behaviour. The pot communicates the
          plant's needs through soft light, texture and movement — turning
          plant care into a small, reciprocal relationship rather than a chore.
        </p>
        <div className="pt-2">
          <ChipRow
            items={["Interaction Design", "Prototyping", "Tangible Interaction", "Sustainability", "Concept Design"]}
          />
        </div>
      </CaseSection>

      <CaseSection title="Design Challenge">
        <ChallengeList
          items={[
            {
              icon: <Sprout className="h-6 w-6" />,
              title: "Encouraging sustainable habits through caring interaction",
              body: "Sustainable behaviour often fails because it feels abstract and effortful. The challenge was to design a product that makes care feel intuitive and rewarding by giving the plant a clear, expressive voice the user can read at a glance.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection title="My Contribution">
        <p>
          I led the interaction design — defining the pot's expressive states,
          mapping plant needs to light and motion cues, and prototyping the
          tangible behaviours that make the object feel alive and responsive.
        </p>
        <p>
          The result is a small object with a big presence: a pot that
          encourages presence, attention and consistent care, supporting a
          calmer and more sustainable everyday routine.
        </p>
      </CaseSection>

      <CaseSection title="Key Learnings">
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>Tangible interaction can make abstract goals like sustainability feel personal and immediate.</li>
          <li>Designing for emotion is as important as designing for function when the goal is long-term behaviour change.</li>
        </ul>
      </CaseSection>

      <CaseFooterNav next="/projects/smart-dash" />
    </CaseLayout>
  );
}
