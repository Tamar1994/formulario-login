import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin:0;
        padding: 0;
    }

    body {
        height: 100vh;
        width: 100vw;
        background-color: #a5b8ca;
        display: flex;
        align-items: center;
        justify-content: center;
`