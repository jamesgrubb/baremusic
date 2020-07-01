import styled from 'styled-components'
import {flexbox, color, position, layout, compose, space} from 'styled-system'

export const Wrapper = styled.div`
${compose(
    flexbox,
    color,
    position,
    layout,
    space,
)}
`