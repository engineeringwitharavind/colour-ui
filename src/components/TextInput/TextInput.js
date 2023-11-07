import React from 'react';
import styled from 'styled-components';
import ColorGrid from '../ColorGrid';
import data from '../../data/data.json';
import { COLORS } from '../../constants';

function TextInput() {
  const [text, setText] = React.useState('');
  const [colors, setColors] = React.useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputWord = text.toLowerCase();

    if (data[inputWord]) {
      setColors(data[inputWord]);
    } else {
      setColors([]);
      console.error('No data found for the input word:', inputWord);
    }

    setText('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='text-input'>Enter a text:</label>
        <Input
          required
          id='text-input'
          type='text'
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </Form>
      <ColorGrid colors={colors} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  min-width: 300px;
  color: ${COLORS.black};
`;

export default TextInput;
