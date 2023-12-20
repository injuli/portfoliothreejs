import styled from "styled-components";
import Works from "./components/Works.tsx";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Home from "./components/Home";


const Container = styled.div`
  height: 100vh;
  background-color: #FFB6C1;
  background-image: linear-gradient(#00bfff36 2px, transparent 2px),linear-gradient(90deg, #00bfff36 2px, transparent 2px),linear-gradient(rgb(150 150 150 / 0%) 1px, transparent 1px),linear-gradient(90deg, rgb(150 150 150 / 0%) 1px, transparent 1px);
  background-size: 100px 100px,100px 100px,20px 20px,20px 20px;
  background-position: -2px -2px,-2px -2px,-1px -1px,-1px -1px;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <Container>
      <ContentWrapper>
        <Home />
        <Who />
        <Works />
        <Contact />
      </ContentWrapper>
    </Container>
  );
}

export default App;
