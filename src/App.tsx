import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import DarkTheme from './themes/DarkTheme';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App