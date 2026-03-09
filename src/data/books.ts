export type Book = {
  title: string;
  author: string;
  isbn: string;
  status: "reading" | "read";
};

export const books: Book[] = [
  // Currently reading
  { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", isbn: "9781982137274", status: "reading" },

  // Read
  { title: "Outliers", author: "Malcolm Gladwell", isbn: "9780316017930", status: "read" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", status: "read" },
  { title: "The 4-Hour Workweek", author: "Timothy Ferriss", isbn: "9780307465351", status: "read" },
  { title: "How to Win Friends and Influence People", author: "Dale Carnegie", isbn: "9780671027032", status: "read" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", isbn: "9781585424337", status: "read" },
  { title: "The 12 Week Year", author: "Brian P. Moran", isbn: "9781118509234", status: "read" },
  { title: "The Psychology of Money", author: "Morgan Housel", isbn: "9780857197689", status: "read" },
  { title: "The 10X Rule", author: "Grant Cardone", isbn: "9780470627600", status: "read" },
  { title: "Atomic Habits", author: "James Clear", isbn: "9780735211292", status: "read" },
  { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334", status: "read" },
];

export function getCoverUrl(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}
