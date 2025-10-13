
import React from 'react';
import styled from 'styled-components';

const LeadershipSection = styled.section`
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const LeadershipContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Leadership = () => {
  return (
    <LeadershipSection id="leadership">
      <Title>Leadership & Community</Title>
      <LeadershipContainer>
        <h3>Vice Chairperson – Computer Society of India</h3>
        <p>Led a core team to organize coding events, seminars, and workshops for over 500 students. We successfully increased student engagement by 30% and secured sponsorships from local tech companies.</p>
      </LeadershipContainer>
    </LeadershipSection>
  );
};

export default Leadership;
