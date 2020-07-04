import React from 'react'
import useMusicPlayer from '../../hooks/useMusicPlayer'
import {Play,Paws} from '../icons'
import Wrapper from '../Wrapper'
import {SkipBackward, SkipForward} from '../icons'
const bareSize = ["68vmin","40vmin"]
const PlayerControls = () => {
    const {isPlaying, currentTrackIndex, playTrack, togglePlay, playPreviousTrack, playNextTrack} = useMusicPlayer()
    
    
    return(
        <>
        {currentTrackIndex === null ? <Wrapper width={bareSize} as="button" onClick={()=> playTrack(0)}>
        <Play />
        </Wrapper> : <Wrapper as="button" width={bareSize} onClick={togglePlay}>
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