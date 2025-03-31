import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Paper, Typography, IconButton } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Education = () => {
  return (
    <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box sx={{}}>The Ohio State University</Box>
        <Box>BS in Computer Science and Engineering</Box>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon/> April 2027</Box>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
          <TimelineDot />
      </TimelineSeparator>
      <TimelineContent>
      <Box sx={{}}>Springboro High School</Box>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon/> May 2023</Box>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  );
};

export default Education;