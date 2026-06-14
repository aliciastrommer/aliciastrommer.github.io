export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="px-5 sm:px-8 py-8 text-base text-muted-foreground">
        {/* Mobile: two stacked lines, left-aligned */}
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
          <p className="mt-4">Designed in Figma</p>
          <p>Implemented with Lovable</p>
        </div>

        {/* Desktop: three columns */}
        <div className="hidden sm:grid grid-cols-3 items-center gap-2">
          <a
            href="mailto:alicia@strommer.se"
            className="link-underline hover:text-foreground transition-colors justify-self-start"
          >
            alicia@strommer.se
          </a>
          <p className="justify-self-center text-center">
            Designed in Figma <span aria-hidden="true">·</span> Implemented with Lovable
          </p>
          <a
            href="tel:+46722068063"
            className="link-underline hover:text-foreground transition-colors justify-self-end"
          >
            +46 72-206 80 63
          </a>
        </div>
      </div>
    </footer>
  );
}
