import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";


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
          className="w-full h-[60vh] max-h-[620px] min-h-[300px] object-cover"
        />
      </div>

      <div className="container-wide mt-12 sm:mt-16">
        <div className="grid gap-10 sm:gap-16 sm:grid-cols-2 items-stretch">
          <div className="flex flex-col h-full">
            <h1 className="type-h1">{title}</h1>
            {tagline && (
              <p className="mt-5 type-body text-foreground/80 max-w-md">
                {tagline}
              </p>
            )}
            <dl className="mt-auto pt-10 space-y-4 type-body">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="type-small text-foreground/60">{m.label}</dt>
                  <dd className="mt-0.5 type-h3">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {about && (
            <div className="flex flex-col h-full">
              <h2 className="type-h2">About</h2>
              <div className="mt-5 flex-1 flex flex-col gap-4 type-body text-foreground/85 [&>p:last-child]:mt-auto [&>p:last-child]:pt-2">
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
  children,
}: {
  title?: string;
  centered?: boolean;
  tone?: "default" | "lavender";
  children: ReactNode;
}) {
  if (tone === "lavender") {
    return (
      <section className="bg-lavender-soft mt-16 sm:mt-24 py-16 sm:py-24">
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
    <section className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-24">
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
  variant?: "lavender" | "plain";
}) {
  const cardClass = variant === "plain" ? "card-plain" : "card-lavender";
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <div key={it.title} className={`${cardClass} p-6 sm:p-7`}>
          <div className="flex items-start gap-4">
            {it.icon && (
              <div className="shrink-0 grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary">
                {it.icon}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="type-h3 text-foreground">{it.title}</h3>
              <p className="mt-2 type-body text-foreground/85">
                {it.body}
              </p>
            </div>
          </div>
        </div>
      ))}
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
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}) {
  return (
    <div className="mt-16 sm:mt-24 w-full overflow-hidden bg-muted">
      <img
        src={src}
        alt={alt}
        className={`w-full h-[52vw] max-h-[620px] min-h-[300px] ${
          fit === "contain" ? "object-contain" : "object-cover"
        }`}
      />
    </div>
  );
}

export function CaseFooterNav({
  next,
  nextLabel = "View Next Project",
}: {
  next: "/projects/smart-dash" | "/projects/accessibility-guide" | "/projects/smart-pot";
  nextLabel?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 mt-20 flex items-center justify-between gap-3 text-[15px] font-medium">
      <Link to="/" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </Link>
      <Link to={next} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
        {nextLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function CaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

