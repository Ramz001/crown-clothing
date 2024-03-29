import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem 2rem;
}

a {
  text-decoration: none;
  color: black;
}

`