import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/style.scss';
import { App } from './App.js';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'


const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    *, *:before, *:after {
        -moz-box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        box-sizing: border-box
    }

    *focus, *active {
        outline: none;
    }

    a:focus, a:active {
        outline: none;
    }

    nav, footer, header, aside {
        display: block;
    }

    html, body {
        height: 100%;
        width: 100%;
        font-size: 100%;
        line-height: 1;
        font-size: 14px;
        -ms-text-size-adjust: 100%;
        -moz-text-side-adjust: 100%;
        -webkit-text-size-adjust: 100$;
    }

    input, button, textarea {
        font-family: inherit;
    }

    input::-ms-clear {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    a, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    ul li {
        list-style: none;
    }
    
    img {
        vertical-align: top;
    }

    h1,h2,h3,h4,h5,h6 {
        font-size: inherit;
        font-weight: inherit;
    }
`

const theme = {
    media: {
        phone: "(max-width: 20em)"
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
        <Global/>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
);