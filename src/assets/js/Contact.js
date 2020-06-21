import React from 'react';
import { NProgress } from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';

const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })

class Contact extends React.Component {
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
    <div className="container container--contact">
    <div className="col-sm-4 mr-4 contact--left">
        <div className="contact--content">
            <h1>contact</h1>
            <p>Une question me concernant ? Un élément “flou” que vous voulez éclairer ? N’hésitez pas à
                m’envoyer un mail, ou m’envoyer un message via ce formulaire:
            </p>

            <ul>
                <li>vanaeca@hotmail.com</li>
                <li>0472/28.81.98</li>
            </ul>

        </div>
    </div>
    <div className="col-sm-4 contact--right">
        <form>
            <div className="set--input">
                <label className="Label Name__Label" for="name">Votre Nom</label>
                <input type="text" className="Input Name__Input" name="fields" placeholder="" id="name" />                   
                <span className="enter"></span>   
            </div>
            
            <div className="set--input">
                <label className="Label Email__Label" for="email">Votre Email</label>
                <input type="text" className="Input Email__Input" name="fields"  placeholder="" id="email"/>                   
                <span className="enter"></span>  
            </div>

            <div className="set--input">
                <label className="Label Message__Label" for="message">Votre message</label>
                <textarea className="Input Message__Input" name="fields"  placeholder="" id="message"></textarea>                   
                <span className="enter"></span>  
            </div>
            <button>ENVOYER</button>
        
        </form>
    </div>
</div>
</React.Fragment>
)}
};
export default Contact;