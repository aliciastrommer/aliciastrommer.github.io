export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-sm text-muted-foreground">
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
        <div className="flex flex-col sm:items-center gap-0.5 mt-6 sm:mt-0">
          <span>Designed in Figma</span>
          <span>Implemented with Lovable</span>
        </div>
      </div>
    </footer>
  );
}
