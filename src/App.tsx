import { CssBaseline, ThemeProvider } from '@mui/material';
import DarkTheme from './themes/DarkTheme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Gaming from './pages/Gaming';
import Api from './pages/Api';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App