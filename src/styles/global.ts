import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.background};
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 1rem "Baloo 2", sans-serif;
  }

`;
