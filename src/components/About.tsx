const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "WebGL",
  "GLSL",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "Framer Motion",
  "D3.js",
  "Canvas API",
  "Web Audio API",
  "Socket.io",
  "PostgreSQL",
  "Docker",
  "Git",
  "Figma",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full mx-auto mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              16-year-old full-stack product engineer
            </h3>
            <p className="text-base-400 leading-relaxed">
              I&apos;m a passionate developer who loves building things that
              live on the internet. My journey started with curiosity about how
              websites work, and it quickly evolved into a full-blown obsession
              with creating digital experiences that push the boundaries of what
              the web can do.
            </p>
            <p className="text-base-400 leading-relaxed">
              From interactive 3D visualizations with Three.js to full-stack
              applications with React and Node.js, I thrive on learning new
              technologies and turning ambitious ideas into polished, working
              products. Every project is an opportunity to experiment, learn,
              and create something that matters.
            </p>
            <p className="text-base-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new
              frameworks, contributing to open source, or designing the next
              project that&apos;s been brewing in my mind.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="rounded-lg border border-base-800 bg-base-900/50 p-4 text-center">
                <div className="text-lg font-bold text-accent-violet">12+</div>
                <div className="text-xs text-base-500 mt-1">Projects</div>
              </div>
              <div className="rounded-lg border border-base-800 bg-base-900/50 p-4 text-center">
                <div className="text-lg font-bold text-accent-cyan">2+</div>
                <div className="text-xs text-base-500 mt-1">Years Coding</div>
              </div>
              <div className="rounded-lg border border-base-800 bg-base-900/50 p-4 text-center">
                <div className="text-lg font-bold text-accent-violet">18+</div>
                <div className="text-xs text-base-500 mt-1">Technologies</div>
              </div>
            </div>
          </div>

          {/* Skills Cloud */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Technologies I work with
            </h4>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-lg border border-base-800 bg-base-900/50 px-4 py-2 text-sm text-base-300 transition-all duration-200 hover:border-accent-violet/50 hover:text-white hover:bg-base-800/50 hover:shadow-sm hover:shadow-accent-violet/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
