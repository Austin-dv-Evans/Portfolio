import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './UI/Theme'
import Header from '../Components/UI/Header'
import {makeStyles} from '@material-ui/styles'

import LandingPage from '../Components/LandingPage'



function App() {

  
  return (
    <ThemeProvider theme={theme} >
      <Header/>
        <LandingPage />
    </ThemeProvider>
  );
}

export default App;
