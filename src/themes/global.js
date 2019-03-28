import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    height: 100%;
    width: 100%;
  }

  .app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
    font-size: 10px;
    font-family: "Lato", Helvetica, "Helvetica Neue", Arial, sans-serif;
    color: ${(props) => props.theme.textColor};

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      color: inherit;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  :focus {
    outline: none;
  }
`;
