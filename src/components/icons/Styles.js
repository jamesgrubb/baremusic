import styled, {css} from 'styled-components'


const playing = css`
fill: currentColor;
`

const paws = css`

fill: ${({theme}) => theme.colors.blue};
animation-duration: 4s ;
animation-name: hue;
animation-iteration-count: infinite;
@keyframes hue{
from{
    filter: hue-rotate(0deg);
}
50%{
    filter: hue-rotate(60deg);
}
to{
    filter: hue-rotate(0deg);
}
}
`

export const Svg = styled.svg.attrs(props => ({
    xmlns : 'http://www.w3.org/2000/svg',
    width: "100%",
    height: "100%",

}))`
${props => props.isPlaying ? paws : playing}
font-variation-settings: 'wght' 700;

`
