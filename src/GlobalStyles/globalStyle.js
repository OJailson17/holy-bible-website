import {createGlobalStyle} from 'styled-components'
import HolyBible from '../fonts/HolyBible.otf'

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    width: 100%;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

i {
    font-size: 25px;
    color: white;

    @media ${({theme}) => theme.queries.large} {
        font-size: 30px;
    }
}

@font-face {
    font-family: 'Holy Bible';
    src: url(${HolyBible}) format("opentype");
}

.App {
    width: 90%;
    margin: 0 auto;
}
`

export default GlobalStyle;