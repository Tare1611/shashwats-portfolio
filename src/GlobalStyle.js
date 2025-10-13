import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textSecondary};
    font-family: ${({ theme }) => theme.fontFamily};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
  }

  section {
    padding: 100px 0;

    @media (max-width: 768px) {
      padding: 50px 0;
    }
  }
`;

export default GlobalStyle;