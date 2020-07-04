import React from 'react';
import {NProgress} from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
import Blob from './blob';
const callFakeAPI = (delay) => new Promise((resolve) => {
    setTimeout(resolve, delay)
})

class Contact extends React.Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        await callFakeAPI(3000)
        this.setState(() => ({isLoading: false}))
        var Input = document.getElementsByName("fields");

        Input.forEach(element => {
            console.log(element);
            element.addEventListener("focusin", myFocusFunction);
            element.addEventListener("focusout", myBlurFunction);

            function myFocusFunction() {
                this
                    .nextSibling
                    .classList
                    .add("active--fields");
                this
                    .previousSibling
                    .classList
                    .add("active--label");
            }

            function myBlurFunction() {
                this
                    .nextSibling
                    .classList
                    .remove("active--fields");
                this
                    .previousSibling
                    .classList
                    .remove("active--label");
            }
            //     element.addEventListener("focus", function(){
            // console.log(this.nextSibling);
            // this.nextSibling.classList.toggle("mystyle");     //
            // this.nextSibling.style.width = "100%";   });
        });
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
                <div className="container container--contact">
                    <div className="row">
                        <div
                            className="pl-lg-5 col-lg-6 col-sm-6 col-12 contact--left d-flex align-items-center">
                            <div className="contact--content">
                                <h2>Contact</h2>
                                <img
                                    src="../../../src/assets/img/img--contact.svg"
                                    className="bob-y img--contact img-fluid"
                                    alt="img--contact"/>
                                <Blob/>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 col-sm-6 col-12 contact--right d-flex align-items-centers">
                            <div className="contact--content">
                                <p>Une question me concernant ? Un élément “flou” que vous voulez éclairer ?
                                    N’hésitez pas à m’envoyer un mail, ou m’envoyer un message via ce formulaire:
                                </p>
                                <form>
                                    <div className="set--input">
                                        <label className="Label Name__Label" htmlFor="name">Votre Nom</label>
                                        <input
                                            type="text"
                                            className="Input Name__Input"
                                            name="fields"
                                            placeholder=""
                                            id="name"/>
                                        <span className="enter"></span>
                                    </div>

                                    <div className="set--input">
                                        <label className="Label Email__Label" htmlFor="email">Votre Email</label>
                                        <input
                                            type="text"
                                            className="Input Email__Input"
                                            name="fields"
                                            placeholder=""
                                            id="email"/>
                                        <span className="enter"></span>
                                    </div>

                                    <div className="set--input">
                                        <label className="Label Message__Label" htmlFor="message">Votre message</label>
                                        <textarea
                                            className="Input Message__Input"
                                            name="fields"
                                            placeholder=""
                                            id="message"></textarea>
                                        <span className="enter"></span>
                                    </div>
                                    <div className="btn--set">
                                      <button data-hover="Merci!"><div>ENVOYER</div></button>
                                    </div>                                   
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
};
export default Contact;