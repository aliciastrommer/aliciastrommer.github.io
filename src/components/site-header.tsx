import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Filled mail glyph — silhouette envelope, no outlined rectangle.
 */
function MailFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v.32l-9 5.4-9-5.4v-.32Z" />
      <path d="M3 8.28V18.25A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V8.28l-8.61 5.17a.75.75 0 0 1-.78 0L3 8.28Z" />
    </svg>
  );
}

/**
 * Filled LinkedIn brand mark (rounded square with "in").
 */
function LinkedInFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.25 3h15.5A1.25 1.25 0 0 1 21 4.25v15.5A1.25 1.25 0 0 1 19.75 21H4.25A1.25 1.25 0 0 1 3 19.75V4.25A1.25 1.25 0 0 1 4.25 3ZM7.1 9.75H4.75v9.5H7.1v-9.5Zm.16-2.65a1.36 1.36 0 1 0-2.72 0 1.36 1.36 0 0 0 2.72 0Zm3.09 2.65H8.06v9.5H10.4v-4.87c0-1.29.24-2.53 1.83-2.53 1.57 0 1.59 1.47 1.59 2.61v4.79h2.34v-5.26c0-2.03-.44-3.6-2.82-3.6-1.14 0-1.9.63-2.22 1.22h-.03v-1.03h-.75Z" />
    </svg>
  );
}

/**
 * Sticky top navigation. Transparent when overlapping a dark themed
 * section (e.g. the hero); switches to the site background once the
 * user scrolls onto light content.
 */
export function SiteHeader() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const evaluate = () => {
      const el = document.elementFromPoint(window.innerWidth / 2, 40);
      const themed = el?.closest?.("[data-header-theme]") as HTMLElement | null;
      setDark(themed?.dataset.headerTheme === "dark");
    };
    evaluate();
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate);
    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-colors duration-300 ${
        dark
          ? "bg-transparent text-white"
          : "bg-background/90 border-b border-border/60 text-foreground backdrop-blur-md"
      }`}
    >
      <div className="container-wide h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6 sm:gap-8">
          <Link
            to="/"
            className="nav-link"
            data-active="true"
            activeOptions={{ exact: true }}
          >
            HOME
          </Link>
          <a href="/#work" className="nav-link opacity-60 hover:opacity-100">WORK</a>
          <a href="/#about" className="nav-link opacity-60 hover:opacity-100">ABOUT</a>
        </nav>

        <div className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex items-center justify-center"
          >
            <MailFilled className="h-[22px] w-[22px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex items-center justify-center"
          >
            <LinkedInFilled className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

