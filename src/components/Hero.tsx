"use client";

import dynamic from "next/dynamic";

const ThreeBackground = dynamic(
  () => import("@/components/ThreeBackground"),
  { ssr: false }
);

const STATS = [
  { value: "12+", label: "Projects" },
  { value: "2+", label: "Years" },
  { value: "10+", label: "Technologies" },
  { value: "50+", label: "Clients" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-base-950/30 via-transparent to-base-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/5 via-transparent to-accent-cyan/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-base-700 bg-base-900/50 px-4 py-1.5 text-sm text-base-400 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for new projects
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
          Building{" "}
          <span className="bg-gradient-to-r from-accent-violet via-purple-400 to-accent-cyan bg-clip-text text-transparent">
            digital
          </span>{" "}
          realities
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-base-400 max-w-2xl mx-auto mb-10">
          Hi, I&apos;m{" "}
          <span className="text-white font-semibold">Daksh</span> — a
          16-year-old full-stack product engineer based in{" "}
          <span className="text-white font-semibold">India</span>.
          I craft immersive web experiences with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-violet px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-violet-dark hover:shadow-lg hover:shadow-accent-violet/25"
          >
            View Projects
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-base-700 bg-base-900/50 px-6 py-3 text-sm font-semibold text-base-300 transition-all hover:border-base-600 hover:text-white backdrop-blur-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-base-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
