import React from 'react';
import { NProgress } from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
import Blob from './blob';
const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })


  class Skills extends React.Component {
    state = {
        isLoading: true,
      }
    async componentDidMount() {
        await callFakeAPI(3000)
        this.setState(() => ({
          isLoading: false,
        }))
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
     <div className="col-sm-6 skills--left">
        <img src="../../../src/assets/img/desk__chairAlone.svg" className="bob-y img-fluid Me__Vector" alt="Me__Vector"/>
        <h2>web developpement</h2>
        <Blob/>
     </div>
        <div className="col-sm-6 mr-4 skills--right ml-4">
        <div className="skills--content">
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
        </div>
        </div>
        </React.Fragment>
  )
}
}
export default Skills;