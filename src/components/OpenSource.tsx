"use client";

import { motion } from "framer-motion";
import { OSS_PROJECTS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function OpenSource() {
  return (
    <section
      id="opensource"
      aria-label="Open source libraries"
      className="relative py-32 sm:py-40"
    >
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
            06
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Open Source
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-2xl text-[16px] leading-relaxed text-text-dim mb-16 text-balance"
        >
          Small, focused, well-typed libraries I built because I needed them.
          Production-ready, tree-shakeable, and built on zero unnecessary
          dependencies.
        </motion.p>

        {/* OSS list */}
        <ol>
          {OSS_PROJECTS.map((pkg, i) => (
            <motion.li
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease }}
              className="group relative border-t border-border"
            >
              <a
                href={pkg.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View open source project: ${pkg.title}`}
                className="block py-7 sm:py-9 transition-all duration-500 hover:pl-2"
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-baseline">
                  {/* Number */}
                  <span className="col-span-2 sm:col-span-1 font-mono text-[12px] tracking-wider text-text-muted tabular-nums">
                    {String(pkg.id).padStart(2, "0")}
                  </span>

                  {/* Title + description */}
                  <div className="col-span-10 sm:col-span-7">
                    <h3 className="text-[20px] sm:text-[24px] font-medium font-mono text-text tracking-tight leading-[1.2] transition-colors group-hover:text-white">
                      {pkg.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-text-dim text-balance">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="col-span-12 sm:col-span-3 sm:text-right">
                    <ul className="flex flex-wrap sm:justify-end gap-x-2 gap-y-1.5">
                      {pkg.tags.slice(0, 3).map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[10.5px] tracking-wider text-text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* GitHub indicator */}
                  <div className="col-span-12 sm:col-span-1 flex sm:justify-end items-center">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <svg
                        className="h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
          <li className="border-t border-border" aria-hidden="true" />
        </ol>

        {/* Footer link */}
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
            <span>More on GitHub</span>
            <span className="inline-block h-px w-8 bg-text-muted group-hover:w-12 group-hover:bg-text transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
