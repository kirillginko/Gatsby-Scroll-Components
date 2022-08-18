import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`


    :root{
        --background: #ffffff;
        --black: rgba(0, 0, 0, 1);
        --grey: rgb(151, 151, 151);
        --white #fff;
        --blue #1937df;
    }

*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    min-height: -webkit-fill-available;
    font-family: "Questrial", sans-serif;
}
h1, h2, h3, h4, h5, p, a{
    color: var(--black);
    
    }

h1, h2, h3, h4, a{
        font-family: "Questrial", sans-serif;
        text-transform: uppercase;
    }
h1 {
    font-size: calc(19vmax * 9 / 16);
}
h2 {
    font-size: calc(15vmax * 9 / 16);
}
h3 {
    font-size: calc(11vmax * 9 / 16);
}
p {
    font-size: calc(3vmax * 9 / 16);
}      
li  {
    list-style: none;
    }

img {
    width: 100%;
    display: block;
    }

html    {
    overflow: hidden;
    min-height: -webkit-fill-available;
    }

a:link {
    text-decoration: none;
}
footer {
    margin: 1rem 1rem;
    border 1px solid black;
}
`

export { GlobalStyles }
