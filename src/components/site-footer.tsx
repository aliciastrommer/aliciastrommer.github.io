export function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="px-5 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 text-base text-muted-foreground">
        <a
          href="mailto:alicia@strommer.se"
          className="link-underline hover:text-foreground transition-colors justify-self-start"
        >
          alicia@strommer.se
        </a>
        <p className="justify-self-center text-center text-sm">
          Designed in Figma <span aria-hidden="true">·</span> Implemented with Lovable
        </p>
        <a
          href="tel:+46722068063"
          className="link-underline hover:text-foreground transition-colors justify-self-end"
        >
          +46 72-206 80 63
        </a>
      </div>
    </footer>
  );
}
