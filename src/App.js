import React,{useState} from 'react';
import {GlobalStyles} from './GlobalStyles'
import {Play,Paws} from './components/icons'
import Wrapper from './components/Wrapper'
import {ThemeProvider} from 'styled-components'
import {theme} from './theme'
import Live from './components/Live'
import Controls from './components/Controls'
function App() {
  const [isPlaying, setIsPlaying] = useState(true)
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper as="main" display="flex" position="relative" alignItems="center" justifyContent="center" maxWidth="1170px" height="100%" mr="auto" ml="auto" p={[2,3]}>
      <Controls size="12vmin" isPlaying={isPlaying} />
      <Wrapper as="button" onClick={()=> setIsPlaying(!isPlaying)}>
      {isPlaying && (<Paws isPlaying width="50vmin" height="100%"/>) || (<Play width="50vmin" height="100%"/>)  } 
      </Wrapper>
<h1><span>bare</span><span>music</span></h1>
<Live color="blue">Go For Landing</Live>
    </Wrapper>
    </ThemeProvider>
          </>
  );
}

export default App;
