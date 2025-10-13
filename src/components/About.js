import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
`;

const AboutContainer = styled.div`
  max-width: 900px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
`;

const AboutText = styled.div`
  /* No max-width needed, it will inherit from the container */
  p + p {
    margin-top: 1rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <Title>About Me</Title>
        <AboutText>
          <p>
            Hello! I'm Shashwat, a software engineer with a passion for building scalable backend systems and exploring the intersection of AI and system design. I recently graduated with a Master's in Computer Science from the University of Texas at Arlington.
          </p>
          <p>
            My journey in tech began at Oracle, where I optimized complex financial systems and engineered robust Java backend services. Now, as a Software Engineer at Kopacetic Inc., I'm focused on enhancing backend performance with Node.js and TypeScript and building responsive user interfaces with Angular.
          </p>
        </AboutText>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;