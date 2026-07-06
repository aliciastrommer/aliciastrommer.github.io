import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import linkedinIcon from "@/assets/linkedin.svg.asset.json";
import mailIcon from "@/assets/mail.svg.asset.json";

/**
 * Sticky top navigation. Adapts its color to whatever section is
 * currently under it: when a `[data-header-theme="dark"]` element is
 * overlapping the header, the header switches to a dark-transparent
 * background with white text.
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
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        dark
          ? "bg-[#0f0722]/70 border-white/10 text-white backdrop-blur-md"
          : "bg-background/80 border-border/60 text-foreground backdrop-blur-md"
      }`}
    >
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
            <img
              src={mailIcon.url}
              alt=""
              aria-hidden="true"
              className={`h-6 w-6 ${dark ? "invert" : ""}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:opacity-70 transition-opacity"
          >
            <img
              src={linkedinIcon.url}
              alt=""
              aria-hidden="true"
              className={`h-6 w-6 ${dark ? "invert" : ""}`}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
