import React, { Fragment } from "react";
import $ from 'jquery';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import axios from 'axios';
import { useParams, withRouter } from "react-router";
import Work from "./Work";
class Child extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      // compteur: 0
      id: this.props.match.params.id
    }
    console.log(this.props.match.params.id);
  }
 
  render(){
    return(
    <Fragment>{this.state.id}</Fragment>
    )
  }
}
// function Child(match){
//   console.log(match.match.params.id);
//   return (
//     <div>
//          <h3>ID: </h3>
//     </div>
//   )
// }

export default Child;