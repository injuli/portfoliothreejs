import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AestheticSquare: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial color={0xff00ff} wireframe />
    </mesh>
  );
};

export default AestheticSquare;
