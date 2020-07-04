import styled from 'styled-components'
import {system, flexbox, color, position, layout, compose, space} from 'styled-system'

const transform = system({
    prop: 'transform',
    cssProperty: 'transform'
})

export const Wrapper = styled.div`
${system({
    transform: true
})};
${compose(
    flexbox,
    color,
    position,
    layout,
    space,
    transform
)}
`