import React, { Fragment } from "react";
import Slider from "react-slick";
import Blob from './blob';
import Swiper from 'swiper';
// import './Func__Slide';


class SimpleSlider extends React.Component {
  componentDidMount(){
    // console.log('test');

  
    //   var Numb0 = document.querySelectorAll(".Numb0");
    //   var Numb1 = document.querySelectorAll(".Numb1");
      
    //   var prevBtn = document.getElementById("btn--prev");
    //   var nextBtn = document.getElementById("btn--next");
      
    //   var btnStop = document.getElementById("stop--interval");
    //   var btnPlay = document.getElementById("play--interval");
    //   var myVar;
      
    //   // console.log(Numb0);
    //   // console.log(Numb1);
      
    //   nextBtn.classList.add("active");
      
    //   Numb0.forEach(element => {
    //       // console.log(element);
    //       element.classList.add("active");    
    //   });
      
      
      
      
    //   var Num = 0;
    //   myVar = setInterval(myTimer, 8000);
      
    //   function myTimer() {
    //     Num++;
      
    //   //   console.log(Numb0);
      
    //     if (Num === 2) {
    //       Num = 0;
    //     }
      
    //     if (Num < 1) {
    //       prevBtn.classList.remove("active");
    //       nextBtn.classList.add("active");
      
    //       Numb0.forEach(element => {
    //           element.classList.add("active");   
    //           // console.log(element); 
    //       });
    //       Numb1.forEach(element => {
    //           element.classList.remove("active");
    //           // console.log(element);
    //       });  
    //     }
      
    //     if (Num > 0) {
    //       prevBtn.classList.add("active");
    //       nextBtn.classList.remove("active");
      
    //       Numb0.forEach(element => {
    //           element.classList.remove("active");  
    //           // console.log(element);
    //       });
    //       Numb1.forEach(element => {
    //           element.classList.add("active");
    //           // console.log(element);
    //       });
    //     }
    //   }
      
    //   btnPlay.addEventListener("click", function() {
    //     myVar = setInterval(myTimer, 8000);
    //     console.log(myVar);
    //   });
      
    //   btnStop.addEventListener("click", function() {
    //     clearInterval(myVar);
    //     console.log(myVar);
    //   });
      
    //   prevBtn.addEventListener("click", function() {
    //     clearInterval(myVar);
    //     prevBtn.classList.remove("active");
    //     nextBtn.classList.add("active");
      
       
    //       Numb0.forEach(element => {
    //           console.log(element);
    //           element.classList.add("active");    
    //       });
    //       Numb1.forEach(element => {
    //           console.log(element);
    //           element.classList.remove("active");
    //       });  
    //     console.log("clickprev");
    //     console.log(myVar);
    //   });
      
    //   nextBtn.addEventListener("click", function() {
    //     clearInterval(myVar);
    //     prevBtn.classList.add("active");
    //     nextBtn.classList.remove("active");
    //     console.log(myVar);
      
    //       Numb0.forEach(element => {
    //           console.log(element);
    //           element.classList.remove("active");  
    //       });
    //       Numb1.forEach(element => {  
    //           console.log(element);
    //           element.classList.add("active");
    //       });
    //     console.log("clicknext");
    //   });
    
    //   if (window.innerWidth < 768){
    //     clearInterval(myVar);
    //     console.log('test');
    //   }
 

  }
  render() {  
    
    return (
    
       <Fragment>
         <div className="row">
         <div className="col-lg-6 col-sm-12 col-12 skills--left" >
         <h2>Graphic Design & Web developpement</h2>        
        <img src="../../../src/assets/img/desk__chairAlone.svg" className="bob-y img-fluid Me__Vector" alt="Me__Vector"/>
        <Blob/>   
     </div>
        <div className="col-lg-6 col-sm-12 skills--right d-flex align-items-center">    
            <div className="skills--content Numb1 overflowHidden">    
                <h1>SKILLS & EXPERIENCE </h1>
                <p>Ayant eu des contrats déterminées ou de freelance, j’ai pu à l’occasion gagner en expérience que
                    ce soit en travail d’équipe, en organisation ou en rapiditée
                </p>
              <h4>GRAPHIC DESIGN</h4>
                <p>Je me mets constamment à jour concernant les dernières technologies front-ends et les dernières
                    méthodologies, notamment sur les plateformes Udemy, Sololearn et Dyma.</p>
                <p>Actuellement mes compétences que j’ai pu mettre à profit sont</p>
                <ul>
                    <li>BEM pour la méthodologie Css</li>
                    <li>Scss</li>
                    <li>Html</li>
                    <li>Javascript</li>
                    <li>Jquery</li>
                    <li>Wordpress</li>
                    <li>Webpack</li>
                    <li>Babel</li>
                </ul>     
            </div>    
        </div> 
      </div>
	   
       </Fragment>
       
    
    );
  }
}

export default SimpleSlider;



