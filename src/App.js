import React from 'react';
import {GlobalStyles} from './GlobalStyles'
import Wrapper from './components/Wrapper'
import {ThemeProvider} from 'styled-components'
import {theme} from './theme'
import Live from './components/Live'
import {MusicPlayerProvider} from './context/MusicPlayerContext'
import PlayerControls from './components/PlayerControls'
import Header from './components/Header'
function App() {

  return (
    <>
    <MusicPlayerProvider>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper as="main" display="flex" position="relative" alignItems="center" justifyContent="center" maxWidth="1170px" height="100%" mr="auto" ml="auto" p={[2,3]}>
      <PlayerControls size="12vmin" />
      <Header ariaRole="header" title="Bare" />
<Live color="blue">Go For Landing</Live>
    </Wrapper>
    </ThemeProvider>
    </MusicPlayerProvider>
          </>
  );
}

export default App;
