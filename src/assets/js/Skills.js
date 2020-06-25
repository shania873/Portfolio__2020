import React from 'react';
import { NProgress } from '@tanem/react-nprogress';
import '@babel/polyfill';
import $ from 'jquery';
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
import Blob from './blob';
import Slideshow from './Slider';
import { TimelineLite, CSSPlugin } from "gsap/all";

const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })


  class Skills extends React.Component {
    constructor(props){
      super(props);

      this.ImgContentFrontEnd = null;
      this.ImgContentGraphicDesign = null;

      this.state = {
        isLoading: true,
        SlideFrontEndGraphic: false
      };
    }
    
    async componentDidMount() {     

        await callFakeAPI(3000)
        // // var repeat = myTween.repeat();
        // this.SlideFrontEndGraphic = new TimelineLite({ paused:false })
        // // .to(this.ImgContentGraphicDesignH2, 0.5, {opacity:0 }, 0)
        // // .to(this.ImgContentGraphicDesign, 0.5, { opacity:0 }, 0)
        // // .to(this.ImgContentFrontEndH2, 0.5, { opacity:0 }, 0)
        // // .to(this.ImgContentFrontEnd, 0.5, { opacity:0 }, 0)

        // .to(this.ImgContentFrontEnd, 0.5, { x:0,opacity:1 }, 0)
        // .to(this.ImgContentFrontEndH2, 0.5, { x:0,opacity:1 }, 0)         
        // .to(this.ImgContentFrontEnd, 0.5, { x:-100, opacity:0 }, 5)
        // .to(this.ImgContentFrontEndH2, 0.5, { x:100,opacity:0 }, 5)  

      
        // .to(this.ImgContentGraphicDesign, 0.5, { x:0,opacity:1 }, 5.5)  
        // .to(this.ImgContentGraphicDesignH2, 0.5, { x:0,opacity:1 }, 5.5)
        // // .to(this.ImgContentGraphicDesign, 0.5, { x:-100,opacity:0 }, 9.5)        
        // // .to(this.ImgContentGraphicDesignH2, 0.5, {x:100,opacity:0 }, 9.5)
        // // .repeat(Infinity)

        // this.SlideFrontEndGraphic.vars.paused = false;
        // console.log(this.SlideFrontEndGraphic);
        this.setState(() => ({
          isLoading: false         
         
        }));
        
      }
      toRight() {
        console.log("click");

        // this.SlideFrontEndGraphic = new TimelineLite({ paused:false,repeat: -1, repeatDelay: 1 })
        // .to(this.ImgContentGraphicDesign, 0.5, { x:0,opacity:1 }, 0)  
        // .to(this.ImgContentGraphicDesignH2, 0.5, { x:0,opacity:1 }, 0)
        // .to(this.ImgContentGraphicDesign, 0.5, { x:-100,opacity:0 }, 4.5)        
        // .to(this.ImgContentGraphicDesignH2, 0.5, {x:100,opacity:0 }, 4.5)
      }
      toLeft() {
        console.log("click");

        // this.SlideFrontEndGraphic = new TimelineLite({ paused:false,repeat: -1, repeatDelay: 1 })
        // .to(this.ImgContentGraphicDesign, 0.5, { x:-100,opacity:0 }, 0)  
        // .to(this.ImgContentGraphicDesignH2, 0.5, { x:100,opacity:0 }, 0)
        // .to(this.ImgContentGraphicDesign, 0.5, { x:0,opacity:1 }, 4.5)        
        // .to(this.ImgContentGraphicDesignH2, 0.5, {x:0,opacity:1 }, 4.5)
      }
    
    render() {
        return (
          <React.Fragment>
            <NProgress isAnimating={this.state.isLoading}>
              {({ isFinished, progress, animationDuration }) => (
                <Container
                  isFinished={isFinished}
                  animationDuration={animationDuration}
                >
                  <Bar progress={progress} animationDuration={animationDuration} />
                  <Spinner />
                </Container>
              )}
            </NProgress>      
    <div className="container container--skills">
    <Slideshow/>
     {/* <div className="col-lg-6 col-sm-12 col-xs-12 skills--left" >
        <img src="../../../src/assets/img/desk__chairAlone.svg" className="bob-y img-fluid Me__Vector" alt="Me__Vector"/>
        <h2 ref={ h2 => this.ImgContentFrontEndH2 = h2 } ref={ e => this.arrow = e }>web developpement</h2>
        <h2 ref={ h2 => this.ImgContentGraphicDesignH2 = h2 }>Graphic Design & Web Design</h2>
        <Blob/>   
        <div className="set--arrow">
       
       
           <button onClick={() => this.toLeft()}> <i class="fas fa-arrow-left" ref={ h2 => this.ImgContentArrowLeft = h2 } ></i> </button>
           <button onClick={() => this.toRight()}> <i class="fas fa-arrow-right" ref={ h2 => this.ImgContentArrowRight = h2 }></i> </button>
           <button
							className="btn gsap-btn"
							onClick={() => this.SlideFrontEndGraphic.play()}
						>Play</button>
           <button
							className="btn gsap-btn"
							onClick={() => this.SlideFrontEndGraphic.pause()}
						>Pause</button>
        </div>
     </div>
        <div className="col-lg-6 col-sm-12 col-xs-12 skills--right">
        <div className="skills--content" ref={ div => this.ImgContentFrontEnd = div }>    
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
        <div className="skills--content" ref={ div => this.ImgContentGraphicDesign = div }>    
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
       
       
        </div> */}
        </div>
      
        </React.Fragment>
  )
}
}
export default Skills;



