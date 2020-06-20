import React, { Fragment } from "react";
import axios from 'axios';
class Child extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      images : [],
      id: this.props.match.params.id
    }
    console.log(this.props);
  }
  componentDidMount() {
    let images;
    axios.get(`http://localhost:5000/api`)
      .then(res => { 
          images = res.data.data[this.state.id];            
          this.setState({images}); 
          console.log(this.state.images);      
      });
  }
 
  render(){
    return(
    <Fragment>
      <div className="container-xl container--work">
        <h2>{this.state.images.Nom_travaux}</h2>
        <img src={this.state.images.src} alt={this.state.src} className="img-fluid" />
        <img src={this.state.images.img_travaux_2} alt={this.state.images.img_travaux_2}  className="img-fluid"/>
        <img src={this.state.images.img_travaux_3} alt={this.state.images.img_travaux_3} className="img-fluid" />
      </div>
      {/* {this.state.id} */}
    </Fragment>
    )
  }
}

export default Child;