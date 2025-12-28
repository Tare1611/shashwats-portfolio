import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';
import LeftSidebar from './components/LeftSidebar';

import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Chatbot from './components/Chatbot';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    display: block;
  }
`;

const RightColumn = styled.main`
  padding: 4rem 2rem;

  @media (max-width: 1080px) {
    padding: 2rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <LeftSidebar />
        <RightColumn>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
          {/* Contact section will go here */}
        </RightColumn>
        <Chatbot />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
