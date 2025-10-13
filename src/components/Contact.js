import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const CallToAction = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 0.8rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
  }

  button {
    padding: 0.8rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  a {
    font-size: 2rem;
    margin: 0 1rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Contact</Title>
      <CallToAction>Let’s connect and build something impactful!</CallToAction>
      <a href="mailto:shashwat.tare@mavs.uta.edu">shashwat.tare@mavs.uta.edu</a>

      <ContactForm>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" rows="5" placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>

      <SocialLinks>
        <a href="https://github.com/shashwat-tare" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shashwat-tare/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;