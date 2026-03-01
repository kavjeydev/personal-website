import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-20 md:py-32">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12 inline-block"
      >
        &larr; back to home
      </Link>

      <header className="mb-20 animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)] mb-4">
          Side projects
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl tracking-[-0.02em]">
          Projects
        </h1>
        <div className="mt-6 h-px bg-[var(--border)]" />
      </header>

      <div className="space-y-0">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="animate-fade-up"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            <div className="group py-6 flex gap-5">
              <span className="text-[13px] text-[var(--muted-dim)] tabular-nums w-6 text-right flex-shrink-0 font-mono pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1.5">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--text)] text-[15px] link-hover"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span className="font-medium text-[var(--text)] text-[15px]">
                      {project.title}
                    </span>
                  )}
                  {project.link && (
                    <span className="text-[var(--muted-dim)] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  )}
                </div>
                <p className="text-[var(--text-dim)] text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-[var(--accent-dim)] border border-[var(--accent-border)] rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-px bg-[var(--border-dim)]" />
          </div>
        ))}
      </div>
    </main>
  );
}
