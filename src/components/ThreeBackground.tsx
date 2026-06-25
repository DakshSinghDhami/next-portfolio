"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function ParticleGalaxy({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.05,
        0.02
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.current.x * 0.05 + groupRef.current.rotation.y,
        0.02
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Stars
        radius={viewport.width * 2}
        depth={100}
        count={3000}
        factor={4}
        saturation={0.5}
        fade
        speed={0.5}
      />
    </group>
  );
}

function GalaxyScene() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      onPointerMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    >
      <ParticleGalaxy mouse={mouse} />
    </Canvas>
  );
}

export default function ThreeBackground() {
  return <GalaxyScene />;
}
