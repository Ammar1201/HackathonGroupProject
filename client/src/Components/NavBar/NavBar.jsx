import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";

function NavBar() {
  <nav>
      <ul className="menu">
      <li>
        <Link to="/Home" >Home</Link>
      </li>
      <li>
      <Link to="/Book" >Book</Link>
      </li>
      <li>
      <Link to="/About" >About</Link>
      </li>
      

       
        </ul>
     
    </nav>
}

export default NavBar;
