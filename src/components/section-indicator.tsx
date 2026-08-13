import type { MouseEvent } from "react";

interface SectionIndicatorItem {
  label: string;
  targetId: string;
}

interface SectionIndicatorProps {
  items: SectionIndicatorItem[];
  activeIndex: number;
}

export function SectionIndicator({ items, activeIndex }: SectionIndicatorProps) {
  const handleClick = (targetId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 sm:right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end xl:right-[max(1rem,calc((100vw-1400px)/2+1rem))]"
    >
      <div className="relative flex flex-col items-end gap-5 py-5 pl-3">
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={handleClick(item.targetId)}
              aria-label={item.label}
              aria-current={isActive ? "location" : undefined}
              className="group/item relative flex items-center gap-3 outline-none rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span
                className={[
                  "text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 whitespace-nowrap",
                  "px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm shadow-sm border border-border/40",
                  "opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0",
                  "group-focus-visible/item:opacity-100 group-focus-visible/item:translate-x-0",
                  isActive ? "text-primary" : "text-muted-ink",
                ].join(" ")}
              >
                {item.label}
              </span>
              <span className="relative flex items-center justify-center w-5 h-5">
                {isActive && (
                  <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse" />
                )}
                <span
                  className={[
                    "block rounded-full transition-all duration-300",
                    isActive
                      ? "w-2.5 h-2.5 bg-primary ring-[6px] ring-primary/20 group-hover/item:scale-110"
                      : "w-2.5 h-2.5 bg-background border-2 border-muted-ink/70 shadow-sm group-hover/item:border-primary group-hover/item:scale-110",
                  ].join(" ")}
                />
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
