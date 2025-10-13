import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-top: 3rem;
  font-family: 'Fira Code', monospace;
  width: fit-content;
`;

const NavLinks = styled.ol`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLinkItem = styled.li`
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  svg {
    width: 20px; /* Initial width */
    stroke: ${({ theme }) => theme.textSecondary};
    transition: width 0.3s ease, stroke 0.3s ease;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.primary};
    }
    svg {
      width: 40px; /* Elongated width on hover */
      stroke: ${({ theme }) => theme.primary};
    }
  }
`;

const Navbar = () => {
  const Arrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="0" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  return (
    <Nav>
      <NavLinks>
        <NavLinkItem><a href="#about"><Arrow /><span>About</span></a></NavLinkItem>
        <NavLinkItem><a href="#skills"><Arrow /><span>Skills</span></a></NavLinkItem>
        <NavLinkItem><a href="#experience"><Arrow /><span>Journey</span></a></NavLinkItem>
        <NavLinkItem><a href="#projects"><Arrow /><span>Projects</span></a></NavLinkItem>
        <NavLinkItem><a href="#testimonials"><Arrow /><span>Recommendations</span></a></NavLinkItem>
        {/* Add a contact link if you create a contact section */}
        {/* <NavLinkItem><a href="#contact">Contact</a></NavLinkItem> */}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;