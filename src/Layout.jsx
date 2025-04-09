import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WorkoutPage from './components/WorkoutPage';
import ProfilePage from './components/ProfilePage';
import './index.css';

const Layout = () => {
  //Workout state
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [exercises, setExercises] = useState([
    { id: 1, title: 'Squat', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
    { id: 2, title: 'Bench', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
    { id: 3, title: 'Deadlift', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
    { id: 4, title: 'Notes', isOpen: false, notes: '' }
  ]);
  
  //Workout Timer
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setSecondsElapsed(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  // Workout reset
  const resetWorkout = () => {
    setSecondsElapsed(0);
    setIsPaused(true);
    setExercises([
      { id: 1, title: 'Squat', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
      { id: 2, title: 'Bench', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
      { id: 3, title: 'Deadlift', isOpen: false, sets: [{ id: 1, lbs: '', reps: '' }], notes: '' },
      { id: 4, title: 'Notes', isOpen: false, notes: '' }
    ]);
  };

  //Profile/Nutrition state
  const [userData, setUserData] = useState({
    name: 'Jane Doe',
    profilePicture: './profile-icon.png', 
    sex: 'Female',
    age: 20,
    height: '5"5',
    weight: 165.3,
    goal_weight: 150.0,
    email: 'jdoe@terpmail.umd.edu',
    phone: '1112223456'
  });

  return (
    <main>
      <div className="page-container">
        <Routes>
          <Route path="/" element={
            <WorkoutPage 
              secondsElapsed={secondsElapsed}
              setSecondsElapsed={setSecondsElapsed}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
              exercises={exercises}
              setExercises={setExercises}
              resetWorkout={resetWorkout}
            />
          } />
          <Route path="/profile" element={
            <ProfilePage 
              userData={userData}
              setUserData={setUserData}
            />
          } />
        </Routes>
      </div>
      
      <NavBar />
    </main>
  );
};

export default Layout;