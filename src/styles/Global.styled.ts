import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
  margin: 0;
  font-family: 'Nunito Sans, sans-serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${Theme.colors.fontDark};
  line-height: 1.2;
  min-width: 375px;
}

a {
  text-decoration: none;
  color: ${Theme.colors.fontDark};
  cursor: pointer; 
}

ul {
  list-style: none;
}

button {
  background-color: unset;
  border: none;
  cursor: pointer;
  color: ${Theme.colors.fontLight};
}

section {
  padding: 100px 0;

  @media ${Theme.media.mobile} {
    padding: 60px 0;
  }
};
`; 