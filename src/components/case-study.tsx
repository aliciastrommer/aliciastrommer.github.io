import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type MetaItem = { label: string; value: string };

export function CaseHero({
  meta,
  title,
  tagline,
  heroImage,
  heroAlt,
  callout,
}: {
  meta: MetaItem[];
  title: string;
  tagline: ReactNode;
  heroImage: string;
  heroAlt: string;
  callout?: ReactNode;
}) {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-muted">
        <img
          src={heroImage}
          alt={heroAlt}
          className="w-full h-[44vw] max-h-[520px] min-h-[260px] object-cover"
        />
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 text-sm">
          {meta.map((m) => (
            <div key={m.label} className="text-center">
              <dt className="text-muted-foreground">{m.label}</dt>
              <dd className="mt-1 font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>

        <h1 className="mt-12 text-center text-balance font-bold tracking-tight text-[clamp(2rem,5vw,3.25rem)] leading-[1.1]">
          {title}
        </h1>
        <p className="mt-5 text-center max-w-2xl mx-auto text-balance text-lg sm:text-xl text-muted-foreground leading-snug">
          {tagline}
        </p>

        {callout && (
          <div className="mt-10 text-sm max-w-2xl mx-auto">
            {callout}
          </div>
        )}
      </div>
    </>
  );
}

export function CaseSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-8 mt-16 sm:mt-20">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-3xl">
          {title}
        </h2>
      )}
      <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
        {children}
      </div>
    </section>
  );
}


export function ChallengeList({
  items,
}: {
  items: { title: string; body: string; icon?: ReactNode }[];
}) {
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li
          key={it.title}
          className="grid grid-cols-[auto_1fr] gap-5 sm:gap-7 items-start rounded-2xl bg-primary-soft/60 border border-primary/10 p-5 sm:p-6 transition-colors hover:bg-primary-soft"
        >
          <div className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-xl bg-background text-primary border border-primary/20">
            {it.icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{it.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ChipRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <span key={c} className="chip">
          {c}
        </span>
      ))}
    </div>
  );
}

export function FullBleedImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mt-16 sm:mt-20 w-full overflow-hidden bg-muted">
      <img
        src={src}
        alt={alt}
        className="w-full h-[38vw] max-h-[420px] min-h-[220px] object-cover"
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
    <div className="mx-auto max-w-5xl px-5 sm:px-8 mt-20 flex flex-wrap items-center justify-center gap-3">
      <Link to="/" className="btn-pill btn-pill-outline">
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </Link>
      <Link to={next} className="btn-pill btn-pill-primary">
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
      <main className="pb-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
