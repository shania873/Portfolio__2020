import '@babel/polyfill';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import cursorDot from 'cursor-dot';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles.scss';
import {
    HashRouter, 
  } from "react-router-dom";

import App from './assets/js/Header_Main';
ReactDOM.render(
    <HashRouter>
<App />
</HashRouter>, document.getElementById('root'));
function IntervalResize(){    
        if (window.innerWidth > 768){
            setTimeout(function () { 
                let header = document.querySelectorAll(".header--website");
                let main = document.querySelectorAll(".main--website");
            
                let windowWidth = window.innerWidth;
                let headerWidth = header[0].clientWidth;
                let mainWidth = main[0].clientWidth;        
            
                let resultatWidth = windowWidth - headerWidth;
                let resultatWidthWithPx = resultatWidth + "px";
                main[0].style.width = resultatWidthWithPx;     
                main[0].style.height = "100%";         
                
               

            }, 500);
            
        }else{           
            setTimeout(function () { 
                let header = document.querySelectorAll(".header--website");
                let main = document.querySelectorAll(".main--website");
            
                let windowHeight = window.innerHeight;
                let headerHeight = header[0].clientHeight;
                let mainHeight = main[0].clientHeight;
            
                let resultatHeight = windowHeight - headerHeight;
                let resultatHeightWithPx = resultatHeight + "px";
                main[0].style.width = "100%";
                main[0].style.height = resultatHeightWithPx;      
                main[0].style.top = headerHeight + "px";   
                console.log('bonweight');    
            }, 500);
        }
       
}

window.addEventListener('resize', IntervalResize);

function ParralaxForMenu(){
    let $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), 
    h = $(window).height(); 

$(window).on('mousemove', function(e) {
  let offsetX = 0.5 - e.pageX / w, 
      offsetY = 0.5 - e.pageY / h, 
      dy = e.pageY - h / 2,
      dx = e.pageX - w / 2, 
      theta = Math.atan2(dy, dx), 
      angle = theta * 180 / Math.PI - 90, 
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

 
  if (angle < 0) {
    angle = angle + 360;
  }
 
  $menu.css('transform', transformPoster);

 
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});

}

function EffectBtnBurger(){
    const btnBurger = document.querySelector(".col");
    const Menu = document.querySelector(".Menu");
    const ListItem = document.querySelectorAll(".Menu-list-item");


    let TopBar = document.querySelector(".top");
    let BottomBar = document.querySelector(".bottom");
    let MiddleBar = document.querySelector(".middle");
    
     
    btnBurger.addEventListener("click", function(){
        Menu.classList.toggle("active");
        TopBar.classList.toggle("top--Active");
        BottomBar.classList.toggle("bottom--Active");
        MiddleBar.classList.toggle("middle--Active");    
    });

    ListItem.forEach(element => {      
        element.addEventListener("click", function(){         
            Menu.classList.remove("active");
            TopBar.classList.remove("top--Active");
            BottomBar.classList.remove("bottom--Active");
            MiddleBar.classList.remove("middle--Active");    
        });    
    });

    
}



function Cursor(){
    const cursor = cursorDot({   
        diameter: 80,    
        borderWidth: 1,    
        borderColor: '#fff',
        easing: 4,
        background: 'transparent'
    })
    
    cursor.over(".acceuil--content h1,.acceuil--content span,.acceuil--content h4", {
        scale: 0.5,
        background: "#fff",
        borderColor: "rgba(255,255,255,.38)"
      });
     
}



function Init(){
    IntervalResize();
    ParralaxForMenu();
    // ParralaxForMee();
    EffectBtnBurger();
    Cursor();
  
}

Init();
// import "./assets/js/navbar.js";