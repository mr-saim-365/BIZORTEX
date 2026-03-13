

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";

const RubiksCube = () => {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.35;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.15;
  });

  const primary = "#F14160";
  const dark = "#0e0e0e";

  const cubes = [];
  const offset = 1.05;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {

        const color = (x + y + z) % 2 === 0 ? primary : dark;

        cubes.push(
          <mesh key={`${x}${y}${z}`} position={[x * offset, y * offset, z * offset]}>
            <boxGeometry args={[0.95, 0.95, 0.95]} />
            <meshStandardMaterial
              color={color}
              metalness={0.6}
              roughness={0.25}
            />
          </mesh>
        );
      }
    }
  }

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={group}>{cubes}</group>
    </Float>
  );
};

const RubikScene = () => {
  return (

    <div className="w-full h-[50vh]">
      <Canvas camera={{ position: [5, 5, 8], fov: 35 }}>

        <ambientLight intensity={0.4} />

        <directionalLight
          position={[6, 6, 6]}
          intensity={2}
          color="#F14160"
        />

        <directionalLight
          position={[-6, -6, -6]}
          intensity={1}
          color="#ffffff"
        />

        <RubiksCube />

        <ContactShadows
          position={[0, -4, 0]}
          opacity={0.45}
          scale={18}
          blur={2}
          far={6}
        />

        <Environment preset="city" />

      </Canvas>
    </div>
  );
};

export default RubikScene;


