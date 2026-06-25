"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-base-800 bg-base-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-base-500">
            &copy; {new Date().getFullYear()} Lucii. All rights reserved.
          </p>

          {/* Social + Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DakshSinghDhami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-base-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dakshsinghdhami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-base-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/dakshsdhami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-base-500 hover:text-white transition-colors"
              aria-label="X / Twitter"
            >
              X
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center rounded-lg border border-base-800 bg-base-900/50 p-2 text-base-400 hover:text-white hover:border-accent-violet/50 transition-all"
              aria-label="Back to top"
            >
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
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
