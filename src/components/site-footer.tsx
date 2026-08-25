import { useState } from "react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "alicia@strommer.se";
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white type-body font-medium transition-all duration-200 hover:scale-105"
      style={{ backgroundColor: "oklch(0.34 0.09 285)" }}
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="container-wide py-16 sm:py-20 type-small text-background/70">
        <div className="flex flex-col items-start gap-8">
          {/* Contact row: side-by-side on mobile, split on desktop */}
          <div className="flex flex-row flex-wrap w-full items-start justify-between gap-x-8 gap-y-3 sm:flex-row">
            <div className="flex flex-col items-start">
              <a
                href="mailto:alicia@strommer.se"
                className="link-underline text-background text-lg sm:text-xl font-medium hover:text-background transition-colors"
              >
                alicia@strommer.se
              </a>
              <CopyEmailButton />
            </div>
            <a
              href="tel:+46722068063"
              className="link-underline text-background text-lg sm:text-xl font-medium hover:text-background transition-colors"
            >
              +46 72-206 80 63
            </a>
          </div>
          <p className="type-credit text-background/50">
            Designed in Figma
            <br />
            Implemented with Lovable
          </p>
        </div>
      </div>
    </footer>
  );
}
