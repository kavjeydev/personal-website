import Link from "next/link";
import { PolygonWaves } from "@/components/polygon-waves";

export default function Home() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-20 md:py-32">
      {/* Header */}
      <header className="mb-16 animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)] mb-4">
          Portfolio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-[-0.02em] leading-[1.05]">
          Kavin
          <br />
          Jeyasankar
        </h1>
        <div className="mt-6 h-px bg-[var(--border)]" />
      </header>

      {/* Polygon waves */}
      <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <PolygonWaves />
      </div>

      {/* Body */}
      <section
        className="space-y-6 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <p className="font-serif italic text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed">
          Building infrastructure for AI agents reliable enough to grow
          companies on their own.
        </p>

        <p className="text-[var(--text-secondary)]">
          I&apos;m building Notes ASM, where a team of AI agents runs and grows a
          company autonomously &mdash; validating ideas, finding customers,
          shipping campaigns, and working the funnel end to end.
        </p>

        <p className="text-[var(--text-secondary)]">
          The hard part isn&apos;t doing the work, it&apos;s knowing what to do
          next. Agents don&apos;t think or learn the way people do. I care about
          the infrastructure underneath: making these agent systems reliable and
          trusted enough to act like a person would, grow companies, and add
          value to the world autonomously.
        </p>
      </section>

      {/* Divider */}
      <div
        className="my-12 h-px bg-[var(--border)] animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      />

      {/* Links */}
      <nav
        className="flex flex-wrap gap-x-8 gap-y-3 text-sm animate-fade-up"
        style={{ animationDelay: "0.45s" }}
      >
        <a
          href="https://linkedin.com/in/kavinjey"
          className="text-[var(--accent)] link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn &rarr;
        </a>
        <a
          href="https://trainlyai.com"
          className="text-[var(--accent)] link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trainly &rarr;
        </a>
        <Link href="/projects" className="text-[var(--accent)] link-hover">
          Projects &rarr;
        </Link>
        <Link href="/books" className="text-[var(--accent)] link-hover">
          Books &rarr;
        </Link>
      </nav>

      {/* Hobbies */}
      <div
        className="mt-12 animate-fade-up"
        style={{ animationDelay: "0.5s" }}
      >
        <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)] mb-4 font-medium">
          When I&apos;m not coding
        </p>
        <div className="flex flex-wrap gap-3">
          {["pickleball!", "lifting", "reading", "chess"].map((h) => (
            <span
              key={h}
              className="text-xs text-[var(--text-tertiary)] border border-[var(--border)] rounded-md px-3 py-1"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
