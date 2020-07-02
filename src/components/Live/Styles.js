import styled from 'styled-components'
import {color} from 'styled-system'
import css from '@styled-system/css'

export const Live = styled.strong`
${color};
transform: rotate(180deg);

writing-mode: vertical-lr;
font-size: ${({theme}) => theme.textSizeSmall}px;

font-variation-settings: "wght" 400;
letter-spacing: 0.6em;

display: flex;
justify-content: center;
align-items: center;
/* line-height: 0; */
text-transform: uppercase;
&:before{
    margin: 12px;
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    box-shadow: 0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1);
    background-image: url(${props => props.artwork});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 3px;
    align-self: center;
 
 
`