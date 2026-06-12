import { useEffect, useState } from "react";

/**
 * Slim sticky progress bar that fills as the user scrolls the page.
 * Sits at the very top of the viewport in the primary purple.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 bottom-0 z-50 w-1 bg-primary/10 pointer-events-none"
    >
      <div
        className="w-full bg-primary shadow-[0_0_8px_oklch(0.36_0.21_282/0.6)] transition-[height] duration-100 ease-out"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
