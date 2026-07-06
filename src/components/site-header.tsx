import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * User-provided rounded-square mail glyph. Uses currentColor so it
 * inherits nav color (white on dark hero, foreground on light).
 */
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.30769 0C3.70523 0 0 3.70523 0 8.30769V27.6923C0 32.2948 3.70523 36 8.30769 36H27.6923C32.2948 36 36 32.2948 36 27.6923V8.30769C36 3.70523 32.2948 0 27.6923 0H8.30769ZM9.522 12.4837H26.4517L17.9917 19.1949L9.522 12.4837ZM8.30769 13.2895L17.5652 20.6238C17.6873 20.7201 17.8383 20.7724 17.9938 20.7724C18.1492 20.7724 18.3002 20.7201 18.4223 20.6238L27.6522 13.2951V23.5385H8.30769V13.2895Z"
      />
    </svg>
  );
}

/**
 * User-provided rounded-square LinkedIn glyph.
 */
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M30.2106 35.6778H6.02874C2.83582 35.6778 0.238281 33.0858 0.238281 29.8994V5.77846C0.238281 2.592 2.83582 0 6.02874 0H30.2106C33.4026 0 36.0001 2.592 36.0001 5.77846V29.9003C36.0001 33.0868 33.4026 35.6778 30.2106 35.6778ZM12.3223 29.4951H12.3297V14.1055H7.54167V29.4951H12.3214H12.3223ZM9.93243 12.0037C10.2965 12.0042 10.657 11.9328 10.9935 11.7937C11.3299 11.6547 11.6356 11.4506 11.893 11.1931C12.1504 10.9357 12.3545 10.6301 12.4936 10.2936C12.6327 9.95721 12.704 9.59665 12.7035 9.23261C12.702 8.49813 12.4096 7.79415 11.8903 7.27478C11.3709 6.75542 10.6669 6.463 9.93243 6.46154C9.19757 6.46178 8.49288 6.75381 7.97326 7.27344C7.45363 7.79306 7.1616 8.49775 7.16136 9.23261C7.1616 9.96747 7.45363 10.6722 7.97326 11.1918C8.49288 11.7114 9.19757 12.0034 9.93243 12.0037ZM30.2383 29.496V21.0591C30.2383 16.9135 29.3383 13.7243 24.5014 13.7243C22.1761 13.7243 20.6152 14.9982 19.9737 16.2074H19.909V14.1055H15.3241V29.4951H20.1038V21.8797C20.1038 19.8711 20.4851 17.928 22.9746 17.928C25.4226 17.928 25.4586 20.2246 25.4586 22.0089V29.4951H30.2383V29.496Z" />
    </svg>
  );
}

/**
 * Sticky top navigation. Transparent while at the top of a dark themed
 * section; picks up a background as soon as the user scrolls (dark
 * translucent over dark sections, site background over light content).
 */
export function SiteHeader() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const evaluate = () => {
      const el = document.elementFromPoint(window.innerWidth / 2, 40);
      const themed = el?.closest?.("[data-header-theme]") as HTMLElement | null;
      setDark(themed?.dataset.headerTheme === "dark");
      setScrolled(window.scrollY > 8);
    };
    evaluate();
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate);
    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, []);

  const surfaceClass = dark
    ? scrolled
      ? "bg-[#16171b]/85 text-white backdrop-blur-md border-b border-white/10"
      : "bg-transparent text-white"
    : "bg-background/90 border-b border-border/60 text-foreground backdrop-blur-md";

  return (
    <header
      className={`sticky top-0 z-30 transition-colors duration-300 ${surfaceClass}`}
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

        <div className="flex items-center gap-3">
          <a
            href="mailto:alicia@strommer.se"
            aria-label="Email Alicia"
            className="inline-flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <MailIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alicia-str%C3%B6mmer-45691215a/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Alicia on LinkedIn"
            className="inline-flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
