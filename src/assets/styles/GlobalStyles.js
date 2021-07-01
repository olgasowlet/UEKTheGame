import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(({theme}) => theme.color.concrete)};
        margin: 0;
    }
`;

export default GlobalStyle; 