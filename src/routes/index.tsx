import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedHeading } from "@/components/animated-heading";
import { Reveal } from "@/components/reveal";

import portrait from "@/assets/alicia-portrait-v3.png.asset.json";
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
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-24 sm:pt-20 pb-20 sm:pb-28">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.1fr_auto] md:items-center">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <AnimatedHeading />
              <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground leading-relaxed">
                I specialize in simplifying complex systems through
                user-centered design, combining strategic thinking with
                attention to detail to create products that work in the real
                world.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="font-medium text-foreground">Currently</span>
                </span>
                <span>Designing for Scania</span>
                <span aria-hidden="true">·</span>
                <span>Based in Stockholm</span>
              </div>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <a href="mailto:alicia@strommer.se" className="btn-pill btn-pill-primary">
                  Get In Touch
                </a>
                <a href="#projects" className="btn-pill btn-pill-outline">
                  View Projects
                </a>
              </div>
            </div>

            <Reveal delay={120} className="hidden md:flex justify-end">
              <div
                className="overflow-hidden rounded-tl-[1.75rem] rounded-tr-[1.75rem] rounded-br-[1.75rem]"
                style={{ backgroundColor: "#e9e9e9" }}
              >
                <img
                  src={portrait.url}
                  alt="Portrait of Alicia Strömmer, product designer"
                  loading="eager"
                  className="w-[320px] md:w-[360px] aspect-[3/4] object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTRO */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20 pb-36 sm:pb-48">
          <div className="max-w-4xl text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
            <p>
              4 years experience. Currently working with digital in-vehicle
              interfaces as UX/UI Designer and Area Lead. Balancing strategy
              with hands-on execution.
            </p>
          </div>
        </Reveal>


        {/* WHAT I DO */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
            What I do
          </h2>
          <div className="mt-12 sm:mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.title}>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* TESTIMONIAL */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36">
          <figure className="mx-auto max-w-4xl text-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 40 32"
              className="mx-auto h-8 w-8 text-primary/40"
              fill="currentColor"
            >
              <path d="M12.6 0C5.7 0 0 5.7 0 12.6V32h16V16H8c0-4.4 3.6-8 8-8V0h-3.4zm22 0C27.7 0 22 5.7 22 12.6V32h16V16h-8c0-4.4 3.6-8 8-8V0h-3.4z" />
            </svg>
            <blockquote className="mt-6 text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
              "Alicia is driven, fearless, takes responsibility and has
              leadership qualities. Always with a smile on her face. Such an
              energizing person. She is good at both delving into details and
              seeing the big picture."
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              Colleague at Scania
            </figcaption>
          </figure>
        </Reveal>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36">
          <Reveal>
            <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
              Projects
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-12 space-y-4 sm:space-y-6">

            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="grid gap-5 sm:gap-8 sm:grid-cols-[1.7fr_1fr] items-start group">
                  <Link
                    to={p.to}
                    className="relative overflow-hidden rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl aspect-[16/10] sm:aspect-[16/11] bg-muted card-hover"
                    aria-label={`Open ${p.title} case study`}
                  >
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-base text-muted-foreground">
                      <span className="truncate">{p.role}</span>
                      <span className="shrink-0">{p.period}</span>
                    </div>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
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
              </Reveal>
            ))}
          </div>
        </section>

        {/* CLIENTS */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold tracking-tight">
            Clients
          </h2>
          <div className="marquee mt-12">
            <ul
              className="marquee-track gap-x-12 sm:gap-x-16 text-muted-foreground"
              aria-label="Clients I have worked with"
            >
              {[0, 1].flatMap((setIdx) => [
                ...clients.map((c) => (
                  <li
                    key={`${setIdx}-${c}`}
                    aria-hidden={setIdx === 1 ? "true" : undefined}
                    className="text-base font-semibold tracking-wide uppercase whitespace-nowrap"
                  >
                    {c}
                  </li>
                )),
                <li
                  key={`spacer-${setIdx}`}
                  aria-hidden="true"
                  className="shrink-0 w-[40%]"
                />,
              ])}
            </ul>
          </div>
        </Reveal>

        {/* CONTACT CTA */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 text-center">
          <a href="mailto:alicia@strommer.se" id="contact" className="btn-pill btn-pill-primary">
            Get In Touch
          </a>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
