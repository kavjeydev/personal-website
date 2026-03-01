import Link from "next/link";
import { books } from "@/data/books";
import { FeaturedBook, BookList } from "@/components/book-grid";

export default function BooksPage() {
  const reading = books.filter((b) => b.status === "reading");
  const read = books.filter((b) => b.status === "read");

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
          Reading
        </p>
        <h1 className="font-serif italic text-5xl md:text-6xl tracking-[-0.02em]">
          Library
        </h1>
        <div className="mt-6 h-px bg-[var(--border)]" />
      </header>

      {reading.length > 0 && (
        <section
          className="mb-20 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-[11px] uppercase tracking-[0.25em] text-[var(--accent)] mb-8 font-medium">
            Currently Reading
          </h2>
          <div className="space-y-6">
            {reading.map((book) => (
              <FeaturedBook key={book.isbn} book={book} />
            ))}
          </div>
        </section>
      )}

      <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)] font-medium">
            Shelf
          </h2>
          <span className="text-[13px] text-[var(--muted-faint)] font-mono tabular-nums">
            {read.length} books
          </span>
        </div>
        <BookList books={read} />
      </section>
    </main>
  );
}
