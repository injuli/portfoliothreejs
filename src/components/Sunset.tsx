import React from "react";
import { Sphere, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const WaterEffect: React.FC = () => {
  return (
    <Html center>
      {/* Aquí puedes insertar un elemento HTML (como un video o un GIF) que represente el efecto de agua */}
      <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
        <source src="ruta_al_recurso_del_agua.mp4" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
    </Html>
  );
};

const Shape: React.FC = () => {
  return (
    <group>
      {/* Representación del sol */}
      <Sphere args={[25, 78, 78]}>
        <meshBasicMaterial color="#fe0000" toneMapped={false} />
      </Sphere>

      {/* Resplandor alrededor del sol */}
      <Sphere args={[27, 78, 78]}>
        <meshBasicMaterial
          color="#fdc188"
          toneMapped={false}
          transparent
          opacity={0.5}
        />
      </Sphere>

      {/* Agregar el efecto de agua */}
      <WaterEffect />
    </group>
  );
};

const Sunset: React.FC = () => {
  return (
    <>
      <Shape />

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
