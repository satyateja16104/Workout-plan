import React, { useState } from "react";
import "../WorkoutPlanGenerator.css";
import "../App.css";

const WorkoutPlanGenerator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [days, setDays] = useState(3); // Default workout days
  const [bmi, setBmi] = useState(null);
  const [calorieRecommendation, setCalorieRecommendation] = useState("");
  const [exercises, setExercises] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [bmiAnalysis, setBmiAnalysis] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const muscleGroups = [
    "Chest & Shoulders",
    "Back & Biceps",
    "Legs & Core",
    "Arms & Cardio",
    "Full Body",
  ];

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const generateWorkoutPlan = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedWeight) || isNaN(parsedHeight) || parsedWeight <= 0 || parsedHeight <= 0) {
      alert("Please enter valid positive numbers for weight and height.");
      return;
    }

    if (days < 3 || days > 6) {
      alert("Please enter a valid number of workout days (3-6).");
      return;
    }

    const heightInMeters = parsedHeight / 100;
    const calculatedBmi = (parsedWeight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);

    let calorieRecommendation = "";
    let exercises = [];
    let bmiAnalysis = "";

    if (calculatedBmi < 18.5) {
      bmiAnalysis = "Underweight: Work on gaining muscle mass.";
      calorieRecommendation = "~2500 kcal/day";
      exercises = ["Lat Pulldowns", "Bench Press", "Barbell Squats", "Deadlifts", "Overhead Presses"];
    } else if (calculatedBmi >= 25) {
      bmiAnalysis = "Overweight: Focus on cardio and balanced diet.";
      calorieRecommendation = "~1800 kcal/day";
      exercises = ["Jump Rope", "Burpees", "Bodyweight Squats", "Jogging", "High Knees"];
    } else {
      bmiAnalysis = "Healthy weight: Maintain with regular activity.";
      calorieRecommendation = "~2000 kcal/day";
      exercises = ["Running", "Push-Ups", "Pull-Ups", "Squats", "Plank"];
    }

   
    const restSpacing = Math.floor((7 - days) / days);
    const selectedDays = [];
    let lastWorkoutDay = -1;

    for (let i = 0; i < days; i++) {
      lastWorkoutDay += restSpacing + 1;
      if (lastWorkoutDay >= weekdays.length) {
        lastWorkoutDay %= weekdays.length;
      }
      selectedDays.push(weekdays[lastWorkoutDay]);
    }

    const generatedSchedule = selectedDays.map((day, index) => {
      const muscleGroup = muscleGroups[index % muscleGroups.length];
      return `${day}: ${muscleGroup}`;
    });

    setCalorieRecommendation(calorieRecommendation);
    setExercises(exercises);
    setSchedule(generatedSchedule);
    setBmiAnalysis(bmiAnalysis);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="box45">
      <div className="container">
        <h1 className="heading">🏋 Workout Plan Generator 🏃</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            required
          />

          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            required
          />

          <label htmlFor="days">Number of Days you would Workout(in a week):</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="Enter workout days (3-6)"
            required
            min="3"
            max="6"
          />

          <button className="btn heading" type="button" onClick={generateWorkoutPlan}>
            Generate Plan
          </button>
        </form>

        {bmi && (
          <div className="card-grid interactive-container">
          {/* Calorie Recommendation Section */}
          <div className="interactive-section">
            <h3>Calorie Recommendation</h3>
            <div className="info-card">
              <h4>Daily Intake</h4>
              <p>{calorieRecommendation}</p>
            </div>
          </div>
        
          {/* Suggested Exercises Section */}
          <div className="interactive-section">
            <h3>Suggested Exercises</h3>
            <div className="exercise-cards">
              {exercises.map((exercise, index) => (
                <div key={index} className="info-card">
                  <h4>{exercise}</h4>
                  
                </div>
              ))}
            </div>
          </div>
        
          {/* Schedule Section */}
          <div className="interactive-section">
            <h3>Schedule</h3>
            <div className="schedule-cards">
              {schedule.map((day, index) => (
                <div key={index} className="info-card">
                  <h4>{day.split(":")[0]}</h4>
                  <p>{day.split(":")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        )}

        {modalVisible && (
          <div className="modal active">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
              <h2>Your BMI Score</h2>
              <p>{bmi}</p>
              <p>{bmiAnalysis}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlanGenerator;
