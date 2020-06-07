import $ from 'jquery';
import { gsap } from "gsap";
import cursorDot from 'cursor-dot';
// import "./assets/javascripts/promisesSet.js";
import "./assets/styles/index.scss";

import '@fortawesome/fontawesome-free/js/all.js';
import "./assets/javascripts/cursor.js";


 
function IntervalResize(){    
        if (window.innerWidth > 728){
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
            }, 500);
        }
       
}
IntervalResize();
window.addEventListener('resize', IntervalResize);

// let btnBurger = document.getElementById("hamburger-icon");

// btnBurger.addEventListener("click",function(){
//   this.classList.toggle("active");

// });

var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //poster transform
  $menu.css('transform', transformPoster);

  //parallax for each layer
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});

const btnBurger = document.querySelector(".col");
const Menu = document.querySelector(".Menu");

let TopBar = document.querySelector(".top");
let BottomBar = document.querySelector(".bottom");
let MiddleBar = document.querySelector(".middle");

let menuActive = false;
let mousePos = { x: 0, y: 0 };
console.log(btnBurger);
console.log(Menu);
btnBurger.addEventListener("click", function(){
	Menu.classList.toggle("active");
	console.log(btnBurger);
    console.log(Menu);

    TopBar.classList.toggle("top--Active");
    BottomBar.classList.toggle("bottom--Active");
    MiddleBar.classList.toggle("middle--Active");
    
});


const cursor = cursorDot({
    // diameter in pixels
    diameter: 80,

    // border width
    borderWidth: 1,

    // border color
    borderColor: '#fff',

    // easing
    easing: 4,

    // background
    background: 'transparent'
})

cursor.over(".acceuil--content h1,.acceuil--content span,.acceuil--content h4", {
    scale: 0.5,
    background: "#fff",
    borderColor: "rgba(255,255,255,.38)"
  });
  console.log(cursor);
//   cursor.over(".element-2", {
//     borderColor: "rgba(255,255,255,.38)"
//   });
  
//   cursor.over(".element-3", {
//     scale: 0.5,
//     background: "#fff"
//   });