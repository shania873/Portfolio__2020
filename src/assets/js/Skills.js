import React from 'react';
import {NProgress} from '@tanem/react-nprogress';
import '@babel/polyfill';
import $ from 'jquery';
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
import Blob from './blob';
import SimpleSlider from './Slider';
import {TimelineLite, CSSPlugin} from "gsap/all";

const callFakeAPI = (delay) => new Promise((resolve) => {
    setTimeout(resolve, delay)
})

class Skills extends React.Component {
    constructor(props) {
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
        this.setState(() => ({isLoading: false}));
    }
    toRight() {}
    toLeft() {}

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

                <div className="container--skills container">
                    <SimpleSlider/>
                </div>

            </React.Fragment>
        )
    }
}
export default Skills;