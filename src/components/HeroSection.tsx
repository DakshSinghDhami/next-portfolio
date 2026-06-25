"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const STATS = [
  { value: "32+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "9", label: "Open Source" },
  { value: "India", label: "Based In" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function HeroSection() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
    }));
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-base-950/20 via-base-950/40 to-base-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/8 via-transparent to-accent-cyan/8" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-b from-accent-violet/30 to-accent-cyan/20"
            style={{
              left: p.left,
              top: `${Math.random() * 100}%`,
              width: p.size,
              height: p.size,
              animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-700/60 bg-base-900/40 px-4 py-1.5 text-sm text-base-400 mb-8 backdrop-blur-md shadow-lg shadow-accent-violet/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new projects
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-6"
        >
          Building{" "}
          <span className="bg-gradient-to-r from-accent-violet via-purple-400 to-accent-cyan bg-clip-text text-transparent">
            digital
          </span>
          <br />
          realities
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-base-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I&apos;m{" "}
          <span className="text-white font-semibold">Daksh</span> — a
          16-year-old full-stack product engineer based in{" "}
          <span className="text-white font-semibold">India</span>.
          I craft immersive web experiences with modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#arcade"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-purple-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent-violet/30 hover:scale-105"
          >
            <span>Explore Projects</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#oss"
            className="group inline-flex items-center gap-2 rounded-xl border border-base-700/60 bg-base-900/40 px-7 py-3.5 text-sm font-semibold text-base-300 transition-all duration-300 hover:border-base-600 hover:text-white hover:bg-base-900/60 backdrop-blur-md"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Open Source
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="text-sm text-base-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-base-600">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-base-700 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-base-500 animate-scroll-dot" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
