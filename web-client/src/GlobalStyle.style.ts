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
`

export default GlobalStyles