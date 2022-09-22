import { createGlobalStyle } from 'styled-components';

export const AppStyle = createGlobalStyle`
  body {
    background-color${props => props.darkMode ? 'black' : 'white'}
  }`
