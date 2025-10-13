import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 900px;
  width: 100%;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechItem = styled.li`
  background-color: ${({ theme }) => theme.primary}20; /* Primary color with alpha */
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-family: 'Fira Code', monospace;
`;

const Projects = () => {
  const projectData = [
    {
      title: 'BotKonnect - AI-Powered Phone Call Assistant',
      description: 'Developed an AI-driven phone assistant using OpenAI API & Twilio, improving call efficiency by 40%. Built a MERN stack dashboard for real-time business analytics.',
      tech: ['MERN', 'OpenAI API', 'Twilio', 'Node.js', 'React'],
    },
    {
      title: 'Semantic Search Engine',
      description: 'Engineered a search engine using NLP and Deep Learning on a large-scale IMDB dataset, increasing search accuracy by 35%. Utilized BERT-based semantic encoding and optimized retrieval speeds by 60% with Elasticsearch.',
      tech: ['Python', 'NLP', 'Deep Learning', 'BERT', 'Elasticsearch'],
    },
    {
      title: 'SecuroServe - Secure Chat App',
      description: 'Collaborated on a real-time messaging application using a MEAN stack. Implemented end-to-end encryption to reduce security risks by 80% while enabling secure, low-bandwidth communication.',
      tech: ['MEAN', 'Angular', 'Node.js', 'MongoDB', 'Encryption'],
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Title>Things I've Built</Title>
      <ProjectsGrid>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map((tech, i) => (
                <TechItem key={i}>{tech}</TechItem>
              ))}
            </TechList>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;