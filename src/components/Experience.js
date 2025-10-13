import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${({ theme }) => theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: 768px) {
      left: 20px;
      margin-left: 0;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  /* Education on the left */
  &.education {
    left: 0;
    padding-right: 30px; /* Add some padding from the center line */
    text-align: right;
  }

  /* Experience on the right */
  &.experience {
    left: 50%;
    padding-left: 30px; /* Add some padding from the center line */
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0 !important; /* Important to override inline-style-like specificity */
    padding-left: 60px;
    padding-right: 15px;
    text-align: left !important;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background: ${({ theme }) => theme.body};
  border-radius: 6px;
  width: 100%;

  h4 a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
      text-decoration: underline;
    }
  }
`;

const YearMarker = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 2rem 0;

  span {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: 'Fira Code', monospace;
    z-index: 1;
    position: relative;
  }
`;


const Experience = () => {
  const timelineData = [
    {
      type: 'experience',
      role: 'Software Engineer',
      company: 'Kopacetic Inc.',
      period: 'Aug 2025 - Present',
      description: 'Optimized backend codebase in Node.js and TypeScript, improving system performance and maintainability. Streamlined Docker builds for GCP deployment, reducing image size and build times. Engineered and enhanced Angular frontend components to ensure a responsive, consistent user interface.',
      url: 'https://trykopa.ai',
    },
    {
      type: 'education',
      role: 'Master of Science in Computer Science',
      company: 'University of Texas at Arlington',
      period: 'Aug 2023 - May 2025',
      description: 'Relevant Coursework: Cloud Computing, Machine Learning, AI, Distributed Systems. Awarded Vruwink Outstanding Grad Student 2025.',
    },
    {
      type: 'experience',
      role: 'Associate Consultant',
      company: 'Oracle Financial Services Software Ltd.',
      period: 'Jun 2022 - Aug 2023',
      description: 'Optimized SQL queries to reduce report generation time by 90%. Engineered scalable Java backend services using Spring Boot, integrating over 15 client-driven features. Resolved over 100 client-reported issues, boosting operational efficiency by 30%.',
    },
    {
      type: 'education',
      role: 'Bachelor of Technology in Computer Engineering',
      company: 'NMIMS University',
      period: 'Jun 2018 - Apr 2022',
      description: 'Relevant Coursework: Advanced Web Development, Object-Oriented Programming, Database Management.',
    },
  ];

  // This logic groups items by year and places the year marker after the items.
  const processedTimeline = timelineData.reduce((acc, item, index) => {
    // Get the start year of the current item
    const currentYear = item.period.match(/\d{4}/)[0];
    
    // Add the item to the accumulator
    acc.push(item);

    // Look ahead to the next item to see if the year changes
    const nextItem = timelineData[index + 1];
    const nextYear = nextItem ? nextItem.period.match(/\d{4}/)[0] : null;

    // If it's the last item or the year is about to change, add the year marker
    if (!nextItem || currentYear !== nextYear) {
      acc.push({ type: 'yearMarker', year: currentYear });
    }
    return acc;
  }, []);

  return (
    <ExperienceSection id="experience">
      <Title>Experience & Education</Title>
      <Timeline> 
        {processedTimeline.map((item, index) => {
          if (item.type === 'yearMarker') {
            return <YearMarker key={`year-${item.year}`}><span>{item.year}</span></YearMarker>;
          }
          return (
            <TimelineItem key={index} className={item.type}>
              <TimelineContent>
                <h3>{item.role}</h3>
                <h4>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                  {' | '}{item.period}
                </h4>
                <p>{item.description}</p>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
