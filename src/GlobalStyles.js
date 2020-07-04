import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@font-face {
 font-family: 'Recursive';
 src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1070/recursive-MONO_CASL_wght_slnt_ital--full_gsub--2019_12_21-21_07.woff2') format('woff2-variations');
 font-weight: 300 1000;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

ul{
    list-style: none;
}

html, body{
    height: 100%;
}

body{
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.color};
    font-family: Recursive, sans-serif;
    
}
#root{
    height: 100%
}
button {
    background: transparent;
  font-family: inherit; /* For all browsers */
  font-size: 100%; /* For all browsers */
  line-height: 1.15; /* For all browsers */
  margin: 0; /* Firefox and Safari have margin */
  overflow: visible; /* Edge hides overflow */
  text-transform: none; /* Firefox inherits text-transform */
  -webkit-appearance: button; /* Safari otherwise prevents some styles */
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  color: currentColor;
  transition: color 0.2s ease;
  &:hover{
      color: ${({theme}) => theme.colors.gray}
  }
}

button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

canvas{
    pointer-events: none;
}


`