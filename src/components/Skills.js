import React from 'react';
import styled from 'styled-components';
import {
  FaPython, FaJsSquare, FaJava, FaHtml5, FaCss3Alt, FaNodeJs,
  FaReact, FaAngular, FaDocker, FaGitAlt, FaAws, FaGoogle, FaCode, FaBitbucket, FaJira
} from 'react-icons/fa';
import { SiSpring, SiKubernetes, SiFlask, SiOracle, SiMysql, SiMongodb } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    width: 35px;
    height: 35px;
    fill: ${({ theme }) => theme.textSecondary};
    transition: fill 0.3s ease;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.primary};
  }
`;

const SkillName = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
`;

const skillsList = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'TypeScript', icon: <SiFlask /> }, // Using a placeholder, FaCode can also be used
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: 'Spring', icon: <SiSpring /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Oracle SQL', icon: <SiOracle /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Google Cloud', icon: <FaGoogle /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Bitbucket', icon: <FaBitbucket /> },
  { name: 'Jira', icon: <FaJira /> },
  { name: 'REST APIs', icon: <FaCode /> },
];

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Title>Technologies I Use</Title>
      <SkillsGrid>
        {skillsList.map((skill) => {
          return (
            <SkillCard key={skill.name}>
              {skill.icon ? (
                React.cloneElement(skill.icon, { title: skill.name })
              ) : (
                // Fallback for icons not found
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10.5 17.5L4 11L5.5 9.5L10.5 14.5L18.5 6.5L20 8L10.5 17.5Z" />
                </svg>
              )}
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          );
        })}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
