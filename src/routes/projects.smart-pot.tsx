import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Leaf } from "lucide-react";
import {
  CaseLayout,
  CaseHero,
  CaseSection,
  ChallengeList,
  FullBleedImage,
  CaseDivider,
  CaseMiniNav,
  PullQuote,
  KeyTakeaways,
} from "@/components/case-study";

import hero from "@/assets/smart-pot.jpg.asset.json";
import sketches from "@/assets/smart-pot-sketches-real.png.asset.json";
import interactionsVideo from "@/assets/smart-pot-interactions.mp4.asset.json";
import interactionsPoster from "@/assets/smart-pot-interactions-poster.jpg.asset.json";


export const Route = createFileRoute("/projects/smart-pot")({
  head: () => ({
    meta: [
      { title: "Smart Pot — Alicia Strömmer" },
      {
        name: "description",
        content:
          "Case study: an interactive plant pot that visualizes plant health through form, light and touch.",
      },
      { property: "og:title", content: "Smart Pot — Alicia Strömmer" },
      {
        property: "og:description",
        content:
          "Case study: an interactive plant pot that visualizes plant health through form, light and touch.",
      },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: SmartPotPage,
});

function SmartPotPage() {
  return (
    <CaseLayout currentPath="/projects/smart-pot">
      <CaseHero
        heroImage={hero.url}
        heroAlt="Hands holding a glowing white origami-textured plant pot with basil"
        meta={[
          { label: "Company", value: "Chalmers University of Technology" },
          { label: "Role", value: "Interaction Designer" },
          { label: "Time frame", value: "Feb 2021 – March 2021" },
        ]}
        title="Smart Pot"
        tagline="An interactive plant pot that visualizes plant health through form, light and touch"
        about={
          <>
            <p>
              This was a two month long project included in the course "Tangible
              Interaction" during my master's programme, carried out in a
              project team.
            </p>
            <p>
              The purpose of the project was to explore interactions beyond
              digital interfaces through tangible interaction. Throughout the
              process, we used a range of methods, including focus groups,
              photo journals, interviews and surveys. To develop the concept,
              we used tools such as pen and paper, Miro and ultimately Arduino
              to create a functional prototype.
            </p>
            <p>
              <a
                href="https://www.youtube.com/watch?v=Q1_rXJEkQSQ&t=1s"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline link-external inline-flex items-center gap-1"
              >
                <ArrowUpRight className="h-4 w-4" />
                View promotion video
              </a>
            </p>
          </>
        }
      />

      <CaseMiniNav
        items={[
          { id: "challenge", label: "Challenge" },
          { id: "research", label: "Research" },
          { id: "solution", label: "Solution" },
          { id: "contribution", label: "My Contribution" },
          { id: "takeaways", label: "Key Takeaways" },
        ]}
      />

      <CaseDivider />

      <CaseSection id="challenge" title="Design Challenge">
        <ChallengeList variant="lavender"
          items={[
            {
              icon: <Leaf className="h-5 w-5" />,
              title: "Encouraging sustainable habits through interactive plant care design",
              body: "The project explored how design can be used to encourage more sustainable behaviours. This was refined into a concept centered on supporting users in growing herbs and plants at home.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection id="research" title="Research & Exploration">
        <p>
          To gain a better understanding of the problem space, we recruited six
          participants to take part in interviews and photo journals. The
          purpose was to frame their experience of growing herbs and other
          edibles at home. This taught us that all participants were positive
          towards the idea of growing edibles at home, but they all experienced
          problems keeping them alive. Analyzing the results, we figured that
          the problem stems from a lack of knowledge on what the plants need as
          well as a weak relationship towards plants.
        </p>
        <p>
          This led us to identifying requirements, serving as a basis for
          ideation and concept development. After evaluating the first round of
          concepts in a focus group, we were able to merge the concepts into
          one. Further on, we developed a partly functional prototype of the
          merged concept using an Arduino board.
        </p>
      </CaseSection>

      <FullBleedImage src={sketches.url} alt="Hand-drawn pencil sketches exploring smart plant pot concepts" />


      <CaseSection id="solution" title="Solution">
        <p>
          The final concept was a shape-changing plant pot designed to help
          people keep their herbs or plants alive by encouraging more engaging
          and caring interactions. Rather than relying on notifications or
          traditional status indicators, the design explores how physical form
          and touch can communicate the needs of a living plant and foster an
          emotional connection between the owner and their herbs.
        </p>
        <p>
          The pot is designed for a single plant and consists of two chambers:
          one containing the plant itself and a separate water reservoir.
        </p>

        <h3 className="type-h3 pt-4">
          Interaction Design
        </h3>
        <p>
          The concept uses natural and playful interactions to communicate the
          plant's needs:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>
            <strong className="type-h3">
              Checking the herb's well-being:
            </strong>{" "}
            The user gently tickles the leaves to receive feedback. The pot
            illuminates in green when the herb has sufficient water and blue
            when it needs watering.
          </li>
          <li>
            <strong className="type-h3">
              Checking the water reservoir:
            </strong>{" "}
            The physical shape of the pot reflects the amount of water
            available. As the reservoir fills, the pot expands, making the
            water level visible without requiring a display or measurement
            scale.
          </li>
          <li>
            <strong className="type-h3">
              Watering the herb:
            </strong>{" "}
            By holding the sides of the pot, the user activates the watering
            mechanism, creating a direct and tactile interaction between the
            owner and the plant.
          </li>
        </ul>
      </CaseSection>

      <div className="mt-16 sm:mt-20 w-full overflow-hidden bg-muted">
        <video
          src={interactionsVideo.url}
          poster={interactionsPoster.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Demonstration of the Smart Pot prototype interactions: watering, touch and illumination"
          className="w-full h-[52vw] max-h-[620px] min-h-[300px] object-cover"
        />
      </div>

      <CaseSection id="contribution" title="My Contribution">
        <p>
          As the project was part of a course at university, the team
          intentionally shared responsibilities to give everyone exposure to
          the full design process. I contributed across several stages of the
          project, including conducting user interviews, generating concept
          sketches, and creating low-fidelity prototypes.
        </p>
        <p>
          When the concept matured and the team moved into building a functional
          prototype, I took the lead on the technical implementation. I
          programmed the Arduino board that controlled the pot's illumination,
          simulating different lighting behaviours based on the product's
          functional states and enabling us to test and demonstrate the
          interaction concept.
        </p>
      </CaseSection>

      <PullQuote quote="Physical form and touch can communicate the needs of a living plant — no screen required." />

      <KeyTakeaways
        id="takeaways"
        items={[
          "Designed and built a shape-changing plant pot that communicates plant health through form, light and touch.",
          "Gained hands-on experience with tangible interaction design and physical prototyping.",
          "Learned to integrate electronics into a physical artifact, an area I had no prior experience in.",
          "Expanded my understanding of interaction design by combining hardware and digital behaviour.",
        ]}
      />
    </CaseLayout>
  );
}
