import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
    }

    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #0b0c0b;
        font-family: sans-serif;
        line-height: 1.7;
        font-weight: 400;
        font-size: 1.6rem;
        font-style: normal;
        color: #292b2c;
    }

    ::-webkit-scrollbar {
        width: .5rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-track:hover {
        background: #222;
    }

    ::-webkit-scrollbar-thumb {
        background: #6E6E6E;
    }
`

export default GlobalStyles