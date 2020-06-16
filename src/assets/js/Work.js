import React, { Fragment } from "react";
import $ from 'jquery';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import axios from 'axios';
// var images = [];
// const images = [
//   "https://picsum.photos/200/300?image=1050",
//   "https://picsum.photos/400/400?image=1039",
//   "https://picsum.photos/400/400?image=1080",
//   "https://picsum.photos/200/200?image=997",
//   "https://picsum.photos/500/400?image=287",
//   "https://picsum.photos/400/500?image=955",
//   "https://picsum.photos/200/300?image=916",
//   "https://picsum.photos/300/300?image=110",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206"
// ]
var images = [];
var url;
class Work extends React.Component {
  
    // state = {
    //     images: []
    //   }
 
      componentDidMount() {
        axios.get(`http://localhost:5000/api`)
          .then(res => {
            // const images = res.data.data.children.map(obj => obj.data);
            for (let i= 0; i < 8; i++) {
              var images2 = res.data.data[i];
              this.setState({ images });
              console.log(images);  
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
            {images.map((image, i) => (
              <a href={`project/${image.id_travaux}`}>
                 <img key={i} src={image.src} style={{width: "100%", display: "block"}} />
              </a>              
            ))}
          </Masonry>    
        </ResponsiveMasonry> 
         {images} 
        </div>
      </Fragment>
    )
  }
}

export default Work;