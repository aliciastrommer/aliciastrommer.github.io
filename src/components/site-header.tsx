import { Link } from "@tanstack/react-router";
import { Home, Briefcase } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function SiteHeader() {
  const [hidden, setHidden] = useState(true);
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
      className={`fixed top-5 left-5 z-50 flex items-center gap-2 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-[calc(100%+1.5rem)]" : "translate-y-0"
      }`}
    >
      <Link
        to="/"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Home"
      >
        <Home size={20} strokeWidth={1.75} />
      </Link>
      <Link
        to="/#work"
        className="flex items-center justify-center w-11 h-11 rounded-full bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Featured work"
      >
        <Briefcase size={20} strokeWidth={1.75} />
      </Link>
    </header>
  );
}
