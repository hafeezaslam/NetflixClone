import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    margin: 0;
    background-color: black;
    color: #333;
    font-size: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
