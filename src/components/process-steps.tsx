export type ProcessStep = {
  title: string;
  body: string;
};

type Props = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: Props) {
  return (
    <ol className="grid gap-4 sm:gap-6 md:grid-cols-2">
      {steps.map((step, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <li
            key={step.title}
            className="group rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-sm font-semibold transition-colors duration-300 group-hover:bg-primary/25 group-hover:text-primary-foreground">
                {num}
              </span>
              <div className="min-w-0">
                <h3 className="type-h3 text-white transition-colors duration-300 group-hover:text-primary-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 type-body text-hero-muted">{step.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
