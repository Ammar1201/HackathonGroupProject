import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

function NavBar() {
  return ( 
  <nav className="nav-main">
    <h3>Logo</h3>
    <ul className="list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/BookDisplay">Book</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
  </nav>
)}

export default NavBar;
