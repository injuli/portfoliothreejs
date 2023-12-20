import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              {/* <Cube /> */}
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Bienvenido a mi portafolio</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>¿Quién soy?</Subtitle>
          </WhatWeDo>
          <Desc>
          Desarrolladora, apasionados por las artes y la innovación en el mundo digital. Con una sólida experiencia en Angular, Java, C#, PostgreSQL y actualmente explorando las maravillas de React con Next y Vite, estoy constantemente impulsando los límites y entregando soluciones únicas y atractivas.
          </Desc>
          <Button>Mis trabajos</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;