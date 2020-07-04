import React, {Fragment} from "react";
import Blob from './blob';

class SimpleSlider extends React.Component {
    componentDidMount() {}
    render() {

        return (

            <Fragment>
                <div className="row">
                    <div className="pl-lg-5 col-lg-6 col-sm-12 col-12 skills--left">
                        <h2>Graphic Design & Web developpement</h2>
                        <img
                            src="../../../src/assets/img/desk__chairAlone.svg"
                            className="bob-y img-fluid Me__Vector"
                            alt="Me__Vector"/>
                        <Blob/>
                    </div>
                    <div className="col-lg-6 col-sm-12 skills--right d-flex align-items-center">
                        <div className="skills--content Numb1 overflowHidden">
                            <h1>SKILLS & EXPERIENCE
                            </h1>
                            <p>Ayant eu des contrats déterminées ou de freelance, j’ai pu à l’occasion
                                gagner en expérience que ce soit en travail d’équipe, en organisation ou en
                                rapiditée
                            </p>
                            <h4>GRAPHIC DESIGN</h4>
                            <p>Je me mets constamment à jour concernant les dernières technologies
                                front-ends et les dernières méthodologies, notamment sur les plateformes Udemy,
                                Sololearn et Dyma.</p>
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
