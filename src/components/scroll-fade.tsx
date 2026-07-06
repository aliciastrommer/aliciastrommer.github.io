import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/**
 * Progressively reveals content based on scroll position — opacity ramps
 * from 0.15 to 1 as the element travels through the viewport. Adds interest
 * to long scrolls without being distracting. Respects reduced-motion.
 */
export function ScrollFade({
  children,
  className = "",
  as: Tag = "div",
  min = 0.2,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  min?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--scroll-opacity", "1");
      return;
    }

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Element center relative to viewport (0 = at top, 1 = at bottom)
      const center = (rect.top + rect.height / 2) / vh;
      // Peak opacity when centered in the middle of the viewport
      const distance = Math.abs(center - 0.5);
      const opacity = Math.max(min, Math.min(1, 1 - distance * 1.2));
      el.style.setProperty("--scroll-opacity", opacity.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [min]);

  return (
    <Tag ref={ref as never} className={`scroll-fade ${className}`}>
      {children}
    </Tag>
  );
}
