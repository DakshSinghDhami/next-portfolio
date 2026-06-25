"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

interface ArcadeGridProps {
  projects: Project[];
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function ArcadeGrid({ projects }: ArcadeGridProps) {
  return (
    <motion.section
      id="arcade"
      className="relative py-24 sm:py-32 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 px-4 py-1.5 mb-4">
            <span className="text-lg">🎮</span>
            <span className="text-sm font-semibold text-accent-cyan uppercase tracking-wider">
              Arcade
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Games &amp; Interactive Fun
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-cyan to-cyan-400 rounded-full mx-auto mb-4" />
          <p className="text-base-400 max-w-2xl mx-auto text-lg">
            Playable experiments and arcade-style games — test your reflexes,
            memory, and typing speed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
