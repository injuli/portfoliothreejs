import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Sunset from "./Sunset";
import WaterWaves from "./WaterWaves";

type HomeProps = {};

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  font-size: 74px;
  color: #3c2051;
  background: #d1a7c2;
  padding: 1rem;
  backdrop-filter: blur(10px);
  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Right = styled.div`
  width: 90%;
  height: 90%;
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 90%;
  }

`;

const BlurredBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px); /* Agrega el efecto de difuminado */
  background: rgba(255, 255, 255, 0.5); /* Establece la transparencia */
`;

const AnimationB = styled.div`
  width: auto;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const CircularCanvasWrapper = styled.div`
  width: 500px; /* Ancho deseado */
  height: 500px; /* Altura deseada */
  border-radius: 50%; /* Forma circular */
  overflow: hidden; /* Oculta lo que excede los bordes circulares */
`;

const CircularCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
`;
const Home: React.FC<HomeProps> = () => {
  return (
    <Section>
      {/* <Canvas>
            <AestheticSquare />

            </Canvas> */}
      <Container>
        <Left>
          <Title>Ingrid Ruiz</Title>
          <WhatWeDo>
            <Line src="./wallpaper.jpg" />
            <Subtitle>Desarrolladora Web</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Lern More</Button>
        </Left>
        <Right>
          {/* <BlurredBackground> */}
            {/* <AnimationB> */}
              <CircularCanvasWrapper>
                <CircularCanvas
                  camera={{
                    position: [0, 5, 100],
                    fov: 55,
                    near: 1,
                    far: 20000,
                  }}
                >
                  <pointLight position={[100, 100, 100]} />
                  <pointLight position={[-100, -100, -100]} />
                  <Suspense fallback={null}>
                    <WaterWaves />
                    <Sunset />
                  </Suspense>
                  <Sky
                    scale={1000}
                    sunPosition={[500, 150, -1000]}
                    turbidity={0.1}
                  />
                  <OrbitControls />
                </CircularCanvas>
              </CircularCanvasWrapper>
            {/* </AnimationB> */}
          {/* </BlurredBackground> */}

          {/* <Img src="./giphy-unscreen.gif" /> */}
        </Right>
      </Container>
    </Section>
  );
};
export default Home;
