import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`  
    *,
    *::before,
    ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
