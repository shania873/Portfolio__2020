import React, {Fragment} from "react";
import axios from 'axios';

function createMarkup(msg) {
    return {__html: msg};
}

class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            id: this.props.match.params.id
        }
        console.log(this.props);
    }
    componentDidMount() {
        let images;
        axios
            .get(`http://localhost:5000/api`)
            .then(res => {
                images = res.data.data[this.state.id];
                this.setState({images});
                console.log(res);
            });
    }

    render() {
        return (
            <Fragment>
                <div className="container container--project">
                    <header style ={ { backgroundImage: "url(" + this.state.images.src + ")" } }>
                         <h2 className="container">{this.state.images.Nom_travaux}</h2>                 
                    </header>
                    <div className="container project--content">                     
                        <p dangerouslySetInnerHTML={createMarkup(this.state.images.Description_Travaux)}/>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img  src={this.state.images.img_travaux_4} alt={this.state.images.Nom_travaux} className="img-fluid"/>
                                </div>
                                <div className="col-sm-4">
                                    <img src={this.state.images.img_travaux_2} alt={this.state.images.Nom_travaux} className="img-fluid"/> 
                                </div>
                                <div className="col-sm-4">
                                    <img src={this.state.images.img_travaux_3} alt={this.state.images.Nom_travaux} className="img-fluid"/>  
                                </div>
                            </div>                        
                        </div>                       
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Child;