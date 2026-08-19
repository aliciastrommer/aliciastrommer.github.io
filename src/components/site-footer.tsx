export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/10">
      <div className="container-wide py-8 type-small text-muted-ink">
        <div className="flex flex-col items-start gap-3">
          {/* Contact row: side-by-side on mobile, split on desktop */}
          <div className="flex flex-row flex-wrap w-full items-start justify-between gap-x-4 gap-y-1 sm:flex-row">
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
          <p className="type-credit text-muted-ink/60">
            Designed in Figma
            <br />
            Implemented with Lovable
          </p>
        </div>
      </div>
    </footer>
  );
}



