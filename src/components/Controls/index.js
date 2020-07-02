import React from 'react'
import Wrapper from '../Wrapper'
import {SkipForward,SkipBackward} from '../icons'

export default ({size, isPlaying}) => (
    <Wrapper position="absolute" display="flex" right={[3,4]} bottom={[3,4]} bg="blue">
        <Wrapper as="button" display="flex"><SkipBackward isPlaying={isPlaying} width={size}/></Wrapper>
        <Wrapper as="button" display="flex"><SkipForward isPlaying={isPlaying} width={size}/></Wrapper>
    </Wrapper>
)

