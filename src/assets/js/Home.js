import React from 'react';
const Home = () => (
    <div className="container container--acceuil">     
    <div className="col-sm-7 acceuil--left">
      <div className="acceuil--content">
        <div id="scene--content">          
          <span >Hello je suis</span>
          <h1 >Caroline van Aerschot</h1>
          <h4 >Graphic designer / Web designer / Web developper</h4>
          <button >contactez-moi</button>
        </div>
      </div>           
  </div>
      <div className="col-sm-4 acceuil--right">        
          <img  src="../../../src/assets/img/Me__VectorAfter.svg" className="img-fluid Me__VectorAfter" alt="Me__VectorAfter"/>
          <img  src="../../../src/assets/img/Me__Vector.svg" className="img-fluid Me__Vector" alt="Me__Vector" />
          <img   src="../../../src/assets/img/Me__Background.svg" className="img-fluid Me__Background" alt="Me__Background" />
      </div>               
  </div>   
);
export default Home;