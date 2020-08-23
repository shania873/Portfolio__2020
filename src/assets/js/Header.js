

import React from "react";
import {
  BrowserRouter as Router,  
  NavLink 
} from "react-router-dom";
import {browserHistory} from 'react-router';

// function func(){
//     const btnBurger = document.querySelector(".col");
//     const Menu = document.querySelector(".Menu");
//     const ListItem = document.querySelectorAll(".Menu-list-item");


//     let TopBar = document.querySelector(".top");
//     let BottomBar = document.querySelector(".bottom");
//     let MiddleBar = document.querySelector(".middle");
    
     
//     btnBurger.addEventListener("click", function(){
//         Menu.classList.toggle("active");
//         TopBar.classList.toggle("top--Active");
//         BottomBar.classList.toggle("bottom--Active");
//         MiddleBar.classList.toggle("middle--Active");    
//         console.log("btn");
//     });

//     ListItem.forEach(element => {      
//         element.addEventListener("click", function(){         
//             Menu.classList.remove("active");
//             TopBar.classList.remove("top--Active");
//             BottomBar.classList.remove("bottom--Active");
//             MiddleBar.classList.remove("middle--Active");    
//             console.log("btn");
//         });    
//     });

// }



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        let btnBurger = document.querySelector(".col");
        let Menu = document.querySelector(".Menu");
        let ListItem = document.querySelectorAll(".Menu-list-item");
        // let closeBtn = document.querySelector(".close");
    
        let TopBar = document.querySelector(".top");
        let BottomBar = document.querySelector(".bottom");
        let MiddleBar = document.querySelector(".middle");
        
         
        btnBurger.addEventListener("click", function(){
            Menu.classList.toggle("active");
            TopBar.classList.toggle("top--Active");
            BottomBar.classList.toggle("bottom--Active");
            MiddleBar.classList.toggle("middle--Active");    
            // closeBtn.classList.toggle("active");   
            console.log("btn");
        });
    
        ListItem.forEach(element => {      
            element.addEventListener("click", function(){         
                Menu.classList.remove("active");
                // closeBtn.classList.remove("active");   
                TopBar.classList.remove("top--Active");
                BottomBar.classList.remove("bottom--Active");
                MiddleBar.classList.remove("middle--Active");    
                console.log("btn");
            });    
        });

        // closeBtn.addEventListener("click", function(){      
        //     closeBtn.classList.remove("active");   
        //     Menu.classList.remove("active");
        //     TopBar.classList.remove("top--Active");
        //     BottomBar.classList.remove("bottom--Active");
        //     MiddleBar.classList.remove("middle--Active");    
        //     console.log("btn");
        // }); 
    
    }
    render() {
        return (
    <React.Fragment>
    <div className='cursor'></div>
    <div className='Menu slide-in-top'>
        {/* <div className="close">
                <i class="fas fa-times"></i>
        </div>     */}
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
        )
    }
};
export default Header;
