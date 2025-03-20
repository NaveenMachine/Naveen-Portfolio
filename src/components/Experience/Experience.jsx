import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid2, Paper, Typography, IconButton } from '@mui/material';

const Experience = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ backgroundColor: 'secondary.main', height: '50vh', width: '100vw', }}>
      <Grid2 container spacing={2} my={4}>
        <Paper sx={{ p: 2 }}>[Experience Timeline]</Paper>
      </Grid2>
    </Box>
  );
};

export default Experience;