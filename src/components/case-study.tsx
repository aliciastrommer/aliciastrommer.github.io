import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
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

      <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-12 sm:mt-16">
        <div className="grid gap-10 sm:gap-16 sm:grid-cols-2 items-start">
          <div>
            <h1 className="text-[clamp(2.2rem,5.5vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
              {title}
            </h1>
            {tagline && (
              <p className="mt-5 text-[15px] leading-[1.55] text-foreground/80 max-w-md">
                {tagline}
              </p>
            )}
            <dl className="mt-10 space-y-4 text-[15px]">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="text-foreground/60">{m.label}</dt>
                  <dd className="mt-0.5 font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {about && (
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-[1.6] text-foreground/85">
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
  children,
}: {
  title?: string;
  centered?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-8 mt-16 sm:mt-24">
      <Reveal>
        {title && (
          <h2
            className={`text-2xl sm:text-[1.7rem] font-semibold tracking-tight ${
              centered ? "text-center" : ""
            }`}
          >
            {title}
          </h2>
        )}
        <div className="mt-6 space-y-4 text-[15px] leading-[1.65] text-foreground/85">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

/**
 * Lavender challenge card(s), stacked. Icons are optional and hidden
 * in the new layout — the card content is just title + body.
 */
export function ChallengeList({
  items,
}: {
  items: { title: string; body: string; icon?: ReactNode }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl bg-lavender p-6 sm:p-7">
          <h3 className="font-semibold text-foreground">{it.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-foreground/85">
            {it.body}
          </p>
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
      <SiteHeader />
      <main className="pb-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
