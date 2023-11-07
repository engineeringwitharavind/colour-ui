import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants';

const GlobalStyles = createGlobalStyle`  
  /* Intuitive Box model and removing default margin and padding */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  html,
  body {
    color: ${COLORS.text};
    background: ${COLORS.background};
    
  /* Typographic tweaks: Accessible line-height and improves text-rendering */
    line-height: 1.5;
  	text-rendering: optimizeSpeed;
	  -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    height: 100%;
    min-width: 300px;
    font-family: "Gill Sans", sans-serif;
  }

  /* Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Avoid text-overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* Accessible and custom Typgraphy */
  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1.1rem;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
    font: inherit;
  }

  /* Create a root stacking context */
  #root {
    isolation: isolate;
  }
`;

export default GlobalStyles;
