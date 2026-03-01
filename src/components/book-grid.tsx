import { Book, getCoverUrl } from "@/data/books";

export function FeaturedBook({ book }: { book: Book }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="relative flex-shrink-0">
        <img
          src={getCoverUrl(book.isbn)}
          alt={`${book.title} cover`}
          className="w-[100px] h-[150px] object-cover rounded"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded ring-1 ring-[var(--ring)] pointer-events-none" />
      </div>
      <div className="pt-1">
        <p className="font-serif text-xl leading-snug text-[var(--text)] mb-1">
          {book.title}
        </p>
        <p className="text-[var(--muted)] text-sm">{book.author}</p>
      </div>
    </div>
  );
}

function BookRow({ book, index }: { book: Book; index: number }) {
  return (
    <div className="group">
      <div className="flex items-center gap-5 py-4">
        <span className="text-[13px] text-[var(--muted-dim)] tabular-nums w-6 text-right flex-shrink-0 font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="relative flex-shrink-0">
          <img
            src={getCoverUrl(book.isbn)}
            alt={`${book.title} cover`}
            className="w-[40px] h-[60px] object-cover rounded-sm transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 rounded-sm ring-1 ring-[var(--ring-subtle)] pointer-events-none" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-[15px] text-[var(--text-primary)] leading-snug truncate">
            {book.title}
          </p>
          <p className="text-[var(--muted)] text-[13px] mt-0.5">
            {book.author}
          </p>
        </div>
      </div>
      <div className="h-px bg-[var(--border-dim)]" />
    </div>
  );
}

export function BookList({ books }: { books: Book[] }) {
  return (
    <div>
      <div className="h-px bg-[var(--border-dim)]" />
      {books.map((book, i) => (
        <BookRow key={book.isbn} book={book} index={i} />
      ))}
    </div>
  );
}
