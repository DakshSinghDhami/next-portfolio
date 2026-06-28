import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000000",
};

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
    "16 year old developer",
    "teenage programmer",
    "Indian web developer",
    "full stack developer India",
    "React developer India",
    "Three.js developer",
    "WebGL developer",
    "creative developer",
    "interactive developer",
    "portfolio website",
    "lucii",
    "daksh singh dhami portfolio",
  ],
  authors: [{ name: "Daksh Singh Dhami", url: "https://lucii.xyz" }],
  creator: "Daksh Singh Dhami",
  metadataBase: new URL("https://lucii.xyz"),
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  openGraph: {
    title: "Daksh Singh Dhami — Full-Stack Engineer",
    description:
      "Building interactive 3D experiences, creative tools, and open-source libraries for the modern web.",
    type: "website",
    url: "https://lucii.xyz",
    siteName: "Daksh Singh Dhami",
    locale: "en_US",
    images: [{ url: "https://lucii.xyz/og.png", width: 1200, height: 630, alt: "Daksh Singh Dhami — Full-Stack Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksh Singh Dhami — Full-Stack Engineer",
    description:
      "Building interactive 3D experiences and tools for the modern web.",
    creator: "@dakshsdhami",
    images: ["https://lucii.xyz/og.png"],
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
    canonical: "https://lucii.xyz",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Daksh Singh Dhami",
                description: "16-year-old full-stack engineer building interactive 3D experiences, creative tools, and open-source libraries for the modern web.",
                url: "https://lucii.xyz",
                sameAs: [
                  "https://github.com/DakshSinghDhami",
                  "https://linkedin.com/in/dakshsinghdhami",
                  "https://x.com/dakshsdhami",
                ],
                knowsAbout: [
                  "TypeScript", "JavaScript", "React", "Next.js", "Three.js",
                  "WebGL", "GLSL", "Node.js", "PostgreSQL", "Tailwind CSS",
                  "Framer Motion", "Web Audio API", "Canvas API", "Zustand",
                  "Vite", "Figma", "Web Development", "3D Graphics",
                  "Creative Coding", "Open Source",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Daksh Singh Dhami",
                url: "https://lucii.xyz",
                description: "16-year-old full-stack engineer building interactive 3D experiences, creative tools, and open-source libraries for the modern web.",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://lucii.xyz/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
