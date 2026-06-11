import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Alicia Strömmer — home"
          className="font-bold text-lg tracking-tight transition-transform hover:-translate-y-0.5"
        >
          AS<span className="text-primary">.</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:text-primary hover:bg-primary-soft transition-colors"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:text-primary hover:bg-primary-soft transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[18px] w-[18px]"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>

        </nav>
      </div>
    </header>
  );
}
