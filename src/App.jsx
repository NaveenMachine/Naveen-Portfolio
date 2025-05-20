import './App.css';
import NavBar from './components/NavBar/NavBar'; // Import the Navbar component
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience';
import About from './components/About/About';
// import Dropdown from './components/Dropdown/Dropdown';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/DataObject';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

// testing dropdown
import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Dropdown, DropdownMenuItem } from './components/Dropdown2/Dropdown';



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
  
  //dropdown test
  const handleCreate = () => {
    console.log('create something');
  };

  const handleEdit = () => {
    console.log('edit something');
  };

  const handleDelete = () => {
    console.log('delete something');
  };
  
  return (

    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Add the Navbar component */}
        <NavBar color="primary" links={tabsArray} />
          
        {/* Hero Section */}
        <Hero sx={{ marginTop: isMobile ? 6 : 7 }}/>
        <About />
        {/* <Dropdown /> */}
        
        <Dropdown
          keepOpen
          open={open}
          trigger={<Button><CodeIcon/>  Languages < KeyboardArrowDownIcon/></Button>}
          menu={[
            <DropdownMenuItem onClick={handleCreate}>
              Create <AddCircleOutlinedIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleEdit}>
              Edit <EditIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleDelete}>
              Delete <DeleteForeverIcon />
            </DropdownMenuItem>,
          ]}
        />
        <Dropdown
          keepOpen
          open={open}
          trigger={<Button> <HtmlIcon/> Fullstack < KeyboardArrowDownIcon/></Button>}
          menu={[
            <DropdownMenuItem onClick={handleCreate}>
              Create <AddCircleOutlinedIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleEdit}>
              Edit <EditIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleDelete}>
              Delete <DeleteForeverIcon />
            </DropdownMenuItem>,
          ]}
        />
        <Dropdown
          keepOpen
          open={open}
          trigger={<Button> <PrecisionManufacturingIcon/> Robotics/Hardware < KeyboardArrowDownIcon/></Button>}
          menu={[
            <DropdownMenuItem onClick={handleCreate}>
              Create <AddCircleOutlinedIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleEdit}>
              Edit <EditIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleDelete}>
              Delete <DeleteForeverIcon />
            </DropdownMenuItem>,
          ]}
        />
         <Dropdown
          keepOpen
          open={open}
          trigger={<Button><MonitorHeartIcon/> Other < KeyboardArrowDownIcon/></Button>}
          menu={[
            <DropdownMenuItem onClick={handleCreate}>
              Create <AddCircleOutlinedIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleEdit}>
              Edit <EditIcon />
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={handleDelete}>
              Delete <DeleteForeverIcon />
            </DropdownMenuItem>,
          ]}
        />
        <Experience />
        <Projects />
        {/* Footer */}
        <Footer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;
