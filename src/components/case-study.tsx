import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { ProjectNavFabs } from "@/components/project-nav-fabs";
import { projects } from "@/lib/projects";



type MetaItem = { label: string; value: string };

/**
 * New case-study hero: full-bleed image, then a two-column split
 * (title + meta on the left, About text on the right). The About slot
 * is passed in as `about`.
 */
export function CaseHero({
  meta,
  title,
  tagline,
  heroImage,
  heroAlt,
  about,
}: {
  meta: MetaItem[];
  title: string;
  tagline?: ReactNode;
  heroImage: string;
  heroAlt: string;
  about?: ReactNode;
}) {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-muted">
        <img
          src={heroImage}
          alt={heroAlt}
          className="w-full h-[85vh] max-h-[900px] min-h-[360px] object-cover"
        />
      </div>


      <div className="container-wide mt-16 sm:mt-24">
        <div className="grid gap-10 sm:gap-16 sm:grid-cols-2 items-stretch">
          <div className="flex flex-col h-full">
            <nav aria-label="Breadcrumb" className="type-small text-muted-ink">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-1.5 text-foreground/30">/</span>
              <a href="/#work" className="hover:text-foreground transition-colors">Work</a>
              <span className="mx-1.5 text-foreground/30">/</span>
              <span className="text-foreground/45">{title}</span>
            </nav>
            <h1 className="type-h1 mt-4">{title}</h1>
            {tagline && (
              <p className="mt-4 type-body text-muted-ink max-w-md">
                {tagline}
              </p>
            )}
            <dl className="mt-auto pt-8 space-y-4 type-body">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="type-body text-muted-ink">{m.label}</dt>
                  <dd className="mt-1 type-body font-semibold">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {about && (
            <div className="flex flex-col h-full">
              <h2 className="type-h2">About</h2>
              <div className="mt-4 flex-1 flex flex-col gap-4 type-body text-foreground/85 [&>p:last-child]:mt-auto [&>p:last-child]:pt-2">
                {about}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function CaseSection({
  title,
  centered = true,
  tone = "default",
  id,
  children,
}: {
  title?: string;
  centered?: boolean;
  tone?: "default" | "lavender" | "dark" | "dark-flat" | "light-tinted";
  id?: string;
  children: ReactNode;
}) {
  if (tone === "dark") {
    return (
      <section id={id} className="bg-hero-gradient min-h-screen flex items-center py-20 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl w-full px-5 sm:px-8">
          <Reveal>
            {title && (
              <h2 className={`type-h2 text-white ${centered ? "text-center" : ""}`}>
                {title}
              </h2>
            )}
            <div className="mt-8 space-y-4 type-body text-hero-muted">
              {children}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (tone === "dark-flat") {
    return (
      <section id={id} className="bg-dark-flat mt-16 sm:mt-24 py-20 sm:py-24 scroll-mt-24">
        <div className="container-wide">
          <Reveal>
            {title && (
              <h2 className={`type-h2 text-white ${centered ? "text-center" : ""}`}>
                {title}
              </h2>
            )}
            <div className="mt-6 space-y-4 type-body text-hero-muted">
              {children}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (tone === "light-tinted") {
    return (
      <section id={id} className="bg-surface mt-16 sm:mt-24 py-20 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            {title && (
              <h2 className={`type-h2 text-foreground ${centered ? "text-center" : ""}`}>
                {title}
              </h2>
            )}
            <div className="mt-6 space-y-4 type-body text-muted-ink">
              {children}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (tone === "lavender") {
    return (
      <section id={id} className="bg-lavender-soft mt-16 sm:mt-24 py-20 sm:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            {title && (
              <h2 className={`type-h2 ${centered ? "text-center" : ""}`}>
                {title}
              </h2>
            )}
            <div className="mt-6 space-y-4 type-body text-foreground/85">
              {children}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
  return (
    <section id={id} className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-24 scroll-mt-24">
      <Reveal>
        {title && (
          <h2 className={`type-h2 ${centered ? "text-center" : ""}`}>
            {title}
          </h2>
        )}
        <div className="mt-6 space-y-4 type-body text-foreground/85">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

/**
 * Challenge cards. Inside a lavender section they render as light
 * plain cards; on white surfaces they keep the lavender fill.
 */
export function ChallengeList({
  items,
  variant = "lavender",
}: {
  items: { title: string; body: string; icon?: ReactNode }[];
  variant?: "lavender" | "plain" | "dark";
}) {
  const isPlain = variant === "plain";
  const isDark = variant === "dark";
  const itemClass = isPlain || isDark ? "py-2" : "card-lavender p-6 sm:p-8";
  const dividerClass = isDark
    ? "divide-y divide-white/10"
    : isPlain
    ? "divide-y divide-foreground/10"
    : "space-y-4";
  return (
    <div className={dividerClass}>
      {items.map((it) => (
        <div key={it.title} className={itemClass}>
          <div className="flex items-start gap-4 py-4">
            {it.icon && (
              <div
                className={`shrink-0 grid place-items-center h-10 w-10 rounded-2xl ${
                  isDark ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
                }`}
              >
                {it.icon}
              </div>
            )}
            <div className="min-w-0">
              <h3 className={`type-h3 ${isDark ? "text-white" : "text-foreground"}`}>{it.title}</h3>
              <p className={`mt-2 type-body ${isDark ? "text-hero-muted" : "text-foreground/85"}`}>
                {it.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DeliverablesBox({ children }: { children: ReactNode }) {
  return <div className="card-lavender p-8 sm:p-10">{children}</div>;
}

/**
 * Sticky mini-nav for case studies: a frosted pill bar with anchor
 * links to each section. Place directly after CaseHero.
 */
export function CaseMiniNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-4 z-40 mt-12 sm:mt-16 px-5"
    >
      <div className="mx-auto w-fit max-w-full overflow-x-auto rounded-full bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] px-2 py-1.5">
        <ul className="flex items-center gap-1 whitespace-nowrap">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-full px-3.5 py-1.5 type-small text-muted-ink hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/**
 * Pull quote: breaks a key insight out of the body copy so scanners
 * catch it. Large, centered, with a purple accent rule.
 */
export function PullQuote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <Reveal>
      <figure className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-24 text-center">
        <div className="mx-auto h-px w-12 bg-primary/60" aria-hidden="true" />
        <blockquote className="mt-8 type-h2 font-normal text-foreground text-balance">
          “{quote}”
        </blockquote>
        {attribution && (
          <figcaption className="mt-6 type-small text-muted-ink">
            {attribution}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}

/**
 * Key takeaways: an end-of-case summary box so a recruiter who scrolls
 * straight to the bottom still gets the core story.
 */
export function KeyTakeaways({ items, id }: { items: string[]; id?: string }) {
  return (
    <Reveal>
      <aside id={id} className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-24 scroll-mt-24">
        <div className="rounded-2xl bg-foreground text-background p-8 sm:p-10">
          <p className="type-small uppercase tracking-widest text-background/60">
            Key takeaways
          </p>
          <ul className="mt-6 space-y-4">
            {items.map((item) => (
              <li key={item} className="flex gap-4">
                <span
                  className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="type-body text-background/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Reveal>
  );
}




export function CaseDivider() {
  return (
    <div className="-mx-5 sm:-mx-12 lg:-mx-[4.5rem] mt-16 sm:mt-24">
      <hr className="border-0 h-px bg-foreground/10" />
    </div>
  );
}

export function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <span key={c} className="chip-outline">
          {c}
        </span>
      ))}
    </div>
  );
}

export function FullBleedImage({
  src,
  alt,
  fit = "cover",
  flush = false,
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  flush?: boolean;
}) {
  return (
    <div className={`${flush ? "" : "mt-16 sm:mt-24"} w-full overflow-hidden bg-muted`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-[85vh] max-h-[900px] min-h-[360px] ${
          fit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
    </div>
  );
}


type NextRoute =
  | "/projects/smart-dash"
  | "/projects/accessibility-guide"
  | "/projects/smart-pot";


export function CaseProjectNav({ currentPath }: { currentPath: string }) {
  const others = projects.filter((p) => p.path !== currentPath);

  return (
    <section className="container-wide mt-16 sm:mt-24">
      <div className="grid gap-6 sm:grid-cols-2">
        {others.map((p) => (
          <Reveal key={p.path}>
            <Link
              to={p.path}
              aria-label={`Open ${p.title} case study`}
              className="group block transition-all duration-300 ease-out"
            >
              <article className="relative">
                <div className="relative min-w-0 w-full overflow-hidden rounded-2xl bg-surface aspect-[16/10]">
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
                    <div className="grid place-items-center w-11 h-11 rounded-full bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowUpRight size={20} strokeWidth={1.75} />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <h3 className="type-h2 transition-colors duration-200 group-hover:text-primary">
                    {p.title}
                  </h3>
                  <div className="mt-2 type-small text-muted-ink">
                    {p.period} <span className="text-foreground/30">/</span> {p.role}
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CaseLayout({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {currentPath && <ProjectNavFabs currentPath={currentPath} />}
      <main className="pb-16">{children}</main>
      {currentPath && <CaseProjectNav currentPath={currentPath} />}
      <SiteFooter />
    </div>
  );
}



