import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body className="font-sans bg-[var(--bg)] text-[var(--text)] leading-[1.7] text-base antialiased transition-colors duration-0">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
