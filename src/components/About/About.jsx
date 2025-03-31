import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import ImageSwiper from "./ImageSlider";

const About = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'secondary.main', height: '50vh', width: '100vw', }}>
      <Grid container spacing={2} my={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}><ImageSwiper /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>Based in the Dayton and studying in Columbus, I'm an experienced software engineer with extensive knowledge in full-stack development. Aside from my unhealthy obsession with all things science fiction, in my free time I enjoy being an amateur musician and dedicated gym rat.
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;