export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted-foreground">
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
    </footer>
  );
}
