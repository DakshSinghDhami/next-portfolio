"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "01", label: "Intro", href: "#intro" },
  { id: "02", label: "About", href: "#about" },
  { id: "03", label: "Experience", href: "#experience" },
  { id: "04", label: "Projects", href: "#projects" },
  { id: "05", label: "Open Source", href: "#opensource" },
  { id: "06", label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/DakshSinghDhami" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dakshsinghdhami" },
  { label: "X", href: "https://x.com/dakshsdhami" },
];

export default function Sidebar() {
  const [active, setActive] = useState<string>("01");

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 xl:w-80 flex-col justify-between px-10 xl:px-14 py-12 z-40">
      {/* Top: identity */}
      <div>
        {/* Avatar block — typographic, no image dependency */}
        <a
          href="#intro"
          className="inline-flex items-center gap-3 group"
          aria-label="Daksh Singh Dhami — home"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-elevated overflow-hidden">
            <span className="text-[11px] font-mono tracking-widest text-text-dim group-hover:text-text transition-colors">
              DS
            </span>
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition-all duration-500" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-medium text-text tracking-tight">
              Daksh Singh Dhami
            </span>
            <span className="text-[11px] text-text-dim font-mono tracking-wide">
              Full-Stack Engineer
            </span>
          </span>
        </a>

        {/* Tagline / blurb */}
        <p className="mt-8 max-w-[16rem] text-[13px] leading-relaxed text-text-dim">
          Building interactive 3D experiences and tools for the web. Currently{" "}
          <span className="text-text">16</span>, based in India.
        </p>

        {/* Section nav */}
        <nav aria-label="Sections" className="mt-12">
          <ul className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setActive(item.id)}
                    className={`group flex items-center gap-3 py-1.5 text-[13px] font-mono tracking-wider transition-colors ${
                      isActive
                        ? "text-text"
                        : "text-text-muted hover:text-text-dim"
                    }`}
                  >
                    <span
                      className={`tabular-nums text-[11px] transition-colors ${
                        isActive ? "text-text" : "text-text-faint"
                      }`}
                    >
                      {item.id}
                    </span>
                    <span
                      className={`h-px transition-all duration-500 ${
                        isActive
                          ? "w-10 bg-text"
                          : "w-5 bg-text-faint group-hover:w-8 group-hover:bg-text-muted"
                      }`}
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom: socials + email */}
      <div className="space-y-5">
        <ul className="space-y-1.5">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[12px] font-mono tracking-wider text-text-dim hover:text-text transition-colors"
              >
                <span className="h-px w-4 bg-text-faint group-hover:w-6 group-hover:bg-text transition-all duration-500" />
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hi@lucii.xyz"
          className="block text-[12px] font-mono tracking-wider text-text-muted hover:text-text-dim transition-colors break-all"
        >
          hi@lucii.xyz
        </a>

        <p className="text-[11px] font-mono tracking-wider text-text-faint">
          © {new Date().getFullYear()} Daksh Singh Dhami
        </p>
      </div>
    </aside>
  );
}
