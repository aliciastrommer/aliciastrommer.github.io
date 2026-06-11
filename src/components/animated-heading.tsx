import { useEffect, useState } from "react";

/**
 * Animated headline for the hero:
 * Types out the name, holds it, then continually animates a subtle
 * indigo shimmer across the gradient text via the heading-shimmer
 * utility.
 */
export function AnimatedHeading() {
  const fullName = "Alicia Strömmer";
  const role = "Product Designer";
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullName.slice(0, i));
      if (i >= fullName.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="font-display text-balance text-[clamp(2.4rem,6vw,4.25rem)] font-bold leading-[1.05] tracking-tight">
      <span className={done ? "heading-shimmer" : ""}>
        {typed || "\u00a0"}
      </span>
      {!done && <span className="blink-caret text-primary">|</span>}
      <span className="block mt-1 text-foreground/75 font-medium text-[clamp(1.5rem,4vw,2.75rem)]">
        {role}
      </span>
    </h1>
  );
}
