import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Scene = ({ vertex, fragment }) => {
  const meshRef = useRef();

  // Load the noise texture and update the shader uniform
  const noiseTexture = useTexture("noise2.png");
  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    meshRef.current.material.uniforms.iTime.value = time + 20; // start from 20 to skip first 20 seconds (optional)
  });

  // Define the shader uniforms with memoization to optimize performance
  const uniforms = useMemo(
    () => ({
      iTime: { type: "f", value: 1.0 },
      iResolution: { type: "v2", value: new THREE.Vector2(4, 3) },
      iChannel0: { type: "t", value: noiseTexture },
    }),
    [noiseTexture]
  );

  // Create the sun geometry and shader material
  const sunGeom = new THREE.SphereGeometry(30, 64, 64);
  const sunMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex,
    fragmentShader: fragment,
    transparent: true,
  });

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 3]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={vertex}
          fragmentShader={fragment}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Agregar el sol */}
      <mesh>
        <sphereGeometry args={[30, 64, 64]} />
        <primitive object={sunMat} position={[sunPos.x, sunPos.y, sunPos.z]} />
      </mesh>
    </>
  );
};

export default Scene;
