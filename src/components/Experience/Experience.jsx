import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import WorkTimeline from "./Work";
import ProjectsTimeline from "./Projects";
import Education from "./Education";
import { Box, Grid2, Paper, Typography, IconButton, Tab } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import { useState } from "react";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Experience = () => {
  const[value, setValue] = useState('2')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ backgroundColor: 'secondary.main', height: '100vh', width: '100vw' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100vw', py: 2 }}>
  <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
    Experience
  </Box>
</Box>
    <TabContext value={value}>
    {/* Tab Header */}
    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
      <TabList aria-label="Tabs example" onChange={handleChange}>
        <Tab label={
            <Box display="flex" alignItems="center" gap={1}>
              <SchoolIcon fontSize="small" />
              Education
            </Box>
          }   value="1" sx={{ color: 'white' }} />
        <Tab label={
            <Box display="flex" alignItems="center" gap={1}>
              <WorkIcon fontSize="small" />
              Work
            </Box>
          } value="2" sx={{ color: 'white' }} />
        <Tab label={
            <Box display="flex" alignItems="center" gap={1}>
              <PeopleAltIcon fontSize="small" />
              Projects
            </Box>
          }  value="3" sx={{ color: 'white' }} />
      </TabList>
    </Box>

    {/* Tab Content */}
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <TabPanel value="1">
        <Education />
      </TabPanel>
      <TabPanel value="2">
        <WorkTimeline />
      </TabPanel>
      <TabPanel value="3">
        <ProjectsTimeline />
      </TabPanel>
    </Box>
  </TabContext>
</Box>

  );
};

export default Experience;