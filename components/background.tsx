'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Environment, Sphere } from '@react-three/drei'

function GlowingSphere() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

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
          color="#a78bfa"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Sphere>
    </>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Environment preset="night" />
        <GlowingSphere />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}

