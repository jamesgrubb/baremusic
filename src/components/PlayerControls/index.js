import React from 'react'
import useMusicPlayer from '../../hooks/useMusicPlayer'
import {Play,Paws} from '../icons'
import Wrapper from '../Wrapper'
import {SkipBackward, SkipForward} from '../icons'

const PlayerControls = ({size}) => {
    const {isPlaying, togglePlay, playPreviousTrack, playNextTrack} = useMusicPlayer()
    return(
        <>
        <Wrapper as="button" onClick={togglePlay}>
        {isPlaying && (<Paws isPlaying width="50vmin" height="100%"/>) || (<Play width="50vmin" height="100%"/>)  } 
        </Wrapper>
        <Wrapper display="flex" position="absolute" right={[2,3]} bottom={[2,3]}>
        <Wrapper as="button" display="flex" onClick={playPreviousTrack} ><SkipBackward isPlaying={isPlaying} width={size}/></Wrapper>
        <Wrapper as="button" display="flex" onClick={playNextTrack} ><SkipForward isPlaying={isPlaying} width={size}/></Wrapper>
        </Wrapper>
        </>
    )
}

export default PlayerControls