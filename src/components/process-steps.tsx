import { useState } from "react";

export type ProcessStep = {
  title: string;
  body: string;
};

type Props = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: Props) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <div className="space-y-6">
      {/* Timeline track */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-5 h-px bg-border" aria-hidden />
        <ol className="relative grid grid-cols-3 sm:grid-cols-6 gap-2">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li key={step.title} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-current={isActive ? "step" : undefined}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  className={[
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary scale-110 shadow-sm"
                      : "bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground",
                  ].join(" ")}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={[
                    "mt-3 text-center text-xs sm:text-sm font-semibold transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {step.title}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail panel */}
      <div
        key={active}
        className="rounded-2xl bg-[oklch(0.955_0.006_80)] p-6 sm:p-8 animate-in fade-in duration-300"
      >
        <div className="flex items-baseline gap-3">
          <span className="text-primary font-semibold text-sm tracking-wider">
            {String(active + 1).padStart(2, "0")}
          </span>
          <h3 className="text-foreground font-semibold text-lg">{current.title}</h3>
        </div>
        <p className="mt-3 text-foreground/80">{current.body}</p>
      </div>
    </div>
  );
}
