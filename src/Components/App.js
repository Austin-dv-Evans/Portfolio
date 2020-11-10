import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './UI/Theme'
import Header from '../Components/UI/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
        Hello!!
    </ThemeProvider>
  );
}

export default App;
