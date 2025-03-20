import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid, Paper, Typography, IconButton, Stack, Button } from '@mui/material';

const Hero = ({sx}) => {
  return (
    <>
    {/* <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'secondary.main', height: '50vh', width: '100vw', }}>
      
    </Box> */}
    <Grid container spacing={2} sx={{...sx, backgroundColor: 'secondary.main'}}>
    <Grid item xs={12} sm={12} md={7} >
      <Stack alignItems='center'>
          <Box>
              <h1>Naveen's Portfolio</h1>
          </Box>
          <Box>
            {/* <Paper sx={{ p: 2 }}></Paper> */}
            Hey! I'm an engineering student at the Ohio State University who has risked his life dabbling in CSS to bring you this website.
            Thank you for your time today - I hope you enjoy your stay.
          </Box>
          <Box>
            <Button sx={{backgroundColor: 'white',}}>Resume</Button>
          </Box>
      </Stack>
      
    </Grid>
    <Grid item xs={12} sm={12} md={5}>
      <Paper sx={{ p: 2 }}>[image here]</Paper>
    </Grid>
  </Grid>
  </>
  );
};

export default Hero;
