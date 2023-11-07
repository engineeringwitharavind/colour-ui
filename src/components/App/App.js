import React from 'react';
import TextInput from '../TextInput';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <TextInput />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 48px;
`;

export default App;
