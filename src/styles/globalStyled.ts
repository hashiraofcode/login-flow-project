import { createGlobalStyle } from 'styled-components'

export const CssGlobalStyles = createGlobalStyle`
* {
    border: none;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 100dvh;
    font-family: "Inter", sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.5rem)
}

html {
    font-size: 62.5;
}
`
