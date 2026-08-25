import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

/**
 * Floating previous / next project navigation. Renders two circular
 * FABs (left = previous project, right = next project) fixed to the
 * viewport edges, so readers can jump between case studies at any time.
 */
export function ProjectNavFabs({ currentPath }: { currentPath: string }) {
  const index = projects.findIndex((p) => p.path === currentPath);
  if (index === -1) return null;

  const prev = index > 0 ? projects[index - 1] : null;
  // Wrap around: last project's "next" loops back to the first.
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  const fabClass =
    "pointer-events-auto fixed top-5 z-50 flex items-center justify-center w-11 h-11 rounded-full bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] text-muted-foreground hover:text-foreground transition-colors";

  return (
    <>
      {prev && (
        <Link
          to={prev.path}
          aria-label={`Previous project: ${prev.title}`}
          className={`${fabClass} left-5`}
        >
          <ArrowLeft size={20} strokeWidth={1.75} />
        </Link>
      )}
      <Link
        to={next.path}
        aria-label={`Next project: ${next.title}`}
        className={`${fabClass} right-5`}
      >
        <ArrowRight size={20} strokeWidth={1.75} />
      </Link>
    </>
  );
}
