import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = ({ toggleTheme, currTheme }) => {
  return (
    <nav className={`navbar-container ${currTheme}`}>
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Hero
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button onClick={toggleTheme}>
          {currTheme === "light" ? "dark" : "light"}Theme
        </button>
      </div>
    </nav>
  );
};
