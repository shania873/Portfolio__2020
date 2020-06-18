import React, { Fragment } from "react";
import $ from 'jquery';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
let images = [];
class Work extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: "",
      id: ""
    }
  }
    
      componentDidMount() {
        axios.get(`http://localhost:5000/api`)
          .then(res => {
            images = [];       
            for (let i= 0; i < 8; i++) {
              var images2 = res.data.data[i];            
              this.setState({images: [images]});       
              images.push(images2);
            }     
          });
      }
      
  render() {   

    return (
      <Fragment>
         <div className="container--work" style={{width: "100%", height: "100%"}}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}>
              <Masonry columnsCount={0} gutter="0px">
                {images.map((image,i) => (
                  <a key={i} href={`/#/${i}`}>
                    <img src={image.src} style={{width: "100%", display: "block"}} />    {this.state.id}
                  </a>              
                ))}
              </Masonry>    
            </ResponsiveMasonry>        
  
        </div>
      </Fragment>
    )
  }
}

export default Work;