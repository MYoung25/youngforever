import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const showtimeFont = localFont({
  src: "./Showtime.ttf",
  variable: "--font-showtime",
});

export const metadata: Metadata = {
  title: "Young Forever",
  description: "Premiering 10/12/2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={showtimeFont.variable}>{children}</body>
    </html>
  );
}
