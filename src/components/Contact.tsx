"use client";

import { motion } from "framer-motion";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/DakshSinghDhami" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dakshsinghdhami" },
  { label: "X", href: "https://x.com/dakshsdhami" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="relative py-32 sm:py-48"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-[12px] tracking-[0.2em] text-text-dim tabular-nums">
            06
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Get in touch
          </span>
        </motion.div>

        {/* Lead-in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-2xl text-[20px] sm:text-[24px] leading-[1.45] text-text text-balance"
        >
          I&apos;m always open to interesting conversations, freelance
          projects, and collaboration. My inbox is open.
        </motion.p>

        {/* Huge email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.2, ease }}
          className="mt-16 sm:mt-20"
        >
          <a
            href="mailto:hi@lucii.xyz"
            className="group inline-block max-w-full"
          >
            <span
              className="block font-display text-text tracking-tight transition-colors group-hover:text-text-dim break-all"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              hi@lucii.xyz
              <span
                className="inline-block ml-3 align-middle text-text-faint group-hover:text-text-dim group-hover:translate-x-2 transition-all duration-500"
                aria-hidden="true"
              >
                ↗
              </span>
            </span>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-border" />

        {/* Socials row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
        >
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[14px] font-mono tracking-wider text-text-dim hover:text-text transition-colors"
                >
                  <span className="h-px w-4 bg-text-faint group-hover:w-6 group-hover:bg-text transition-all duration-500" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-faint">
            Designed &amp; built in India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
