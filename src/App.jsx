import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import WorkoutPage from './components/WorkoutPage';
import ProgressPage from './components/ProgressPage';
import NutritionPage from './components/NutritionPage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WorkoutPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="nutrition" element={<NutritionPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1>There's nothing here!</h1>
                <button onClick={() => window.location.href = '#/'}>
                  Back to Home
                </button>
              </div>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

