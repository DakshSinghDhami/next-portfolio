"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────
   Drifting Wireframe Geometries
   - Sparse field of small octahedrons + tetrahedrons
   - Slow rotation, gentle vertical drift
   - Wraps when out of view
   - Additive blending, very low opacity
   ───────────────────────────────────────────────────────── */
function DriftingShapes({
  mouse,
  count,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  count: number;
}) {
  const group = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  // Initial transforms (deterministic-ish via index)
  const data = useMemo(() => {
    const items: Array<{
      pos: [number, number, number];
      rot: [number, number, number];
      spin: [number, number, number];
      driftSpeed: number;
      driftOffset: number;
      shape: "octa" | "tetra";
      scale: number;
    }> = [];

    for (let i = 0; i < count; i++) {
      // Distribute across a wide volume so they fill the screen
      const x = (Math.random() - 0.5) * 36;
      const y = (Math.random() - 0.5) * 22;
      const z = -10 - Math.random() * 28;
      items.push({
        pos: [x, y, z],
        rot: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ],
        spin: [
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.05,
        ],
        driftSpeed: 0.05 + Math.random() * 0.12,
        driftOffset: Math.random() * Math.PI * 2,
        shape: i % 3 === 0 ? "tetra" : "octa",
        scale: 0.08 + Math.random() * 0.18,
      });
    }
    return items;
  }, [count]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Slow group-wide drift on mouse parallax
    const targetX = mouse.current.x * 0.6;
    const targetY = -mouse.current.y * 0.4;
    group.current.position.x += (targetX - group.current.position.x) * 0.01;
    group.current.position.y += (targetY - group.current.position.y) * 0.01;

    // Per-shape rotation + vertical drift, wrap around so they cycle
    const children = group.current.children;
    for (let i = 0; i < children.length; i++) {
      const mesh = children[i] as THREE.Mesh;
      const d = data[i];
      mesh.rotation.x += d.spin[0] * delta;
      mesh.rotation.y += d.spin[1] * delta;
      mesh.rotation.z += d.spin[2] * delta;
      // Gentle vertical drift, wrap at ±14
      mesh.position.y =
        d.pos[1] + Math.sin(t * d.driftSpeed + d.driftOffset) * 0.8;
      // If it drifts way off, reset to opposite side
      if (mesh.position.y > 14) mesh.position.y = -14;
      if (mesh.position.y < -14) mesh.position.y = 14;
    }
  });

  return (
    <group ref={group}>
      {data.map((d, i) => (
        <mesh
          key={i}
          position={d.pos}
          rotation={d.rot}
          scale={d.scale}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
        >
          {d.shape === "octa" ? (
            <octahedronGeometry args={[1, 0]} />
          ) : (
            <tetrahedronGeometry args={[1, 0]} />
          )}
          <meshBasicMaterial
            color="#ededed"
            wireframe
            transparent
            opacity={0.18}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─────────────────────────────────────────────────────────
   Particle Field
   - Sparse starfield of small additive points
   - Slow drift
   ───────────────────────────────────────────────────────── */
function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 2] = -8 - Math.random() * 30;
      siz[i] = 0.5 + Math.random() * 1.5;
    }
    return { positions: pos, sizes: siz };
  }, [count]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: {
          value:
            typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio, 1.5)
              : 1,
        },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        uniform float uTime;
        uniform float uPixelRatio;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float twinkle = 0.7 + 0.3 * sin(uTime * 1.5 + position.x * 1.7 + position.y * 2.3);
          gl_PointSize = aSize * 1.2 * uPixelRatio * twinkle / -mvPosition.z * 8.0;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          float alpha = smoothstep(0.5, 0.0, d);
          alpha *= alpha;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(0.9, 0.9, 0.92, alpha * 0.35);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((state, delta) => {
    if (!points.current) return;
    (material.uniforms.uTime.value as number) += delta;
    // Very slow vertical drift
    points.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.3;
  });

  return (
    <points ref={points} material={material}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
    </points>
  );
}

/* ─────────────────────────────────────────────────────────
   Scene wrapper — adaptive count based on device
   ───────────────────────────────────────────────────────── */
export default function Background3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState({ shapes: 30, particles: 600 });

  useEffect(() => {
    setMounted(true);

    // Adaptive count: detect low-end devices
    const lowMem =
      (navigator as any).deviceMemory != null &&
      (navigator as any).deviceMemory < 4;
    const lowCores =
      navigator.hardwareConcurrency != null &&
      navigator.hardwareConcurrency < 4;
    const smallScreen = window.innerWidth < 768;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    if (lowMem || lowCores || smallScreen || coarse) {
      setCounts({ shapes: 16, particles: 250 });
    } else {
      setCounts({ shapes: 40, particles: 700 });
    }

    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 55 }}
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
          <DriftingShapes mouse={mouse} count={counts.shapes} />
          <Particles count={counts.particles} />
        </Canvas>
      </Suspense>
    </div>
  );
}
