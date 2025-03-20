import './App.css';
import NavBar from './components/NavBar/NavBar'; // Import the Navbar component
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#0a0a0a',
    },
  },
});

const tabsArray = ["About", "Skills", "Experience", "Projects"];

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Use custom theme directly
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Add the Navbar component */}
        <NavBar color="primary" links={tabsArray} />
          
        {/* Hero Section */}
        <Hero sx={{ marginTop: isMobile ? 6 : 7 }}/>
        <About />
        <Skills />
        <Experience />
        <Projects />
          
        {/* Footer */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
