import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import './index.css';

const Layout = () => {

  // User's data(weight, age, height, etc...)
  const [userData, setUserData] = useState(() => {

    // Attempt to fetch user data
    const saved = localStorage.getItem('userData');

    // If found, parse and use it. Otherwise, initialize with default values
    return saved ? JSON.parse(saved) : {
      name: '',
      profilePicture: '',
      sex: '',
      age: '',
      height: '',
      weight: '',
      goal_weight: '',
      email: '',
      workoutHistory: [],
    };

  });

  // Time data(seconds elapsed and whether timer is paused or not)
  const [timerData, setTimerData] = useState(() => {
    const saved = localStorage.getItem('timerData');
    return saved ? JSON.parse(saved) : {
      secondsElapsed: 0,
      isPaused: true
    };
  });

  const timerRef = useRef(null);

  // Increment the timer if it is not paused
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimerData(prev => {
        if (!prev.isPaused) {
          return { ...prev, secondsElapsed: prev.secondsElapsed + 1 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Whenever userData changes, update it in local storage
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Workout history:', userData.workoutHistory);
  }, [userData]);

  // Whenever timerData changes, update it in local storage
  useEffect(() => {
    localStorage.setItem('timerData', JSON.stringify(timerData));
  }, [timerData]);

  return (
    <main>
      <div className="page-container">
        <Outlet context={{ userData, setUserData, timerData, setTimerData }} />
      </div>
      <NavBar />
    </main>
  );
};

export default Layout;