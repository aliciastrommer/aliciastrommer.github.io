import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6 sm:gap-8">
          <Link
            to="/"
            className="nav-link"
            data-active="true"
            activeOptions={{ exact: true }}
          >
            HOME
          </Link>
          <a href="/#work" className="nav-link">WORK</a>
          <a href="/#about" className="nav-link">ABOUT</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-5 w-5">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              {/* Letter i */}
              <circle cx="6.5" cy="6" r="0.6" fill="currentColor" stroke="none" />
              <path d="M6.5 10v10" />
              {/* Letter n */}
              <path d="M11.5 20v-10" />
              <path d="M11.5 13.5c0-1.9 1.5-3.5 3.5-3.5s3.5 1.6 3.5 3.5V20" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
