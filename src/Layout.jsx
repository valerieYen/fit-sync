import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import './index.css';

const Layout = () => {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : {
      name: '',
      profilePicture: '',
      sex: '',
      age: '',
      height: '',
      weight: '',
      goal_weight: '',
      email: '',
      phone: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <main>
      <div className="page-container">
        <Outlet context={[userData, setUserData]} />
      </div>
      <NavBar />
    </main>
  );
};

export default Layout;