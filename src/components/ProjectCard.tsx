"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { getProjectGuide } from "@/lib/projectGuides";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const CATEGORY_STYLES: Record<string, { border: string; glow: string; badge: string; label: string }> = {
  arcade: {
    border: "hover:border-accent-cyan/50",
    glow: "from-accent-cyan/0 via-accent-cyan/5 to-transparent",
    badge: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    label: "Game",
  },
  tools: {
    border: "hover:border-accent-violet/50",
    glow: "from-accent-violet/0 via-accent-violet/5 to-transparent",
    badge: "bg-accent-violet/10 text-accent-violet border-accent-violet/20",
    label: "Tool",
  },
  opensource: {
    border: "hover:border-accent-green/50",
    glow: "from-accent-green/0 via-accent-green/5 to-transparent",
    badge: "bg-accent-green/10 text-accent-green border-accent-green/20",
    label: "Library",
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const guide = getProjectGuide(project.slug);
  const style = CATEGORY_STYLES[project.category] || CATEGORY_STYLES.tools;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <div
          className={`relative rounded-2xl border border-base-800/80 bg-base-900/40 p-6 transition-all duration-500 ${style.border} hover:shadow-xl hover:shadow-accent-violet/5 hover:bg-base-900/60 hover:-translate-y-1 overflow-hidden backdrop-blur-sm`}
        >
          {/* Glow effect on hover */}
          <div
            className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${style.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
          />

          {/* Category Badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${style.badge}`}
            >
              <span>{guide.emoji}</span>
              <span>{style.label}</span>
            </span>
            <span className="text-xs font-mono text-base-600">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-base-300 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-base-400 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-base-800/60 px-2.5 py-0.5 text-[11px] font-medium text-base-400 border border-base-700/50"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="inline-flex items-center rounded-md bg-base-800/60 px-2.5 py-0.5 text-[11px] font-medium text-base-600 border border-base-700/50">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Links Row */}
          <div className="flex items-center justify-between gap-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Launch ${project.title}`}
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Launch
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-base-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View source for ${project.title}`}
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source
              </a>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-base-500 group-hover:text-white transition-colors">
              Details
              <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
