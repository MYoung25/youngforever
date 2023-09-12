import "./globals.css";
import type { Metadata } from "next";
import { Navigation } from "./navigation";

import localFont from "next/font/local";

const showtimeFont = localFont({
  src: "./Showtime.ttf",
  variable: "--font-showtime",
});

const debonairFont = localFont({
  src: "./Debonair.ttf",
  variable: "--font-debonair",
});

export const metadata: Metadata = {
  title: "Young Forever",
  description: "Premiering 10/12/2024",
  metadataBase: new URL("https://youngforever.wedding"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${showtimeFont.variable} ${debonairFont.variable}`}
    >
      <body>
        <Navigation />
        <div className="mx-4 p-1 pt-24 text-gold">
          <main className="flex flex-col items-center place-content-center p-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
