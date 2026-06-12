import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedHeading } from "@/components/animated-heading";

import portrait from "@/assets/alicia-portrait-v2.png.asset.json";
import smartDashImg from "@/assets/smart-dash-cab.jpg.asset.json";
import accessibilityImg from "@/assets/accessibility-desk.jpg.asset.json";
import smartPotImg from "@/assets/smart-pot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alicia Strömmer — Product Designer" },
      {
        name: "description",
        content:
          "Product designer based in Stockholm specialising in simplifying complex systems through user-centered design.",
      },
      { property: "og:title", content: "Alicia Strömmer — Product Designer" },
      {
        property: "og:description",
        content:
          "Product designer based in Stockholm specialising in simplifying complex systems through user-centered design.",
      },
    ],
  }),
  component: Home,
});

const skills = [
  {
    title: "Product Thinking",
    body: "I approach design from a product perspective, connecting user needs, business objectives, and technical feasibility to create solutions that deliver long-term value.",
  },
  {
    title: "Interaction Design",
    body: "I design intuitive and accessible interfaces for complex products, turning complexity into clear and meaningful user experiences.",
  },
  {
    title: "User Research",
    body: "I use research to understand user behaviour and validate decisions. By combining analytical thinking with empathy, I turn insights into clear design opportunities.",
  },
  {
    title: "Design Systems",
    body: "I believe consistency and scalability are essential for great products. I enjoy creating reusable patterns, establishing guidelines, and designing solutions that work across features and teams.",
  },
];

const projects = [
  {
    to: "/projects/smart-dash" as const,
    title: "Smart Dash",
    role: "UX/UI Designer",
    period: "2023 – Present",
    body: "Design of features, patterns and guidelines for Scania's digital driver platform designed for professional truck and bus drivers.",
    image: smartDashImg.url,
    alt: "Scania truck cab with two digital driver displays glowing in cyan",
  },
  {
    to: "/projects/accessibility-guide" as const,
    title: "Accessibility Guide",
    role: "UX/UI Designer",
    period: "2022 – 2023",
    body: "Design of a guide that helps designers and developers interpret and adopt accessibility practices through concrete applications and visual examples.",
    image: accessibilityImg.url,
    alt: "Desk with a monitor showing the Accessibility Guide welcome page",
  },
  {
    to: "/projects/smart-pot" as const,
    title: "Smart Pot",
    role: "Interaction Designer",
    period: "2021",
    body: "Design of an interactive pot to encourage sustainable habits through engaging and caring tangible interactions.",
    image: smartPotImg.url,
    alt: "Hands holding a glowing white origami-textured plant pot",
  },
];

const clients = ["TRATON GROUP", "SCANIA", "Knightec Group", "ABB", "UMEÅ ENERGI"];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.1fr_auto] md:items-center">
            <div className="reveal-up">
              <AnimatedHeading />
              <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground leading-relaxed">
                I specialize in simplifying complex systems through
                user-centered design, combining strategic thinking with
                attention to detail to create products that work in the real
                world.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-pill btn-pill-primary">
                  Get In Touch
                </a>
                <a href="#projects" className="btn-pill btn-pill-outline">
                  View Projects
                </a>
              </div>
            </div>

            <div className="reveal-up [animation-delay:120ms] hidden md:flex justify-end">
              <div
                className="rounded-[1.75rem] overflow-hidden"
                style={{ backgroundColor: "#e9e9e9" }}
              >
                <img
                  src={portrait.url}
                  alt="Portrait of Alicia Strömmer"
                  loading="eager"
                  className="w-[260px] md:w-[300px] aspect-[3/4] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-4 sm:pt-8 pb-28 sm:pb-36">
          <div className="max-w-4xl space-y-8 text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
            <p>
              Product designer with 4 years experience. Based in Stockholm.
            </p>
            <p>
              Currently working with digital in-vehicle interfaces at Scania as
              UX/UI Designer and Area Lead. Balancing strategy with hands-on
              execution.
            </p>
          </div>
        </section>


        {/* WHAT I DO */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20 sm:pb-28">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
            What I do
          </h2>
          <div className="mt-10 sm:mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.title}>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 pb-20 sm:pb-28">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
            Projects
          </h2>
          <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10">
            {projects.map((p) => (
              <article
                key={p.title}
                className="grid gap-5 sm:gap-8 sm:grid-cols-[1.4fr_1fr] items-stretch group"
              >
                <Link
                  to={p.to}
                  className="relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[4/3] bg-muted card-hover"
                  aria-label={`Open ${p.title} case study`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-sm text-muted-foreground">
                    <span className="truncate">{p.role}</span>
                    <span className="shrink-0">{p.period}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                    {p.body}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={p.to}
                      aria-label={`Open ${p.title} case study`}
                      className="icon-pill"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CLIENTS */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-20 sm:pb-28">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
            Clients
          </h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-muted-foreground">
            {clients.map((c) => (
              <li
                key={c}
                className="text-sm sm:text-base font-semibold tracking-wide uppercase transition-colors hover:text-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 text-center">
          <a href="mailto:alicia@strommer.se" className="btn-pill btn-pill-primary">
            Get In Touch
            <ArrowDown className="h-4 w-4" />
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
