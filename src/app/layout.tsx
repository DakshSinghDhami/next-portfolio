import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
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
    template: "%s | Daksh Singh Dhami",
    default: "Daksh Singh Dhami — Full-Stack Engineer",
  },
  description:
    "16-year-old full-stack engineer building interactive 3D experiences, creative tools, and open-source libraries for the modern web.",
  keywords: [
    "portfolio",
    "full-stack",
    "react",
    "next.js",
    "three.js",
    "webgl",
    "3D",
    "interactive",
    "open source",
    "typescript",
  ],
  authors: [{ name: "Daksh Singh Dhami", url: "https://lucii.io" }],
  creator: "Daksh Singh Dhami",
  metadataBase: new URL("https://lucii.io"),
  openGraph: {
    title: "Daksh Singh Dhami — Full-Stack Engineer",
    description:
      "Building interactive 3D experiences, creative tools, and open-source libraries for the modern web.",
    type: "website",
    url: "https://lucii.io",
    siteName: "Daksh Singh Dhami",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksh Singh Dhami — Full-Stack Engineer",
    description:
      "Building interactive 3D experiences and tools for the modern web.",
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-base text-text">
        {children}
        <Footer />
      </body>
    </html>
  );
}
