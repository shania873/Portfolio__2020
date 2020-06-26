import React, { Fragment } from "react";
import $ from 'jquery';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import axios from 'axios';
let images = [];
import { SimpleImg } from 'react-simple-img';
import { NProgress } from '@tanem/react-nprogress'
import Bar from './Bar';
import Container from './Container';
import Spinner from './Spinner';
const callFakeAPI = (delay) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
class Work extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: "",
      id: "",
      isLoading: true
    }
  }
    
      componentDidMount() {
        axios.get(`http://localhost:5000/api`)
          .then(res => {
            images = [];       
            for (let i= 0; i < 8; i++) {
              var images2 = res.data.data[i];            
              console.log(images);  
              images.push(images2);
              this.setState(() => ({
                isLoading: false,
                images: [images]
              }))
            }     
          });
      }
      
  render() {   

    return (
      <Fragment>
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
         <div className="container--work" style={{width: "100%", height: "100%"}}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}>
              <Masonry columnsCount={0} gutter="0px">

                {images.map((image,i) => (
                  <div className="img--items">
                      <h5>{image.Nom_travaux}</h5>
                        <a key={i} href={`/#/${i}`}>                     
                          <img src={image.src} style={{width: "100%", display: "block"}} />
                        </a>    
                  </div>                         
                ))}
              </Masonry>    
            </ResponsiveMasonry>        
  
        </div>
      </Fragment>
    )
  }
}

export default Work;