import { Outlet, Link } from 'react-router-dom';

const Layout = () => {

  return (
    <div className="Page">
      <div className="">
        <nav className="Navbar">
          <Link to="/" className="Link">
            <h1>Text <img style={{width: '30px'}} src='public/text-icon.png'></img></h1>
          </Link>
          <Link to="/lower-right" className="Link">
            <h1>LR <img style={{width: '30px'}} src='public/lr-icon.png'></img></h1>
          </Link>
          <Link to="/colors" className="Link">
            <h1>Colors <img style={{width: '30px'}} src='public/color-icon.png'></img></h1>
          </Link>
          <Link to="/profile" className="Link">
            <h1>Profile <img style={{width: '30px'}} src='public/profile-icon.png'></img></h1>
          </Link>
          <Link to="/choices" className="Link">
            <h1>Choices <img style={{width: '30px'}} src='public/choices-icon.png'></img></h1>
          </Link>
          <Link to="/todo" className="Link">
            <h1>ToDo <img style={{width: '30px'}} src='public/todo-icon.png'></img></h1>
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