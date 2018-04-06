import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  :root {
    --black: #1A1717;
    --green: #87DE6D;
    --green-hover: #fff;
  }

  * {
    box-sizing: border-box;
    color: var(--green);
    font-family: monospace;
    font-weight: 400;
    margin: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    background: var(--black);
    padding: 1rem;
  }

  a {
    font-weight: 600;
    text-decoration: none;
  }

  a:focus, a:hover, button:focus, button:focus *, button:hover, button:hover * {
    color: var(--green-hover);
    cursor: pointer;
    outline: none;
  }

  #root {
    display: grid;
    grid-gap: 1rem;

    @media (min-width:28rem) {
      grid-template-columns: 10rem 1fr;
    }
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();