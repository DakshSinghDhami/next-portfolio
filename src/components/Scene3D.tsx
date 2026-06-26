"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────
   Spiral Galaxy
   - 5-arm logarithmic spiral
   - Center bright → mid soft white → outer cool dust
   - Additive blending for natural glow
   - Mouse-reactive parallax + slow auto-rotation
   ───────────────────────────────────────────────────────── */
function Galaxy({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const points = useRef<THREE.Points>(null);
  const { camera } = useThree();

  // Device detection — once, at mount
  const { count, radius } = useMemo(() => {
    if (typeof window === "undefined") return { count: 10000, radius: 8.5 };
    const lowMem = (navigator as any).deviceMemory != null &&
      (navigator as any).deviceMemory < 4;
    const lowCores = navigator.hardwareConcurrency != null &&
      navigator.hardwareConcurrency < 4;
    const smallScreen = window.innerWidth < 768;
    if (lowMem || lowCores || smallScreen) {
      return { count: 5000, radius: 7.5 };
    }
    // Detect coarse pointer as a "low-end" proxy on mobile
    if (window.matchMedia("(pointer: coarse)").matches) {
      return { count: 5000, radius: 7.5 };
    }
    return { count: 15000, radius: 9.5 };
  }, []);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    // Expanded palette: bright white core, warm cream mid,
    // amber/blue accents for outer dust
    const core = new THREE.Color("#ffffff");
    const midWarm = new THREE.Color("#d4c4b0"); // warm cream
    const midCool = new THREE.Color("#a8b4c0"); // cool steel
    const edge = new THREE.Color("#3a3530"); // dim warm
    const amber = new THREE.Color("#c4a882"); // signature accent
    const dustyBlue = new THREE.Color("#5a6a7a");

    const arms = 5;
    const armWidth = 0.45;
    const spinFactor = 1.4;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Power distribution — most particles near center
      const r = Math.pow(Math.random(), 1.6) * radius;
      const branch = i % arms;
      const branchAngle = (branch / arms) * Math.PI * 2;
      const spin = r * spinFactor;

      // Random offset perpendicular to arm (wider as r grows)
      const offset =
        (Math.random() - 0.5) *
        armWidth *
        r *
        0.9 *
        (0.6 + Math.random() * 0.4);

      const ax = Math.cos(branchAngle + spin) * r;
      const az = Math.sin(branchAngle + spin) * r;
      const px = ax + Math.cos(branchAngle + Math.PI / 2) * offset;
      const pz = az + Math.sin(branchAngle + Math.PI / 2) * offset;

      // Vertical scatter — thin disk
      const py =
        (Math.random() - 0.5) *
        0.18 *
        r *
        (0.4 + Math.random() * 0.6) *
        (Math.random() < 0.85 ? 1 : 0.2);

      pos[i3] = px;
      pos[i3 + 1] = py;
      pos[i3 + 2] = pz;

      // Color gradient by radius, with more variation
      const t = r / radius;
      const c = (() => {
        if (t < 0.18) {
          // Core: pure white blending toward warm cream
          return core.clone().lerp(midWarm, t / 0.18);
        }
        if (t < 0.4) {
          // Inner dust: warm cream blending toward cool steel
          return midWarm.clone().lerp(midCool, (t - 0.18) / 0.22);
        }
        if (t < 0.7) {
          // Mid: cool steel blending toward dim warm
          return midCool.clone().lerp(edge, (t - 0.4) / 0.3);
        }
        // Outer: mix in amber and dusty blue for variety
        const dustRoll = Math.random();
        if (dustRoll < 0.35) {
          return amber
            .clone()
            .multiplyScalar(0.4 + Math.random() * 0.7);
        }
        if (dustRoll < 0.6) {
          return dustyBlue
            .clone()
            .multiplyScalar(0.4 + Math.random() * 0.6);
        }
        return edge
          .clone()
          .multiplyScalar(0.7 + Math.random() * 0.6);
      })();

      // Brightness falls off with radius
      const brightness = Math.max(0.15, 1 - t * 0.9);
      col[i3] = c.r * brightness;
      col[i3 + 1] = c.g * brightness;
      col[i3 + 2] = c.b * brightness;

      // Size — bigger near center, smaller at edge
      siz[i] = 0.02 + (1 - t) * 0.05 + Math.random() * 0.02;
    }

    return { positions: pos, colors: col, sizes: siz };
  }, [count, radius]);

  // Build a custom shader material so we can do per-point size + soft round sprite
  const material = useMemo(() => {
    const m = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1 },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float uTime;
        uniform float uPixelRatio;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          // Subtle twinkle by sin wave
          float twinkle = 0.85 + 0.15 * sin(uTime * 1.2 + position.x * 2.0 + position.z * 1.7);
          gl_PointSize = aSize * 320.0 * uPixelRatio * twinkle / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vColor;
        void main() {
          // Soft round point
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          float alpha = smoothstep(0.5, 0.0, d);
          alpha *= alpha;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return m;
  }, []);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((state, delta) => {
    if (!points.current) return;
    // Slow auto-rotation
    points.current.rotation.y += delta * 0.035;
    // Mouse parallax on rotation (more dramatic)
    const targetX = mouse.current.y * 0.18 + 0.1;
    const targetZ = mouse.current.x * 0.12;
    points.current.rotation.x = THREE.MathUtils.lerp(
      points.current.rotation.x,
      targetX,
      0.025
    );
    points.current.rotation.z = THREE.MathUtils.lerp(
      points.current.rotation.z,
      targetZ,
      0.025
    );
    // Camera parallax (more dramatic)
    const cam = state.camera as THREE.PerspectiveCamera;
    cam.position.x += (mouse.current.x * 0.9 - cam.position.x) * 0.02;
    cam.position.y += (-mouse.current.y * 0.6 - cam.position.y) * 0.02;
    cam.lookAt(0, 0, 0);
    // Update shader time
    (material.uniforms.uTime.value as number) += delta;
  });

  return (
    <points ref={points} material={material}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
      </bufferGeometry>
    </points>
  );
}

/* ─────────────────────────────────────────────────────────
   Scene wrapper — picks tier based on detected device
   ───────────────────────────────────────────────────────── */
export default function Scene3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ position: [0, 1, 7], fov: 60 }}
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
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <AdaptiveDpr pixelated />
        <Galaxy mouse={mouse} />
        <Preload all />
      </Canvas>
    </Suspense>
  );
}
