import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 10%;
  background: ${({ theme }) => theme.background};
`;

const Subtitle = styled.h2`
  font-family: 'Fira Code', monospace;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(40px, 8vw, 80px); /* Responsive font size */
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const Tagline = styled.h3`
  font-size: clamp(30px, 6vw, 70px); /* Responsive font size */
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 0.5rem;
`;

const Description = styled.p`
  margin-top: 1.5rem;
  max-width: 550px;
  line-height: 1.6;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Subtitle>Hi, my name is</Subtitle>
      <Title>Shashwat Shyam Tare.</Title>
      <Tagline>I build things for the web.</Tagline>
      <Description>
        I'm a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building scalable backend systems and exploring the intersection of AI and system design.
      </Description>
    </HeroSection>
  );
};

export default Hero;