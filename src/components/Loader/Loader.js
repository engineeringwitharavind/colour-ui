import React from 'react';
import styled from 'styled-components';

function Loader() {
  return <Wrapper>Fetching Data...</Wrapper>;
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

export default Loader;
