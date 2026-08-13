import { useEffect, useState } from "react";

/**
 * Tracks the section band closest to the viewport centre and marks it
 * with `.is-active`. Also returns the active index so a UI indicator can
 * mirror it.
 */
export function useActiveBand() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const bands = Array.from(
      document.querySelectorAll<HTMLElement>("[data-band]"),
    );
    if (bands.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const centre = window.innerHeight / 2;
      let best: HTMLElement | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const band of bands) {
        const rect = band.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - centre);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = band;
        }
      }

      const index = best ? bands.indexOf(best) : 0;
      setActiveIndex(index);

      for (const band of bands) {
        band.classList.toggle("is-active", band === best);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return activeIndex;
}
