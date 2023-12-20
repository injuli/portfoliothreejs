import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Background = styled.div`
  /* Agrega aquí los estilos para las líneas de fondo */
  /* Por ejemplo: */
  width: 100%;
  height: 100%;
  background-color: rgba(#fff, 0.5);
  background-image: linear-gradient(#d95d16 2px, transparent 2px),
    linear-gradient(90deg, #d95d16 2px, transparent 2px),
    linear-gradient(rgba(150, 150, 150, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(150, 150, 150, 0.3) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const BackgroundLines = () => {
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());

  useEffect(() => {
    const scene = sceneRef.current;

    // Crear una geometría para los cuadrados
    const squareGeometry = new THREE.BoxGeometry(1, 1, 1);

    // Crear un material para los cuadrados
    const squareMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    // Crear múltiples cuadrados y posicionarlos aleatoriamente en la escena
    for (let i = 0; i < 100; i++) {
      const squareMesh = new THREE.Mesh(squareGeometry, squareMaterial);
      squareMesh.position.x = (Math.random() - 0.5) * 100; // Posición X aleatoria
      squareMesh.position.y = (Math.random() - 0.5) * 100; // Posición Y aleatoria
      squareMesh.position.z = (Math.random() - 0.5) * 100; // Posición Z aleatoria
      scene.add(squareMesh); // Agregar cada cuadrado a la escena
    }
  }, []);

  return (
    <Background>
      <Canvas>
        <scene ref={sceneRef} /> {/* Referencia a la escena */}
      </Canvas>
    </Background>
  );
};

export default BackgroundLines;
