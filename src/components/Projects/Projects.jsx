import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';
import ProjectSlider from "./ProjectSlider";

const Projects = () => {
  return (
    // <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'secondary.main', height: '50vh', width: '100vw', }}>
      
    // </Box>
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100vw', py: 3 }}>
  <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
    Projects
  </Box>
</Box>
    <Grid container spacing={2} sx={{ backgroundColor: 'secondary.main'}}>
      
      <ProjectSlider/>
    </Grid>
    </>
  );
};

export default Projects;