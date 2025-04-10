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
      workout_streak: 0,
      nutr_streak: 0
    };

  });

  const [timerData, setTimerData] = useState(() => {
    const saved = localStorage.getItem('timerData');
    return saved ? JSON.parse(saved) : {
      secondsElapsed: 0,
      isPaused: true
    };
  });

  const timerRef = useRef(null);

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