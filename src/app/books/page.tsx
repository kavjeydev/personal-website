import Link from "next/link";
import { books } from "@/data/books";
import { BookGrid } from "@/components/book-grid";

export default function BooksPage() {
  const reading = books.filter((b) => b.status === "reading");
  const read = books.filter((b) => b.status === "read");

  return (
    <main className="max-w-[680px] mx-auto py-[60px] px-6">
      <Link
        href="/"
        className="text-sm text-gray-500 hover:text-gray-700 mb-8 inline-block"
      >
        &larr; back to home
      </Link>

      <h1 className="font-serif italic text-4xl mb-2">Library</h1>
      <p className="text-gray-500 mb-12">Overengineered book cataloging.</p>

      {reading.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Currently Reading
          </h2>
          <BookGrid books={reading} />
        </section>
      )}

      <section>
        <div className="flex justify-between items-baseline mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            My Bookshelf
          </h2>
          <span className="text-sm text-gray-400">
            {read.length} of {books.length} books
          </span>
        </div>
        <BookGrid books={read} />
      </section>
    </main>
  );
}
