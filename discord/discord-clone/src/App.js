import React from 'react'
import Routes from './routes'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from './global/GlobalStyles'
import DiscordTheme  from './global/DiscordTheme'

function App() {
  return (
    <ThemeProvider theme={DiscordTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App
