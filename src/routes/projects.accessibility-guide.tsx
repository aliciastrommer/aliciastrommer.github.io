import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Accessibility } from "lucide-react";
import {
  CaseLayout,
  CaseHero,
  CaseSection,
  ChallengeList,
  FullBleedImage,
  CaseDivider,
  DeliverablesBox,
  CaseMiniNav,
  KeyTakeaways,
} from "@/components/case-study";

import hero from "@/assets/accessibility-laptop1.jpg.asset.json";
import deskShot from "@/assets/accessibility-desk.jpg.asset.json";
import laptop2 from "@/assets/accessibility-laptop2-v2.png.asset.json";

export const Route = createFileRoute("/projects/accessibility-guide")({
  head: () => ({
    meta: [
      { title: "Accessibility Guide — Alicia Strömmer" },
      {
        name: "description",
        content:
          "Case study: a guide created to help designers and developers develop WCAG compliant products and services.",
      },
      { property: "og:title", content: "Accessibility Guide — Alicia Strömmer" },
      {
        property: "og:description",
        content:
          "Case study: a guide created to help designers and developers develop WCAG compliant products and services.",
      },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <CaseLayout currentPath="/projects/accessibility-guide">
      <CaseMiniNav
        items={[
          { id: "challenge", label: "Challenge" },
          { id: "contribution", label: "My Contribution" },
          { id: "impact", label: "Deliverables & Impact" },
          { id: "takeaways", label: "Key Takeaways" },
        ]}
      />
      <CaseHero
        heroImage={hero.url}
        heroAlt="Laptop showing the Daresay Accessibility Guide on a wooden desk"
        meta={[
          { label: "Company", value: "Daresay By Knightec" },
          { label: "Role", value: "UX/UI Designer" },
          { label: "Time frame", value: "2022 – 2023" },
        ]}
        title="Accessibility Guide"
        tagline="A guide created to help designers and developers develop WCAG compliant products and services"
        about={
          <>
            <p>
              The accessibility guide was developed as an internal initiative at Daresay by Knightec, carried out alongside client assignments. This meant that the roles and responsibilities varied throughout the process. The work included user research, benchmarking, co-design workshops, concept development, and user testing.
            </p>
            <p>
              <a
                href="https://a11y.daresay.io"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline link-external inline-flex items-center gap-1"
              >
                <ArrowUpRight className="h-4 w-4" />
                Find the guide here
              </a>
            </p>
          </>
        }
      />

      <CaseDivider />

      <CaseSection id="challenge" headingStyle="lead" title="WCAG guidelines were hard to apply in real projects, and we wanted to change that">
        <ChallengeList variant="lavender"
          items={[
            {
              icon: <Accessibility className="h-5 w-5" />,
              title: "Bridging the gap between guidelines and practical application",
              body: "As the demand for accessible websites grew, we recognized a need amongst clients, designers, and developers to get help interpreting WCAG guidelines and applying them in real-world projects. Accessibility shouldn't be difficult to get right, which is why we found this important.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection id="contribution" headingStyle="lead" title="I led the translation of WCAG guidelines into practical, everyday design guidance">
        <p>
          I joined the initiative after the introduction to the guide had been
          completed, at the stage where the team was developing the supporting
          material for interpreting each WCAG guideline.
        </p>
        <p>
          I led the work of translating the WCAG guidelines into practical
          design guidance by creating visual frameworks, benchmarked examples,
          and the first concepts for the guide's "do's" and "don'ts". I also
          contributed to the editorial direction of the guide through UX
          writing, proofreading, and iterative content development.
        </p>
      </CaseSection>

      <FullBleedImage src={deskShot.url} alt="Desk with monitor showing the Daresay Accessibility Guide welcome page" />

      <CaseSection id="impact" headingStyle="lead" title="The guide became a shared resource across teams, partners and clients">
        <DeliverablesBox>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <h3 className="type-h3">Deliverables</h3>
              <p className="mt-2">
                My key deliverables included a visual framework for interpreting
                WCAG guidelines, benchmarked examples of accessible design
                patterns, the initial concepts for the guide's "do's and don'ts",
                and editorial contributions that shaped the guide's language and
                usability.
              </p>
            </div>
            <div>
              <h3 className="type-h3">Impact</h3>
              <p className="mt-2">
                The result was a practical resource that translated complex
                accessibility standards into actionable guidance for day-to-day
                design and development work. Since its release, the guide has
                been adopted not only by internal design and development teams,
                but also by external partners and clients, helping establish a
                more consistent and accessible way of working across projects.
              </p>
            </div>
          </div>
        </DeliverablesBox>
      </CaseSection>

      <div className="mt-16 sm:mt-20 w-full overflow-hidden bg-muted">
        <img
          src={laptop2.url}
          alt="Laptop displaying the Accessibility Guide's do's and don'ts page"
          className="w-full h-auto block"
        />
      </div>

      <KeyTakeaways
        id="takeaways"
        items={[
          "Translated complex WCAG standards into practical, actionable guidance used by internal teams, external partners and clients.",
          "Deepened expertise in accessibility standards and their application in complex product environments.",
          "Improved ability to turn abstract requirements into actionable design guidance.",
        ]}
      />
    </CaseLayout>
  );
}
