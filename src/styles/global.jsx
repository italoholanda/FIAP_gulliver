import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
	  padding: 0;
	  margin: 0;
	  box-sizing: border-box;
	  border: none;
  }
  body {
	  font-family: sans-serif;
  }
  img {
	  max-width: 100%;
  }
`
