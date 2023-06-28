import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    }

  html {
      font-size: 62.5%;
    }

    body,
    input,
    textarea,
    button {
      font-family: var(--font-inter);
    }

    button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
