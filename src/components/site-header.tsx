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
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
              {/* Letter i — dot + stem as outlined shapes */}
              <circle cx="4" cy="4" r="3" />
              <rect x="1" y="11" width="6" height="20" />
              {/* Letter n — outlined stem + rounded top */}
              <path d="M11 31 V11 h6 v2 c1.6-1.7 3.7-2.6 6-2.6 4.4 0 8 3.4 8 7.8 V31 h-6 V19.5 c0-2-1.6-3.6-3.6-3.6S17 17.5 17 19.5 V31 Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
