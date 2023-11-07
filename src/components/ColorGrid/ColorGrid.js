import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

function ColorGrid({ colors }) {
  return (
    <Grid>
      {colors.length > 0 ? (
        colors.map((color, index) => <Card key={index} color={color} />)
      ) : (
        <NoDataMessage>No data found</NoDataMessage>
      )}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
`;

const NoDataMessage = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #555;
`;

export default ColorGrid;
