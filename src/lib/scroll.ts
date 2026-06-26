/**
 * Smoothly scroll to the top of the page.
 * Safe to call from event handlers (no-ops during SSR).
 */
export function scrollToTop(): void {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
