import styled from "styled-components";

import { Section } from "./common";
import Navbar from "./Navbar";

const HeroSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
const Right = styled.div`
  flex: 2;
  position: relative;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 5em;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Line = styled.img`
  height: 5px;
`;
const Img = styled.img`
  /* width: 800px; */
  height: 800px;
  object-fit: contain;
  position: absolute;
  inset: 0;
  margin: auto;
  animation: updown 1s infinite ease alternate;

  @keyframes updown {
    to {
      transform: translateY(20px);
    }
  }
`;

const Desc = styled.p`
  font-size: 22px;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  outline: none;
  border: none;
  width: 200px;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5rem;
  margin-inline: auto;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="/img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, user-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="/img/moon.png" />
        </Right>
      </Container>
    </HeroSection>
  );
};

export default Hero;
