import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* 10px / 16px = 0.625 = 62.5% */
  font-size: 62.5%;
  overflow-x: hidden;
  /* Smooth Scrolling */
  scroll-behavior: smooth;
}

body {
  font-family: "Fira Sans", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #1f1f1f;
  background-color: #b0dfe5;
  overflow-x: hidden;
}

*:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(18, 85, 230, 0.5);
}
`;

export default GlobalStyle;
