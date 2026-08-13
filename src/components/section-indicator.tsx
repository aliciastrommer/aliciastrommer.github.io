import type { MouseEvent } from "react";
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
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-4"
    >
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <a
            key={item.targetId}
            href={`#${item.targetId}`}
            onClick={handleClick(item.targetId)}
            aria-label={item.label}
            aria-current={isActive ? "location" : undefined}
            className="group flex items-center gap-3 outline-none"
          >
            <span
              className={[
                "text-sm font-medium tracking-wide transition-all duration-300",
                "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                "group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                isActive ? "text-primary" : "text-muted-ink",
              ].join(" ")}
            >
              {item.label}
            </span>
            <span
              className={[
                "relative block rounded-full transition-all duration-300",
                "ring-1 ring-inset",
                isActive
                  ? "w-3 h-3 bg-primary ring-primary"
                  : "w-2 h-2 bg-transparent ring-muted-ink/40 group-hover:ring-primary/70",
              ].join(" ")}
            />
          </a>
        );
      })}
    </nav>
  );
}
