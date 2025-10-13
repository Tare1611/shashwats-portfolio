
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .section {
    padding: 4rem 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
