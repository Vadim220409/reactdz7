import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  font-weight: bold;
`;

const Info = ({ total, completed }) => (
  <InfoContainer>
    <InfoItem>Total Tasks: {total}</InfoItem>
    <InfoItem>Completed: {completed}</InfoItem>
  </InfoContainer>
);

export default Info;