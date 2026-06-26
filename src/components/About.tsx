"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Three.js",
  "WebGL",
  "GLSL",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Web Audio API",
  "Canvas API",
  "Zustand",
  "Vite",
  "Figma",
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
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
            02
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-7"
          >
            <p className="text-[20px] sm:text-[22px] leading-[1.55] text-text text-balance">
              I&apos;m a self-taught full-stack engineer who started shipping
              to the web at fifteen. I gravitate toward work that lives at the
              edge of the browser — interactive 3D, real-time audio, generative
              visuals — but I care just as much about the tools that make
              shipping those things feel good.
            </p>

            <p className="mt-6 text-[17px] leading-[1.7] text-text-dim text-balance">
              In the last two years I&apos;ve built 30+ projects spanning
              games, creative tools, and dev libraries. I publish everything I
              can as open source, and I write tools I wish existed when I was
              starting out.
            </p>

            <p className="mt-6 text-[17px] leading-[1.7] text-text-dim text-balance">
              When I&apos;m not coding I&apos;m reading, skateboarding, or
              breaking things to understand how they work. I&apos;m always
              open to interesting conversations and collaborations.
            </p>
          </motion.div>

          {/* Right: skills list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="lg:col-span-5 lg:pl-8"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted mb-6">
              Technologies I work with
            </h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="text-[14px] font-mono text-text-dim"
                >
                  <span className="text-text-faint mr-2">/</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
