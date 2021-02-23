import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navigation'>
      <ul>
        <NavLink to='/courses'>
          <li>Courses</li>
        </NavLink>
        <NavLink to='/users'>
          <li>Users</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
