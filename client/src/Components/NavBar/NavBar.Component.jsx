import { NavLink, Link } from "react-router-dom";

import "./NavBar.Styles.css";
import logo from "../../assets/img/logo.png";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <Link to={"/"}>
        <img
          src={logo}
          alt=""
        />
      </Link>

      <NavLink
        className={({ isActive }) => (isActive ? "active" : "navLink")}
        to="/home">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "navLink")}
        to="/create">
        Crear Pokemon
      </NavLink>
    </nav>
  );
};

export default NavBar;
