"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Environment } from "@react-three/drei";

function GlowingSphere() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#facc15"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={1000}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#fef08a"
          sizeAttenuation
          transparent
          opacity={0.4}
        />
      </points>
    </>
  );
}

function ParallaxEffect() {
  const { camera } = useThree();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 1.5 - 1,
        y: -(event.clientY / window.innerHeight) * 1.5 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Background() {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [2, 0, 5] }}>
        <Environment preset="night" />
        <GlowingSphere />
        <ParallaxEffect />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
