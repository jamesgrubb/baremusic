import React,{useState} from 'react';
import {GlobalStyles} from './GlobalStyles'
import {Play,Paws} from './components/icons'
import Wrapper from './components/Wrapper'
import {ThemeProvider} from 'styled-components'
import {theme} from './theme'
import Live from './components/Live'
import Controls from './components/Controls'
import {MusicPlayerProvider} from './context/MusicPlayerContext'
import PlayerControls from './components/PlayerControls'
function App() {
  const [isPlaying, setIsPlaying] = useState(true)
  return (
    <>
    <MusicPlayerProvider>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper as="main" display="flex" position="relative" alignItems="center" justifyContent="center" maxWidth="1170px" height="100%" mr="auto" ml="auto" p={[2,3]}>
      <PlayerControls size="12vmin" />
<h1><span>bare</span><span>music</span></h1>
<Live color="blue">Go For Landing</Live>
    </Wrapper>
    </ThemeProvider>
    </MusicPlayerProvider>
          </>
  );
}

export default App;
