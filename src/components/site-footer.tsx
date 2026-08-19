export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/10">
      <div className="container-wide py-8 type-small text-muted-ink">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
          <div className="flex flex-col items-start">
            <a
              href="mailto:alicia@strommer.se"
              className="link-underline hover:text-foreground transition-colors"
            >
              alicia@strommer.se
            </a>
            <div className="h-3" />
            <p className="type-caption text-muted-ink/70">
              Designed in Figma
              <br />
              Implemented with Lovable
            </p>
          </div>
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

