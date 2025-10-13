import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  width: 100%;
`;

const TestimonialCard = styled.a`
  background: ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Quote = styled.blockquote`
  margin: 0 0 1.5rem 0;
  padding: 0;
  font-style: italic;
  color: ${({ theme }) => theme.text};
  border-left: 3px solid ${({ theme }) => theme.primary};
  padding-left: 1.5rem;
  line-height: 1.6;
`;

const Author = styled.footer`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  cite {
    display: block;
    font-style: normal;
    font-weight: normal;
    color: ${({ theme }) => theme.textSecondary};
    margin-top: 0.25rem;
  }
`;

const Testimonials = () => {
  const testimonialData = [
    {
      text: "Shashwat stands out for his unwavering determination to improve not only himself, but also the people and processes around him. He consistently took initiative—whether it was streamlining front desk operations or designing and implementing a more efficient check-in/out system for the teaching assistant printing station. Beyond the systems he improved, he ensured sustainability by creating thorough documentation for future team members. I was frequently impressed during casual check-ins when he would present a new idea or proactively flag an issue I hadn’t yet noticed. Shashwat brings a mindset of continuous improvement, and any team would be lucky to have him.",
      author: "Samantha Oliva",
      title: "Special Events Coordinator, University of Texas at Arlington",
      url: "https://www.linkedin.com/in/shashwat-tare/details/recommendations/", // Replace with direct link
    },
    {
      text: "I had the pleasure of working with Shashwat throughout his journey at Oracle Financial, from a fresh graduate to a skilled and impactful software engineer. He quickly adapted to complex systems, took ownership of key projects, and consistently delivered high-quality solutions in backend development, bug resolution, and SQL query optimization. Beyond his technical expertise, Shashwat is a proactive team player who continuously strives for improvement and knowledge-sharing. I highly recommend him to any organization looking for a talented and dedicated engineer.",
      author: "Satyam Shukla",
      title: "Senior Principal Consultant, Oracle",
      url: "https://www.linkedin.com/in/shashwat-tare/details/recommendations/", // Replace with direct link
    },
    {
      text: "Without delving into the nitty-gritty of tech, Shashwat is the person you go to when you need to get something done. He is driven by excellent analytical and problem-solving skills and demonstrates a high level of work-ethic.",
      author: "Arun Nair",
      title: "Senior Consultant, Oracle",
      url: "https://www.linkedin.com/in/shashwat-tare/details/recommendations/", // Replace with direct link
    },
    {
      text: "A very talented developer with a strong work ethic. Shashwat's contributions to our projects were significant and always of high quality.",
      author: "Michael Brown",
      title: "Professor, University of Texas at Arlington",
      url: "https://www.linkedin.com/in/shashwat-tare/details/recommendations/", // Replace with direct link
    },
    // Add more testimonials here
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Title>Recommendations</Title>
      <TestimonialsGrid>
        {testimonialData.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard key={index} href={testimonial.url} target="_blank" rel="noopener noreferrer">
            <Quote>"{testimonial.text}"</Quote>
            <Author>{testimonial.author} <cite>{testimonial.title}</cite></Author>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;