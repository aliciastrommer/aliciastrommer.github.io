import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";

const navItems = [
  { label: "Home", to: "/" as const, hash: undefined },
  { label: "About", to: "/" as const, hash: "about" },
  { label: "Work", to: "/" as const, hash: "work" },
];

export function SiteHeader() {
  const [hidden, setHidden] = useState(true);
  const lastScrollY = useRef(0);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;
      const scrolledPastHeader = currentY > 64;

      if (scrolledPastHeader && goingDown) {
        setHidden(true);
      } else if (!goingDown) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.hash) {
      return pathname === "/" && hash === item.hash;
    }
    // Home is active on project pages too, or on index without a hash.
    return pathname !== "/" || hash === "";
  };

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-[calc(100%+1.5rem)]" : "translate-y-0"
      }`}
    >
      <nav
        className="flex items-center gap-1 px-2 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]"
        aria-label="Primary"
      >
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ${
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
