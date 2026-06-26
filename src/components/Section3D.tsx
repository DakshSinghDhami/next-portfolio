"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────
   Floating Geometric Cluster
   - A small set of large wireframe shapes (icosahedron, torus, dodecahedron)
   - Slow rotation + float
   - Subtle, low opacity, additive
   ───────────────────────────────────────────────────────── */
function FloatingCluster({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null);
  const icoRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const dodecaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (icoRef.current) {
      icoRef.current.rotation.x += delta * 0.05;
      icoRef.current.rotation.y += delta * 0.07;
      icoRef.current.position.y = Math.sin(t * 0.3) * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.04;
      torusRef.current.rotation.z += delta * 0.06;
      torusRef.current.position.y = -0.5 + Math.sin(t * 0.4 + 1) * 0.25;
    }
    if (dodecaRef.current) {
      dodecaRef.current.rotation.y += delta * 0.05;
      dodecaRef.current.rotation.z += delta * 0.03;
      dodecaRef.current.position.y = 0.4 + Math.sin(t * 0.35 + 2) * 0.3;
    }
    if (group.current) {
      // Mouse parallax
      const targetX = mouse.current.x * 0.4;
      const targetY = -mouse.current.y * 0.3;
      group.current.rotation.y +=
        (targetX - group.current.rotation.y) * 0.01;
      group.current.rotation.x +=
        (targetY * 0.3 - group.current.rotation.x) * 0.01;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={icoRef} position={[-3.5, 0.5, -2]}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial
          color="#ededed"
          wireframe
          transparent
          opacity={0.12}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={torusRef} position={[3.2, -0.5, -3]}>
        <torusGeometry args={[1.1, 0.4, 8, 24]} />
        <meshBasicMaterial
          color="#c4a882"
          wireframe
          transparent
          opacity={0.14}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={dodecaRef} position={[0, 1.5, -4]}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial
          color="#ededed"
          wireframe
          transparent
          opacity={0.10}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/* ─────────────────────────────────────────────────────────
   Drifting Floor Grid
   - A horizontal grid that drifts toward the camera
   ───────────────────────────────────────────────────────── */
function DriftingGrid() {
  const grid = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (!grid.current) return;
    // Animate offset to make grid appear to flow
    const mat = grid.current.material as THREE.LineBasicMaterial;
    // GridHelper doesn't directly expose offset; use position to suggest drift
    grid.current.position.z =
      ((state.clock.elapsedTime * 0.6) % 1) * 0.5;
    // Subtle rotation for life
    grid.current.rotation.x = -Math.PI / 2.2;
  });

  return (
    // GridHelper args: size, divisions, colorCenter, colorGrid
    // Use a small size with a tight spacing, low opacity
    <gridHelper
      ref={grid}
      args={[40, 32, "#1f1f1f", "#161616"]}
      position={[0, -3, -6]}
    />
  );
}

/* ─────────────────────────────────────────────────────────
   Section3D — a wrapper to be placed in a section
   ───────────────────────────────────────────────────────── */
interface Section3DProps {
  height?: number;
  variant?: "cluster" | "grid" | "both";
}

export default function Section3D({
  height = 480,
  variant = "both",
}: Section3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enableHeavy, setEnableHeavy] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Adaptive: low-end detection
    const lowMem =
      (navigator as any).deviceMemory != null &&
      (navigator as any).deviceMemory < 4;
    const lowCores =
      navigator.hardwareConcurrency != null &&
      navigator.hardwareConcurrency < 4;
    const smallScreen = window.innerWidth < 768;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (lowMem || lowCores || smallScreen || coarse) {
      setEnableHeavy(false);
    }

    // Only render the canvas while in viewport
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const onMove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      if (rect.width === 0) return;
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted || !visible) {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          height: "100%",
        }}
      />
    );
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={[1, 1.2]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: false,
          }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <AdaptiveDpr pixelated />
          {(variant === "cluster" || variant === "both") && (
            <FloatingCluster mouse={mouse} />
          )}
          {enableHeavy && (variant === "grid" || variant === "both") && (
            <DriftingGrid />
          )}
        </Canvas>
      </Suspense>
    </div>
  );
}
