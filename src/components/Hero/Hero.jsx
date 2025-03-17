import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Grid2, Paper, Typography, IconButton } from '@mui/material';

const Hero = ({sx, mobileScreen}) => {
  return (
    <Box sx={{ ...sx }}>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>Item 1</Paper>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2 }}>Item 2</Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Hero;
