import { Link } from "@tanstack/react-router";
import linkedinIcon from "@/assets/linkedin.svg.asset.json";
import mailIcon from "@/assets/mail.svg.asset.json";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background/75 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-12 h-16 flex items-center justify-between">
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

        <div className="flex items-center gap-3">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:opacity-70 transition-opacity"
          >
            <img src={mailIcon.url} alt="" aria-hidden="true" className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:opacity-70 transition-opacity"
          >
            <img src={linkedinIcon.url} alt="" aria-hidden="true" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
