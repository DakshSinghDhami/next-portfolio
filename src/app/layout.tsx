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
  title: {
    template: "%s | Lucii Portfolio",
    default: "Lucii | Full-Stack Product Engineer",
  },
  description:
    "16-year-old full-stack product engineer building digital realities with modern web technologies. Explore interactive 3D projects, games, creative tools, and open-source libraries.",
  keywords: [
    "portfolio",
    "full-stack",
    "react",
    "three.js",
    "web developer",
    "3D",
    "interactive",
    "games",
    "creative tools",
    "open source",
  ],
  authors: [{ name: "Lucii", url: "https://lucii.io" }],
  creator: "Daksh Singh Dhami",
  metadataBase: new URL("https://lucii.io"),
  openGraph: {
    title: "Lucii | Full-Stack Product Engineer",
    description:
      "Building digital realities with modern web technologies — explore interactive 3D projects, games, and tools.",
    type: "website",
    url: "https://lucii.io",
    siteName: "Lucii Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://lucii.io/api/og?title=Lucii%20Portfolio&type=portfolio",
        width: 1200,
        height: 630,
        alt: "Lucii Portfolio — Full-Stack Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucii | Full-Stack Product Engineer",
    description:
      "Building digital realities with modern web technologies.",
    creator: "@dakshsdhami",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lucii.io",
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
