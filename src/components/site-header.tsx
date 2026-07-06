import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

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

        <div className="flex items-center gap-4">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <Mail className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </header>
  );
}
