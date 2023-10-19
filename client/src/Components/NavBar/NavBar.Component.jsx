import { NavLink } from "react-router-dom";

import "./NavBar.Styles.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/create">Crear Pokemon</NavLink>
      
    </nav>
  );
};

export default NavBar;
