import { useContext } from 'react';
import { MusicPlayerContext } from "../context/MusicPlayerContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      setState(state => ({ ...state, canPlay: state.audioPlayer.readyState }));
      state.audioPlayer.play();
      setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
    }
  }
  
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState(state => ({ ...state, isPlaying: !state.isPlaying }));
  }

  function playPreviousTrack() {
    const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
    currentArtwork: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].artwork,
  }
};

export default useMusicPlayer;