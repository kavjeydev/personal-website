import { Book, getCoverUrl } from "@/data/books";

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex gap-4 items-start">
      <img
        src={getCoverUrl(book.isbn)}
        alt={`${book.title} cover`}
        className="w-[80px] h-[120px] object-cover flex-shrink-0"
        loading="lazy"
      />
      <div>
        <p className="font-semibold leading-snug">{book.title}</p>
        <p className="text-gray-500 text-sm">{book.author}</p>
      </div>
    </div>
  );
}

export function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book) => (
        <BookCard key={book.isbn} book={book} />
      ))}
    </div>
  );
}
