import { Book, getCoverUrl } from "@/data/books";

function BookCard({ book }: { book: Book }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="relative flex-shrink-0">
        <img
          src={getCoverUrl(book.isbn)}
          alt={`${book.title} cover`}
          className="w-[72px] h-[108px] object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-sm ring-1 ring-white/10 pointer-events-none" />
      </div>
      <div className="pt-0.5">
        <p className="font-medium leading-snug text-[#ece8e1]/90 text-[15px]">
          {book.title}
        </p>
        <p className="text-[#7a756f] text-sm mt-0.5">{book.author}</p>
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
