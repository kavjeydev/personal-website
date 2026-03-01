import Link from "next/link";
import { books } from "@/data/books";
import { BookGrid } from "@/components/book-grid";

export default function BooksPage() {
  const reading = books.filter((b) => b.status === "reading");
  const read = books.filter((b) => b.status === "read");

  return (
    <main className="max-w-[720px] mx-auto px-6 py-20 md:py-32">
      <Link
        href="/"
        className="text-sm text-[#7a756f] hover:text-[#ece8e1] transition-colors mb-12 inline-block"
      >
        &larr; back to home
      </Link>

      <header className="mb-16 animate-fade-up">
        <h1 className="font-serif italic text-5xl md:text-6xl tracking-[-0.02em] mb-3">
          Library
        </h1>
        <p className="text-[#7a756f]">Overengineered book cataloging.</p>
      </header>

      {reading.length > 0 && (
        <section
          className="mb-16 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#c49a6b] mb-8 font-medium">
            Currently Reading
          </h2>
          <BookGrid books={reading} />
        </section>
      )}

      <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#7a756f] font-medium">
            My Bookshelf
          </h2>
          <span className="text-sm text-[#7a756f]">
            {read.length} of {books.length} books
          </span>
        </div>
        <BookGrid books={read} />
      </section>
    </main>
  );
}
