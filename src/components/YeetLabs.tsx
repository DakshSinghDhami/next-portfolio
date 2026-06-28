"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "elite builders" },
  { value: "$60,000+", label: "hackathon winnings" },
  { value: "10M+", label: "transactions processed" },
  { value: "30+", label: "projects built" },
];

const PROJECTS = [
  { name: "PokePerps", note: "DeFi perpetuals on Pokemon cards (Solana)" },
  { name: "PumpMyClaw", note: "AI trading agents (Solana/Monad)" },
  { name: "Stackem", note: "On-chain arcade · 25k users" },
  { name: "Whackacow", note: "20k users · 3.5M+ transactions" },
  { name: "Sonic Pulse", note: "Blockchain explorer" },
  { name: "Agentic Streaming", note: "AI-generated streaming" },
];

const MILESTONES = [
  { year: "2025", event: "$15,000 MagicBlock Winner" },
  { year: "2025", event: "7M+ Transactions (Lana Roads)" },
  { year: "2025", event: "$5,000 Colosseum Prize" },
  { year: "2025", event: "Sonic Redacted Winner" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function YeetLabs() {
  return (
    <section
      id="yeet-labs"
      aria-label="Yeet Labs"
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
            04
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Collective
          </span>
        </motion.div>

        {/* Title + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          className="mb-16"
        >
          <h2 className="font-display text-text tracking-tight text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95]">
            yeet labs
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-text-dim text-balance">
            Builders of the future — a collective of elite blockchain &amp; AI
            engineers.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 border-t border-border"
        >
          {STATS.map((stat, i) => (
            <motion.li
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease },
                },
              }}
              className={`group relative py-8 sm:py-10 px-4 sm:px-6 border-b border-border transition-colors hover:bg-elevated/30 ${
                i % 2 === 0 ? "border-r" : "border-r-0"
              } lg:border-r ${
                (i + 1) % 4 === 0 ? "lg:border-r-0" : ""
              }`}
            >
              <p className="font-display text-text tracking-tight text-[clamp(1.75rem,3.2vw,2.5rem)] leading-none tabular-nums">
                {stat.value}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                {stat.label}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* Projects + Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-24">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-6"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6">
              / Projects
            </h3>
            <ol className="border-t border-border">
              {PROJECTS.map((project) => (
                <li
                  key={project.name}
                  className="group flex items-baseline justify-between gap-4 border-b border-border py-4 transition-colors hover:bg-elevated/30"
                >
                  <span className="text-[15px] sm:text-[16px] text-text tracking-tight">
                    {project.name}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted text-right shrink-0 max-w-[60%]">
                    {project.note}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Milestones timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="lg:col-span-6"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6">
              / Milestones
            </h3>
            <ol className="relative">
              <span
                aria-hidden="true"
                className="absolute left-[3.5rem] sm:left-[4.5rem] top-2 bottom-2 w-px bg-border"
              />
              {MILESTONES.map((m) => (
                <li
                  key={`${m.year}-${m.event}`}
                  className="group relative grid grid-cols-[3.5rem_1fr] sm:grid-cols-[4.5rem_1fr] items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-[12px] tracking-wider text-text-dim tabular-nums">
                    {m.year}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-[3.375rem] sm:left-[4.375rem] top-[1.4rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-text-muted group-hover:bg-accent-warm transition-colors duration-500"
                  />
                  <span className="text-[15px] sm:text-[16px] text-text leading-relaxed pl-6 sm:pl-8 text-balance">
                    {m.event}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Contact link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-20 pt-8 border-t border-border"
        >
          <a
            href="mailto:admin@yeetlabs.fun"
            className="group inline-flex items-center gap-3 font-mono text-[12px] tracking-wider text-text-dim hover:text-text transition-colors"
          >
            <span className="h-px w-8 bg-text-muted group-hover:w-12 group-hover:bg-text transition-all duration-500" />
            <span>admin@yeetlabs.fun</span>
            <span
              aria-hidden="true"
              className="inline-block text-text-faint group-hover:text-text-dim group-hover:translate-x-1 transition-all duration-500"
            >
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
