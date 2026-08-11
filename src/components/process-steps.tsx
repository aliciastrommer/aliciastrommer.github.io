import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ProcessStep = {
  title: string;
  body: string;
};

type Props = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: Props) {
  const scrollRef = useRef<HTMLOListElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const handlePrev = () => scrollTo(Math.max(current - 1, 0));
  const handleNext = () => scrollTo(Math.min(current + 1, steps.length - 1));

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.children[0] as HTMLElement | undefined;
      if (!card) return;
      const gap = 24;
      const index = Math.round(el.scrollLeft / (card.clientWidth + gap));
      setCurrent(Math.min(Math.max(index, 0), steps.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [steps.length]);

  return (
    <div className="relative">
      <ol
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <li
              key={step.title}
              className="group min-w-[320px] md:min-w-[400px] snap-start rounded-2xl border border-border bg-background p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft text-primary font-bold text-xl mb-8 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                {num}
              </div>
              <h3 className="type-h3 text-foreground mb-4">{step.title}</h3>
              <p className="type-body text-muted-ink leading-relaxed">
                {step.body}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-2 flex items-center justify-between gap-4">
        <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((current + 1) / steps.length) * 100}%` }}
          />
        </div>
        <span className="type-caption text-muted-ink tabular-nums shrink-0">
          {String(current + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
        </span>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            disabled={current === 0}
            aria-label="Previous step"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-muted-ink shadow-sm transition-all duration-200 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={current === steps.length - 1}
            aria-label="Next step"
            className="grid h-11 w-11 place-items-center rounded-full border border-primary bg-background text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
