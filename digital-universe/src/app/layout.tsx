import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Alex Rivera | Software Engineer — Digital Universe",
  description:
    "An interactive digital universe portfolio — systems engineering, architecture, and craftsmanship.",
  keywords: [
    "software engineer",
    "portfolio",
    "systems",
    "architecture",
    "next.js",
    "three.js",
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
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#02040a] font-body text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
