"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Three.js",
  "WebGL",
  "GLSL",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "Web Audio",
  "Zustand",
  "Framer Motion",
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="intro"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* 3D background — galaxy at low intensity */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
        {/* Edge vignette so text remains readable */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 90%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem] pt-32 lg:pt-0">
        {/* Section index + label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-[12px] tracking-[0.2em] text-text-dim tabular-nums">
            01
          </span>
          <span className="h-px w-12 bg-text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted">
            Hi, my name is
          </span>
        </motion.div>

        {/* SEO hidden descriptor */}
        <h2 className="sr-only">
          Portfolio of Daksh Singh Dhami — Full-Stack Engineer & Creative Developer
        </h2>

        {/* Massive name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease }}
          className="font-display text-text text-balance"
          style={{
            fontSize: "clamp(3.5rem, 11vw, 11rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
          }}
        >
          Daksh Singh
          <br />
          <span className="text-text-dim">Dhami.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease }}
          className="mt-10 max-w-2xl text-[18px] sm:text-[20px] leading-relaxed text-text-dim text-balance"
        >
          I build interactive 3D experiences, creative tools, and open-source
          libraries for the modern web.{" "}
          <span className="text-text">
            Currently sixteen, based in India.
          </span>
        </motion.p>

        {/* Single primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease }}
          className="mt-12 flex items-center gap-6"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-text text-base px-7 py-3.5 text-[13px] font-medium tracking-wide hover:bg-white transition-colors"
          >
            Get in touch
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-[13px] font-mono tracking-wider text-text-dim hover:text-text transition-colors"
          >
            <span>or browse projects</span>
            <span className="inline-block h-px w-6 bg-text-muted group-hover:w-10 group-hover:bg-text transition-all duration-500" />
          </a>
        </motion.div>
      </div>

      {/* Bottom — scroll indicator + marquee */}
      <div className="relative z-10 mt-auto">
        {/* Marquee stack ticker */}
        <div
          className="relative border-y border-border overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
        >
          <div className="flex animate-marquee whitespace-nowrap py-5">
            {[...STACK, ...STACK].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="mx-8 inline-flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.2em] text-text-muted"
              >
                <span>{s}</span>
                <span className="h-1 w-1 rounded-full bg-text-faint" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem] py-6 flex items-center justify-between text-[11px] font-mono tracking-[0.2em] uppercase text-text-muted">
          <span className="flex items-center gap-2">
            <span>Scroll</span>
            <span className="relative block h-6 w-px bg-text-faint overflow-hidden">
              <span className="absolute inset-0 bg-text animate-scroll-line" />
            </span>
          </span>
          <span className="hidden sm:inline">Built with Next.js · Three.js · Framer Motion</span>
        </div>
      </div>
    </section>
  );
}
