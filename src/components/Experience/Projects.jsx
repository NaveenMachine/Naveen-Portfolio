import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Paper, Typography, IconButton } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import DateRangeIcon from '@mui/icons-material/DateRange';

const ProjectsTimeline = () => {
  return (
    <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box sx={{}}>Medical Health App</Box>
        <Box>Fareed Biomedical Infromatics Lab</Box>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon/> August 2024 - Febuary 2025</Box>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <Box sx={{}}>Degree Audit Parser</Box>
        <Box>HackOH/IO</Box>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon/>October 2024</Box>
      </TimelineContent>
    </TimelineItem>
   <TimelineItem>
      <TimelineSeparator>
          <TimelineDot />
      </TimelineSeparator>
      <TimelineContent>
      <Box sx={{}}>Look2Type</Box>
        <Box>HackAI</Box>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon/>Febuary 2024</Box>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  );
};

export default ProjectsTimeline;