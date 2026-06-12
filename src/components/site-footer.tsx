export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted-foreground">
        <a
          href="mailto:alicia@strommer.se"
          className="link-underline hover:text-foreground transition-colors"
        >
          alicia@strommer.se
        </a>
        <span className="mt-4 sm:mt-0 text-xs text-muted-foreground/80">
          Designed in Figma, implemented with Lovable
        </span>
        <a
          href="tel:+46722068063"
          className="link-underline hover:text-foreground transition-colors"
        >
          +46 72-206 80 63
        </a>
      </div>
    </footer>
  );
}
