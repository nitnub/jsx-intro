import { createGlobalStyle } from "styled-components";

export const AppStyle = createGlobalStyle`
    body {
        background-color: ${props => props.darkMode ? 'black' : 'white'};
    }
    input, label, h2, legend, select {
        background-color: ${props => props.darkMode ? 'black' : 'white'};
        color: ${props => props.darkMode ? 'white' : 'black'};
    }
    input {
        border: solid 1px ${props => props.darkMode ? 'white' : 'black'};
        border-radius: 4px;
    }
`;