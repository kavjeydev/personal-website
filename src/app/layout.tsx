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
