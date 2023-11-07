import React from 'react';
import SearchTextInput from '../SearchTextInput';
import styled from 'styled-components';
import { COLORS } from '../../constants';

function App() {
  return (
    <Wrapper>
      <Header>Hue Sync</Header>
      <Description>
        Discover dominant color palettes related to your search query!
      </Description>
      <SearchTextInput />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px;
  gap: 24px;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${COLORS.primary};
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

export default App;
