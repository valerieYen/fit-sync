import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Text from './components/Text';
import LowerRight from './components/LowerRight'
import Colors from './components/Colors';
import Profile from './components/Profile';
import Choices from './components/Choices';
import ToDo from './components/ToDo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Text />} />
          <Route path="/lower-right" element={<LowerRight />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/choices" element={<Choices />} />
          <Route path="/todo" element={<ToDo />} />
          <Route
            path="*"
            element={
              <div className="">
                <p className="">Theres nothing here!</p>
                <Link to="/" className="">
                  Back to Home
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

