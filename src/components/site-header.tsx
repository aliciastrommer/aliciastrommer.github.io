import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-wide py-4 flex items-center justify-between">
        <Link
          to="/"
          className="type-caption uppercase tracking-[0.12em] text-muted-foreground/70 hover:text-foreground transition-colors"
        >
          Home
        </Link>
      </div>
    </header>
  );
}
