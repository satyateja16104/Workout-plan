import React from 'react';
import { Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import WorkoutPlanGenerator from '../components/WorkoutPlanGenerator';


const Home = () => {
  return (
    <Box>
      <HeroBanner />
      
      <WorkoutPlanGenerator />
    </Box>
  );
};

export default Home;
