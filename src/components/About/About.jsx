import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid2, Paper, Typography, IconButton } from '@mui/material';
import MuiImageSlider from 'mui-image-slider';

const About = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'secondary.main', height: '50vh', width: '100vw', }}>
      <Grid2 container spacing={2} my={4}>
        <Grid2 item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>[Image Slider]</Paper>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>About Me</Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default About;