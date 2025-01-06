import './App.css';
import NavBar from './components/NavBar/NavBar'; // Import the Navbar component
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const tabsArray = ["About", "Skills", "Experience", "Projects"];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Add the Navbar component */}
        <NavBar color="primary" links={tabsArray} />
        
        {/* Hero Section */}
        <div style={{ flex: 1 }}>
          <Hero />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
