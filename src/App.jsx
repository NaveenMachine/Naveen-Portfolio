import './App.css';
import NavBar from './components/NavBar/NavBar'; // Import the Navbar component
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
    <>
      <ThemeProvider theme = {theme}>
        <NavBar color="primary" links={tabsArray}/> {/* Add the Navbar component */}
      </ThemeProvider>
      
    </>
  );
}

export default App;
