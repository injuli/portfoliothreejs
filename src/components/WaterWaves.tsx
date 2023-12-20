import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useLoader, useFrame, extend, useThree  } from '@react-three/fiber';
import { Water } from 'three-stdlib';

extend({ Water });

const WaterWaves: React.FC = () => {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0xffbbbb,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    []
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))

  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
};

export default WaterWaves;
