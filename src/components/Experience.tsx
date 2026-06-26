"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Independent Engineer",
    company: "Self-employed",
    description:
      "Designing and shipping interactive 3D experiences, creative tools, and open-source libraries. Working with select clients on web-based product prototypes and creative direction.",
  },
  {
    period: "2024 — 2025",
    role: "Open Source Maintainer",
    company: "Personal projects",
    description:
      "Published 9 npm packages covering React hooks, TypeScript utilities, color manipulation, fetch wrappers, and more. 100% TypeScript, tree-shakeable, zero-dependency where possible.",
  },
  {
    period: "2023 — 2024",
    role: "Self-taught Developer",
    company: "Independent learning",
    description:
      "Went deep on JavaScript, React, and the modern web platform. Shipped my first 10+ projects, learned Three.js, WebGL, and the Web Audio API by building things I wanted to use.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative py-32 sm:py-40"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-[12px] tracking-[0.2em] text-text-dim tabular-nums">
            03
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Experience
          </span>
        </motion.div>

        <ol className="space-y-0">
          {EXPERIENCE.map((item, i) => (
            <motion.li
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group relative grid grid-cols-12 gap-6 border-t border-border py-8 sm:py-10 transition-colors hover:bg-elevated/30"
            >
              {/* Period */}
              <div className="col-span-12 sm:col-span-3">
                <p className="font-mono text-[12px] tracking-wider text-text-muted tabular-nums">
                  {item.period}
                </p>
              </div>

              {/* Content */}
              <div className="col-span-12 sm:col-span-9">
                <h3 className="text-[20px] sm:text-[22px] font-medium text-text tracking-tight">
                  {item.role}
                  <span className="text-text-dim"> · </span>
                  <span className="text-text-dim font-normal">
                    {item.company}
                  </span>
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-text-dim text-balance">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
          {/* Closing border */}
          <li className="border-t border-border" aria-hidden="true" />
        </ol>
      </div>
    </section>
  );
}
