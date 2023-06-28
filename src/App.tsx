import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'
import { Router } from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}
export default App
