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

  return (
    <ol className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-5 top-5 bottom-5 w-px bg-border"
        aria-hidden
      />

      {steps.map((step, i) => {
        const isActive = i === active;
        const num = String(i + 1).padStart(2, "0");
        return (
          <li key={step.title} className="relative grid grid-cols-[2.5rem_1fr] items-start gap-5 sm:gap-7 pb-4 last:pb-0">
            {/* Step marker */}
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
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground",
              ].join(" ")}
            >
              {num}
            </button>

            {/* Content */}
            <div className="min-w-0 pt-2">
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="text-left font-semibold text-foreground transition-colors"
              >
                {step.title}
              </button>

              <div
                className={[
                  "grid transition-all duration-300 ease-out",
                  isActive
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
