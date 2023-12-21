import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, PositionalAudio } from '@react-three/drei';

const Scene = ({ ready }) => {
  // const meshRef = useRef();
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/vaporwave_sunset.glb");
  useFrame(() => (group.current.rotation.x += 0.006));

  return (
    <group ref={group} >
      <group >
        <group scale={100} dispose={null}>
        <mesh material={materials.Material_5} geometry={nodes.Object_4.geometry} />
        </group>
        <group scale={1.991} dispose={null} position={[0, 0, -20]}>
          <mesh material={materials.Black} geometry={nodes.Object_6.geometry} />
          <mesh
            material={materials.Material_2}
            geometry={nodes.Object_7.geometry}
          />
          <mesh
            material={materials.Material_2}
            geometry={nodes.Object_8.geometry}
          />
        </group>
        <group scale={1.991} dispose={null} position={[0, 0, -20]}>
          <mesh
            material={materials.Black}
            geometry={nodes.Object_10.geometry}
          />
          <mesh
            material={materials.Material_3}
            geometry={nodes.Object_11.geometry}
          />
        </group>
        <group scale={1.991} dispose={null} position={[0, 0, -20]}>
          <mesh
            material={materials.Black}
            geometry={nodes.Object_13.geometry}
          />
          <mesh
            material={materials.Material_4}
            geometry={nodes.Object_14.geometry}
          />
        </group>
        <group scale={1} position={[0, 0, 0]}>
        {ready && <PositionalAudio autoplay loop url="/abstract-world.mp3" distance={3} />}
        </group>
        <group scale={24} dispose={null} position={[0, 80, 0]}>
          
        <mesh
            material={materials.Sun_001}
            geometry={nodes.Object_16.geometry}
          />
        </group>


      </group>
    </group>
  );
};

export default Scene;
