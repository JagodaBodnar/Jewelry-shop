import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* html{
    font-size: 62.5%
} */

body{
    min-height: 92vh;
    margin-top: 8vh;
} 

`;

export default GlobalStyle;
