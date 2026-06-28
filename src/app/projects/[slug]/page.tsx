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

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const guide = getProjectGuide(slug);
  const categoryLabel =
    project.category === "arcade"
      ? "Game"
      : project.category === "tools"
        ? "Creative Tool"
        : "Open Source";

  return {
    title: `${project.title} | Daksh Singh Dhami`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Daksh Singh Dhami`,
      description: project.description,
      type: "article",
      url: `https://lucii.xyz/projects/${slug}`,
      siteName: "Daksh Singh Dhami",
      locale: "en_US",
      images: [{ url: "https://lucii.xyz/og.png", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Daksh Singh Dhami`,
      description: project.description,
      images: ["https://lucii.xyz/og.png"],
    },
    other: {
      "article:published_time": new Date().toISOString(),
      "article:author": "Daksh Singh Dhami",
    },
    alternates: {
      canonical: `https://lucii.xyz/projects/${slug}`,
    },
    keywords: [...project.tags, "portfolio", "daksh", categoryLabel.toLowerCase()],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const guide = getProjectGuide(slug);

  return (
    <article className="relative min-h-screen pt-28 pb-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem]">
        {/* Back link */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-wider uppercase text-text-muted hover:text-text transition-colors mb-12"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            ←
          </span>
          <span>Back to projects</span>
        </Link>

        {/* Header */}
        <header className="mb-20">
          {/* Project index + year */}
          <div className="flex items-center gap-3 mb-6 font-mono text-[12px] tracking-wider text-text-muted tabular-nums">
            <span>{String(project.id).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-border" />
            <span className="uppercase tracking-[0.2em]">
              {project.category === "arcade"
                ? "Game"
                : project.category === "tools"
                  ? "Creative Tool"
                  : "Open Source"}
            </span>
            <span className="h-px w-8 bg-border" />
            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-text text-balance"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-[18px] sm:text-[20px] leading-relaxed text-text-dim text-balance">
            {project.description}
          </p>

          {/* Tags */}
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-[12px] tracking-wider text-text-muted"
              >
                / {tag}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-text text-base px-7 py-3.5 text-[13px] font-medium tracking-wide hover:bg-white transition-colors"
            >
              Launch
              <span className="inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-[13px] font-medium tracking-wide text-text-dim hover:text-text hover:border-border-hover transition-colors"
            >
              Source
              <span className="inline-block transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-border mb-20" />

        {/* What is this */}
        <section className="mb-20 max-w-3xl">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6">
            About
          </h2>
          <p className="text-[18px] sm:text-[20px] leading-[1.6] text-text text-balance">
            {guide.detailedDescription}
          </p>
        </section>

        {/* How to use */}
        <section className="mb-20 max-w-3xl">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6">
            How to {project.category === "arcade" ? "play" : "use"}
          </h2>
          <ol className="space-y-4">
            {guide.howToUse.map((step, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border pt-4"
              >
                <span className="font-mono text-[12px] tracking-wider text-text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] leading-[1.6] text-text-dim text-balance">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section className="mb-20 max-w-3xl">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6">
            Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
            {guide.enrichedFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-baseline gap-3 border-t border-border py-4 text-[15px] text-text-dim"
              >
                <span className="h-px w-4 bg-text-faint shrink-0" />
                <span className="text-balance">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://lucii.xyz/" },
                { "@type": "ListItem", position: 2, name: "Projects", item: "https://lucii.xyz/#projects" },
                { "@type": "ListItem", position: 3, name: project.title, item: `https://lucii.xyz/projects/${slug}` },
              ],
            }),
          }}
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: project.title,
              description: project.description,
              url: project.url,
              applicationCategory:
                project.category === "arcade" ? "GameApplication" : "Multimedia",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Person",
                name: "Daksh Singh Dhami",
                url: "https://lucii.xyz",
              },
            }),
          }}
        />
      </div>
    </article>
  );
}
