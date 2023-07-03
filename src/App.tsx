import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { Router } from './router'
import { queryClient } from './lib/queryClient'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default App
