"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  AdaptiveDpr,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({
  position,
  rotation,
  scale,
  color,
  geometry,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  geometry: "torus" | "octahedron" | "icosahedron" | "dodecahedron";
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const geom = useMemo(() => {
    switch (geometry) {
      case "torus":
        return new THREE.TorusGeometry(1, 0.4, 16, 32);
      case "octahedron":
        return new THREE.OctahedronGeometry(1);
      case "icosahedron":
        return new THREE.IcosahedronGeometry(1);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(1);
    }
  }, [geometry]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.002 * speed;
      ref.current.rotation.y += 0.003 * speed;
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={ref}
        position={position}
        rotation={rotation}
        scale={scale * Math.min(1, viewport.width / 8)}
      >
        <primitive object={geom} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.25}
          wireframe
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  const mouse = useRef({ x: 0, y: 0 });

  const geometries = useMemo(
    () => [
      { position: [-4, 2, -5] as [number, number, number], rotation: [0.5, 0.2, 0] as [number, number, number], scale: 1.2, color: "#8b5cf6", geometry: "torus" as const, speed: 1.2 },
      { position: [3.5, -1.5, -4] as [number, number, number], rotation: [0.3, 0.8, 0.1] as [number, number, number], scale: 0.9, color: "#22d3ee", geometry: "octahedron" as const, speed: 0.8 },
      { position: [-2, -2, -6] as [number, number, number], rotation: [0.1, 0.5, 0.3] as [number, number, number], scale: 1.0, color: "#f59e0b", geometry: "icosahedron" as const, speed: 1.0 },
      { position: [4.5, 1.8, -7] as [number, number, number], rotation: [0.6, 0.1, 0.4] as [number, number, number], scale: 0.8, color: "#10b981", geometry: "dodecahedron" as const, speed: 0.6 },
      { position: [-3.5, 3, -8] as [number, number, number], rotation: [0.2, 0.6, 0.1] as [number, number, number], scale: 1.1, color: "#f43f5e", geometry: "torus" as const, speed: 0.9 },
    ],
    []
  );

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.02,
        0.02
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.current.x * 0.02,
        0.02
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={80}
        depth={80}
        count={2000}
        factor={3}
        saturation={0}
        fade
        speed={0.3}
      />
      {geometries.map((g, i) => (
        <FloatingGeometry key={i} {...g} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
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
      <SceneContent />
    </Canvas>
  );
}

export default function Scene3D() {
  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
}
