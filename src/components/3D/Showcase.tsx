"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function PlaceholderModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Subtle rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={0.5} // XYZ rotation intensity
      floatIntensity={1} // Up/down float intensity
    >
      <mesh ref={meshRef} scale={1.5} castShadow>
        {/* Using a TorusKnot to simulate a complex, soft organic shape like clothing fabric folds temporarily */}
        <torusKnotGeometry args={[1, 0.4, 256, 32]} />
        <MeshDistortMaterial
          color="#1a1a1a" // Dark elegant color
          envMapIntensity={1}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          metalness={0.8}
          roughness={0.2}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export function Showcase() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={["#0A0A0A"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <PlaceholderModel />
        </PresentationControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
