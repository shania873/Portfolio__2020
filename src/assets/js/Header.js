

import React from "react";
import {
  BrowserRouter as Router,  
  NavLink 
} from "react-router-dom";
import {browserHistory} from 'react-router';
const Header = () =>(
    <React.Fragment>
    <div className='cursor'></div>
    <div className='Menu'>
        <ul className='Menu-list' data-offset='10'>
          <li className='Menu-list-item'>
          <NavLink to="/">  Home
            <span className='Mask'><span>Home</span></span>
            <span className='Mask'><span>Home</span></span></NavLink>
          </li>
          <li className='Menu-list-item'>
          <NavLink to="/about"> About
            <span className='Mask'><span>About</span></span>
            <span className='Mask'><span>About</span></span></NavLink>
          </li>
          <li className='Menu-list-item'>
          <NavLink to="/skills"> Skills
            <span className='Mask'><span>Skills</span></span>
            <span className='Mask'><span>Skills</span></span></NavLink>
          </li>
          <li className='Menu-list-item'>
          <NavLink to="/work"> Work
            <span className='Mask'><span>Work</span></span>
            <span className='Mask'><span>Work</span></span></NavLink>
          </li>
          <li className='Menu-list-item'>
          <NavLink to="/project"> Project
            <span className='Mask'><span>Project</span></span>
            <span className='Mask'><span>Project</span></span></NavLink>
          </li>
          <li className='Menu-list-item'>
          <NavLink to="/contact">Contact
            <span className='Mask'><span>Contact</span></span>
            <span className='Mask'><span>Contact</span></span></NavLink>
          </li>
        </ul>
      </div>
      <header className="header--website">
      <div className="header--logo"><img className="img-fluid" src="../../../src/assets/img/Logo__Portfolio.svg"  alt="logo--Portfolio"/></div>
    
      <nav className="navbar--burger navbar-dark">
          <div className="col">
              <div className="con">
                  <div className="bar top"></div>
                  <div className="bar middle"></div>
                  <div className="bar bottom"></div>
              </div>
          </div>
      </nav>
      <nav className="navbar--logos navbar-dark">
          <li>
              <i className="fab fa-github"></i>
          </li>
          <li>
              <i className="fab fa-linkedin-in"></i>
          </li>
      </nav>
    </header>  
    </React.Fragment>
);
export default Header;
