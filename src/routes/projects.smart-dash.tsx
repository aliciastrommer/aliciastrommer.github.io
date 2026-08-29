import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ShieldAlert, Layers, Boxes } from "lucide-react";
import {
  CaseLayout,
  CaseHero,
  CaseSection,
  ChallengeList,
  FullBleedImage,
  DeliverablesBox,
  CaseMiniNav,
  KeyTakeaways,
} from "@/components/case-study";
import { ProcessSteps } from "@/components/process-steps";

import hero from "@/assets/smart-dash-cockpit.jpg.asset.json";
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
    <CaseLayout currentPath="/projects/smart-dash">
      <CaseMiniNav
        items={[
          { id: "challenge", label: "Challenge" },
          { id: "role", label: "My Role" },
          { id: "process", label: "Way of Working" },
          { id: "impact", label: "Deliverables & Impact" },
          { id: "takeaways", label: "Key Takeaways" },
        ]}
      />
      <CaseHero
        heroImage={hero.url}
        heroAlt="Scania truck cab with the steering wheel and Center Information Display"
        meta={[
          { label: "Role", value: "UX/UI Designer & Area Lead" },
          { label: "Company", value: "Scania" },
        ]}
        title="Smart Dash"
        tagline="A digital driver platform designed for professional truck and bus drivers"
        about={
          <>
            <p>
              Smart Dash was launched to create a safer, smarter and more
              connected driving experience by bringing together the vehicle's
              digital functions in a common platform.
            </p>
            <p>
              The platform functions as a digital workspace for the driver,
              through two main displays - the Driver Display and the Center
              Information Display. It holds features such as Navigation,
              Advanced Driver Assistance Systems (ADAS), Voice Control,
              Infotainment, Camera Features, Safety Information and Vehicle
              Data. It is built within an ecosystem of services with modern
              technical infrastructure.
            </p>
            <p>
              <a
                href="https://www.scania.com/se/sv/home/newsroom/campaigns/digital-dash.html"
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline link-external inline-flex items-center gap-1"
              >
                <ArrowUpRight className="h-4 w-4" />
                Read more about Smart Dash
              </a>
            </p>
            <div className="flex items-center rounded-2xl border border-red-200 bg-red-50 p-4 type-small text-red-900">
              This project includes limited details and visuals due to confidentiality.
            </div>
          </>
        }
      />

      <FullBleedImage
        src={displays.url}
        alt="Scania truck cab dashboard with the Driver Display behind the steering wheel and the Center Information Display to the right"
      />

      <CaseSection id="challenge" headingStyle="lead" title="Every interaction must minimize cognitive load in a safety critical, attention limited environment">
        <ChallengeList
          variant="lavender"
          items={[
            {
              icon: <ShieldAlert className="h-5 w-5" />,
              title: "Designing for drivers in safety-critical, attention-limited environments",
              body: "Professional truck and bus drivers operate in contexts where attention is scarce and safety is key. Every interaction must be carefully designed to minimize cognitive load and avoid distraction. This makes prioritization of information and clarity of interaction central to the design.",
            },
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Navigating hardware constraints and regulatory complexity",
              body: "The domain is complex. Designs must account for varying hardware capabilities and constraints, as well as regulatory requirements and safety standards. This requires continuous input and alignment across multiple domains and teams over time.",
            },
            {
              icon: <Boxes className="h-5 w-5" />,
              title: "Designing for flexibility and consistency across applications",
              body: "We design across a wide range of applications with significantly different user needs and use cases. Solutions must therefore be adaptable while maintaining consistency and usability.",
            },
          ]}
        />
      </CaseSection>

      <FullBleedImage src={display.url} alt="Scania driver display showing speedometer, load status and trip data" />

      <CaseSection id="role" headingStyle="lead" title="From hands-on feature delivery to strategic leadership as my role evolved alongside the platform">
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
          of the platform. My work has been carried out in an agile
          environment, following SAFe, and in a global context, where
          cross-functional collaboration has been key.&nbsp;
        </p>
      </CaseSection>

      <CaseSection id="process" tone="light-tinted" headingStyle="lead" title="My process is iterative and collaborative, shaped by the problem at hand">
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

      <CaseSection id="impact" title="Deliverables & Impact">
        <DeliverablesBox>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <h3 className="type-h3">Product</h3>
              <p className="mt-2">
                I have delivered, validated and improved numerous production-ready
                HMI experiences, now used by thousands of professional drivers
                every day.
              </p>
            </div>
            <div>
              <h3 className="type-h3">Process</h3>
              <p className="mt-2">
                Working across several teams, I have helped define collaboration
                models for newly formed functional teams, co-created onboarding
                material and introduced new designers to established HMI
                workflows.
              </p>
            </div>
            <div>
              <h3 className="type-h3">System</h3>
              <p className="mt-2">
                I have established reusable interaction patterns and components
                adopted across multiple features, and created a new system
                 framework.
              </p>
            </div>
            <div>
              <h3 className="type-h3">Strategic</h3>
              <p className="mt-2">
                I have driven strategic development within a key HMI domain,
                coordinating upcoming work, supporting other designers, and acting
                 as a domain expert.
              </p>
            </div>
          </div>
        </DeliverablesBox>
      </CaseSection>

      <PullQuote quote="My strongest contribution is not limited to the solutions I deliver, but lies in communication and alignment." />

      <KeyTakeaways
        id="takeaways"
        items={[
          "Shipped production-ready HMI experiences used daily by thousands of professional truck and bus drivers.",
          "Grew from hands-on UX/UI designer to Area Lead with strategic responsibility for a key HMI domain.",
          "Established reusable interaction patterns and a new system framework adopted across multiple features.",
          "Learned that alignment, communication and advocating for the user create as much impact as the designs themselves.",
        ]}
      />
    </CaseLayout>
  );
}
