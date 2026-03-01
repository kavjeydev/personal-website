# Portfolio Website — Next.js Rebuild Design

**Date:** 2026-03-01
**Status:** Approved

## Overview

Rebuild the personal portfolio site from static HTML/CSS to Next.js 15 with App Router, TypeScript, and Tailwind CSS. Two routes: home page and books/library page.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Static export (`output: 'export'`) for deployment on Vercel or any static host

## Project Structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (metadata, system font stack)
│   │   ├── page.tsx            # Home page (/)
│   │   └── books/
│   │       └── page.tsx        # Library page (/books)
│   ├── components/
│   │   ├── polygon-waves.tsx   # Animated canvas hero (client component)
│   │   └── book-grid.tsx       # Book cover grid component
│   └── data/
│       └── books.ts            # Book list (title, author, ISBN, status)
├── public/
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Home Page (`/`)

- Centered column layout, max-width ~680px
- **Hero:** `<PolygonWaves />` client component — full-width canvas with animated monochrome low-poly geometric wave mesh inside a bordered container
- **Content:**
  - Intro line and bio paragraph (placeholder text for now)
  - **LinkedIn:** https://linkedin.com/in/kavinjey
  - **Trainly:** https://trainlyai.com
  - **Hobbies:** pickleball!, lifting, reading, chess, coding
  - **Books I'm reading:** internal link to `/books`

## Books/Library Page (`/books`)

- "← back to home" link at top
- **Header:** "Library" in italic serif font, subtitle "Overengineered book cataloging."
- **Currently Reading:** horizontal row of 1-3 books with status "reading"
- **My Bookshelf:** 3-column responsive grid (3 col desktop, 2 tablet, 1 mobile) with "X of Y books" count
- **Book card:** cover image (Open Library API via ISBN), bold title, gray author
- **Data source:** `src/data/books.ts` — array of `{ title, author, isbn, status: "reading" | "read" }`
- **Cover images:** `https://covers.openlibrary.org/b/isbn/{isbn}-M.jpg`

## Design Aesthetic

- Minimal, clean, white background
- System font stack (`-apple-system, BlinkMacSystemFont, ...`)
- Monochrome palette for hero animation (black/gray lines on white)
- Blue links (#1a6fe0)
- Matches the existing site's visual identity
