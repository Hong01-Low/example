import React from 'react';
import './Login.module.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <h2>IPK College</h2>
          <nav>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </nav>
       </div>
    );
}
 
export default Navigation;