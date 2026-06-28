"use client";

import { motion } from "framer-motion";
import { ALL_PROJECTS } from "@/lib/data";
import Section3D from "@/components/Section3D";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  // Sort by id and show the most recent 10
  const projects = [...ALL_PROJECTS]
    .sort((a, b) => b.id - a.id)
    .slice(0, 10);

  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="relative py-32 sm:py-40"
    >
      <Section3D variant="both" />
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-[12px] tracking-[0.2em] text-text-dim tabular-nums">
            05
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Selected Projects
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-2xl text-[16px] leading-relaxed text-text-dim mb-16 text-balance"
        >
          A small selection of the things I&apos;ve built. Each one taught me
          something new about the web, graphics, or shipping.
        </motion.p>

        {/* Project list */}
        <ol>
          {projects.map((project, i) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease }}
              className="group relative border-t border-border"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project: ${project.title}`}
                className="block py-8 sm:py-10 transition-all duration-500 hover:pl-2"
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  {/* Number */}
                  <span className="col-span-2 sm:col-span-1 font-mono text-[12px] tracking-wider text-text-muted tabular-nums">
                    {String(project.id).padStart(2, "0")}
                  </span>

                  {/* Title + meta */}
                  <div className="col-span-10 sm:col-span-7">
                    <h3 className="text-[26px] sm:text-[34px] font-medium text-text tracking-tight leading-[1.1] transition-colors group-hover:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-text-dim text-balance">
                      {project.description}
                    </p>
                  </div>

                  {/* Year + tags */}
                  <div className="col-span-12 sm:col-span-3 sm:text-right">
                    <p className="font-mono text-[11px] tracking-wider text-text-muted uppercase">
                      {project.year}
                    </p>
                    <ul className="mt-3 flex flex-wrap sm:justify-end gap-x-2 gap-y-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[10.5px] tracking-wider text-text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover-revealed link indicators */}
                  <div className="col-span-12 sm:col-span-1 flex sm:justify-end items-center gap-2 text-text-muted">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
          {/* Closing border */}
          <li className="border-t border-border" aria-hidden="true" />
        </ol>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="https://github.com/DakshSinghDhami"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-[12px] tracking-wider text-text-dim hover:text-text transition-colors"
          >
            <span>View all 32 projects on GitHub</span>
            <span className="inline-block h-px w-8 bg-text-muted group-hover:w-12 group-hover:bg-text transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
