export type Book = {
  title: string;
  author: string;
  isbn: string;
  status: "reading" | "read";
};

export const books: Book[] = [
  // Currently reading
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", status: "reading" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", isbn: "9780374528379", status: "reading" },

  // Read
  { title: "The Myth of Sisyphus", author: "Albert Camus", isbn: "9780525564454", status: "read" },
  { title: "Freakonomics", author: "Steven D. Levitt", isbn: "9780060731335", status: "read" },
  { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", isbn: "9780140441185", status: "read" },
  { title: "The Tipping Point", author: "Malcolm Gladwell", isbn: "9780316346627", status: "read" },
  { title: "Outliers", author: "Malcolm Gladwell", isbn: "9780316017930", status: "read" },
  { title: "The Diary of a CEO", author: "Steven Bartlett", isbn: "9781529146516", status: "read" },
  { title: "Animal Farm", author: "George Orwell", isbn: "9780451526342", status: "read" },
  { title: "All About Love", author: "bell hooks", isbn: "9780060959470", status: "read" },
];

export function getCoverUrl(isbn: string): string {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}
