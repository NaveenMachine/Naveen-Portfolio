import React from "react";
//import { FaLocationArrow } from "react-icons/fa6";
//import MagicButton from "./MagicButton";
//import { Spotlight } from "./ui/Spotlight";
//import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Box, Paper, Typography, IconButton } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';

const WorkTimeline = () => {
  return (
    <Timeline position='alternate'>
    <TimelineItem align="right">
      <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box >Undergraduate Research Assistant</Box>
        <Box>Ohio State Medical Center</Box>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 1 }} ><DateRangeIcon fontSize="small"/> August 2024 - Present</Box>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem align="left">
      <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
      <Box >Software Engineer Intern</Box>
        <Box>ARCTOS</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon fontSize="small"/>June 2024 - August 2024</Box>
      </TimelineContent>
    </TimelineItem>
    <TimelineItem align="right">
      <TimelineSeparator>
          <TimelineDot />
      </TimelineSeparator>
      <TimelineContent>
      <Box >Software Engineer Intern</Box>
        <Box>Air Force Research Lab</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon fontSize="small"/>May 2023 - August 2023</Box>
      </TimelineContent>
    </TimelineItem>
  </Timeline>
  );
};

export default WorkTimeline;


//formated node but messed up the timeline alignment
{/* <TimelineItem align="right">
      <TimelineSeparator>
          <TimelineDot />
      </TimelineSeparator>
      <TimelineContent>
      <Box sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Software Engineer Intern</Box>
        <Box>Air Force Research Lab</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><DateRangeIcon fontSize="small"/>May 2023 - August 2023</Box>
      </TimelineContent>
    </TimelineItem> */}