import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-transparent">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 h-16 flex items-center justify-between">
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-current hover:opacity-70 transition-colors"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-current hover:opacity-70 transition-colors"
          >
            <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="28" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              {/* Letter i */}
              <circle cx="70" cy="60" r="42" />
              <rect x="28" y="170" width="84" height="310" />
              {/* Letter n — outlined stem + rounded arch */}
              <path d="M170 480 V170 h84 v34 c22-26 55-40 92-40 68 0 122 54 122 122 V480 h-84 V318 c0-30-24-54-54-54s-54 24-54 54 V480 Z" />
            </svg>

          </a>
        </div>
      </div>
    </header>
  );
}
