import Link from "next/link";
import { PolygonWaves } from "@/components/polygon-waves";

export default function Home() {
  return (
    <main className="max-w-[720px] mx-auto px-6 py-20 md:py-32">
      {/* Header */}
      <header className="mb-16 animate-fade-up">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#7a756f] mb-4">
          Portfolio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl tracking-[-0.02em] leading-[1.05]">
          Kavin
          <br />
          Jeyasankar
        </h1>
        <div className="mt-6 h-px bg-[#252320]" />
      </header>

      {/* Polygon waves */}
      <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <PolygonWaves />
      </div>

      {/* Body */}
      <section className="space-y-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <p className="font-serif italic text-xl md:text-2xl text-[#ece8e1]/90 leading-relaxed">
          I like building things that work.
        </p>

        <p className="text-[#ece8e1]/70">
          I&apos;m the founder of Trainly, a RAG platform that helps developers
          add AI-powered document Q&amp;A to their apps. Before that, I worked
          on systems spanning real-time data pipelines, distributed backends,
          and developer tooling. I care about making complex technology simple
          and accessible.
        </p>

        <p className="text-[#ece8e1]/70">
          I enjoy learning by doing — diving into unfamiliar territory,
          especially when it challenges how I think. The problems that force a
          shift in perspective are the ones that stick with me the most.
        </p>
      </section>

      {/* Divider */}
      <div
        className="my-12 h-px bg-[#252320] animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      />

      {/* Links */}
      <nav
        className="flex flex-wrap gap-x-8 gap-y-3 text-sm animate-fade-up"
        style={{ animationDelay: "0.45s" }}
      >
        <a
          href="https://linkedin.com/in/kavinjey"
          className="text-[#c49a6b] link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn &rarr;
        </a>
        <a
          href="https://trainlyai.com"
          className="text-[#c49a6b] link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trainly &rarr;
        </a>
        <Link href="/books" className="text-[#c49a6b] link-hover">
          Books &rarr;
        </Link>
      </nav>

      {/* Hobbies */}
      <p
        className="mt-8 text-sm text-[#7a756f] animate-fade-up"
        style={{ animationDelay: "0.5s" }}
      >
        pickleball! &middot; lifting &middot; reading &middot; chess &middot;
        coding
      </p>
    </main>
  );
}
