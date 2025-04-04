import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid, Paper, Typography, IconButton } from '@mui/material';

const Projects = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'secondary.main', height: '50vh', width: '100vw', }}>
      <Grid container spacing={2}>
        <Paper sx={{ p: 2 }}>[Project Slider]</Paper>
      </Grid>
    </Box>
  );
};

export default Projects;