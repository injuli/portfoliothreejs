import * as THREE from "three";
import React  from "react";
import { Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Sun: React.FC = () => {
  return (
    <group>
      {/* Representación del sol */}
      <Sphere args={[25, 64, 64]}>
        <meshBasicMaterial color="#ff0000" toneMapped={false} />
      </Sphere>

      {/* Resplandor alrededor del sol */}
      <Sphere args={[30, 64, 64]}>
        <meshBasicMaterial
          color="#ffc289"
          toneMapped={false}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </group>
  );
};

const Sunset: React.FC = () => {
  return (
    <>
      <Sun />

      {/* Efectos de postprocesamiento */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.8}
          luminanceSmoothing={0.1}
          height={300}
          opacity={1}
        />
      </EffectComposer>
    </>
  );
};

export default Sunset;
