import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import DarkTheme from './themes/DarkTheme';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </ThemeProvider>
  )
}

export default App