import Link from "next/link";
import { PolygonWaves } from "@/components/polygon-waves";

export default function Home() {
  return (
    <main className="max-w-[680px] mx-auto py-[60px] px-6">
      <PolygonWaves />

      <section className="space-y-5">
        <p className="text-[17px]">
          My name&apos;s Kavin. I like building things that work.
        </p>

        <p>
          I&apos;m the founder of Trainly, a RAG platform that helps developers
          add AI-powered document Q&amp;A to their apps. Before that, I worked
          on systems spanning real-time data pipelines, distributed backends,
          and developer tooling. I care about making complex technology simple
          and accessible.
        </p>

        <p>
          I enjoy learning by doing — diving into unfamiliar territory,
          especially when it challenges how I think. The problems that force a
          shift in perspective are the ones that stick with me the most.
        </p>

        <p>
          <strong className="font-semibold">LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/kavinjey"
            className="text-[#1a6fe0] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/kavinjey
          </a>
        </p>

        <p>
          <strong className="font-semibold">Trainly:</strong>{" "}
          <a
            href="https://trainlyai.com"
            className="text-[#1a6fe0] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            trainlyai.com
          </a>
        </p>

        <p>
          <strong className="font-semibold">Hobbies:</strong> pickleball!,
          lifting, reading, chess, coding
        </p>

        <p>
          <strong className="font-semibold">Books I&apos;m reading:</strong>{" "}
          <Link href="/books" className="text-[#1a6fe0] hover:underline">
            /books
          </Link>
        </p>
      </section>
    </main>
  );
}
