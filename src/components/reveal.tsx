import {
  useLayoutEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Reveal-on-scroll wrapper. Subtle fade + rise the first time the element
 * enters the viewport. Elements already in view on page load are shown
 * immediately so the page doesn't jump.
 * Respects prefers-reduced-motion via the CSS rule.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Show immediately if already in the viewport so the page doesn't jump
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
