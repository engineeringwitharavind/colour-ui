import React from 'react';
import styled from 'styled-components';
import Loader from '../Loader/Loader';
import ColorGrid from '../ColorCardsGrid';
import PaletteItem from '../PaletteItem/PaletteItem';
import { COLORS } from '../../constants';

function SearchTextInput() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [imageThumbnails, setImageThumbnails] = React.useState([]);
  const [dominantColors, setDominantColors] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const searchEngineId = process.env.REACT_APP_SEARCH_ENGINE_ID;
  const searchApiKey = process.env.REACT_APP_SEARCH_API_KEY;

  const fetchRelatedColors = async () => {
    setIsLoading(true);
    const imagesFetchURL = `https://www.googleapis.com/customsearch/v1?key=${searchApiKey}&cx=${searchEngineId}&q=${searchQuery}&searchType=image`;

    try {
      const response = await fetch(imagesFetchURL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const items = data.items;

      items.forEach((item) => {
        setImageThumbnails((currentThumbnails) => [
          ...currentThumbnails,
          item.image.thumbnailLink,
        ]);
      });
    } catch (error) {
      console.error('[Error fetching data]: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setImageThumbnails([]);
    setDominantColors([]);
    fetchRelatedColors();
    setSearchQuery('');
  };

  const handleDominantColor = (newColor) => {
    setDominantColors((currentColors) => [...currentColors, newColor]);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor='search-query'>Enter your text:</label>
        <Input
          required
          id='search-query'
          type='text'
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </Form>
      {isLoading ? <Loader /> : <ColorGrid dominantColors={dominantColors} />}
      {imageThumbnails.map((imageUrl, index) => (
        <PaletteItem
          key={index}
          imageUrl={imageUrl}
          onDominantColor={handleDominantColor}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1.2rem;
  max-width: 400px;
  width: 100%;
  color: ${COLORS.decorative};
  font-weight: 600;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  color: ${COLORS.black};
`;

export default SearchTextInput;
