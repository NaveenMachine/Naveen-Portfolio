//import * as React from 'react';
//import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
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
    
      <AppBar sx = {{backgroundImage:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>
        <Toolbar>
          <Grid2 sx={{placeItems: "center"}} container>
            <Grid2 item xs={2}>
              <Typography>
                NK
              </Typography>
            </Grid2>
            <Grid2 item xs={5}>
              <Tabs sx={{marginLeft: 5}} indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=> setValue(val)}>
                {links.map((link, index) => (
                  <Tab key={index} label={link}/>
                ))}
              </Tabs>
            </Grid2>
            <Grid2 item xs={1}/>
            <Grid2 item xs={1} sx={{
                            display: "flex",
                            justifyContent: "flex-end", // Aligns content to the right
                            gap: 2, // Adds spacing between buttons
                        }}>
              <Box >
                <Button sx={{marginLeft: 5, background: 'rgba(2,0,36,1)'}} variant="contained"><LinkedInIcon/></Button>
                <Button sx={{marginLeft: 1, background: 'rgba(2,0,36,1)'}} variant="contained"><GitHubIcon/></Button>
                <Button sx={{marginLeft: 1, background: 'rgba(2,0,36,1)'}} variant="contained"><InstagramIcon/></Button>
              </Box>
            </Grid2>
            <Grid2 item xs={1} sx={{
                            display: "flex",
                            justifyContent: "flex-end", // Aligns content to the right
                            gap: 2, // Adds spacing between buttons
                        }}>
              <Box display = "flex">
                <Button sx={{marginLeft:5, background: 'rgba(2,0,36,1)'}} variant="contained">Contact</Button>
              </Box>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    
  );
}

// Define prop types for the NavBar component
NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate 'links' as a required array of strings
};