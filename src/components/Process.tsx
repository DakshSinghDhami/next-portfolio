const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "I start by understanding your vision, goals, and target audience. Through collaborative discussions, I map out requirements and define success metrics.",
    color: "from-accent-violet to-purple-500",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and high-fidelity mockups bring the vision to life. I focus on user experience, accessibility, and creating intuitive interfaces that delight.",
    color: "from-purple-500 to-violet-400",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Clean, performant code is written with modern frameworks and best practices. I build scalable architectures that are maintainable and future-proof.",
    color: "from-violet-400 to-accent-cyan",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Production-ready deployment with CI/CD pipelines, performance optimization, and thorough testing ensures a smooth, reliable launch.",
    color: "from-accent-cyan to-cyan-400",
  },
  {
    number: "05",
    title: "Iterate",
    description:
      "Post-launch, I gather feedback, monitor performance, and continuously improve the product. Great software is never truly finished — it evolves.",
    color: "from-cyan-400 to-accent-cyan",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Process
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full mx-auto mb-4" />
          <p className="text-base-400 max-w-2xl mx-auto">
            A structured approach to building digital products — from concept
            to continuous improvement.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-xl border border-base-800 bg-base-900/50 p-6 transition-all duration-300 hover:border-accent-violet/30 hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3">
                {step.number}
              </div>

              {/* Connecting line (desktop) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-2 w-4 h-0.5 bg-gradient-to-r from-base-700 to-transparent" />
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-base-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
