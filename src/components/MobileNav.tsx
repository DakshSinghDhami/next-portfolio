"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "Intro", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-base/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-6">
          <a
            href="#intro"
            className="font-mono text-[13px] tracking-[0.2em] uppercase text-text"
          >
            Daksh
          </a>
          <button
            type="button"
            className="relative h-6 w-7 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`block absolute h-px w-6 bg-text transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block absolute h-px w-6 bg-text transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block absolute h-px w-6 bg-text transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-base transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav className="h-full flex flex-col justify-center px-8">
          <ol className="space-y-6">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-border pb-6"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `transform 0.5s ${0.1 + i * 0.05}s ${
                    "cubic-bezier(0.16,1,0.3,1)"
                  }, opacity 0.4s ${0.1 + i * 0.05}s`,
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="flex items-baseline gap-4"
                >
                  <span className="font-mono text-[11px] tracking-wider text-text-muted tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-[36px] font-display text-text tracking-tight">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </>
  );
}
