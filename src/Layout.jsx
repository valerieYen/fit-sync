import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import './index.css';

const Layout = () => {
  return (
    <main>
      <div className="page-container">
        {/* This renders the currently matched route (e.g., Workout, Nutrition, Profile) */}
        <Outlet />
      </div>
      
      {/* Always show the NavBar */}
      <NavBar />
    </main>
  );
};

export default Layout;
