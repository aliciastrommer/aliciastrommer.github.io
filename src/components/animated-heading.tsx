import { useEffect, useState } from "react";

/**
 * Hero headline: types out the name, then reveals the role line.
 * Both lines share the same size and color for visual consistency
 * with the Figma prototype.
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
      <span>{typed || "\u00a0"}</span>
      {!done && <span className="blink-caret text-foreground">|</span>}
      <span
        className={`block mt-1 transition-opacity duration-500 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {role}
      </span>
    </h1>
  );
}
