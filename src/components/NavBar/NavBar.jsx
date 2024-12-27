//import * as React from 'react';
//import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';
//import Grid2 from '@mui/material/Grid2';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NavBar({ links }) {
    const [value, setValue] = useState();
  return (
    
    <AppBar
    sx={{
        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    }}
>
    <Toolbar>
        {/* Main flex container */}
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between', // Spread items across the navbar
                alignItems: 'center',
            }}
        >
            {/* Left side (Logo or Name) */}
            <Button sx={{border:'none'}}><Typography sx={{color:'white'}}>NK</Typography></Button>

            {/* Center (Tabs) */}
            <Tabs
                sx={{ marginLeft: 5 }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
            >
                {links.map((link, index) => (
                    <Tab key={index} label={link} />
                ))}
            </Tabs>

            {/* Right side (Buttons) */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2, // Spacing between buttons
                }}
            >
                <Button sx={{ width: 40, // Set width
            height: 40, // Set height
            borderRadius: '50%', // Makes the button circular
            background: 'rgba(2,0,36,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center-align the icon
            minWidth: 0,  }} variant="contained">
                    <LinkedInIcon />
                </Button>
                <Button sx={{ width: 40, // Set width
            height: 40, // Set height
            borderRadius: '50%', // Makes the button circular
            background: 'rgba(2,0,36,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center-align the icon
            minWidth: 0,  }} variant="contained">
                    <GitHubIcon />
                </Button>
                <Button sx={{ width: 40, // Set width
            height: 40, // Set height
            borderRadius: '50%', // Makes the button circular
            background: 'rgba(2,0,36,1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center-align the icon
            minWidth: 0,   }} variant="contained">
                    <InstagramIcon />
                </Button>
                <Button sx={{marginLeft: 5, background: 'rgba(2,0,36,1)' }} variant="contained">
                    Contact
                </Button>
            </Box>
        </Box>
    </Toolbar>
</AppBar>
    
  );
}

// Define prop types for the NavBar component
NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate 'links' as a required array of strings
};