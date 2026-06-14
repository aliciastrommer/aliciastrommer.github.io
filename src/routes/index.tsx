import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
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
    body: "Design of features, patterns and frameworks for Scania's digital driver platform designed for professional truck and bus drivers.",
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

function ClientsReveal({ items }: { items: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % items.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <ul
      className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12"
      aria-label="Clients I have worked with"
    >
      {items.map((c, i) => {
        const isActive = i === active;
        return (
          <li
            key={c}
            className={[
              "text-base font-semibold tracking-tight whitespace-nowrap",
              "transition-all duration-700 ease-out will-change-transform",
              isActive
                ? "text-foreground opacity-100 scale-105"
                : "text-muted-foreground opacity-50 scale-100",
            ].join(" ")}
          >
            {c}
          </li>
        );
      })}
    </ul>
  );
}

function WhatIDo({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="mt-10 sm:mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 items-start">
      {items.map((s) => (
        <div key={s.title}>
          <h3 className="text-xl font-semibold tracking-tight">
            {s.title}
          </h3>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            {s.body}
          </p>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-24 sm:pt-0 pb-20 sm:pb-0 min-h-screen flex items-center justify-center">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.1fr_auto] md:items-center w-full">

            <div className="text-left flex flex-col items-start">
              <AnimatedHeading />
              <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground leading-relaxed">
                I specialize in simplifying complex systems through
                user-centered design, combining strategic thinking with
                attention to detail to create products that work in the real
                world.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-base text-muted-foreground">
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
              <div className="mt-8 flex flex-wrap justify-start gap-3">
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
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-20 pb-36 sm:pb-48 text-center">
          <div className="mx-auto max-w-4xl text-balance text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
            <p>
              4+ years of experience. Currently working with digital in-vehicle
              interfaces as UX/UI Designer and Area Lead, where I balance
              strategy with hands-on execution.
            </p>
          </div>
        </Reveal>


        {/* WHAT I DO */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            What I do
          </h2>
          <WhatIDo items={skills} />
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
            <figcaption className="mt-6 text-base text-muted-foreground">
              - Colleague at Scania
            </figcaption>
          </figure>

        </Reveal>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">

              Projects
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-12 space-y-4 sm:space-y-6">

            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link
                  to={p.to}
                  aria-label={`Open ${p.title} case study`}
                  className="group block rounded-2xl"
                >
                  <article className="grid gap-3 sm:gap-4 sm:grid-cols-[1.7fr_1fr] items-stretch">
                    <div className="relative overflow-hidden rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl aspect-[16/10] sm:aspect-[16/11] bg-muted">
                      <img
                        src={p.image}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-col sm:py-2">
                      <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-md">
                        {p.body}
                      </p>
                      <div className="mt-auto pt-6 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="chip-outline">{p.role}</span>
                          <span className="chip-outline">{p.period}</span>
                        </div>
                        <span
                          aria-hidden="true"
                          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[var(--shadow-primary)]"
                        >
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CLIENTS */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 sm:px-8 pb-28 sm:pb-36 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Experience From
          </h2>
          <ClientsReveal items={clients} />
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
