import '@babel/polyfill';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import cursorDot from 'cursor-dot';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles.scss';
import 'animate.css';
import './assets/js/paper-full.min';
import Goo from 'gooey-react';
import * as blobs2 from "blobs/v2";
import * as blobs2Animate from "blobs/v2/animate";

// import * as Animatable from 'react-native-animatable';
// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
import {
    HashRouter, 
  } from "react-router-dom";

import App from './assets/js/Header_Main';
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));




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
                console.log('desktop'); 
               

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
                console.log('tablet');    
            }, 500);
        }
       
}

// window.addEventListener('resize', IntervalResize);

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

function containerBubbles(){
 
  const canvas = document.querySelectorAll("canvas")[0];

 
  const size = Math.min(600, Math.min(window.innerWidth - 64, window.innerHeight - 400));
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  
  const resolution = size * (window.devicePixelRatio || 1);
  canvas.width = resolution;
  canvas.height = resolution;


  const logoWidth = resolution * 0.8;
  const logoHeight = logoWidth * 0.4;
  const logoOffsetX = (resolution - logoWidth) / 2;
  const logoOffsetY = (resolution - logoHeight) / 2;


  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#0dca7b";
  ctx.globalCompositeOperation = "xor";

 
  const logoWord = new Image();
  logoWord.src = "../src/assets/img/Me__Background.svg";

 
  const animation = blobs2Animate.canvasPath();
  const renderFrame = () => {
      ctx.clearRect(0, 0, resolution, resolution);
  
      ctx.fill(animation.renderFrame());
      requestAnimationFrame(renderFrame);
  };
  requestAnimationFrame(renderFrame);

 
  const genFrame = (overrides) => ({
      duration: 4000,
      timingFunction: "ease",
      callback: loopAnimation,
      blobOptions: {
          extraPoints: 3,
          randomness: 4,
          seed: Math.random(),
          size: resolution,
      },
      ...overrides,
  });

 
  const loopAnimation = () => animation.transition(genFrame());

  animation.transition(genFrame({duration: 0}));

 
  canvas.onclick = () => {
      animation.transition(genFrame({duration: 400, timingFunction: "elasticEnd0"}));
  };
}

function SliderFunc(){
    

var Numb0 = document.querySelectorAll(".Numb0");

  var Numb1 = document.querySelectorAll(".Numb1");

  var prevBtn = document.getElementById("btn--prev");
  var nextBtn = document.getElementById("btn--next");
  
  var btnStop = document.getElementById("stop--interval");
  var btnPlay = document.getElementById("play--interval");
  var myVar;
  
  // console.log(Numb0);
  // console.log(Numb1);
  
  nextBtn.classList.add("active");
  
  Numb0.forEach(element => {
      // console.log(element);
      element.classList.add("active");    
  });
  
  
  
  
  var Num = 0;
  myVar = setInterval(myTimer, 3000);
  
  function myTimer() {
    Num++;
  
  //   console.log(Numb0);
  
    if (Num === 2) {
      Num = 0;
    }
  
    if (Num < 1) {
      prevBtn.classList.remove("active");
      nextBtn.classList.add("active");
  
      Numb0.forEach(element => {
          element.classList.add("active");   
          // console.log(element); 
      });
      Numb1.forEach(element => {
          element.classList.remove("active");
          // console.log(element);
      });  
    }
  
    if (Num > 0) {
      prevBtn.classList.add("active");
      nextBtn.classList.remove("active");
  
      Numb0.forEach(element => {
          element.classList.remove("active");  
          // console.log(element);
      });
      Numb1.forEach(element => {
          element.classList.add("active");
          // console.log(element);
      });
    }
  }
  
  btnPlay.addEventListener("click", function() {
    myVar = setInterval(myTimer, 3000);
    console.log(myVar);
  });
  
  btnStop.addEventListener("click", function() {
    clearInterval(myVar);
    console.log(myVar);
  });
  
  prevBtn.addEventListener("click", function() {
    clearInterval(myVar);
    prevBtn.classList.remove("active");
    nextBtn.classList.add("active");
  
   
      Numb0.forEach(element => {
          console.log(element);
          element.classList.add("active");    
      });
      Numb1.forEach(element => {
          console.log(element);
          element.classList.remove("active");
      });  
    console.log("clickprev");
    console.log(myVar);
  });
  
  nextBtn.addEventListener("click", function() {
    clearInterval(myVar);
    prevBtn.classList.add("active");
    nextBtn.classList.remove("active");
    console.log(myVar);
  
      Numb0.forEach(element => {
          console.log(element);
          element.classList.remove("active");  
      });
      Numb1.forEach(element => {  
          console.log(element);
          element.classList.add("active");
      });
    console.log("clicknext");
  });



}
function Loading(){
  var checkmarkIdPrefix = "loadingCheckSVG-";
var checkmarkCircleIdPrefix = "loadingCheckCircleSVG-";
var verticalSpacing = 50;
var prop;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createSVG(tag, properties, opt_children) {
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for(prop in properties) {
    newElement.setAttribute(prop, properties[prop]);
  }
  if (opt_children) {
    opt_children.forEach(function(child) {
      newElement.appendChild(child);
    })
  }
  return newElement;
}

function createPhraseSvg(phrase, yOffset) {
  var text = createSVG("text", {
    fill: "white",
    x: 50,
    y: yOffset,
    "font-size": 18,
    "font-family": "Arial"
  });
  text.appendChild(document.createTextNode(phrase + "..."));
  return text;
}
function createCheckSvg(yOffset, index) {
  var check = createSVG("polygon", {
    points: "21.661,7.643 13.396,19.328 9.429,15.361 7.075,17.714 13.745,24.384 24.345,9.708 ",
    fill: "rgba(255,255,255,1)",
    id: checkmarkIdPrefix + index
  });
  var circle_outline = createSVG("path", {
    d: "M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,30C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2 c7.72,0,14,6.28,14,14C30,23.72,23.72,30,16,30z",
    fill: "white"
  })
  var circle = createSVG("circle", {
    id: checkmarkCircleIdPrefix + index,
    fill: "rgba(255,255,255,0)",
    cx: 16,
    cy: 16,
    r: 15
  })
  var group = createSVG("g", {
    transform: "translate(10 " + (yOffset - 20) + ") scale(.9)"
  }, [circle, check, circle_outline]);
  return group;
}

function addPhrasesToDocument(phrases) {
  phrases.forEach(function(phrase, index) {
    var yOffset = 30 + verticalSpacing * index;
    document.getElementById("phrases").appendChild(createPhraseSvg(phrase, yOffset));
    document.getElementById("phrases").appendChild(createCheckSvg(yOffset, index));
  });
}

function easeInOut(t) {
  var period = 200;
  return (Math.sin(t / period + 100) + 1) /2;
}

document.addEventListener("DOMContentLoaded", function(event) {
  var phrases = shuffleArray(["Feeding unicorns", "Grabbing tasks", "Collating conversations", "Reticulating splines", "Pondering emptiness", "Considering alternatives", "Shuffling bits", "Celebrating moments", "Generating phrases", "Simulating workflow", "Empowering humanity", "Being aspirational", "Doing the hokey pokey", "Bueller", "Cracking jokes", "Slacking off"]);
  addPhrasesToDocument(phrases);
  var start_time = new Date().getTime();
  var upward_moving_group = document.getElementById("phrases");
  upward_moving_group.currentY = 0;
  var checks = phrases.map(function(_, i) { 
    return {check: document.getElementById(checkmarkIdPrefix + i), circle: document.getElementById(checkmarkCircleIdPrefix + i)};
  });
  function animateLoading() {
    var now = new Date().getTime();
    upward_moving_group.setAttribute("transform", "translate(0 " + upward_moving_group.currentY + ")");
    upward_moving_group.currentY -= 1.35 * easeInOut(now);
    checks.forEach(function(check, i) {
      var color_change_boundary = - i * verticalSpacing + verticalSpacing + 15;
      if (upward_moving_group.currentY < color_change_boundary) {
        var alpha = Math.max(Math.min(1 - (upward_moving_group.currentY - color_change_boundary + 15)/30, 1), 0);
        check.circle.setAttribute("fill", "rgba(255, 255, 255, " + alpha + ")");
        var check_color = [Math.round(255 * (1-alpha) + 120 * alpha), Math.round(255 * (1-alpha) + 154 * alpha)];
        check.check.setAttribute("fill", "rgba(255, " + check_color[0] + "," + check_color[1] + ", 1)");
      }
    })
    if (now - start_time < 30000 && upward_moving_group.currentY > -710) {
      requestAnimationFrame(animateLoading);
    }
  }
  //animateLoading();
});
}
    function Init(){
        // SliderFunc();
        // IntervalResize();
        // Loading();
        
        ParralaxForMenu();
        EffectBtnBurger();
        Cursor();      
    }    

    // window.onload = function() {Init()};
Init();
// import "./assets/js/navbar.js";