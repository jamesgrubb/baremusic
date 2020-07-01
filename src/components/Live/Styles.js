import styled from 'styled-components'
import {color} from 'styled-system'

export const Live = styled.strong`
${color};
transform: rotate(180deg);
left: 2em;
writing-mode: vertical-lr;
font-size: ${({theme}) => theme.textSizeSmall}px;
position: absolute;
font-variation-settings: "wght" 400;
letter-spacing: 0.6em;
bottom: 2em;
display: flex;
justify-content: center;
align-items: center;
/* line-height: 0; */
text-transform: uppercase;
&:before{
    padding-right: 10px;
    content: "*";
    align-self: center;
    margin-bottom: 0.4em;
    font-size: ${({theme}) => theme.fontSizes[4]}px;
}
`