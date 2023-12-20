import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Sunset from "./Sunset";
import WaterWaves from "./WaterWaves";
import Navbar from "./Navbar";

type HomeProps = {};

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  font-size: 4.2rem;
  color: #3c2051;
  // background: #d1a7c2;
  padding: 1.3rem;
  // backdrop-filter: blur(2px);
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alineación a la derecha */
`;

const Subtitle = styled.h2`
color: #7d3c63;
    // background: #ffdfdf;
    font-size: 1.8rem;
    // align-self: flex-end;
    padding: 1rem;
`;


const Line = styled.img`
  height: 5px;
`;



const Desc = styled.p`
  font-size: 24px;
  color: black;
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


const CircularCanvasWrapper = styled.div`
@apply flex items-center justify-center; 
clip-path: polygon(50% 100%, 0 0, 100% 0);
    width: 80%;
    height: 60%;
    display: flex;
    border: 156px red;
    overflow: hidden;
`;

const CircularCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
`;
const Home: React.FC<HomeProps> = () => {
  return (

    <Section>
      <Navbar />
      {/* <Canvas>
            <AestheticSquare />

            </Canvas> */}
      <Container>
        <Left>
          <Title>Ingrid Ruiz</Title>
          <WhatWeDo>
            {/* <Line src="./wallpaper.jpg" /> */}
            <Subtitle>Desarrolladora Web</Subtitle>
          </WhatWeDo>
          <Desc>
            Apasionada por el desarrollo de experiencias digitales cautivadoras.
          </Desc>
          <Button>Leer más</Button>
        </Left>
        <Right className="flex items-center justify- justify-center">
          <CircularCanvasWrapper className="w-64 h-64">
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

        </Right>
      </Container>
    </Section>
  );
};
export default Home;
