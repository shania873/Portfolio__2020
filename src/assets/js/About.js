import React from 'react';
const About = () => (
    <div className="container container--about">
    <div className="col-sm-6 about--left">
      <img src="../../../src/assets/img/desk.svg" className="bob-y img-fluid Me__Vector" alt="Me__Vector" />
      <h2>web developpement</h2>
      <canvas className="canvas img-fluid Me__Vector"></canvas>
    
      {/* <img src="../../../src/assets/img/Me__Vector.svg" className="img-fluid Me__Vector" alt="Me__Vector" />       */}
  </div>
      <div className="col-sm-6 mr-4 about--right">
          <div className="about--content">               
              <h1>à propos de moi</h1>
              <p>Passionnée en technologie et création graphique depuis des années, j’ai obtenue un bachelier en Infographie spécialitée web à la Haute Ecole Francisco Ferrer à Bruxelles, 
                  Autonome, autodidacte, très motivé, et travailleuse, je cherche constamment à améliorer mes compétences grâce à mes projets personnelles, mes clients, mes expériences professionnelles et à des plateformes de formations tels que Dyma et Udemy.                        
                  Également très sociable et curieuse, j’ai la capacité de m'adapter à tout type d'environnement, que ce soit seule ou en équipe.
                  </p>
              <button>Mon cv</button>
          </div>  
      </div>   
  </div> 
);
export default About;