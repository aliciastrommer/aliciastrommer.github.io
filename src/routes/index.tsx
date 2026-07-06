import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { ScrollFade } from "@/components/scroll-fade";

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
      "I design HMI experiences that reduce cognitive effort and simplify complex workflows for professional truck and bus drivers in demanding environments. In parallel, I drive the strategic direction of a key domain, ensuring design decisions support both user needs and product goals.",
    tags: ["Interaction Design", "UX/UI Design", "Product Thinking", "System Thinking", "Design System"],
    image: smartDashImg.url,
    alt: "Scania truck cab with the steering wheel and Center Information Display",
  },
  {
    to: "/projects/accessibility-guide" as const,
    title: "Bridging the Gap Between Accessibility Standards and Everyday Design",
    period: "2022 – 2023",
    body:
      "Design of an accessibility guide for designers and developers, that lowered the barrier to designing accessible products.",
    tags: ["UX/UI Design", "User Research", "UX Writing", "Accessibility"],
    image: accessibilityImg.url,
    alt: "Monitor showing the Accessibility Guide welcome page",
  },
  {
    to: "/projects/smart-pot" as const,
    title: "Using Tangible Interaction to Inspire Sustainable Behavior",
    period: "2021",
    body:
      "Concept design of an interactive pot, used to demonstrate how tangible interaction can be used to increase engagement with sustainable behaviour.",
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
      {/* HERO — dark purple with pixel grid */}
      <div className="relative bg-hero-gradient" data-header-theme="dark">
        <SiteHeader />
        <section className="container-wide min-h-[calc(100svh-4rem)] flex flex-col pt-16 sm:pt-20 pb-16">
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <div aria-hidden="true" className="text-4xl sm:text-5xl mb-6">👋</div>
            <h1 className="type-h1 text-white">Hi, I'm Alicia Strömmer</h1>
            <p className="mt-8 type-lead text-white">
              I design thoughtful products for complex systems by combining
              systems thinking, hands-on craft, strategic perspective, and an
              understanding of human perception, reasoning and behavior.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 type-small text-hero-muted">
              <span className="inline-flex items-center gap-2 text-white">
                <span className="pulse-dot" aria-hidden="true" />
                <span className="font-medium">Currently</span>
              </span>
              <span>Designing for Scania</span>
              <span>Based in Stockholm</span>
            </div>
          </div>
          <div className="mt-auto pt-16 type-small text-hero-muted space-y-1">
            <div>
              <a href="mailto:alicia@strommer.se" className="link-underline text-white">alicia@strommer.se</a>
            </div>
            <div>
              <a href="tel:+46722068063" className="link-underline text-white">+4672–206 80 63</a>
            </div>
          </div>
        </section>
      </div>

      {/* [01] PROOF — [01] label occupies the left half; stats compressed on the right */}
      <Reveal as="section" className="container-wide py-20 sm:py-28">
        <div className="grid gap-y-8 gap-x-10 md:grid-cols-2">
          <div className="type-caption hidden md:block">[01]</div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <div className="space-y-5">
              <div>
                <div className="type-small text-foreground/70">Years of experience</div>
                <div className="mt-1 type-h3">4+</div>
              </div>
              <div>
                <div className="type-small text-foreground/70">Current role</div>
                <div className="mt-1 type-h3">UX/UI Designer</div>
                <div className="type-h3">Area Lead</div>
              </div>
              <div>
                <div className="type-small text-foreground/70">Focus</div>
                <div className="mt-1 type-h3">Product &amp; System Thinking</div>
                <div className="type-h3">Accessibility-Driven Design</div>
                <div className="type-h3">Usability in Complex Products</div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="type-small text-foreground/70">Experience from</div>
                <div className="mt-1 type-h3">Traton Group</div>
                <div className="type-h3">Scania</div>
                <div className="type-h3">Daresay by Knightec</div>
                <div className="type-h3">ABB</div>
                <div className="type-h3">Umeå Energi</div>
              </div>
              <div>
                <div className="type-small text-foreground/70">Education in</div>
                <div className="mt-1 type-h3">Cognitive Science</div>
                <div className="type-h3">Interaction Design</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* [02] FEATURED WORK */}
      <section id="work" className="container-wide py-20 sm:py-28 scroll-mt-24">
        <SectionLabel label="FEATURED WORK" number="[02]" />
        <div className="mt-8 space-y-6 sm:space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <ScrollFade min={0.35}>
                <Link
                  to={p.to}
                  aria-label={`Open ${p.title} case study`}
                  className="group block rounded-lg -m-3 p-3 border border-transparent transition-colors duration-200 hover:border-primary"
                >
                  <article className="grid gap-5 sm:gap-8 sm:grid-cols-3 items-stretch">
                    <div className="order-2 sm:order-none sm:col-span-1 flex flex-col">
                      <div>
                        <h3 className="type-h2 transition-colors duration-200 group-hover:text-primary">
                          {p.title}
                        </h3>
                        <div className="mt-2 type-small text-foreground/60">{p.period}</div>
                        <p className="mt-3 type-small text-foreground/85">{p.body}</p>
                      </div>
                      <div className="mt-auto pt-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="chip-outline">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="order-1 sm:order-none sm:col-span-2 overflow-hidden rounded-lg bg-surface aspect-[16/10]">
                      <img
                        src={p.image}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </article>
                </Link>
              </ScrollFade>
            </Reveal>
          ))}
        </div>
      </section>

      {/* [03] HOW I WORK */}
      <section className="container-wide py-20 sm:py-28">
        <div className="grid gap-10 sm:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-between sm:min-h-[220px]">
            <span className="type-caption">HOW I WORK</span>
            <span className="type-caption hidden sm:inline">[03]</span>
          </div>
          <div className="space-y-8">
            {howIWork.map((h) => (
              <Reveal key={h.title}>
                <h3 className="type-h3">{h.title}</h3>
                <p className="mt-2 type-body text-[color:var(--muted-ink)] max-w-lg">
                  {h.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* [04] ABOUT */}
      <section id="about" className="container-wide py-20 sm:py-28 scroll-mt-24">
        <SectionLabel label="ABOUT" number="[04]" />
        <div className="mt-8 grid gap-8 sm:gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] items-stretch">
          <div className="overflow-hidden rounded-lg bg-surface h-full min-h-[320px] md:min-h-[520px]">
            <img
              src={portrait.url}
              alt="Portrait of Alicia Strömmer"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="type-h2">
              Shaped by the north, living down south
              <br />
              Understanding people, designing experiences
            </h2>
            <div className="mt-6 space-y-4 type-body text-[color:var(--muted-ink)]">
              <p>
                I grew up in Umeå and moved south roughly six years ago. I now
                live in Stockholm together with my fiancé.
              </p>
              <p>
                Whenever I can, I return north to our summer house by the coast
                outside Umeå. I love the slower pace there — morning coffee
                overlooking the sea, long walks, swims, berry picking, and days
                that aren't in a hurry. It's where I feel most at home.
              </p>
              <p>
                I've always been fascinated by how people think and experience
                the world differently. Growing up around different cognitive
                perspectives sparked that curiosity early, and it eventually
                led me to cognitive science and interaction design.
              </p>
              <p>
                Creativity has always been part of my life through writing,
                photography, and small personal projects. Those interests have
                changed over the years, but they've always given me a way to
                explore ideas and make sense of the world.
              </p>
              <p>
                Today, I combine an understanding of human behaviour with a
                creative mindset to design experiences that are intuitive,
                thoughtful, and grounded in the people they're made for.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
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


