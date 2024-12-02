import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

import { motion } from 'framer-motion';  


const exercisesData = [
  {
    id: 1,
    name: "Chest Press Machine",
    targetMuscle: "Chest",
    gif: "https://i.pinimg.com/originals/c3/6f/c8/c36fc890d68c22d739de6cf9b221cc59.gif", 
  },
  {
    id: 2,
    name: "Barbell Squats",
    targetMuscle: "Legs",
    gif: "https://www.inspireusafoundation.org/wp-content/uploads/2021/03/full-squat-side-view.gif", 
  },
  {
    id: 3,
    name: "Lat Pulldown",
    targetMuscle: "Back",
    gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", 
  },
  {
    id: 4,
    name: "Bicep Curl",
    targetMuscle: "Arms",
    gif: "https://i.pinimg.com/originals/7d/3c/de/7d3cdeed84c1c19ad372d5b25beffd08.gif", 
  },
  {
    id: 5,
    name: "Lunges",
    targetMuscle: "Legs",
    gif: "https://homeworkouts.org/wp-content/uploads/anim-forward-lunges.gif", 
  },
  {
    id: 6,
    name: "Incline Dumbell Press",
    targetMuscle: "Chest",
    gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif", 
  },
  {
    id: 7,
    name: "Bench Press",
    targetMuscle: "Chest",
    gif: "https://i.pinimg.com/originals/bc/d2/05/bcd205cf9e64811981d715deebaa41da.gif", 
  },
  {
    id: 8,
    name: "Chest Fly Machine",
    targetMuscle: "Chest",
    gif: "https://yt3.ggpht.com/9vhqGq7PAIqkmJ1fmfsGGRQUv6o6Bc2-d-Njef86nXwNb5DPmgyLdCxlrjFkv4qaNWBsAE-JSGiSVw=s360-nd-v1", 
  },
  {
    id: 9,
    name: "Barbell Row",
    targetMuscle: "Back",
    gif: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif", 
  },
  {
    id: 10,
    name: "Pullups",
    targetMuscle: "Back",
    gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/pull-up.gif", 
  },
  {
    id: 11,
    name: "Seated Cable Row",
    targetMuscle: "Back",
    gif: "https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif", 
  },
  
  {
    id: 12,
    name: "Lateral Rises",
    targetMuscle: "Shoulders",
    gif: "https://burnfit.io/wp-content/uploads/2023/11/DB_LAT_RAISE.gif", 
  },
  {
    id: 13,
    name: "Dumbell Cuban Press",
    targetMuscle: "Shoulders",
    gif: "https://i.pinimg.com/originals/2b/ef/ba/2befbad569f6f8ad31fe03a77cf45ab6.gif", 
  },
  {
    id: 14,
    name: "FacePulls",
    targetMuscle: "Shoulders",
    gif: "https://burnfit.io/wp-content/uploads/2023/11/FACE_PULL.gif", 
  },

  {
    id: 15,
    name: "Dumbell Romanian Deadlifts",
    targetMuscle: "Legs",
    gif: "https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-romanian-deadlift.gif", 
  },
  {
    id: 16,
    name: "Leg Press",
    targetMuscle: "Legs",
    gif: "https://burnfit.io/wp-content/uploads/2023/11/LEG_PRESS.gif", 
  },
  {
    id: 17,
    name: "Leg Extension",
    targetMuscle: "Legs",
    gif: "https://burnfit.io/wp-content/uploads/2023/11/LGE_EXT.gif", 
  },
  {
    id: 18,
    name: "Leg Curls",
    targetMuscle: "Legs",
    gif: "https://burnfit.io/wp-content/uploads/2023/11/LEG_CURL.gif", 
  },
  {
    id: 19,
    name: "Incline Dumbell Curls",
    targetMuscle: "Arms",
    gif: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Flexor-Incline-Dumbbell-Curls.gif", 
  },
  {
    id: 20,
    name: "Tricep Extension",
    targetMuscle: "Arms",
    gif: "https://boxlifemagazine.com/wp-content/uploads//2023/06/extension-triceps-poulie-haute-1.gif", 
  },
  {
    id: 21,
    name: "EZ-Bar Tricep Extension",
    targetMuscle: "Arms",
    gif: "https://i.pinimg.com/originals/ad/fa/07/adfa071cbb701eda0a8ea9887eb938d0.gif", 
  },





];

const Exercises = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);


  const filteredExercises = selectedMuscle
    ? exercisesData.filter(exercise => exercise.targetMuscle === selectedMuscle)
    : [];


  const muscleGroups = ["Chest", "Back", "Shoulders", "Legs", "Arms"];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
      <Typography variant="h2" sx={{ marginTop: '40px', marginBottom: '20px' }}>
        Explore Exercises
      </Typography>
      <Typography variant="body1" sx={{ color: 'salmon', marginBottom: '30px' }}>
        Discover a variety of exercises tailored to your fitness needs.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {muscleGroups.map((muscle) => (
          <Grid item xs={12} sm={4} md={2} key={muscle}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }} 
              whileTap={{ scale: 0.95 }} 
            >
              <Card
                sx={{
                  width: '200px', 
                  height: '200px', 
                  cursor: 'pointer',
                  display: 'flex', 
                 flexDirection: 'column',
                 justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#FF2625',
                color: 'white',
                borderRadius: '8px', 
                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
               textAlign: 'center', 
              boxSizing: 'border-box' 
                }}
                onClick={() => setSelectedMuscle(muscle)}
              >
                <Typography variant="h6">{muscle}</Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>


      {selectedMuscle && (
        <Box sx={{ marginTop: '40px', width: '100%' }}>
          <Typography variant="h4" sx={{ marginBottom: '20px' }}>
            {selectedMuscle} Exercises
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {filteredExercises.map((exercise) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={exercise.id}>
                <Card sx={{ maxWidth: 500,width:'100%'}}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {exercise.name}
                    </Typography>
                    

                    <CardMedia
                      component="img"
                      height="140"
                      image={exercise.gif}
                      alt={exercise.name}
                      sx={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain',
                        
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Exercises;
