import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Rostov';
    src: url(${require('../Rostov.ttf')}) format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rostov', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 400;
    margin: 0;
  }
`;