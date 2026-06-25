import { PROJECTS, OSS_PROJECTS } from "@/lib/data";

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <div className="group relative rounded-xl border border-base-800 bg-base-900/50 p-6 transition-all duration-300 hover:border-accent-violet/50 hover:shadow-lg hover:shadow-accent-violet/5 hover:bg-base-900/80">
      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-accent-violet/0 via-accent-violet/0 to-accent-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

      {/* Project Number */}
      <div className="text-4xl font-bold text-base-800 select-none mb-4 transition-colors group-hover:text-accent-violet/20">
        {String(project.id).padStart(2, "0")}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-base-400 leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-base-800 px-2.5 py-0.5 text-xs font-medium text-base-400 border border-base-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan hover:text-accent-cyan/80 transition-colors"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Launch App
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-base-400 hover:text-white transition-colors"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Source
        </a>
        <a
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-base-400 hover:text-white transition-colors ml-auto"
        >
          Details
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function OSSCard({ project }: { project: (typeof OSS_PROJECTS)[number] }) {
  return (
    <div className="group relative rounded-lg border border-base-800/60 bg-base-900/30 p-4 transition-all duration-300 hover:border-accent-green/40 hover:bg-base-900/60">
      {/* Title row with GitHub link */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-white group-hover:text-accent-green transition-colors font-mono">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1 text-xs text-base-500 shrink-0">
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          {project.stars}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-base-500 leading-relaxed mb-3 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Tags + GitHub icon */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-base-800/60 px-2 py-0.5 text-[10px] font-medium text-base-500 border border-base-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-medium text-base-500 hover:text-accent-green transition-colors shrink-0"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      {/* ── Interactive Apps ── */}
      <section id="projects" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Interactive Apps
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full mx-auto mb-4" />
            <p className="text-base-400 max-w-2xl mx-auto">
              A collection of interactive experiences, tools, and visualizations
              I&apos;ve built — spanning 3D graphics, audio visualization, and
              full-stack applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Source ── */}
      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Open Source
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent-green to-accent-cyan rounded-full mx-auto mb-4" />
            <p className="text-base-400 max-w-2xl mx-auto">
              Libraries, CLIs, and tools I&apos;ve published to npm. Tiny
              bundles, full TypeScript coverage, zero unnecessary dependencies.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OSS_PROJECTS.map((project) => (
              <OSSCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
