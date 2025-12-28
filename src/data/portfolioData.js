import React from 'react';
import {
    FaPython, FaJsSquare, FaJava, FaHtml5, FaCss3Alt, FaNodeJs,
    FaReact, FaAngular, FaDocker, FaGitAlt, FaAws, FaGoogle, FaCode, FaBitbucket, FaJira
} from 'react-icons/fa';
import { SiSpring, SiKubernetes, SiFlask, SiOracle, SiMysql, SiMongodb, SiTypescript } from 'react-icons/si';

export const experienceData = [
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

export const projectsData = [
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

export const skillsData = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
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

export const aboutData = {
    name: 'Shashwat Shyam Tare',
    role: 'Software Engineer',
    tagline: 'I build things for the web.',
    description: "I'm a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building scalable backend systems and exploring the intersection of AI and system design."
};
