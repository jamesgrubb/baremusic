import React from 'react'
import * as Styled from './Styles'
import useMusicPlayer from '../../hooks/useMusicPlayer'
import Wrapper from '../Wrapper'

export default ({children , ...rest}) => {
    const {currentTrackName, currentArtwork} = useMusicPlayer()
    return( currentTrackName && 
        <Wrapper position="absolute" left={[3,4]} bottom={[3,4]} display={["none","flex"]} flexDirection="column" alignItems="center">
    <Styled.Live {...rest} artwork={currentArtwork}>{currentTrackName}</Styled.Live>
    </Wrapper>
    )
}