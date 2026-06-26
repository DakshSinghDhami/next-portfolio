"use client";

import { scrollToTop } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-base">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 lg:pl-[18rem] xl:pl-[22rem] py-8 flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-wider uppercase text-text-faint">
          © {new Date().getFullYear()} Daksh Singh Dhami
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-text-muted hover:text-text transition-colors"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <span className="inline-block transition-transform group-hover:-translate-y-0.5">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}
