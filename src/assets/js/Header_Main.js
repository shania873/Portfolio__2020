import React, { Fragment } from "react";
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import Header from './Header';
import AppRouter from './AppRouter';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Project from './Project';
import Contact from './Contact';

import PropTypes from "prop-types";
import { withRouter } from "react-router";

export default class HeaderAppBar extends React.Component{ 

  render() {
   
      return (
 <Fragment>
<Header/>  
   
    
   <AppRouter/>
 </Fragment>
     
   
      )
        
  } 
}
// const ShowTheLocationWithRouter = withRouter(ShowTheLocation);


