import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
      {/* HERO — minimal dark field with faint grid, soft glow, vignette */}
      <div
        className="relative overflow-hidden bg-hero-gradient"
        data-header-theme="dark"
      >
        {/* Subtle linear grid — slightly more visible against the lighter dark field */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        {/* Soft central purple glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "oklch(0.55 0.19 292 / 0.10)",
            filter: "blur(120px)",
          }}
          aria-hidden="true"
        />
        {/* Vignette for depth — matches the new hero background tone */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, #16171b 70%)",
          }}
          aria-hidden="true"
        />
        <section className="relative z-10 container-wide min-h-svh flex flex-col items-center justify-center py-24 text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm type-body text-hero-muted">
              <span className="pulse-dot" aria-hidden="true" />
              <span>Currently designing for Scania · Based in Stockholm</span>
            </div>
            <h1 className="mt-8 type-hero text-white">
              <span className="inline-block pb-[0.06em]">Alicia Strömmer</span>
              <span className="block">Product Designer</span>
            </h1>
            <p className="mt-6 max-w-2xl type-body-lg text-hero-muted">
              I design thoughtful products for complex systems by combining systems
              thinking and hands-on craft, with a deep understanding of how humans
              process information.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:alicia@strommer.se"
                className="btn-pill btn-pill-primary type-caption"
              >
                Get In Touch
              </a>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/70 backdrop-blur-md text-white shadow-xl ring-1 ring-white/20 type-caption hover:bg-black/80 hover:scale-105 transition-all duration-200"
              >
                View Work
              </a>
            </div>
          </div>
        </section>
      </div>




      {/* [01] PROOF — [01] label occupies the left half; stats compressed on the right */}
      <Reveal as="section" className="container-wide py-20 sm:py-24">
        <div className="grid gap-y-8 gap-x-10 md:grid-cols-2">
          <div className="type-caption hidden md:block">[01]</div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div className="space-y-5">
              <div>
                <div className="type-small text-muted-ink">Years of experience</div>
                <div className="mt-1 type-value">4+</div>
              </div>
              <div>
                <div className="type-small text-muted-ink">Current role</div>
                <div className="mt-1 type-value">UX/UI Designer</div>
                <div className="type-value">Area Lead</div>
              </div>
              <div>
                <div className="type-small text-muted-ink">Focus</div>
                <div className="mt-1 type-value">Product &amp; System Thinking</div>
                <div className="type-value">Accessibility-Driven Design</div>
                <div className="type-value">Usability in Complex Products</div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="type-small text-muted-ink">Experience from</div>
                <div className="mt-1 type-value">Traton Group</div>
                <div className="type-value">Scania</div>
                <div className="type-value">Daresay by Knightec</div>
                <div className="type-value">ABB</div>
                <div className="type-value">Umeå Energi</div>
              </div>
              <div>
                <div className="type-small text-muted-ink">Education in</div>
                <div className="mt-1 type-value">Interaction Design</div>
                <div className="type-value">Cognitive Science</div>
              </div>
            </div>

          </div>
        </div>
      </Reveal>

      {/* [02] FEATURED WORK */}
      <section id="work" className="container-wide py-20 sm:py-24 scroll-mt-24">
        <SectionLabel label="FEATURED WORK" number="[02]" />
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
                      <h3 className="type-h2 transition-colors duration-200 group-hover:text-primary">
                        {p.title}
                      </h3>
                      <div className="mt-2 type-small text-muted-ink">{p.period}</div>
                      <p className="mt-4 type-small text-muted-ink">{p.body}</p>
                    </div>
                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="chip-outline">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 sm:order-none relative min-w-0 w-full overflow-hidden rounded-lg bg-surface aspect-[16/10]">
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
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white shadow-xl ring-1 ring-white/20">
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

      {/* [03] HOW I WORK — flat dark section with cursor-following spotlight */}
      <div
        className="bg-dark-flat relative overflow-hidden spotlight-section"
        data-header-theme="dark"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
          e.currentTarget.style.setProperty("--spotlight-opacity", "1");
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.setProperty("--spotlight-opacity", "0");
        }}
      >
        <section className="container-wide relative z-10 py-20 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-[1fr_2fr] items-stretch">
            <div className="flex flex-col justify-between">
              <span className="type-caption text-white/70">HOW I WORK</span>
              <span className="type-caption hidden sm:inline text-white/70">[03]</span>
            </div>
            <div className="flex flex-col justify-between gap-6">
              {howIWork.map((h) => (
                <Reveal key={h.title}>
                  <div className="cursor-default">
                    <h3 className="type-h3 text-white">{h.title}</h3>
                    <p className="mt-2 type-body text-hero-muted max-w-lg">
                      {h.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>


      {/* [04] ABOUT */}
      <section id="about" className="container-wide py-20 sm:py-24 scroll-mt-24">
        <SectionLabel label="ABOUT" number="[04]" />
        <div className="mt-6 grid gap-8 sm:gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-stretch">
          <div className="overflow-hidden rounded-lg bg-surface h-full min-h-[320px] md:min-h-[520px]">
            <img
              src={portrait.url}
              alt="Portrait of Alicia Strömmer"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="type-h2">
              A little bit about me
            </h2>
            <div className="mt-6 space-y-4 type-body text-[color:var(--muted-ink)]">
              <p>
                I grew up in Umeå and now live in Stockholm with my fiancé. Today,
                I work at the intersection of design, technology, and human behaviour,
                with a particular interest in creating products that become a natural
                part of people’s everyday lives. I find it especially rewarding to
                see how small design decisions can make a meaningful difference over time.
              </p>
              <p>
                My interest in human behaviour started early. Growing up alongside
                people with different cognitive variations gave me a firsthand
                understanding of how differently we can think, communicate, and
                experience the world. It made me curious about people and eventually
                led me to study cognitive science and interaction design.
              </p>
              <p>
                Creativity has always been an important part of my life, from writing
                and photography to various personal projects. Today, I bring that
                creative side into my work, combining it with an understanding of
                people to create experiences that are useful, intuitive, and enjoyable.
              </p>
              <p>
                Whenever I can, I head back north to our summer house on the coast
                outside Umeå. Being by the sea, spending time outdoors, and slowing
                down for a while is my favourite way to recharge.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="mailto:alicia@strommer.se" className="btn-pill btn-pill-primary group">
            Let's Talk
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}


