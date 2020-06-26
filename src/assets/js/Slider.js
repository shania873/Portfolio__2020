import React, { Fragment } from "react";
import Slider from "react-slick";
import Blob from './blob';
import Swiper from 'swiper';

class SimpleSlider extends React.Component {
  render() {  
    return (
    
       <Fragment>
	<div className="col-lg-6 col-sm-12 col-xs-12 skills--left" >
        <img src="../../../src/assets/img/desk__chairAlone.svg" className="bob-y img-fluid Me__Vector" alt="Me__Vector"/>
        <h2 className="Numb0">web developpement</h2>
        <h2 className="Numb1">Graphic Design & Web Design</h2>
        <Blob/>       
		<div className="set--arrows">
        <button id="btn--prev">prev</button>
        <button id="btn--next">next</button>

        <button id="stop--interval">STOP</button>
        <button id="play--interval">PLAY</button>
      </div>  
     </div>
        <div className="col-lg-6 col-sm-12 col-xs-12 skills--right">
        <div className="skills--content Numb0">    
            <h1>SKILLS & EXPERIENCE </h1>
            <p>Ayant eu des contrats déterminées ou de freelance, j’ai pu à l’occasion gagner en expérience que
                ce soit en travail d’équipe, en organisation ou en rapiditée
            </p>
          <h4>FRONT END DEVELOPPEMENT</h4>
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
        <div className="skills--content Numb1">    
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
   {/* <div className="slide--set">
        <div className="slide--items" id="0">
          <h1>slide 1</h1>
        </div>
        <div className="slide--items" id="1">
          <h1>slide 2</h1>
        </div>
      </div> */}
     
       </Fragment>
       
    
    );
  }
}

export default SimpleSlider;



