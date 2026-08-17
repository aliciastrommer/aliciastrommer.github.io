import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

import portrait from "@/assets/alicia-portrait-v3.png.asset.json";
import smartDashImg from "@/assets/smart-dash-cockpit.jpg.asset.json";
import accessibilityImg from "@/assets/accessibility-laptop1.jpg.asset.json";
import smartPotImg from "@/assets/smart-pot.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alicia Strömmer — Product Designer" },
      {
        name: "description",
        content:
          "I design thoughtful products for complex systems by combining systems thinking, hands-on craft, strategic perspective, and an understanding of human perception, reasoning and behavior.",
      },
      { property: "og:title", content: "Alicia Strömmer — Product Designer" },
      {
        property: "og:description",
        content:
          "Product designer based in Stockholm — thoughtful products for complex systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const projects = [
  {
    to: "/projects/smart-dash" as const,
    title: "Designing a Driver Experience That Keeps Attention on the Road",
    period: "2023 – Present",
    body:
      "Designing digital driver experiences for professional truck and bus drivers that reduce cognitive effort and simplify complex workflows.\u00a0",
    tags: ["UX/UI Design", "Product Thinking", "Design System"],
    image: smartDashImg.url,
    alt: "Scania truck cab with the steering wheel and Center Information Display",
  },
  {
    to: "/projects/accessibility-guide" as const,
    title: "Bridging the Gap Between Accessibility Standards and Everyday Design",
    period: "2022 – 2023",
    body:
      "Design of an accessibility guide for designers and developers to make it easier to design accessible products.",
    tags: ["UX/UI Design", "UX Writing", "Accessibility"],
    image: accessibilityImg.url,
    alt: "Laptop showing the Daresay Accessibility Guide on a wooden desk",
  },
  {
    to: "/projects/smart-pot" as const,
    title: "Using Tangible Interaction to Inspire Sustainable Behavior",
    period: "2021",
    body:
      "Concept design of an interactive pot used to demonstrate how tangible interaction can increase engagement with sustainable behaviour.",
    tags: ["User Research", "Interaction Design", "User Testing"],
    image: smartPotImg.url,
    alt: "Hands holding a glowing white origami-textured plant pot",
  },
];

const howIWork = [
  {
    title: "I bring clarity",
    body: "I simplify complex systems by making sure that solutions are designed based on an understanding of how users think and act.",
  },
  {
    title: "I create alignment",
    body: "I connect user needs, business goals, and technical constraints.",
  },
  {
    title: "I drive progress",
    body: "I help teams move forward through structure, collaboration, and iterative problem solving.",
  },
  {
    title: "I sweat the details",
    body: "Because great products depend on thousands of thoughtful decisions.",
  },
];

function SectionLabel({ label, number }: { label: string; number: string }) {
  return (
    <div className="flex items-center justify-between type-caption">
      <span>{label}</span>
      <span className="hidden sm:inline">{number}</span>
    </div>
  );
}


function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO — clean editorial layout with central craft object */}
      <div
        id="top"
        data-band
        className="relative overflow-hidden bg-background snap-start"
        data-header-theme="light"
      >


        <section className="relative z-10 container-wide min-h-svh flex flex-col justify-between py-16 md:py-24">
          {/* Top: name / role spanning full width */}
          <header>
            <h1 className="type-hero flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4">
              <span className="whitespace-nowrap">Alicia Strömmer</span>
              <span className="text-foreground/25 transition-colors duration-500 hover:text-foreground/50 whitespace-nowrap">
                / Product Designer
              </span>
            </h1>
          </header>


          {/* Center: craft object only, centered */}
          <div className="flex-1 flex items-center justify-center py-12 md:py-20">
            {/* Geometric craft object — prismatic kinetic glass */}
            <div className="hero-craft group cursor-crosshair" aria-hidden="true" tabIndex={-1}>
              <div className="hero-craft-glow" />
              <div className="hero-craft-planes">
                <div className="hero-craft-plane hero-craft-plane--base" />
                <div className="hero-craft-plane hero-craft-plane--lavender" />
                <div className="hero-craft-plane hero-craft-plane--glass">
                  <div className="hero-craft-core" />
                </div>
                <div className="hero-craft-plane hero-craft-plane--grid">
                  <div className="hero-craft-grid" />
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-primary/40" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-primary/40" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-primary/40" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-primary/40" />
                </div>
                <div className="hero-craft-plane--wireframe">
                  <div className="hero-craft-wire-h" />
                  <div className="hero-craft-wire-v" />
                </div>
                <div className="hero-craft-plane--accent" />
              </div>
            </div>
          </div>


          {/* Bottom: wide bio + scroll cue */}
          <footer className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            <p className="flex-1 text-left type-body text-muted-ink text-balance md:max-w-2xl">
              I design thoughtful products for complex systems by combining systems
              thinking and hands-on craft, with a deep understanding of how humans
              process information.
            </p>

            <a
              href="#work"
              aria-label="Scroll to work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="shrink-0 grid place-items-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all duration-300 hover:translate-y-1 md:ml-auto"
            >
              <ArrowDown className="size-5" />
            </a>
          </footer>


        </section>
      </div>





      {/* [01] PROOF — [01] label occupies the left half; stats compressed on the right */}
      <div id="proof" data-band className="section-band">
      <Reveal as="section" className="container-wide py-20 sm:py-24">



        <div className="bg-muted rounded-2xl p-8 sm:p-10">
          <div className="grid gap-y-8 gap-x-10 md:grid-cols-2">
            <div className="type-caption hidden md:block">[01]</div>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              <div className="space-y-5">
                <div>
                  <div className="type-small text-muted-ink">Years of experience</div>
                  <div className="mt-1 type-h3">4+</div>
                </div>
                <div>
                  <div className="type-small text-muted-ink">Current role</div>
                  <div className="mt-1 type-h3">UX/UI Designer</div>
                  <div className="type-h3">Area Lead</div>
                </div>
                <div>
                  <div className="type-small text-muted-ink">Focus</div>
                  <div className="mt-1 type-h3">Product &amp; System Thinking</div>
                  <div className="type-h3">Accessibility-Driven Design</div>
                  <div className="type-h3">Usability in Complex Products</div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="type-small text-muted-ink">Experience from</div>
                  <div className="mt-1 type-h3">Traton Group</div>
                  <div className="type-h3">Scania</div>
                  <div className="type-h3">Daresay by Knightec</div>
                  <div className="type-h3">ABB</div>
                  <div className="type-h3">Umeå Energi</div>
                </div>
                <div>
                  <div className="type-small text-muted-ink">Education in</div>
                  <div className="mt-1 type-h3">Interaction Design</div>
                  <div className="type-h3">Cognitive Science</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Reveal>
      </div>


      {/* [02] FEATURED WORK */}
      <div id="work" data-band className="section-band">
      <section className="container-wide py-20 sm:py-24 scroll-mt-24">



        <Reveal>
          <SectionLabel label="FEATURED WORK" number="[02]" />
        </Reveal>
        <div className="mt-6 space-y-4 sm:space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link
                to={p.to}
                aria-label={`Open ${p.title} case study`}
                className="group relative block py-4 transition-all duration-300 ease-out"
              >
                <article className="grid gap-4 sm:gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-stretch">
                  <div className="order-2 sm:order-none min-w-0 flex flex-col">
                    <div>
                      <h2 className="type-h2 transition-colors duration-200 group-hover:text-primary">
                        {p.title}
                      </h2>
                      <div className="mt-2 type-small text-muted-ink">{p.period}</div>
                      <p className="mt-4 type-small text-muted-ink">{p.body}</p>
                    </div>
                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="chip-outline">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 sm:order-none relative min-w-0 w-full overflow-hidden rounded-2xl bg-surface aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="block h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
                    />
                    <div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-hidden="true"
                    >
                      <div className="grid place-items-center w-12 h-12 rounded-full bg-white/85 backdrop-blur-md text-foreground shadow-xl ring-1 ring-black/10 hover:bg-white hover:scale-105 transition-all duration-200">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>


          ))}
        </div>
      </section>
      </div>

      {/* [03] HOW I WORK */}
      <div
        id="how-i-work"
        data-band
        className="section-band relative overflow-hidden"
        data-header-theme="light"
      >


        <section className="container-wide relative z-10 py-20 sm:py-24">
          <div className="w-full rounded-2xl bg-lavender p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-[1fr_1fr] items-stretch">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="type-caption text-muted-ink">HOW I WORK</span>
                </div>
                <span className="type-caption hidden sm:inline text-muted-ink">[03]</span>
              </div>
              <div className="flex flex-col justify-between gap-6">
                {howIWork.map((h) => (
                  <Reveal key={h.title}>
                    <div className="cursor-default">
                      <h2 className="type-h2">{h.title}</h2>
                      <p className="mt-2 type-body text-foreground/85 max-w-lg">
                        {h.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* [04] ABOUT */}
      <div id="about" data-band className="section-band">
      <section className="container-wide py-20 sm:py-24 scroll-mt-24">



        <Reveal>
          <SectionLabel label="ABOUT" number="[04]" />
        </Reveal>
        <div className="mt-6 grid gap-8 sm:gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-stretch">
          <div className="overflow-hidden rounded-2xl bg-surface h-full min-h-[320px] md:min-h-[520px]">
            <img
              src={portrait.url}
              alt="Portrait of Alicia Strömmer"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <Reveal>
              <h2 className="type-h2">
                A little bit about me
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4 type-body text-muted-ink">
              <Reveal>
                <p>
                  I grew up in Umeå and now live in Stockholm with my fiancé. Today,
                  I work at the intersection of design, technology, and human behaviour,
                  with a particular interest in products for everyday use. I find it
                  especially rewarding to see how small design decisions can make a
                  meaningful difference over time.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  My interest in human behaviour started early. Growing up alongside
                  people with different cognitive variations gave me a firsthand
                  understanding of how differently we can think, communicate, and
                  experience the world. It made me curious about people and eventually
                  led me to study cognitive science and interaction design.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Creativity has always been an important part of my life, from writing
                  and photography to various personal projects. Today, I bring that
                  creative side into my work, combining it with an understanding of
                  people to create experiences that are useful, intuitive, and enjoyable.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Whenever I can, I head back north to our summer house on the coast
                  outside Umeå. Being by the sea, spending time outdoors, and slowing
                  down for a while is my favourite way to recharge.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Reveal>
            <a href="mailto:alicia@strommer.se" className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-primary/90 backdrop-blur-md text-white shadow-xl ring-1 ring-white/20 type-caption hover:bg-primary hover:scale-105 transition-all duration-200 group">
              Let's Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>
      </div>


      <SiteFooter />
    </div>
  );
}


