import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian Vale · Living Operating System",
  description:
    "Senior software engineer portfolio — a living systems interface for distributed architecture, platforms, and product craft.",
  keywords: [
    "portfolio",
    "senior software engineer",
    "distributed systems",
    "Next.js",
    "architecture",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-hidden bg-[var(--bg-void)] font-sans text-[var(--fg)]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
