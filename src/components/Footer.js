
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.background};
  border-top: 1px solid ${({ theme }) => theme.secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Shashwat Shyam Tare. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
