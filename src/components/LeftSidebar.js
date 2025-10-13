import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Socials from './Socials';
import profileImage from '../assets/img/profile.png'; // Import the image

const SidebarContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 4rem;

  @media (max-width: 1080px) {
    position: relative;
    height: auto;
    padding: 2rem;
    overflow-y: visible; /* Disable vertical scroll when stacked */
  }

  /* Styles for short screens */
  @media (max-height: 720px) and (min-width: 1081px){
    padding: 2rem;
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;

  @media (max-height: 720px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: clamp(28px, 5vw, 40px);
  color: ${({ theme }) => theme.text};
  margin: 0;

  @media (max-height: 720px) {
    font-size: clamp(24px, 5vw, 28px);
  }
`;

const Tagline = styled.h2`
  font-size: clamp(10px, 3vw, 20px);
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 0.5rem;
  font-weight: 400;
`;

const Description = styled.p`
  margin-top: 2rem;
  max-width: 400px;
  line-height: 1.6;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  text-align: center;
  font-family: 'Fira Code', monospace;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const LeftSidebar = () => {
  return (
    <SidebarContainer>
      <IntroContainer>
        <ProfilePic src={profileImage} alt="Shashwat Shyam Tare" />
        <Title>Shashwat Tare</Title>
        <Tagline>Software Engineer</Tagline>
        <Description>
          I build scalable backend systems and explore the intersection of AI and system design.
        </Description>
        <Navbar />
      </IntroContainer>
      <div>
        <ResumeButton href="https://drive.google.com/file/d/1oi41tZxBzrtzzxzoYROCEkpICMfl2P0-/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</ResumeButton>
        <Socials />
      </div>
    </SidebarContainer>
  );
};

export default LeftSidebar;