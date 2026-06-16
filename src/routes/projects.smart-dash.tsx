import { createFileRoute } from "@tanstack/react-router";
import { Eye, Shuffle, ScrollText, Info, ArrowUpRight } from "lucide-react";
import {
  CaseLayout,
  CaseHero,
  CaseSection,
  ChallengeList,
  ChipRow,
  FullBleedImage,
  CaseFooterNav,
} from "@/components/case-study";
import { ProcessSteps } from "@/components/process-steps";

import hero from "@/assets/smart-dash-cab.jpg.asset.json";
import display from "@/assets/smart-dash-display.jpg.asset.json";
import displays from "@/assets/smart-dash-displays.jpg.asset.json";

export const Route = createFileRoute("/projects/smart-dash")({
  head: () => ({
    meta: [
      { title: "Smart Dash — Alicia Strömmer" },
      {
        name: "description",
        content:
          "Case study: designing Scania's Smart Dash, the digital driver platform for professional truck and bus drivers.",
      },
      { property: "og:title", content: "Smart Dash — Alicia Strömmer" },
      { property: "og:description", content: "Case study: designing Scania's Smart Dash digital driver platform." },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: SmartDashPage,
});

function SmartDashPage() {
  return (
    <CaseLayout>
      <CaseHero
        heroImage={hero.url}
        heroAlt="Scania truck cab with two glowing digital driver displays"
        meta={[
          { label: "Company", value: "Scania/Traton" },
          { label: "Role", value: "UX/UI Designer" },
          { label: "Time frame", value: "Jan 2023 – Present" },
          { label: "Team", value: "Several" },
        ]}
        title="Smart Dash"
        tagline="Scania's digital driver platform designed for professional truck and bus drivers"
      />

      <CaseSection title="About">
        <p>
          Smart Dash was launched to create a safer, smarter and more connected
          driving experience by bringing together the vehicle's digital
          functions in a common platform.
        </p>
        <p>
          The platform functions as a digital workspace for the driver, through
          two main displays, the Driver Display and the Center Information
          Display. It holds features such as Navigation, Advanced Driver
          Assistance Systems (ADAS), Voice Control, Infotainment, Camera
          Features, Safety Information and Vehicle Data. It is built within an
          ecosystem of services with modern technical infrastructure.
        </p>
        <p>
          <a
            href="https://www.scania.com/se/sv/home/newsroom/campaigns/digital-dash.html"
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline link-external inline-flex items-center gap-1"
          >
            Read more about Smart Dash
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </p>

        <div className="flex items-start gap-3 rounded-2xl bg-destructive/10 px-5 py-4 text-foreground/90">
          <Info className="h-5 w-5 mt-0.5 shrink-0 text-destructive" />
          <p>
            Due to confidentiality, this case study focuses on my professional
            development and overall contribution instead of specific examples.
          </p>
        </div>
      </CaseSection>

      <FullBleedImage
        src={displays.url}
        alt="Scania truck cab dashboard with the Driver Display behind the steering wheel and the Center Information Display to the right"
      />


      <CaseSection title="Design Challenge">
        <ChallengeList
          items={[
            {
              icon: <Eye className="h-6 w-6" />,
              title: "Designing for drivers in safety-critical, attention-limited environments",
              body: "Professional truck and bus drivers operate in contexts where attention is scarce and safety is key. Every interaction must be carefully designed to minimize cognitive load and avoid distraction. This makes prioritization of information and clarity of interaction central to the design.",
            },
            {
              icon: <Shuffle className="h-6 w-6" />,
              title: "Designing for flexibility and consistency across applications",
              body: "We design across a wide range of applications with significantly different user needs and use cases. Solutions must therefore be adaptable while maintaining consistency and usability.",
            },
            {
              icon: <ScrollText className="h-6 w-6" />,
              title: "Navigating hardware constraints and regulatory complexity",
              body: "The domain is complex. Designs must account for varying hardware capabilities and constraints, as well as regulatory requirements and safety standards. This requires continuous input and alignment across multiple domains and teams over time.",
            },
          ]}
        />
      </CaseSection>

      <CaseSection title="My Role">
        <p>
          I joined the Smart Dash project 3.5 years ago as a UX/UI designer,
          focusing on interaction logic and HMI behavior of vehicle functions
          within the Driver Display and the Center Information Display.
        </p>
        <p>
          Since then, my role has evolved from hands-on feature delivery, to
          contributing to shared design systems and patterns, and finally to
          Area Lead with responsibility for direction, alignment, and long-term
          quality within a defined domain.&nbsp;
        </p>
        <p>
          During this time, I have worked in several teams with different parts
          of the platform. I have belonged to pure design teams, but also been
          in teams with other competences as the only designer. The work has
          been carried out in an agile environment, following SAFe, and in a global
          context, where cross-functional collaboration has been key.&nbsp;
        </p>
        <p>
        </p>
      </CaseSection>

      <FullBleedImage src={display.url} alt="Scania driver display showing speedometer, load status and trip data" />

      <CaseSection title="My Contribution">
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-foreground">Year 1</h3>
            <p className="mt-3">
              Initially, my role was centred on designing and delivering
              individual HMI features. My responsibility was to translate
              requirements into clear, usable interaction design. I worked
              closely with development teams to deliver scoped functionality.
            </p>
            <div className="mt-4">
              <ChipRow
                items={[
                  "Interaction Design",
                  "UI Design",
                  "User Research",
                  "Cross-functional Collaboration",
                  "Prototyping",
                  "User Testing",
                ]}
              />
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">Year 1–2</h3>
            <p className="mt-3">
              As my experience grew, my role expanded to contributing beyond
              single features, towards patterns, consistency, and shared ways of
              working. I contributed to emerging design patterns, frameworks,
              and shared solutions. Additionally, I contributed to new ways of
              working and collaboration models when I was part of forming a new
              team.&nbsp;
            </p>
            <div className="mt-4">
              <ChipRow items={["Design Patterns", "Design System", "Scalability", "Knowledge Sharing", "Quality Assurance"]} />
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground">Year 3–4</h3>
            <p className="mt-3">
              The past year my role has transitioned into a lead role within a
              defined area. I help drive direction, facilitate alignment, and
              support prioritization across stakeholders within my domain. I
              balance short-term delivery needs with long-term vision and
              foundational work. My focus has shifted from solving isolated
              problems to defining principles, identifying the right challenges,
              and enabling coherent solutions across the area.
            </p>
            <div className="mt-4">
              <ChipRow items={["Product Thinking", "Mentorship", "Coordination", "Facilitation"]} />
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection title="Way of Working">
        <p>
          My design process within this project is iterative and collaborative,
          and can look slightly different depending on what I'm working on.
          Generally speaking, these are the steps I follow.
        </p>
        <div className="mt-8">
          <ProcessSteps
            steps={[
              {
                title: "Understand",
                body:
                  "An essential first step for me is gaining a clear understanding of the problem space. The approach varies depending on how well understood the problem is. Sometimes it requires in-depth user research, while in other cases it’s more about stakeholder alignment and benchmarking to establish a shared understanding.",
              },
              {
                title: "Explore",
                body:
                  "Once the problem space is well understood, I move into exploration. Depending on the context, this may involve sketching, wireframing, or prototyping, with ideas iteratively refined through stakeholder feedback and design reviews.",
              },
              {
                title: "Test & evaluate",
                body:
                  "Because I often explore several directions in parallel, testing plays an important role in helping identify the strongest solution. However, the level of testing depends on factors such as timelines and the novelty of the concept. When a solution builds on familiar patterns and established components, formal user testing may not always be required. Even so, I always make sure the work is evaluated, whether through user feedback or reviews with stakeholders and peers.\n",
              },
              {
                title: "Iterate & refine",
                body:
                  "Once a concept direction has been validated, I progress to higher-fidelity design, focusing on refining and polishing the experience. This often involves collaboration with for example technical writer and visual designers, to ensure the solution is cohesive and ready for implementation.\n",
              },
              {
                title: "Document & deliver",
                body:
                  "The next step is to prepare the design for implementation. This involves creating clear design specifications and documentation, and ensuring alignment with the relevant stakeholders to support an efficient and successful delivery.\n",
              },
              {
                title: "Implement & validate",
                body:
                  "Throughout development, I collaborate with the implementation team to address uncertainties and help ensure a high-quality final solution. I remain available to provide additional support as new needs or questions arise.\n",
              },
            ]}
          />
        </div>
      </CaseSection>

      <CaseSection title="Deliverables & Impact">
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <h3 className="text-foreground font-semibold">Product</h3>
            <p className="mt-2">
              I have delivered, validated and improved numerous production-ready
              HMI experiences, now used by thousands of professional drivers
              every day.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold">Process</h3>
            <p className="mt-2">
              Working across several teams, I have helped define collaboration
              models for newly formed functional teams, co-created onboarding
              material and introduced new designers to established HMI
              workflows.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold">System</h3>
            <p className="mt-2">
              I have established reusable interaction patterns and components
              adopted across multiple features, and created a new system
              framework that enhanced visibility and scalability of the HMI.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-semibold">Strategic</h3>
            <p className="mt-2">
              I have driven strategic development within a key HMI domain,
              coordinating upcoming work, supporting other designers, and acting
              as a domain expert who guides long-term interaction strategy.
            </p>
          </div>
        </div>
      </CaseSection>

      <CaseSection title="Key Learnings">
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>I have learned that my biggest contribution is driving change, not only delivering solutions.</li>
          <li>I have developed a passion for combining long-term strategy with hands-on design craft.</li>
          <li>I have strengthened my ability to build alignment across disciplines through continuous collaboration.</li>
          <li>
            I have gained confidence in advocating for the user and making
            difficult design decisions, sometimes it is as important to say no
            to protect the user, as it is to say yes to add value for the user.
          </li>
        </ul>
      </CaseSection>

      <CaseFooterNav next="/projects/accessibility-guide" />
    </CaseLayout>
  );
}
