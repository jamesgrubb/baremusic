import React from 'react'
import * as Styled from './Styles'

import useMusicPlayer from '../../hooks/useMusicPlayer'

export default ({children , ...rest}) => {
    const {currentTrackName} = useMusicPlayer()
    return( currentTrackName && <Styled.Live {...rest}>{currentTrackName}</Styled.Live>)
}