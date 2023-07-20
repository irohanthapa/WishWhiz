import './App.css';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import ScifiImage from './pages/ScifiImage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/paragraph' element={<Paragraph />} />
          <Route path='/chatbot' element={<ChatBot />} />
          <Route path='/sci-image' element={<ScifiImage />} />
        </Routes>
      </ThemeProvider>

    </>
  );
}

export default App;
