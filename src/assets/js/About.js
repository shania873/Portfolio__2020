import React from 'react';
import {NProgress} from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
import Blob from './blob';

const callFakeAPI = (delay) => new Promise((resolve) => {
    setTimeout(resolve, delay)
})

class About extends React.Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        await callFakeAPI(3000)
        this.setState(() => ({isLoading: false}))
    }

    render() {
        return (
            <React.Fragment>
                <NProgress isAnimating={this.state.isLoading}>
                    {({isFinished, progress, animationDuration}) => (
                        <Container isFinished={isFinished} animationDuration={animationDuration}>
                            <Bar progress={progress} animationDuration={animationDuration}/>
                            <Spinner/>
                        </Container>
                    )}
                </NProgress>
                <div className="container container--about">
                    <div className="row">
                        <div className="pl-lg-5 col-lg-6 col-sm-6  about--left">
                            <div className="about--content">
                                <img
                                    src="../../../src/assets/img/desk.svg"
                                    className=" bob-y img-fluid Me__Vector"
                                    alt="Me__Vector"/>
                                <h2>
                                    <span>à </span>
                                    propos de moi</h2>
                                <Blob/>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-sm-6 col-12 about--right d-flex align-items-center">
                            <div className="about--content">
                                <p>Passionnée en technologie et création graphique depuis des années, j’ai
                                    obtenue un bachelier en Infographie spécialitée web à la Haute Ecole Francisco
                                    Ferrer à Bruxelles, Autonome, autodidacte, très motivé, et travailleuse, je
                                    cherche constamment à améliorer mes compétences grâce à mes projets
                                    personnelles, mes clients, mes expériences professionnelles et à des plateformes
                                    de formations tels que Dyma et Udemy. Également très sociable et curieuse, j’ai
                                    la capacité de m'adapter à tout type d'environnement, que ce soit seule ou en
                                    équipe.
                                </p>
                                <button data-hover="Merci!"><div>Mon Cv</div></button>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
export default About;