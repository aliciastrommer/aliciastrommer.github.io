/**
 * Hero headline. Static text with a slow, irregular shimmer that sweeps
 * across both lines. Both lines share the same H1 styling for visual
 * consistency with the Figma prototype.
 */
export function AnimatedHeading() {
  return (
    <h1 className="font-display text-balance text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.1] tracking-tight">
      <span className="shimmer-text inline-block pb-[0.08em]">Alicia Strömmer</span>
      <span className="block mt-1 shimmer-text pb-[0.12em]">Product Designer</span>
    </h1>
  );
}
