import React, { Fragment, Component } from 'react';
import { NProgress } from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
import Blob from './blob';

const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })

class Home extends React.Component {
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
      
            </Container>
          )}
        </NProgress>      
		<div className="container container--acceuil">  
    <div className="row">
    <div className="col-lg-7 col-md-6 col-sm-6 col-11 acceuil--left">
    <div className="acceuil--content">

		<span >Hello je suis</span>
				<h1 >Caroline van Aerschot</h1>
				<h4 >Graphic designer ✏️/ Web designer 🖱️/ Web developper 👩🏻‍💻 </h4>
				<button >contactez-moi</button>
    </div>

		     
		
			
		         
		</div>
		<div className="col-lg-4 col-md-6 col-sm-6 acceuil--right">   
        <div className="acceuil--content">
        <img  src="../../../src/assets/img/Me__VectorAfter.svg" className="bob-y img-fluid Me__VectorAfter" alt="Me__VectorAfter"/>			
          <Blob/>		
          <img   src="../../../src/assets/img/Me__Background.svg" className="img-fluid Me__Background" alt="Me__Background" />
        </div>

 
		
		</div> 
      </div>  
		       
 	 </div>  
      </React.Fragment>
    )
  }
}
export default Home;