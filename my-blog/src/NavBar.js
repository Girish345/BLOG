import { Link, useNavigate } from "react-router-dom";
import { getAuth, getauth, signOut } from "firebase/auth";
import useUser from "./hooks/useUser";
import "./Navbar.css";
const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <div className="nav-right">
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
