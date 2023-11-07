import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

function ColorCard({ color }) {
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <HexValue>{color}</HexValue>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.text};
  font-size: 1.2rem;
`;

const HexValue = styled.span`
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  border-radius: 4px;
`;

export default ColorCard;
