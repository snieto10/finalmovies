import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="sergio">
      <ul className="navbar10">
        <li className="navbar100">
          <Link to="/">Vidly</Link>
        </li>
        <li className="navbar100">
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li className="navbar100">
          <NavLink to="/customers">Customer</NavLink>
        </li>
        <li className="navbar100">
          <NavLink to="/rentals">Rentals</NavLink>
        </li>
        <li className="navbar100">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
