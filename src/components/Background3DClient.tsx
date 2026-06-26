"use client";

import dynamic from "next/dynamic";

// Persistent 3D background — appears behind all content.
// Must be a Client Component because `ssr: false` is not allowed
// in Server Components as of Next.js 16.
const Background3D = dynamic(
  () => import("@/components/Background3D"),
  { ssr: false }
);

export default function Background3DClient() {
  return <Background3D />;
}
