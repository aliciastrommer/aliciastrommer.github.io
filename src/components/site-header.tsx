import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6 sm:gap-8">
          <Link to="/" className="nav-link" activeOptions={{ exact: true }}>
            {({ isActive }) => (
              <span data-active={isActive ? "true" : "false"} className="nav-link">
                HOME
              </span>
            )}
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
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
