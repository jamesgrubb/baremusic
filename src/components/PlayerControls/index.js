import React from 'react'
import useMusicPlayer from '../../hooks/useMusicPlayer'
import {Play,Paws} from '../icons'
import Wrapper from '../Wrapper'
import {SkipBackward, SkipForward} from '../icons'

const PlayerControls = () => {
    const {isPlaying, currentTrackIndex, canPlay, playTrack, togglePlay, playPreviousTrack, playNextTrack} = useMusicPlayer()
    console.log("PlayerControls -> currentTrackIndex", currentTrackIndex)
    
    return(
        <>
        {currentTrackIndex === null ? <Wrapper width={["68vmin","60vmin"]} as="button" onClick={()=> playTrack(0)}>
        <Play />
        </Wrapper> : <Wrapper as="button" width={["68vmin","60vmin"]} onClick={togglePlay}>
        {isPlaying ? (<Paws isPlaying />) : (<Play />)  } 
        </Wrapper>}
        
        {currentTrackIndex != null && 
        <Wrapper display="flex" position="absolute" width={["60vw","16vmin"]} transform={["translateX(50%)","translateX(0)"]} right={["50%",4]} bottom={[3,4]}>
        <Wrapper as="button" display="flex" onClick={playPreviousTrack} ><SkipBackward isPlaying={isPlaying} /></Wrapper>
        <Wrapper as="button" display="flex" onClick={playNextTrack} ><SkipForward isPlaying={isPlaying}/></Wrapper>
        </Wrapper>
        }
        </>
    )
}

export default PlayerControls