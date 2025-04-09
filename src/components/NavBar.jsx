import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="35px"
              height="35px"
              fill="white"
              stroke="white"
            >
              <path
                d="M8 6C7.448 6 7 6.448 7 7V23C7 23.552 7.448 24 8 24H11V17H19V24H22C22.552 24 23 23.552 23 23V7C23 6.448 22.552 6 22 6H19V13H11V6H8ZM3 9C2.448 9 2 9.448 2 10V13H0V17H2V20C2 20.552 2.448 21 3 21H5V9H3ZM25 9V21H27C27.552 21 28 20.552 28 20V17H30V13H28V10C28 9.448 27.552 9 27 9H25Z"
              />
            </svg>
            <p>Workout</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress" className={({ isActive }) => isActive ? "active" : ""}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="white" 
            viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" 
            className="size-6"
            style={{ height: '35px' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            <p>Progress</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/nutrition" className={({ isActive }) => isActive ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="35px"
              height="35px"
              fill="white"
              stroke="white"
            >
              <path
                d="M4 4 C4 4 2 8 2 12 C2 15.594784 3.7573877 18.551333 8 18.949219 L8 23.242188 L4.7382812 24.03125 
                C4.2516577 24.162198 3.9367723 24.632802 4.0031777 25.131834 C4.0695831 25.630866 4.4965771 26.002749 5 26 
                L13 26 C13.506396 26.006699 13.937869 25.633802 14.004607 25.131778 C14.071344 24.629754 13.752278 24.157083 
                13.261719 24.03125 L10 23.242188 L10 18.949219 C14.242612 18.551333 16 15.594784 16 12 C16 8 14 4 14 4 
                L4 4 Z M19 4 C18.448 4 18 4.448 18 5 L18 10.785156 C18 13.127346 19.541266 15.23203 21.734375 15.822266 
                L21 23.826172 C21 24.941 21.895 26 23 26 C24.104 26 25 25.104 25 24 L24.259766 15.833984 
                C26.410191 15.274998 28 13.325156 28 11 L28 5 C28 4.448 27.552 4 27 4 C26.448 4 26 4.448 26 5 L26 10 
                C26 10.553 25.552 11 25 11 C24.448 11 24 10.553 24 10 L24 5 C24 4.448 23.552 4 23 4 C22.448 4 22 4.448 
                22 5 L22 10 C22 10.553 21.552 11 21 11 C20.448 11 20 10.553 20 10 L20 5 C20 4.448 19.552 4 19 4 Z"
              />
            </svg>
            <p>Nutrition</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              style={{ height: '35px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <p>Profile</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;