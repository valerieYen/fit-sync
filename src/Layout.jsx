import { Outlet, Link } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="Page">
      <div className="">
        <nav className="Navbar">
          <Link to="/" className="Link">
            <h1>Text</h1>
          </Link>
          <Link to="/lower-right" className="Link">
            <h1>LR</h1>
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