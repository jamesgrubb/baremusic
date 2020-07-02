import styled from 'styled-components'
import {Wrapper} from '../Wrapper/Styles'

export const Header = styled(Wrapper).attrs({
    'aria-role' : 'header',            
})`
`
export const Title = styled(Wrapper).attrs({
    'aria-role': 'title'
})`
    font-variation-settings:'wght' 400, 'MONO' 0, 'CASL' 0;
    font-size: 14px;
    writing-mode: vertical-lr;
    letter-spacing: 0.3em;
    -webkit-text-orientation: upright;
    text-orientation: upright;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > span{
        width: 50%;
        margin: 0.1em;
    }
`
