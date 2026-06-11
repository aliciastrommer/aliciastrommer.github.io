import { Link } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

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
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
        </nav>
      </div>
    </header>
  );
}
