import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [activeTab, setActiveTab] = useState("Text");

  return (
    <div className="Page">
      <div className="">
        <nav className="Navbar">
          <Link to="/" className={`Link ${activeTab === "Text" ? "ActiveTab" : ""}`}
                onClick={() => setActiveTab("Text")}>
            <h1>Text</h1>
            <img style={{width: '30px'}} src='./text-icon.png' />
          </Link>
          <Link to="/lower-right" className={`Link ${activeTab === "LR" ? "ActiveTab" : ""}`}
                onClick={() => setActiveTab("LR")}>
            <h1>LR</h1>
            <img style={{width: '30px'}} src='./lr-icon.png' />
          </Link>
          <Link to="/colors" className={`Link ${activeTab === "Colors" ? "ActiveTab" : ""}`}
                onClick={() => setActiveTab("Colors")}>
            <h1>Colors</h1>
            <img style={{width: '30px'}} src='./color-icon.png' />
          </Link>
          <Link to="/profile" className={`Link ${activeTab === "Profile" ? "ActiveTab" : ""}`}
                onClick={() => setActiveTab("Profile")}>
            <h1>Profile</h1>
            <img style={{width: '30px'}} src='./profile-icon.png' />
          </Link>
          <Link to="/choices" className={`Link ${activeTab === "Choices" ? "ActiveTab" : ""}`}
                onClick={() => setActiveTab("Choices")}>
            <h1>Choices</h1>
            <img style={{width: '30px'}} src='./choices-icon.png' />
          </Link>
          <Link to="/todo" className={`Link ${activeTab === "ToDo" ? "ActiveTab" : ""}`}
                onClick={() => setActiveTab("ToDo")}>
            <h1>ToDo</h1>
            <img style={{width: '30px'}} src='./todo-icon.png' />
          </Link>
        </nav>
      </div>
      <div className="PageContent">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;