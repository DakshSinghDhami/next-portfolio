import { ALL_PROJECTS } from "@/lib/data";
import { getProjectGuide } from "@/lib/projectGuides";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const guide = getProjectGuide(slug);
  const categoryLabel = project.category === "arcade" ? "Game" : project.category === "tools" ? "Creative Tool" : "Open Source";

  return {
    title: `${project.title} | Lucii Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Lucii Portfolio`,
      description: project.description,
      type: "article",
      url: `https://lucii.io/projects/${slug}`,
      siteName: "Lucii Portfolio",
      images: [
        {
          url: `https://lucii.io/api/og?title=${encodeURIComponent(project.title)}&type=${project.category}`,
          width: 1200,
          height: 630,
          alt: `${project.title} — ${categoryLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Lucii Portfolio`,
      description: project.description,
    },
    alternates: {
      canonical: `https://lucii.io/projects/${slug}`,
    },
    keywords: [...project.tags, "portfolio", "lucii", categoryLabel.toLowerCase()],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const guide = getProjectGuide(slug);
  const categoryLabel = project.category === "arcade" ? "Game" : project.category === "tools" ? "Creative Tool" : "Open Source";
  const accentColor = guide.accent;

  return (
    <article className="min-h-screen pt-28 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#arcade"
          className="inline-flex items-center gap-2 text-sm text-base-400 hover:text-white transition-colors mb-8 group"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7 7l-7-7 7-7" />
          </svg>
          Back to portfolio
        </Link>

        {/* ═══ HERO ═══ */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: `${accentColor}15`,
                borderColor: `${accentColor}30`,
                color: accentColor,
              }}
            >
              <span>{guide.emoji}</span>
              <span>{categoryLabel}</span>
            </span>
            <span className="text-sm font-mono text-base-600">
              #{String(project.id).padStart(2, "0")}
            </span>
            <span className="text-sm text-base-600">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-base-400 max-w-2xl mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-lg border border-base-700 bg-base-800/50 px-3 py-1.5 text-sm font-medium text-base-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${guide.accentTo})`,
                boxShadow: `0 4px 14px ${accentColor}30`,
              }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Launch App
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-base-700 bg-base-900/50 px-6 py-3 text-sm font-semibold text-base-300 transition-all duration-300 hover:border-base-600 hover:text-white backdrop-blur-sm"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source
            </a>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-base-800 mb-12" />

        {/* ═══ WHAT IS THIS? ═══ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            What is this?
          </h2>
          <p className="text-base-400 leading-relaxed">{guide.detailedDescription}</p>
        </section>

        {/* ═══ HOW TO PLAY/USE ═══ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span>
            How to {project.category === "arcade" ? "Play" : "Use"}
          </h2>
          <ol className="space-y-3">
            {guide.howToUse.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-base-400">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white shrink-0 mt-0.5"
                  style={{ background: accentColor }}
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* ═══ FEATURES ═══ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guide.enrichedFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-base-400 bg-base-900/40 rounded-xl border border-base-800/60 p-4 transition-colors hover:border-base-700/80"
              >
                <svg
                  className="h-5 w-5 shrink-0 mt-0.5"
                  style={{ color: accentColor }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ═══ SCREENSHOTS ═══ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">📸</span>
            Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2].map((num) => (
              <div
                key={num}
                className="relative rounded-2xl overflow-hidden border border-base-800/60 aspect-video"
              >
                {/* Themed gradient background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${guide.accentFrom}20, ${guide.accentTo}10)`,
                  }}
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl"
                      style={{
                        background: `linear-gradient(135deg, ${guide.accentFrom}40, ${guide.accentTo}30)`,
                        border: `1px solid ${guide.accentFrom}30`,
                      }}
                    >
                      {guide.emoji}
                    </div>
                    <p className="text-sm text-base-500 font-medium">
                      {project.title} — View {num}
                    </p>
                    <p className="text-xs text-base-600 mt-1">
                      Screenshot placeholder
                    </p>
                  </div>
                </div>
                {/* Window chrome dots */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ TECH STACK ═══ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🛠️</span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border"
                style={{
                  backgroundColor: `${accentColor}10`,
                  borderColor: `${accentColor}25`,
                  color: accentColor,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ═══ JSON-LD Structured Data ═══ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: project.title,
              description: project.description,
              url: project.url,
              applicationCategory: project.category === "arcade" ? "GameApplication" : "Multimedia",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "Daksh Singh Dhami",
                url: "https://lucii.io",
              },
            }),
          }}
        />
      </div>
    </article>
  );
}
