export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/10">
      <div className="container-wide py-8 type-small text-muted-ink">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <a
            href="mailto:alicia@strommer.se"
            className="link-underline hover:text-foreground transition-colors"
          >
            alicia@strommer.se
          </a>
          <span className="text-xs uppercase tracking-[0.12em] text-muted-ink/70 order-first sm:order-none">
            Figma design / Lovable implementation
          </span>
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
