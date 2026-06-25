import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucii | Full-Stack Product Engineer",
  description:
    "16-year-old full-stack product engineer building digital realities with modern web technologies. Explore interactive 3D projects, tools, and apps.",
  keywords: [
    "portfolio",
    "full-stack",
    "react",
    "three.js",
    "web developer",
    "3D",
    "interactive",
  ],
  authors: [{ name: "Lucii" }],
  openGraph: {
    title: "Lucii | Full-Stack Product Engineer",
    description:
      "Building digital realities with modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-950 text-base-300">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
