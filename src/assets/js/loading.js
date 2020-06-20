// import loading from '../../../src/assets/img/Me__Background.svg';
import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="text-center">
          <img src="../../../src/assets/img/Me__Background.svg" alt="loading" />
        </div>
      );
    }
    return this.props.children;
  }
}

export default Loading;