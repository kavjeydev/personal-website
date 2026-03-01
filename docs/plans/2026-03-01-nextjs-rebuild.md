# Portfolio Next.js Rebuild — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the personal portfolio from static HTML/CSS to a Next.js 15 site with two routes (home + books library).

**Architecture:** Next.js 15 App Router with static export. Home page has an animated canvas polygon-waves hero and bio content. Books page shows a grid of book covers fetched from Open Library API by ISBN. All data is static (TypeScript arrays).

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Canvas API, Open Library Covers API

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `postcss.config.mjs`

**Step 1: Initialize Next.js project**

Run inside `/Users/kavin_jey/Desktop/personal-website`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm
```

When prompted, accept defaults. This will scaffold the project in-place (keeping the existing `docs/` and `index.html`).

**Step 2: Configure static export**

Replace `next.config.ts` contents:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

`images.unoptimized` is required because static export can't use Next.js image optimization server.

**Step 3: Verify it runs**

```bash
npm run dev
```

Expected: Dev server starts at localhost:3000, shows default Next.js page.

**Step 4: Clean up scaffolded defaults**

Remove the default page content and global CSS extras. Keep only Tailwind directives in `globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Clear `src/app/page.tsx` to just:

```tsx
export default function Home() {
  return <main>Hello</main>;
}
```

**Step 5: Remove old HTML/CSS files**

Delete the original `index.html` and `style.css` from project root — they're replaced by the Next.js app.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind and static export"
```

---

### Task 2: Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Write root layout**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kavin Jeyasankar",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-[#1a1a1a] bg-white leading-[1.7] text-base antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 2: Configure system font stack in Tailwind**

In `tailwind.config.ts`, extend the `fontFamily`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "Georgia",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
```

**Step 3: Verify**

```bash
npm run dev
```

Expected: Page shows "Hello" with system font on white background.

**Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css tailwind.config.ts
git commit -m "feat: add root layout with system font stack"
```

---

### Task 3: Polygon Waves Hero Component

**Files:**
- Create: `src/components/polygon-waves.tsx`

**Step 1: Create the animated canvas component**

```tsx
"use client";

import { useEffect, useRef } from "react";

export function PolygonWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "#d0d0d0";
      ctx.lineWidth = 0.5;

      const cols = 32;
      const rows = 16;
      const cellW = w / cols;
      const cellH = h / rows;

      const points: [number, number][][] = [];

      for (let row = 0; row <= rows; row++) {
        points[row] = [];
        for (let col = 0; col <= cols; col++) {
          const x = col * cellW;
          const baseY = row * cellH;
          const wave1 = Math.sin(col * 0.3 + time * 0.8) * 8;
          const wave2 = Math.sin(row * 0.5 + time * 0.6) * 6;
          const wave3 = Math.cos((col + row) * 0.2 + time * 0.4) * 4;
          const y = baseY + wave1 + wave2 + wave3;
          points[row][col] = [x, y];
        }
      }

      // Draw triangulated mesh
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const tl = points[row][col];
          const tr = points[row][col + 1];
          const bl = points[row + 1][col];
          const br = points[row + 1][col + 1];

          // Triangle 1: tl -> tr -> bl
          ctx.beginPath();
          ctx.moveTo(tl[0], tl[1]);
          ctx.lineTo(tr[0], tr[1]);
          ctx.lineTo(bl[0], bl[1]);
          ctx.closePath();
          ctx.stroke();

          // Triangle 2: tr -> br -> bl
          ctx.beginPath();
          ctx.moveTo(tr[0], tr[1]);
          ctx.lineTo(br[0], br[1]);
          ctx.lineTo(bl[0], bl[1]);
          ctx.closePath();
          ctx.stroke();
        }
      }

      // Draw dots at vertices
      ctx.fillStyle = "#999";
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const [x, y] = points[row][col];
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.015;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="border border-[#e0e0e0] rounded overflow-hidden mb-10">
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: "280px" }}
      />
    </div>
  );
}
```

**Step 2: Verify in browser**

Temporarily import and render `<PolygonWaves />` in `src/app/page.tsx`. Check that:
- Canvas renders full-width with animated triangle mesh
- Animation is smooth and monochrome
- Responsive on resize

**Step 3: Commit**

```bash
git add src/components/polygon-waves.tsx
git commit -m "feat: add animated polygon waves hero component"
```

---

### Task 4: Home Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Write home page**

```tsx
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
```

**Step 2: Verify in browser**

Check layout matches the screenshot style: centered, correct spacing, links work, hero animation visible.

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add home page with bio content and hero"
```

---

### Task 5: Book Data

**Files:**
- Create: `src/data/books.ts`

**Step 1: Create book data file**

```ts
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
```

**Step 2: Commit**

```bash
git add src/data/books.ts
git commit -m "feat: add book data with Open Library cover helper"
```

---

### Task 6: Book Grid Component

**Files:**
- Create: `src/components/book-grid.tsx`

**Step 1: Create the book grid component**

```tsx
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
```

**Step 2: Commit**

```bash
git add src/components/book-grid.tsx
git commit -m "feat: add book grid component with cover images"
```

---

### Task 7: Books/Library Page

**Files:**
- Create: `src/app/books/page.tsx`

**Step 1: Create the books page**

```tsx
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
```

**Step 2: Verify in browser**

- Navigate to `/books`
- Check: back link, header styling, currently reading section, grid layout, cover images load
- Test responsive: 3 → 2 → 1 column

**Step 3: Commit**

```bash
git add src/app/books/page.tsx
git commit -m "feat: add books/library page with reading sections"
```

---

### Task 8: Final Verification & Build

**Step 1: Run dev server and check both pages**

```bash
npm run dev
```

Check `/` and `/books` render correctly.

**Step 2: Run production build**

```bash
npm run build
```

Expected: Static export succeeds, output in `out/` directory.

**Step 3: Run lint**

```bash
npm run lint
```

Expected: No errors.

**Step 4: Commit any final fixes**

```bash
git add -A
git commit -m "chore: final cleanup and build verification"
```
