import React from 'react';
import styled from 'styled-components';
import Card from '../ColorCard';

function ColorGrid({ dominantColors }) {
  const numberOfColumns = Math.ceil(dominantColors.length / 5); // Five children per row

  return (
    <Grid>
      {dominantColors.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 16px;
  width: 100%;
`;

export default ColorGrid;
