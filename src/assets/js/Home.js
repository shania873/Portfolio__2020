import React, { Fragment, Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import Loading from './loading';
import { NProgress } from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';

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
              <Bar progress={progress} animationDuration={animationDuration} />
              <Spinner />
            </Container>
          )}
        </NProgress>
        {/* <h1>{this.state.isLoading ? 'Loading...' : 'Loaded!'}</h1> */}
		<div className="container container--acceuil">    
			<div className="col-sm-7 acceuil--left">
			<div className="acceuil--content">
				<div id="scene--content">          
				<span >Hello je suis</span>
				<h1 >Caroline van Aerschot</h1>
				<h4 >Graphic designer ✏️/ Web designer 🖱️/ Web developper 👩🏻‍💻 </h4>
				<button >contactez-moi</button>
				</div>
			</div>           
		</div>
		<div className="col-sm-4 acceuil--right">    	 
			<img  src="../../../src/assets/img/Me__VectorAfter.svg" className="bob-y img-fluid Me__VectorAfter" alt="Me__VectorAfter"/>
			<canvas className="canvas img-fluid Me__Vector"></canvas>
			{/* <img  src="../../../src/assets/img/Me__Vector.svg" className="  img-fluid Me__Vector" alt="Me__Vector" /> */}
			<img   src="../../../src/assets/img/Me__Background.svg" className="img-fluid Me__Background" alt="Me__Background" />
		</div>        
 	 </div>  
      </React.Fragment>
    )
  }
}
export default Home;