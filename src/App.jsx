import styled from "styled-components";

import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

import "./global.css";

const AppContainer = styled.main`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: #fff;
  background: url("/img/bg.jpeg");
`;

function App() {
  return (
    <AppContainer>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </AppContainer>
  );
}

export default App;
