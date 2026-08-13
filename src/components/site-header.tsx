import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="container-wide py-4 flex items-center justify-between">
        <Link
          to="/"
          className="type-caption uppercase tracking-[0.12em] text-muted-ink hover:text-foreground transition-colors"
        >
          Home
        </Link>
      </div>
    </header>
  );
}
