import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import SwiperSlider from "./SwiperSlider";

const About = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main', py: 4 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={5}>
          <SwiperSlider />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="body1">
              Based in Dayton and studying in Columbus, I'm an experienced software engineer with extensive knowledge in full-stack development. 
              Aside from my unhealthy obsession with all things science fiction, in my free time I enjoy being an amateur musician and a dedicated gym rat.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
