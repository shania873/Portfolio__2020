

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
        <NavLink to="/">  <li className='Menu-list-item'>
          Home          
          </li></NavLink> 
          <NavLink to="/about"><li className='Menu-list-item'>
           About 
          
          </li></NavLink>
          <NavLink to="/skills"><li className='Menu-list-item'>
           Skills
           
          </li></NavLink>
          <NavLink to="/work">
          <li className='Menu-list-item'>
           Work
          
          </li></NavLink>          
          <NavLink to="/contact"><li className='Menu-list-item'>
          Contact
         
          </li></NavLink>
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
