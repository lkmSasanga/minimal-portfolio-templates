import type { Metadata } from "next";
import { Syne, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Alex Morgan | Full-Stack Developer",
  description:
    "Personal portfolio of Alex Morgan — Full-Stack Developer crafting elegant digital experiences with modern web technologies.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "react",
    "next.js",
    "typescript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSerif.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#030712] font-body text-zinc-100">
        {children}
      </body>
    </html>
  );
}
