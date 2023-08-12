import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
      font-family: 'Lexend Deca', sans-serif;
  }
  *{
      font-family: 'Lexend Deca', sans-serif;
      
      user-select: none;
  }
  p{
    white-space: pre-wrap;
  }
`;

export default GlobalStyle;