export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 py-8 type-small text-muted-foreground">
        {/* Mobile: stacked, left-aligned */}
        <div className="flex flex-col gap-1 sm:hidden">
          <a
            href="mailto:alicia@strommer.se"
            className="link-underline hover:text-foreground transition-colors self-start"
          >
            alicia@strommer.se
          </a>
          <a
            href="tel:+46722068063"
            className="link-underline hover:text-foreground transition-colors self-start"
          >
            +46 72-206 80 63
          </a>
        </div>

        {/* Desktop: two ends */}
        <div className="hidden sm:flex items-center justify-between gap-4">
          <a
            href="mailto:alicia@strommer.se"
            className="link-underline hover:text-foreground transition-colors"
          >
            alicia@strommer.se
          </a>
          <a
            href="tel:+46722068063"
            className="link-underline hover:text-foreground transition-colors"
          >
            +46 72-206 80 63
          </a>
        </div>
      </div>
    </footer>
  );
}
