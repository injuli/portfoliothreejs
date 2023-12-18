// import React, { useRef } from 'react';
import "./App.css";
import styled from "styled-components";
import Works from "./components/Works.tsx";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Home from "./components/Home";

const Container = styled.div`
  height: 100vh;
  background: url(./wp.webp);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar{
    display: none;
  }
`;
function App() {
  // const [count, setCount] = useState(0)

  return (
    // tailwind css usage
    //     <div className={' bg-indigo-800 absolute w-full h-screen p-0 top-0 left-0'}>
    //       <div className={'h-5/6 p-0 '}>
    //         <Canvas camera = {{
    //           position: [0,0,7],
    //           fov:30,

    //         }}>
    //           <color attach="background" args={["#ececec"]}/>
    // // three-drei usage
    //           <OrbitControls/>
    //           <mesh rotation ={[Math.PI / 10,10,10]}>
    // // three-fiber usage
    //             <torusGeometry />
    //             <meshNormalMaterial/>
    //           </mesh>
    //         </Canvas>
    //         <div className={"text-current text-7xl italic font-light z-40 p-5"}>yaee! you made it </div>
    //       </div>
    //     </div>
    <Container>
      <Home />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
